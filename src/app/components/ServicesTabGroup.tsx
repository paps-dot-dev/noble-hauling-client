'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicesTabGroup() {
  let [categories] = useState({
    Rental: [
      {
        id: 1,
        title: 'Dumpster Rental',
        subtitle: 'Garage Cleanout? Home Remodel? New Roof?',
        content:
          'Make your project cleanup a breeze with one of our Rubber-Wheeled Dumpsters. Hit the button below to learn more, or click the button at the top of the screen to schedule your dumpster rental!',
        imageUrl: '/Dumpstersideview.png',
        page: '/',
        altText: 'Side view of a Noble Hauling 15 Yard Dumpster.',
      },
    ],
    Renovation: [
      {
        id: 1,
        title: 'Home Renovation',
        subtitle: "Don't Put Off that Remodel Project Any Longer...",
        content:
          'Create the home of your dreams with Noble Hauling. Our team of home renovation experts will turn your vision into a reality. With over 30 years of combined experience, rest assured that Noble Hauling can get the job done with unmatched precision and service.',
        imageUrl: '/BathroomTile.png',
        page: '/',
        altText: 'A complete bathroom renovation done by Noble Hauling.',
      },
    ],
    Removal: [
      {
        id: 1,
        title: 'Junk Removal',
        subtitle: 'Need Help Getting Rid of All That Junk?',
        content:
          "Sit back, and find your zen knowing that our team of Junk Removal Experts got your next clean out taken care of. Learn more about Noble Hauling's Junk Removal Service below.",
        imageUrl: '/DumpsterFilledLumber.png',
        page: '/',
        altText: 'A Noble Hauling Dumpster filled with debris.',
      },
    ],
  })

  return (
    <div className='w-full  px-2 py-16 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex flex-col md:flex-row space-x-1 rounded-xl bg-gray-900/2 p-8'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full text-2xl  rounded-lg py-16 font-medium leading-5 text-orange-400 mx-2',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-zinc-100 bg-opacity-20 shadow'
                    : 'text-zinc-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className='bg-zinc-300 bg-opacity-40 rounded-xl p-4 md:bg-transparent'>
                  <p className=' text-3xl md:text-5xl mb-8 text-orange-400 font-semibold border-l-4 px-3'>
                    {post.title}
                  </p>
                  <div className='flex flex-col md:flex-row justify-between items-start'>
                    <div className='flex flex-col justify-between text-center'>
                      <p className='text-3xl text-center m-8 md:mt-16 '>
                        {post.subtitle}
                      </p>
                      <p className='text-xl text-left px-2'>{post.content}</p>
                      <Link href={post.page}>
                        <button className=' my-16 md:mt-32 p-4 bg-gradient-to-br from-orange-500 to-orange-400 shadow-md hover:border-2 hover:border-white rounded-xl w-2/3  font-semibold '>
                          Learn More <FaArrowRight className='inline ml-2' />
                        </button>
                      </Link>
                    </div>

                    <Image
                      src={post.imageUrl}
                      width={600}
                      height={300}
                      className='rounded-xl shadow-md max-h-[500px]'
                      alt={post.altText}
                    />
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
