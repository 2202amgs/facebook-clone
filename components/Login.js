import Image from 'next/image'
import { signIn } from 'next-auth/react'


function Login() {
    return (
        <div className="grid place-items-center">
            <Image alt='' src="https://links.papareact.com/5me" width={300} height={300} objectFit='contain' />
            <h1 onClick={signIn} className='bg-blue-500 cursor-pointer p-5 rounded-full text-white text-center mt-12'>
                Login With Facebook
            </h1>
        </div>
    )
}

export default Login