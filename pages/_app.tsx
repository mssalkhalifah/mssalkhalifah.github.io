import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className=" top-0 left-0 m-0 min-h-screen bg-lightShades bg-cover p-0">
      <Navbar />
      <div className=" mx-2 mt-28 flex flex-col items-center justify-center sm:flex-row">
        <Card
          image={'./firefox_Dxp4vNtLPT.png'}
          description="lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf"
          className=" mb-4 sm:mb-0 sm:mr-14"
          title=" template title"
        />
        <Card
          image={'./firefox_Dxp4vNtLPT.png'}
          description="lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf"
          title=" template title"
        />
      </div>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
