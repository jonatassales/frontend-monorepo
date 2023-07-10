'use client'

import React from 'react'
import { IconButton, Tag } from '@frontend/ds'
import { LayoutProps, Logo, MobileDrawerMenu } from './'

export function MobileLayout(props: LayoutProps) {
  const { children } = props
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  function handleDrawerToggle() {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <div
      className={`grid h-screen w-screen grid-cols-1 grid-rows-[64px_auto] sm:hidden`}
    >
      <header className="sticky top-0 z-1 col-span-2 flex h-64 w-full items-center justify-between bg-white/90 px-12 shadow-sm backdrop-blur-sm dark:border-b-primary-950 dark:bg-gradient-to-r dark:from-primary-1000 dark:to-primary-950/95">
        <div className="flex items-center">
          <Logo />
          <Tag className="border-spacing-0 bg-success-100 text-success-600">
            development
          </Tag>
        </div>
        <IconButton onClick={handleDrawerToggle}>
          {drawerOpen ? <>closed</> : <>open</>}
        </IconButton>
      </header>
      <MobileDrawerMenu isOpen={drawerOpen} />
      <main className="flex flex-col bg-primary-25 p-20 dark:bg-[#111322]">
        {children}
      </main>
    </div>
  )
}
