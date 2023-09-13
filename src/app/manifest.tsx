import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Macomb Dumpster Rental',
    short_name: 'Noble Hauling Macomb',
    description:
      'Noble Hauling is a Dumpster Rental, Junk Cleanout, and Home Renovation company servicing Macomb, Oakland, and St Clair County, Michigan.',
    start_url: '/',
    display: 'standalone',

    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
