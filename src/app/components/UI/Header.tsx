import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import facebookLogo from '../../../../public/facebook.svg'
import logo from '../../../../public/noble.png'
import MenuDrawer from './MenuDrawer'
import { FaDumpster, FaFacebook, FaYelp } from 'react-icons/fa'
import DarkModeButton from './DarkModeButton'

function Header() {
  return (
    <header className=' px-5 pb-7 top-0 z-20 bg-zinc-300 bg-opacity-20 '>
      <div className='flex flex-row-reverse md:flex-row justify-between items-center w-full'>
        <Link href={'/'}>
          <Image
            className='w-20 md:w-[144px]'
            src={logo}
            alt='Noble Hauling and Dumpster Rental Logo'
          />
        </Link>

        <Link
          className='flex text-lg   items-center justify-center bg-opacity-20 bg-gradient-to-br from-orange-400 to-orange-500 p-2 md:p-4 rounded-full shadow-sm shadow-black w-1/2 md:w-1/3 hover:animate-in hover:zoom-in-125 hover:duration-500 hover:ease-in'
          href={'/contact'}>
          <span className='px-2'>Rent a Dumpster</span>
          <FaDumpster className='text-xl' />
        </Link>
        <MenuDrawer />
      </div>
      <div className='flex justify-center md:justify-end items-center text-4xl mt-8 md:mt-0'>
        <a
          className='mx-4 hover:animate-pulse hover:-translate-y-2 ease-linear duration-200 hover:text-orange-300'
          href='https://www.yelp.com/biz/noble-hauling-macomb?osq=Noble+Hauling'>
          <FaYelp />
        </a>
        <a
          className='mx-4 hover:animate-pulse hover:-translate-y-2 ease-linear duration-200 hover:text-orange-300'
          href='https://www.facebook.com/people/Noble-Hauling/100090169157028/'>
          <FaFacebook />
        </a>
      </div>
    </header>
  )
}

export default Header
