'use client'

import { useState } from 'react'
import dumpster from '../../../public/dumpster1.png'
import Card from './UI/Card'
import Image from 'next/image'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { Dialog } from '@headlessui/react'

function ServiceAreaCards() {
  const serviceAreas = [
    {
      id: 1,
      county: 'Macomb',
      cities: [
        'Algonac',
        'Romeo',
        'Shelby Township',
        'Armada',
        'Warren',
        'Macomb Township',
        'Sterling Heights',
        'and More!',
      ],
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181493.0639770438!2d-83.03134850883912!3d42.69430421979807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ce0f39c19f23%3A0x8b5cd7ce995c5067!2sMacomb%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1693273010456!5m2!1sen!2sus',
    },
    {
      id: 2,
      county: 'Oakland',
      cities: [
        'Rochester Hills',
        'Auburn Hills',
        'Waterford',
        'West Bloomfield',
        'Pontiac',
        'and More!',
      ],
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187781.63569709074!2d-83.69854717352766!3d42.65948931367481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88248da428942fd9%3A0xc6f3a7bf3cd2d23b!2sOakland%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1693273780142!5m2!1sen!2sus',
    },
    {
      id: 3,
      county: 'St. Clair',
      cities: [
        'Clay Township',
        'Columbus',
        'Richmond',
        'Port Huron',
        'Marysville',
        'and More!',
      ],
      mapImageUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374569.1649168054!2d-82.99547138983944!3d42.82382002112008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8825045a924a3bdb%3A0x5d8cf740cd0e4a01!2sSt%20Clair%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1693273821814!5m2!1sen!2sus',
    },
  ]

  const [open, setOpen] = useState(false)
  const [expandedMap, setExpandedMap] = useState('')

  const expandMap = () => {
    setOpen(true)
  }
  return (
    <>
      {open ? (
        <div>
          <Image src={expandedMap} height={300} width={300} />
        </div>
      ) : (
        serviceAreas.map((area) => (
          <Card key={area.id}>
            <div className='flex flex-col justify-between items-center'>
              <h1 className='mr-auto text-[2em] font-semibold border-b-2 border-orange-400'>
                {area.county} County
              </h1>
              <div className='flex justify-between items-center'>
                <ul className='hidden md:flex flex-wrap w-[300px]'>
                  {area.cities.map((city) => (
                    <li className='p-2 font-semibold' key={city}>
                      {city}
                    </li>
                  ))}
                </ul>
                <iframe
                  className='rounded-lg drop-shadow-md'
                  src={area.mapImageUrl}
                  width='300'
                  height='300'
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </Card>
        ))
      )}
    </>
  )
}

export default ServiceAreaCards
