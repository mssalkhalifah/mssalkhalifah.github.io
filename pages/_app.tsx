import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode, useEffect } from 'react'
import AppContext from '../components/context/AppContext'
import { useRouter } from 'next/router'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  useEffect(() => {
    router.replace('https://portfolio.alkhalifah.dev/')
  })

  return <></>
}

export default MyApp

    // <AppContext.Provider value={{ currentPage: '' }}>
    //   {getLayout(<Component {...pageProps} />)}
    // </AppContext.Provider>
