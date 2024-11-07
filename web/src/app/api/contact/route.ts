'use server'

import { NextRequest } from 'next/server'
import 'reflect-metadata'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  interface IFormValues {
    content: string
    name: string
    email: string
  }

  try {
    const body = (await request.json()) as IFormValues

    // Nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'caesar.keeling83@ethereal.email',
        pass: 'gvkz6pstctQCtWs9x1'
      }
    })

    // Send email to both the user and yourself
    const info = await transporter.sendMail({
      from: `<caesar.keeling83@ethereal.email>`,
      to: `${body.email}, caesar.keeling83@ethereal.email`,
      subject: `Kontakt`,
      text: `Wkrótce ktoś od nas się odezwie`,
      html: `<h2>Wkrótce ktoś od nas się odezwie</h2>`
    })

    const self = await transporter.sendMail({
      from: `<caesar.keeling83@ethereal.email>`,
      to: `caesar.keeling83@ethereal.email`,
      subject: `Kontakt`,
      text: `Użytkownik: ${body.email} chce się skontaktować.\n Imię użytkownika: ${body.name} \n treść:${body.content}`,
      html: `<h2>Użytkownik: ${body.email} chce się skontaktować.</h2> <h3>Imię użytkownika: ${body.name}<h3/><p>treść: ${body.content}</p>`
    })

    return new Response('Dodano informacje kontaktowe. Wkrótce się skontaktujemy', { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Błąd przy dodawaniu użytkownika', { status: 500 })
  }
}
