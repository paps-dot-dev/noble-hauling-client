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
    Deliver: [
      {
        id: 1,
        title: 'We Drop It Off',
        subtitle: "You make the call, we'll handle the rest.",
        content:
          "Make your project cleanup a breeze with one of our high-quality, affordable Rubber-Wheeled Dumpsters. We offer 10 cubic yard and 20 cubic yard configurations to best suit your needs. Construction, roofing, garage cleanout? We've got you covered.",
        imageUrl: '/Dumpstersideview.png',
        page: '/',
        altText: 'Side view of a Noble Hauling 15 Yard Dumpster.',
      },
    ],
    Load: [
      {
        id: 2,
        title: 'You Load It Up',
        subtitle: 'No more mess with our dumpsters!',
        content:
          "Once our expert drivers drop your dumpster, you are good to go! Load it up with your construction debris or household junk. Our dumpsters have a door on the back to make disposal of heavy items a breeze. When youre done, give us a call, and we'll be on our way!",
        imageUrl: '/Dumpstersideview.png',
        page: '/',
        altText: 'Construction dumpster',
      },
    ],
    Haulaway: [
      {
        id: 3,
        title: 'We Haul It Away',
        subtitle: 'We will take it from here.',
        content:
          'Once you made the call, sit back and relax as our hauling experts pick up your dumpster and haul that junk away. Noble Hauling is environmentally conscious, and will be sure to unload the dumpster at designated faciliities for proper handling of debris.',
        imageUrl: '/DumpsterFilledLumber.png',
        page: '/',
        altText: 'A Noble Hauling Dumpster filled with debris.',
      },
    ],
  })

  return (
    <div className='w-full  px-2  sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex flex-col md:flex-row space-x-1 rounded-xl bg-gray-900/2 p-4 md:py-16'>
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
                      <p className='text-3xl text-left m-8 md:mt-16 '>
                        {post.subtitle}
                      </p>
                      <p className='text-xl text-left p-2'>{post.content}</p>
                      <Link href={post.page}>
                        <button className=' hidden my-16 md:mt-32 p-4 bg-gradient-to-br from-orange-500 to-orange-400 shadow-md hover:border-2 hover:border-white rounded-xl w-2/3  font-semibold '>
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
