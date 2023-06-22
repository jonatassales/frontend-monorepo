import { useSetAtom } from 'jotai'
import { RESET } from 'jotai/utils'

import { usernameAtom } from '@app/atoms'

export function useCleanupJotaiStorage() {
  const setUsername = useSetAtom(usernameAtom)

  const cleanupJotaiStorage = () => {
    setUsername(RESET)
  }

  return { cleanupJotaiStorage }
}
