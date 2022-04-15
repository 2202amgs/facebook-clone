import Head from 'next/head'
import { getSession } from "next-auth/react"
import Header from '../components/Header'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className='flex bg-gray-100'>
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}