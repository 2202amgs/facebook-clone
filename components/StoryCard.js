import Image from 'next/image'
import React from 'react'

function StoryCard({ name, src, profile }) {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-48 lg:w-32 cursor-pointer p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
            <Image
                alt={name}
                src={profile}
                width={40}
                height={40}
                objectFit='cover'
                layout='fixed'
                className='absolute opacity-0 lg:opacity-100 rounded-full lg:rounded-xl top-10 z-50'
            />
            <Image
                alt={name}
                src={src}
                layout='fill'
                className='object-cover brightness-75 filter rounded-full lg:rounded-xl'
            />
            <p className='opacity-0 lg:opacity-100 absolute bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
        </div>
    )
}

export default StoryCard