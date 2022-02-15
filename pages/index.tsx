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

export default function Home() {
  return (
    <motion.div
      className=" flex flex-col "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Head>
        <title>My Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>
      <div className=" flex flex-col">
        <Profile />
        <div className=" xms:mx-0 mx-4 flex max-w-lg flex-col items-center self-center">
          <div>
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
          <div>
            <Header>Biography</Header>
            <GridTable
              content={
                new Map<string, React.ReactNode | string>([
                  ['2018', 'contentasccc'],
                  [
                    '2019',
                    <p className=" flex items-center">
                      <IoSchoolOutline className=" mr-4" />
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
          <div>
            <Header>
              What I <IoHeart className=" ml-2" />
            </Header>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              iste illum veritatis adipisci, id sequi repellendus. Nemo cum,
              saepe inventore deleniti nesciunt nostrum, ad, deserunt in sed
              tenetur animi adipisci.
            </Paragraph>
          </div>
          <div className=" pb-10">
            <Header>
              Social <TiSocialAtCircular className=" ml-2" />
            </Header>
            <div className=" flex flex-col">
              <p className=" mb-4 text-lg font-semibold">@mssalkhalifah</p>
              <div className=" flex scale-150 flex-row items-center justify-evenly">
                <a
                  href="https://github.com/mssalkhalifah"
                  target="_blank"
                  className=" transition-color rounded-full bg-primary p-2 shadow-md hover:bg-info"
                >
                  <IoLogoGithub className=" text-lightShades" />
                </a>
                |
                <a
                  href="https://linkedin.com/in/mssalkhalifah"
                  target="_blank"
                  className=" rounded-full bg-primary p-2 shadow-md transition-colors hover:bg-info"
                >
                  <IoLogoLinkedin className="  text-lightShades" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <IndexLayout>{page}</IndexLayout>
}
