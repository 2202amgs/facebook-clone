import Image from 'next/image'

function SideBarRow({ src, title, Icon }) {
    return (
        <div className='flex items-center sm:space-x-2 cursor-pointer rounded-xl p-2 sm:p-4 hover:bg-gray-200'>
            {
                src && (<Image alt='' className='rounded-full'
                    src={src}
                    width={30}
                    height={30}
                    layout="fixed"
                />)
            }
            {
                Icon && (<Icon className='h-6 w-6 sm:h-8 sm:w-8 text-blue-500' />)
            }
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SideBarRow