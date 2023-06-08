import React from 'react'
import Image from 'next/image'

export function Logo() {
  return (
    <Image
      className="xs:hidden mr-[71px] hidden sm:block"
      src="/vercel.svg"
      width={80}
      height={28}
      alt="Logo"
    />
  )
}
