import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://noblehauling.com',
      lastModified: new Date(),
    },
    {
      url: 'https://noblehauling.com/contact',
      lastModified: new Date(),
    },
  ]
}
