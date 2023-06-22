import React from 'react'
import { MobileLayout } from './MobileLayout'
import { DesktopLayout } from './DesktopLayout'

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <DesktopLayout {...props} />
      <MobileLayout {...props} />
    </>
  )
}
