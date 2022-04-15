
function HeaderIcon({ Icon, active }) {
    return (
        <div className="flex items-center group cursor-pointer md:px-10 sm:h-14 rounded-xl md:hover:bg-gray-100 active:border-b-2 active:border-blue-500">
            <Icon className={`h-5 text-gray-500 group-hover:text-blue-500 text-center mx-auto sm:h-7 ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon


