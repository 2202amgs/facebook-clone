import Image from 'next/image'
import React from 'react'

function Contact({src, name}) {
  return (
    <div className='flex items-center space-x-3 hover:bg-gray-200 rounded-xl p-2 cursor-pointer mb-2 relative'>
        <Image alt='' src={src} width={50} height={50} className='rounded-full' objectFit='cover' layout='fixed' />
        <p className=''>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full'/>
    </div>
  )
}

export default Contact