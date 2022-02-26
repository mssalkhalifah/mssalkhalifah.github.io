import Head from 'next/head'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Profile from '../components/Profile'
import {
  IoSchoolOutline,
  IoHeart,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import { TiSocialAtCircular } from 'react-icons/ti'
import IndexLayout from '../components/layouts/IndexLayout'
import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'

export default function Home() {
  return (
    <motion.div
      className=' mt-16 flex flex-col'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Head>
        <title>My Portfolio</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge'></meta>
      </Head>
      <div className=' flex flex-col'>
        <div className='mx-2 flex flex-col items-center justify-center 2xl:flex-row'>
          <Card
            description='lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf'
            className=' mb-4 self-center 2xl:mx-2'
            title=' template title'
          />
          <Card
            description='lorem jahsdlfikjuuasdlfikjhalksdjfhalsduif asdf asd  asdfasdfasdff uaflsdif asdliuf'
            title=' template title'
            className=' mb-4 self-center 2xl:mx-2'
          />
        </div>
        <Profile />
        <div className='grid max-w-3xl grid-rows-3 2xl:grid-cols-2 2xl:grid-rows-1 '>
          <div className='flex flex-col items-center justify-center p-4'>
            <Header>What I do</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe nobis quia nemo vero, voluptate, magni consequatur quos
              ducimus ab vitae voluptas aut omnis aliquid at eveniet dolore non?
              Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsa nam cupiditate quisquam dolores voluptatibus, ut ullam at
              dolor assumenda! Adipisci voluptatibus quas, itaque placeat beatae
              qui laboriosam quasi vero doloribus.
            </Paragraph>
          </div>
          <div className='flex flex-col items-center justify-center p-4'>
            <Header>Biography</Header>
            <GridTable
              content={
                new Map<string, React.ReactNode | string>([
                  ['2018', 'contentasccc'],
                  [
                    '2019',
                    <p className=' flex items-center'>
                      <IoSchoolOutline className=' mr-4' />
                      Imam Mohammad Ibn Saud Islamic University
                    </p>,
                  ],
                  [
                    '2020',
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nam eos optio alias?
                    </p>,
                  ],
                  ['2021', 'contentsdf'],
                ])
              }
            />
          </div>
          <div className=' flex flex-col items-center justify-center p-4 2xl:col-span-2'>
            <Header>
              What I <IoHeart className=' ml-2' />
            </Header>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              iste illum veritatis adipisci, id sequi repellendus. Nemo cum,
              saepe inventore deleniti nesciunt nostrum, ad, deserunt in sed
              tenetur animi adipisci.
            </Paragraph>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <IndexLayout>{page}</IndexLayout>
}
