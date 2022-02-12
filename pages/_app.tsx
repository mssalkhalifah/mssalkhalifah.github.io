import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className=" mt-28 flex items-center justify-center bg-darkShades">
        <Card
          image={'./firefox_Dxp4vNtLPT.png'}
          description="lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf"
        />
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
