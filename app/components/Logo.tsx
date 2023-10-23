import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <section>
        <Image src={'/THINK.png'} alt='logo' width={84} height={29}></Image>
    </section>
  )
}

export default Logo
