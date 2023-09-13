import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import logo from '../../../../public/noble.png'

function Footer() {
  return (
    <footer className='min-h-[128px] w-screen z-10 border-t-2 border-orange-400 bg-slate-600'>
      <div className='flex flex-col items-center mt-4'>
        <div className='flex justify-center items-center w-screen md:w-3/4'>
          <Image
            src={logo}
            height={128}
            alt='Noble Hauling and Dumpster Rental Logo'
          />
        </div>
        <div className='flex justify-center items-center text-xl bg-orange-400 p-3 rounded-full bg-opacity-75 w-1/2 md:w-1/4'>
          <FaPhone />

          <a className='mx-2' href='tel:5866360887'>
            Call Us Today!
          </a>
        </div>

        <div className='mt-2 font-light'>Copyright 2023 Noble Hauling, LLC</div>
      </div>
    </footer>
  )
}

export default Footer
