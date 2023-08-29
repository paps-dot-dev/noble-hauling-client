import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import facebookLogo from '../../../../public/facebook.svg'
import logo from '../../../../public/noble.png'
import MenuDrawer from './MenuDrawer'
import { FaDumpster } from 'react-icons/fa'
import DarkModeButton from './DarkModeButton'

function Header() {
  return (
    <header className='flex flex-row-reverse md:flex-row justify-between items-center w-full px-5 pb-7   sticky top-0 z-20 bg-zinc-300 bg-opacity-20 '>
      <Link href={'/'}>
        <Image
          height={144}
          src={logo}
          alt='Noble Hauling and Dumpster Rental Logo'
        />
      </Link>

      <Link
        className='hidden md:flex  text-lg  items-center justify-center bg-opacity-20 bg-gradient-to-br from-orange-400 to-orange-500 p-4 rounded-full shadow-sm shadow-black w-1/3 hover:animate-in hover:zoom-in-125 hover:duration-500 hover:ease-in'
        href={'/contact'}>
        <span className='px-2'>Rent a Dumpster</span>
        <FaDumpster className='text-xl' />
      </Link>
      <MenuDrawer />
    </header>
  )
}

export default Header
