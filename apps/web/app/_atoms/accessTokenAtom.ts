import { atomWithStorage } from 'jotai/utils'
import { Cookie } from '@app/types'
import { makeCookieStorage } from '@app/atoms'

type AccessToken = typeof Cookie.AccessToken | undefined

export const accessTokenAtom = atomWithStorage<AccessToken>(
  Cookie.AccessToken,
  undefined,
  makeCookieStorage<AccessToken>(Cookie.AccessToken)
)
