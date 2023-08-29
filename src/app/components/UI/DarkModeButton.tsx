'use client'
import React from 'react'

import { useState } from 'react'

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }
  return (
    <button className='border-2 border-white' onClick={toggleDarkMode}>
      dark mode
    </button>
  )
}

export default DarkModeButton
