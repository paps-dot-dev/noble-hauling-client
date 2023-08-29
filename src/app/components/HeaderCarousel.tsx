'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { animated, useSpring } from '@react-spring/web'

function HeaderCarousel() {
  const services: string[] = [
    'Dumpster Rental',
    'Home Renovation',
    'Customer Service',
    'Reliability',
    'Quick Service',
  ]

  let serviceIndex = 1

  const [service, setService] = useState(services[0])

  const changeService = () => {
    setService(services[`${serviceIndex}`])
    serviceIndex++
    if (serviceIndex > 4) {
      serviceIndex = 0
    }
  }

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  useEffect(() => {
    setInterval(changeService, 5000)
  }, [])

  return (
    <h1 className=' w-full text-[3em] md:text-[3.5em] md:text-center p-6  md:bg-zinc-400 md:bg-opacity-70 mb-10 md:absolute md:top-1/4 md:mt-60 mt-16  '>
      Metro Detroit's <span className='text-orange-400 italic'>Best</span>{' '}
      Choice for
      <animated.div className='text-orange-400 font-semibold' style={props}>
        {service}
      </animated.div>
    </h1>
  )
}

export default HeaderCarousel
