'use server'

import { IFormValues } from '@/components/Calculator/Instruction/IFormValues'
import { Subscriber } from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { initializeDatabase } from '@/lib/database'
import { getCmsData } from '@/utils/getCmsData'
import { NextRequest } from 'next/server'
import 'reflect-metadata'
import { getProgramMailData } from './getProgramMailData'
import nodemailer from 'nodemailer'
import { TStatus } from '@/components/Calculator/Instruction/TStatus'

export async function POST(request: NextRequest) {
  await initializeDatabase()

  interface IProgramMailData {
    programMail: {
      html: string
      text: string
    }
  }

  try {
    let fileBuffer: Buffer

    const body = (await request.json()) as IFormValues

    if (body.files[0] != '') {
      const base64File = body.files as unknown as string
      fileBuffer = Buffer.from(base64File.split(',')[1], 'base64')
    } else {
      fileBuffer = Buffer.from('', 'base64')
    }

    const existingSubscriber = await AppDataSource.manager.findOne(Subscriber, {
      where: { email: body.email }
    })

    if (existingSubscriber) {
      return new Response('Email already exists', { status: 400 })
    }

    const data = await getCmsData<IProgramMailData>({ query: getProgramMailData })

    const subscriber = new Subscriber()
    subscriber.age = Number(body.age)
    subscriber.gender = body.gender as 'male' | 'female'
    subscriber.weight = Number(body.weight)
    subscriber.height = Number(body.height)
    subscriber.pressure = Number(body.pressure)
    subscriber.isSmoking = body.isSmoking == 'no' ? false : true
    subscriber.cholesterol = Number(body.cholesterol)
    subscriber.name = body.name
    subscriber.pesel = Number(body.pesel)
    subscriber.dateOfBirth = new Date(body.dateOfBirth)
    subscriber.placeOfBirth = body.placeOfBirth
    subscriber.education = body.education
    subscriber.foreignOrigin = body.foreignOrigin == 'true' ? true : false
    subscriber.foreignCountry = body.foreignCountry == 'true' ? true : false
    subscriber.nationalMinority = body.nationalMinority
    subscriber.isHomeless = body.isHomeless == 'true' ? true : false
    subscriber.isDisabled = body.isDisabled
    subscriber.phone = body.phone
    subscriber.email = body.email
    subscriber.voivodeship = body.voivodeship
    subscriber.district = body.district
    subscriber.commune = body.commune
    subscriber.town = body.town
    subscriber.streetName = body.streetName
    subscriber.houseNumber = body.houseNumber
    subscriber.postalCode = body.postalCode
    subscriber.localNumber = body.localNumber
    subscriber.areaOfResidence = body.areaOfResidence as 'DEGURBA1' | 'DEGURBA2' | 'DEGURBA3'
    subscriber.status = body.status as TStatus
    subscriber.shiftChanges = body.shiftChanges == 'true' ? true : false
    subscriber.files = fileBuffer

    const transporter = nodemailer.createTransport({
      host: `${process.env.MAIL_HOST}`,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`
      },
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    })

    await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      to: `${body.email}`,
      subject: `Program`,
      text: data.programMail.text,
      html: data.programMail.html
    })

    await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      to: `${process.env.MAIL_USER}`,
      subject: `Program`,
      text: `Użytkownik: ${body.email} dołączył do programu.\n Imię użytkownika: ${body.name}`,
      html: `<h2>Użytkownik: ${body.email} dołączył do programu.</h2> <h3>Imię użytkownika: ${body.name}<h3/>`
    })

    await AppDataSource.manager.save(subscriber)

    return new Response('Dodano informacje kontaktowe. Wkrótce się skontaktujemy', { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response('Błąd przy dodawaniu użytkownika', { status: 500 })
  }
}
