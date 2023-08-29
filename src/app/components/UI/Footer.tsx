import React from 'react'
import { FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <footer className=' fixed bottom-0 left-0  h-[128px] w-screen z-10 border-t-2 border-orange-400 bg-slate-600'>
      <div className='flex flex-col items-center mt-4'>
        <div className='flex items-center text-xl bg-orange-400 p-3 rounded-full bg-opacity-75'>
          <FaPhone />
          <a className='mx-2' href='tel:5860001234'>
            Call Us Today!
          </a>
        </div>
        <div className='flex justify-between items-center w-screen md:w-3/4'>
          <div>Hours of Operation:</div>
          <div>Lorem Ipsum</div>
          <div>Some other thing</div>
        </div>
        <div className='mt-2 font-light'>Copyright 2023 Noble Hauling, LLC</div>
      </div>
    </footer>
  )
}

export default Footer
