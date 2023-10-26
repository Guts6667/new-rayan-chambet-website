import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Button({link, text, icon, classImg, classBtn, classLink}) {
  return (
    <button className={`w-fit rounded-full transition-all duration-400 ${classBtn}`}>
        <Link href={link} className={`block flex flex-row gap-24 px-24 py-10 ${classLink}`}>
            <span>{text}</span><Image src={`/images/${icon}`} width={20} height={240} alt='arrow' className={classImg} />
        </Link>
    </button>
  )
}
