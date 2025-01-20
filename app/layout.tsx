import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicolás Montone',
  description: 'Working in cool things that I love',
}

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>{children}</body>
    </html>
  )
}
