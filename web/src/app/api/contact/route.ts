'use server'

import { NextRequest } from 'next/server'
import 'reflect-metadata'
import nodemailer from 'nodemailer'
import { getCmsData } from '@/utils/getCmsData'
import { getContactMailData } from './getContactMailData'

export async function POST(request: NextRequest) {
  interface IFormValues {
    content: string
    name: string
    email: string
  }

  interface IContactMailData {
    contactMail: {
      html: string
      text: string
    }
  }

  try {
    const body = (await request.json()) as IFormValues

    const data = await getCmsData<IContactMailData>({ query: getContactMailData })

    const transporter = nodemailer.createTransport({
      host: `${process.env.MAIL_HOST}`,
      port: Number(`${process.env.MAIL_PORT}`),
      auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASS}`
      }
    })

    await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      to: `${body.email}`,
      subject: `Kontakt`,
      text: data.contactMail.text,
      html: data.contactMail.html
    })

    await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      to: `${process.env.MAIL_USER}`,
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
