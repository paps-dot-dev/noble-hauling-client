'use client'

import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import FolderIcon from '@mui/icons-material/Folder'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Home } from '@mui/icons-material'

export default function BottomNav() {
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation className='w-full' value={value} onChange={handleChange}>
      <BottomNavigationAction label='Home' value='Home' icon={<Home />} />
      <BottomNavigationAction
        label='Favorites'
        value='favorites'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label='Nearby'
        value='nearby'
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label='Folder'
        value='folder'
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  )
}
