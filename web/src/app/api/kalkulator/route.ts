'use server'

import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'
import { Subscriber } from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { initializeDatabase } from '@/lib/database'
import { NextRequest } from 'next/server'
import 'reflect-metadata'

export async function POST(request: NextRequest) {
  await initializeDatabase()

  try {
    const body = (await request.json()) as IFormValues

    const base64File = body.files as unknown as string
    const fileBuffer = Buffer.from(base64File.split(',')[1], 'base64')

    const existingSubscriber = await AppDataSource.manager.findOne(Subscriber, {
      where: { email: body.email }
    })

    if (existingSubscriber) {
      return new Response('Email already exists', { status: 400 })
    }

    const subscriber = new Subscriber()
    subscriber.age = Number(body.age)
    subscriber.cholesterol = Number(body.cholesterol)
    subscriber.email = body.email
    subscriber.gender = body.gender as 'male' | 'female'
    subscriber.height = Number(body.height)
    subscriber.isSmoking = body.isSmoking == 'no' ? false : true
    subscriber.name = body.name
    subscriber.phone = body.phone
    subscriber.pressure = Number(body.pressure)
    subscriber.weight = Number(body.weight)
    subscriber.files = fileBuffer

    await AppDataSource.manager.save(subscriber)

    return new Response('Dodano informacje kontaktowe. Wkrótce się skontaktujemy', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Błąd przy dodawaniu użytkownika', { status: 500 })
  }
}
