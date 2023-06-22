'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
}

const themes = ['light', 'dark']

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} defaultTheme="light" themes={themes} />
}
