import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '@stitches/react'

export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '#DCDFEA',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 }
})
