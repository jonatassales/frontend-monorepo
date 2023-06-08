'use client'

import { styled } from '@stitches/react'

const StyledCard = styled('div', {
  borderRadius: '12px',
  backgroundColor: '#ffffff'
})

type CardProps = React.ComponentProps<typeof StyledCard>

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <StyledCard className={`${StyledCard.className} ${className}`} {...props} />
  )
}
