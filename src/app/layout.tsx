import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

export const metadata: Metadata = {
  title: 'Macomb Dumpster Rental',
  description: 'Macomb County, MI Dumpster Rental',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='from-gray-900 to-gray-600 bg-gradient-to-r'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
