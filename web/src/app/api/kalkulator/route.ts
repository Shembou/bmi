'use server'

import { Subscriber} from '@/entities/Subscriber'
import { AppDataSource } from '@/lib/data-source'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
 
    interface ISubscriber {
        age: number
        gender: 'male' | 'female'
        weight: number
        height: number
        pressure: number
        isSmoking: boolean
        cholesterol: number
        name: string
        email: string
        phone: string
      }
    
    try {
        const body = await request.json() as ISubscriber

        const subscriberRepository = AppDataSource.getRepository(Subscriber)

        await subscriberRepository.save(body)

        return new Response('Dodano informacje kontaktowe. Wkrótce się skontaktujemy', {status: 400})
    } catch {
        return new Response('Błąd przy dodawaniu użytkownika', {status: 500})
    }
}