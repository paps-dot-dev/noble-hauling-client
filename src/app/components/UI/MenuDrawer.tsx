'use client'

import Image from 'next/image'
import React from 'react'
import menuIcon from '../../../../public/dumpsterMenu.svg'
import { useState } from 'react'
import Link from 'next/link'
import { FaWindowClose } from 'react-icons/fa'

import { animated, useSpring } from '@react-spring/web'

function MenuDrawer() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      {menu ? (
        <animated.nav
          style={props}
          className='bg-orange-400  px-4 rounded-lg text-xl text-center sticky md:w-[300px]  h-full z-20 my-12 md:my-2'>
          <ul>
            <li className='ml-auto my-4 ' onClick={toggleMenu}>
              <FaWindowClose
                title='Close Menu'
                className='text-2xl cursor-pointer   text-black hover:-translate-y-1 hover:text-slate-700 transition-all'
              />
            </li>
            <li className=' hover:bg-slate-600 hover:bg-opacity-50 rounded-full transition:all p-2 hover:animate-in hover:fade-in-20 duration-200'>
              <Link href={'/'}>Home</Link>
            </li>
            {/* <li className=' hover:bg-slate-600 hover:bg-opacity-50 rounded-full transition:all p-2 hover:animate-in hover:fade-in-20 duration-200'>
              <Link href={'/'}>Dumpster Rental</Link>
            </li>
            <li className=' hover:bg-slate-600 hover:bg-opacity-50 rounded-full transition:all p-2 hover:animate-in hover:fade-in-20 duration-200'>
              <Link href={'/'}>About</Link>
            </li>
            <li className=' hover:bg-slate-600 hover:bg-opacity-50 rounded-full transition:all p-2   hover:animate-in hover:fade-in-20 duration-200'>
              <Link href={'/'}>Home Solutions</Link>
            </li> */}
            <li className=' hover:bg-slate-600 hover:bg-opacity-50 rounded-full transition:all p-2  mb-8 hover:animate-in hover:fade-in-20 duration-200'>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </animated.nav>
      ) : (
        <Image
          className='hover:animate-pulse hover:text-orange-400 transition-all'
          src={menuIcon}
          height={36}
          onClick={toggleMenu}
          alt='menu icon'
        />
      )}
    </>
  )
}

export default MenuDrawer
