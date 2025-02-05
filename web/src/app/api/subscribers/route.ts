'use server'

import { Subscriber } from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { initializeDatabase } from '@/lib/database'
import { NextRequest } from 'next/server'
import 'reflect-metadata'

export async function GET(request: NextRequest) {
  await initializeDatabase()

  const searchParams = request.nextUrl.searchParams

  try {
    const searchParam = searchParams.get('search')

    const limit = 100

    let subscribers = await AppDataSource.manager.find(Subscriber)

    if (searchParam) {
      subscribers = subscribers.filter(
        subscriber =>
          subscriber.name.toLowerCase().includes(searchParam) ||
          subscriber.phone.toLowerCase().includes(searchParam) ||
          subscriber.streetName.toLowerCase().includes(searchParam) ||
          subscriber.town.toLowerCase().includes(searchParam) ||
          subscriber.voivodeship.toLowerCase().includes(searchParam) ||
          subscriber.postalCode.toLowerCase().includes(searchParam) ||
          subscriber.houseNumber.toLocaleLowerCase().includes(searchParam)
      )
    }

    let page = parseInt(searchParams.get('page') as string) || 1
    const totalSubscribers = subscribers.length
    const totalPages = Math.ceil(totalSubscribers / limit)
    const paginatedSubscribers = subscribers.slice((page - 1) * limit, page * limit)

    if (paginatedSubscribers.length == 0) page = 1

    return new Response(JSON.stringify({ subscribers: paginatedSubscribers, totalPages, page }), {
      status: 200
    })
  } catch {
    return new Response('Error while getting users', { status: 500 })
  }
}
