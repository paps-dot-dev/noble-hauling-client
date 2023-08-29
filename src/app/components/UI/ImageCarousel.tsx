'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import dumpster from '../../../../public/dumpster1.png'
import detroit from '../../../../public/detroit.jpg'

import HeaderCarousel from '../HeaderCarousel'

function ImageCarousel() {
  const images = [detroit, dumpster]
  let imageIndex = 0
  const [image, setImage] = useState(images[0])

  const changeImage = () => {
    setImage(images[`${imageIndex}`])
    imageIndex++
    if (imageIndex > 1) {
      imageIndex = 0
    }
  }

  useEffect(() => {
    setInterval(changeImage, 10000)
  }, [])
  return (
    <div className='  w-screen mb-16'>
      <Image
        src={image}
        className='hidden md:block md:w-full max-h-[600px] opacity-30'
      />
      <HeaderCarousel />
    </div>
  )
}

export default ImageCarousel
