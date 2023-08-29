'use client'
import React from 'react'

function Card({ children }) {
  return (
    <div className='  bg-zinc-300 bg-opacity-40 m-8 my-16 p-4 rounded-xl'>
      {children}
    </div>
  )
}

export default Card
