'use server'

import { Subscriber } from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const subscriberRepository = AppDataSource.getRepository(Subscriber)

    await subscriberRepository.find()

    return new Response('got all users', { status: 400 })
  } catch {
    return new Response('Error while getting users', { status: 500 })
  }
}
