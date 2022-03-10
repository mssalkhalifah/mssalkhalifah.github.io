import Head from 'next/head'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Profile from '../components/Profile'
import { IoSchoolOutline, IoHeart } from 'react-icons/io5'
import IndexLayout from '../components/layouts/IndexLayout'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import TextBlock from '../components/TextBlock'

export default function Home() {
  return (
    <motion.div
      className=' mt-10 flex w-full flex-col'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Head>
        <title>My Portfolio</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'></meta>
      </Head>
      <div className=' flex flex-col'>
        <Profile />
        <div className='my-4 grid max-w-2xl self-center'>
          <TextBlock header={['What I do', 'Biography']}>
            <p className='row-start-2 mx-2 mb-2 flex flex-col self-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe nobis quia nemo vero, voluptate, magni consequatur quos
              ducimus ab vitae voluptas aut omnis aliquid at eveniet dolore non?
              Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa nam cupiditate quisquam dolores voluptatibus, ut ullam at
              dolor assumenda! Adipisci voluptatibus quas, itaque placeat beatae
              qui laboriosam quasi vero doloribus.
            </p>
            <GridTable
              content={
                new Map<string, React.ReactNode | string>([
                  ['2018', 'contentasccc'],
                  [
                    '2019',
                    <p className=' flex items-center' key={0}>
                      <IoSchoolOutline className=' mr-4' />
                      Imam Mohammad Ibn Saud Islamic University
                    </p>,
                  ],
                  [
                    '2020',
                    <p key={1}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nam eos optio alias?
                    </p>,
                  ],
                  ['2021', 'contentsdf'],
                ])
              }
            />
          </TextBlock>
          <div className=' flex flex-col items-center justify-center p-4 2xl:col-span-2'>
            <Header>
              What I <IoHeart className=' ml-2' />
            </Header>
            <p className='row-start-2 mx-2 mb-2 flex flex-col self-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe nobis quia nemo vero, voluptate, magni consequatur quos
              ducimus ab vitae voluptas aut omnis aliquid at eveniet dolore non?
              Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa nam cupiditate quisquam dolores voluptatibus, ut ullam at
              dolor assumenda! Adipisci voluptatibus quas, itaque placeat beatae
              qui laboriosam quasi vero doloribus.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <IndexLayout>{page}</IndexLayout>
}
