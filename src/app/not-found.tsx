import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/noble.png'
import { FaHome, FaPhone } from 'react-icons/fa'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-semibold p-10'>Uh Oh!</h1>
      <div className='flex items-center'>
        <Image
          className='w-[200px] md:w-[300px]'
          src={logo}
          alt='Noble Hauling Logo'
        />
        <p className='text-xl md:text-2xl'>
          Sorry! This page could not be found!
        </p>
      </div>
      <Link className='w-1/2 mt-8 ' href={'/contact'}>
        <button className='bg-orange-400 w-full rounded-full p-3 text-xl'>
          Rent a Dumpster
        </button>
      </Link>
      <p className='text-xl mt-4'>Or</p>
      <div className='flex justify-center items-center text-xl bg-orange-400 p-3 rounded-full  w-1/2  m-4'>
        <FaPhone />

        <a className='mx-2' href='tel:5866360887'>
          Call Us Today!
        </a>
      </div>
      <Link
        className='flex justify-center items-center bg-blue-400 text-xl w-1/4 p-4 rounded-full mt-16'
        href={'/'}>
        <FaHome className='mx-2' />
        <span>Go to Home</span>
      </Link>
    </div>
  )
}

export default NotFound
