import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

export const metadata: Metadata = {
  title: 'Macomb Dumpster Rental',
  description:
    'Macomb County, MI Dumpster Rental. Rent a Dumpster Today. Affordable Dumpster Rental in Macomb, Michigan. Metro Detroit Dumpster Rental and Home Renovation. Noble Hauling and Dumpster Rental. Servicing Macomb County, Oakland County, and St Clair County. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta
          property='og:image'
          content='https://us1-photo.nextdoor.com//business_logo/1c/18/1c18432c56afb75a12560b16a9d8df39.jpeg?request_version=v2&output_type=jpeg&sizing=linear&x_size=1&resize_type=resize&density=1'
        />
      </head>
      <body className='from-gray-900 to-gray-600 bg-gradient-to-r'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
