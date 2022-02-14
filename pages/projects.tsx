import { motion } from 'framer-motion'
import Head from 'next/head'
import Card from '../components/Card'

const projects = () => {
  return (
    <div className=" flex items-center justify-center">
      <Head>
        <title>My Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>
      <div className=" mt-32 flex">
        <div className=" mx-4 grid md:grid-cols-3">
          <GridItems>
            <Card
              image="./firefox_Dxp4vNtLPT.png"
              title="TEMPLATE"
              description="lorem dsfnsdofnsdofnsdofndsofn dosi dif fweo w  wie fo"
            />
          </GridItems>
          <GridItems>
            <Card
              image="./firefox_Dxp4vNtLPT.png"
              title="TEMPLATE"
              description="lorem dsfnsdofnsdofnsdofndsofn dosi dif fweo w  wie fo"
            />
          </GridItems>
          <GridItems>
            <Card
              image="./firefox_Dxp4vNtLPT.png"
              title="TEMPLATE"
              description="lorem dsfnsdofnsdofnsdofndsofn dosi dif fweo w  wie fo"
            />
          </GridItems>
          <GridItems>
            <Card
              image="./firefox_Dxp4vNtLPT.png"
              title="TEMPLATE"
              description="lorem dsfnsdofnsdofnsdofndsofn dosi dif fweo w  wie fo"
            />
          </GridItems>
        </div>
      </div>
    </div>
  )
}

const GridItems = ({ children }: { children: JSX.Element }) => {
  return <div className=" m-4 transition-colors">{children}</div>
}

export default projects
