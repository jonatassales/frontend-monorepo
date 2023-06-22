'use client'

import React from 'react'
import { IconButton, Sun, Moon } from '@frontend/ds'
import { useTheme } from 'next-themes'

export function ColorModeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const iconSize = 24

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Moon width={iconSize} height={iconSize} />
  }

  return (
    <IconButton>
      {theme === 'dark' ? (
        <Sun
          width={iconSize}
          height={iconSize}
          onClick={() => setTheme('light')}
        />
      ) : (
        <Moon
          width={iconSize}
          height={iconSize}
          onClick={() => setTheme('dark')}
        />
      )}
    </IconButton>
  )
}
