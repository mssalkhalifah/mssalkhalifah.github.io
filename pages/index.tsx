import Head from 'next/head'
import { prefix } from '../components/utils/prefix'

export default function Home() {
  return (
    <div className=" flex w-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
