import localFont from 'next/font/local'
import '../globals.css'

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

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <>{children}</>
      </body>
    </html>
  )
}
