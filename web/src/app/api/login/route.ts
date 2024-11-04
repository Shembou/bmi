'use server'

import { User } from '@/entities/User'
import { AppDataSource } from '@/lib/data-source'
import { initializeDatabase } from '@/lib/database'
import { NextRequest } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { comparePassword } from '@/utils/passwordManager'

export async function POST(request: NextRequest) {
  interface IUser {
    username: string
    password: string
  }

  await initializeDatabase()

  try {
    const body = (await request.json()) as IUser

    const cookieStore = await cookies()

    const generateToken = async (user: User) => {
      if (!user) {
        throw new Error('User object is required to generate a token')
      }

      const iat = Math.floor(Date.now() / 1000)
      const exp = iat + 60 * 60
      const payload = { id: user.id.toString(), name: user.username, admin: true }

      return new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.TOKEN_SECRET_KEY))
    }
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
      username: body['username'] as string
    })

    if (user == null) {
      return new Response('invalid credentials', { status: 400 })
    }

    const isPasswordCorrect = await comparePassword(body.password, user?.password as string)

    console.log(isPasswordCorrect)

    if (!isPasswordCorrect) {
      return new Response('invalid credentials', { status: 400 })
    }

    const generatedToken = await generateToken(user)
    console.log(generatedToken)

    cookieStore.set({
      name: 'Auth',
      value: `Bearer ${generatedToken}`
    })

    return new Response('user logged in', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log((error as Error).message)
    return new Response('Error while getting user', { status: 500 })
  }
}
