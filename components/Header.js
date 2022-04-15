/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import {
    BellIcon,
    ChatIcon,
    CheckIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'
import { useSession } from 'next-auth/react'

function Header() {
    const { data } = useSession();
    return (
        <div className='flex items-center sticky shadow-md p-2 lg:px-2'>
            <div className='flex items-start'>
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className='flex items-center rounded-full bg-gray-100 p-2 ml-2'>
                    <SearchIcon className='h-6 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search Facebook'
                        className='flex-shrink md:inline-flex hidden ml-2 items-center bg-transparent outline-none placeholder-gray-500'
                    />
                </div>
            </div>
            <div className='flex justify-center flex-grow items-center '>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className='flex justify-end items-center sm:space-x-2'>
                <Image
                    className='rounded-full cursor-pointer'
                    src={data && data.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <p className='whitespace-nowrap font-semibold pr-3'>{data && data.user.name}</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg> */}



export default Header