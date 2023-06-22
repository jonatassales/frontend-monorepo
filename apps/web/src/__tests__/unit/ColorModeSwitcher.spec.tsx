import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { useTheme } from 'next-themes'

import { ColorModeSwitcher } from '@app/components'

jest.mock('next-themes', () => ({
  useTheme: jest.fn()
}))

// Mock IconButton and icons
jest.mock('@frontend/ds', () => ({
  IconButton: ({ children }) => <div>{children}</div>,
  Sun: ({ onClick }) => <button onClick={onClick}>Sun</button>,
  Moon: ({ onClick }) => <button onClick={onClick}>Moon</button>
}))

describe('ColorModeSwitcher', () => {
  let setThemeMock
  const useThemeMock = useTheme as jest.Mock

  beforeEach(() => {
    setThemeMock = jest.fn()
    useThemeMock.mockImplementation(() => ({ theme: 'light', setTheme: setThemeMock }))
  })

  it('renders correctly when not mounted', () => {
    const { rerender } = render(<ColorModeSwitcher />)
    expect(screen.getByText('Moon')).toBeInTheDocument()
    rerender(<ColorModeSwitcher />)
    expect(screen.getByText('Moon')).toBeInTheDocument()
  })

  it('renders correctly when theme is light', () => {
    render(<ColorModeSwitcher />)
    userEvent.click(screen.getByText('Moon'))
    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })

  it('renders correctly when theme is dark', () => {
    useThemeMock.mockImplementationOnce(() => ({ theme: 'dark', setTheme: setThemeMock }))
    render(<ColorModeSwitcher />)
    userEvent.click(screen.getByText('Sun'))
    expect(setThemeMock).toHaveBeenCalledWith('light')
  })
})
