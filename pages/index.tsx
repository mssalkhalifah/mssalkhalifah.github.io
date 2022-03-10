import Head from 'next/head'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import Profile from '../components/Profile'
import { IoSchoolOutline, IoHeart } from 'react-icons/io5'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaUniversity } from 'react-icons/fa'
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
              I am an undergraduate computer science student at Imam Mohammad
              Ibn Saud Islamic University. I am Saudi. And I am currently live
              in Riyadh in Saudi Arabia. Also, I can speak three languages. And
              those are English, Arabic, and Thai. And I like developing tiny
              demos of games. Furthermore, I have a knack for android
              applications and currently working on my web development skills.
            </p>
            <GridTable
              content={
                new Map<string, React.ReactNode | string>([
                  [
                    '2017',
                    <p className=' flex items-center' key={0}>
                      <FaUniversity className='mr-2' />
                      Finished my preparatory year at Imam Mohammad Ibn Saud
                      Islamic University.
                    </p>,
                  ],
                  [
                    '2018',
                    <p className=' flex items-center' key={1}>
                      <HiOutlineDesktopComputer className='mr-2' />
                      Started my computer science bachelor&apos;s degree course.
                    </p>,
                  ],
                  [
                    '2021',
                    <p className=' flex items-center' key={2}>
                      <IoSchoolOutline className=' mr-2' />
                      Had an internship at Aramco.
                    </p>,
                  ],
                ])
              }
            />
          </TextBlock>
          <div className=' flex flex-col items-center justify-center p-4 '>
            <Header>
              What I <IoHeart className=' ml-2' />
            </Header>
            <p className='row-start-2 mx-2 mb-2 inline self-center'>
              I love playing video games and building a small demo of them. And
              I also love rockets and Sci-fi! My favorite space video game is
              &nbsp;
              <a
                className='text-info underline hover:text-mainColor'
                target='_blank'
                rel='noreferrer'
                href='https://www.kerbalspaceprogram.com/'
              >
                Kerbal Space Program
              </a>
              . &nbsp; And my favorite pass time is reading manga.
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
