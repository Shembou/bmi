import localFont from 'next/font/local'
import '../globals.css'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'
import { getCmsData } from '@/utils/getCmsData'
import { IHeader } from '@/components/common/Header/IHeader'
import { IMeta } from '@/components/common/Meta/IMeta'
import { GetHeaderData } from '@/components/common/Header/HeaderQueries'
import { Metadata } from 'next'

const geistSans = localFont({
  src: '../fonts/DarkerGrotesque-Medium.woff',
  variable: '--font-darker-grotesque-medium',
  weight: '500'
})
const geistMono = localFont({
  src: '../fonts/DarkerGrotesque-SemiBold.woff',
  variable: '--font-darker-grotesque-semi-bold',
  weight: '600'
})

export const metadata: Metadata = {
  title: 'Projekt "Kompleksowo aktywni"'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getCmsData<[IHeader, IMeta]>({ query: `${GetHeaderData}` })

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <>
          <Header data={data} />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
