import { atomWithStorage } from 'jotai/utils'
import { Cookie } from '@app/types'
import { makeCookieStorage } from '@app/atoms'

type Username = typeof Cookie.Username | undefined

export const usernameAtom = atomWithStorage<Username>(
  Cookie.Username,
  undefined,
  makeCookieStorage<Username>(Cookie.Username)
)
