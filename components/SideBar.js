import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/outline'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UserIcon
} from '@heroicons/react/solid'
import { useSession } from 'next-auth/react';
import SideBarRow from './SideBarRow'

function SideBar() {
    const { data, loading } = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SideBarRow src={data.user.image} title={data.user.name} />
            <SideBarRow Icon={UserIcon} title='Friends' />
            <SideBarRow Icon={UserGroupIcon} title='Groups' />
            <SideBarRow Icon={ShoppingBagIcon} title='MarketPlace' />
            <SideBarRow Icon={DesktopComputerIcon} title='Watch' />
            <SideBarRow Icon={CalendarIcon} title='Events' />
            <SideBarRow Icon={ClockIcon} title='Memories' />
            <SideBarRow Icon={ChevronDownIcon} title='See More' />
        </div>
    )
}

export default SideBar