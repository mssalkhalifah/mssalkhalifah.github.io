import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

type ComponentsWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({ Component, pageProps, router }: ComponentsWithPageLayout) {
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
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  )
}

export default MyApp
