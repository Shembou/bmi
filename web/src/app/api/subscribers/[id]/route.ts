import { Subscriber } from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { initializeDatabase } from '@/lib/database'
import { NextResponse } from 'next/server'
import 'reflect-metadata'

export async function GET(request: NextResponse) {
  await initializeDatabase()

  const url = request.url
  const parts = url.split('/')
  const id = parts[parts.length - 1]
  try {
    const subscriber = await AppDataSource.manager.findOne(Subscriber, {
      where: { id: Number(id) }
    })
    if (subscriber) {
      if (subscriber.files.length != 0) {
        const headers = new Headers({
          'Content-Disposition': `attachment; filename="test.pdf"`,
          'Content-Type': 'application/pdf'
        })

        return new Response(subscriber.files, {
          status: 200,
          headers
        })
      } else {
        return new Response('File not found', { status: 400 })
      }
    } else {
      return new Response('File not found', { status: 400 })
    }
  } catch (error) {
    console.log(error)
    return new Response('Błąd przy pobieraniu PDFa', { status: 500 })
  }
}
