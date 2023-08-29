import Image from 'next/image'
import React from 'react'
import { FaDumpster } from 'react-icons/fa'

import dumpster from '../../../public/trailer1.png'

function page() {
  return (
    <main>
      <h1 className='text-4xl md:text-[3em] text-center mt-16 font-semibold'>
        Need a Can?
      </h1>
      <div className='border-2 border-orange-400 p-8 mt-8 w-3/4 m-auto rounded-xl bg-zinc-300 bg-opacity-20'>
        <h2 className='text-center text-2xl md:text-[3.5em]  '>
          Let <span className='text-orange-400'>Noble Hauling</span> Lend a
          Hand!
        </h2>
      </div>
      <button className=' sticky top-1/2 flex md:hidden w-1/2 translate-y-[-64px] m-auto text-lg  items-center justify-between px-16 bg-opacity-50 bg-gradient-to-br from-orange-400 to-orange-500 p-4 rounded-full shadow-sm shadow-black md:w-full '>
        <FaDumpster className='text-2xl' />

        <span className='text-2xl px-5'>Rent Me!</span>
        <FaDumpster className='text-2xl' />
      </button>
      <div className='opacity-30 w-full'>
        <Image
          src={dumpster}
          className=' md:block md:w-full max-h-[750px] md:max-h-[1000px] opacity-50
          
          '
          alt='Picture of Noble Hauling Dumpster Trailer available for rental.'
        />
      </div>
    </main>
  )
}

export default page
