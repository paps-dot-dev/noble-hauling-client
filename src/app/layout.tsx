import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'

export const metadata: Metadata = {
  title: 'Macomb Dumpster Rental',
  description:
    'Noble Hauling is an affordable, reliable dumpster rental company servicing Macomb, Oakland, and Saint Clair Counties in Michigan. We offer a variety of dumpsters for your next construction project, house or garage clean out, roofing, and other projects. ',
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
        <meta
          name='google-site-verification'
          content='H9COaMH2cJpxDHUHIp44iNb-4iXeiQXrUdBJNf97afU'
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
