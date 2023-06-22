import { atomWithStorage } from 'jotai/utils'
import { ColorMode, Cookie } from '@app/types'
import { makeCookieStorage } from '@app/atoms'

export const colorModeAtom = atomWithStorage<ColorMode>(
  Cookie.ColorMode,
  'light',
  makeCookieStorage<ColorMode>(Cookie.ColorMode)
)
