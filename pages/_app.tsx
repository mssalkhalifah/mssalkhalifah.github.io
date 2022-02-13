import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" bg-lightShades">
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
