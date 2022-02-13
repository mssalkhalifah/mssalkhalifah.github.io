import Head from 'next/head'
import GridTable from '../components/GridTable'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Profile from '../components/Profile'
import { prefix } from '../components/utils/prefix'
import {
  IoSchoolOutline,
  IoHeart,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
import { TiSocialAtCircular } from 'react-icons/ti'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" flex flex-col bg-lightShades">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" mb-10 flex flex-col">
        <Profile />
        <div className=" xms:mx-0 mx-4 flex max-w-lg flex-col items-center self-center">
          <Header>What I do</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            saepe nobis quia nemo vero, voluptate, magni consequatur quos
            ducimus ab vitae voluptas aut omnis aliquid at eveniet dolore non?
            Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nam cupiditate quisquam dolores voluptatibus, ut ullam at dolor
            assumenda! Adipisci voluptatibus quas, itaque placeat beatae qui
            laboriosam quasi vero doloribus.
          </Paragraph>
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
          <Header>
            What I <IoHeart className=" ml-2" />
          </Header>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            iste illum veritatis adipisci, id sequi repellendus. Nemo cum, saepe
            inventore deleniti nesciunt nostrum, ad, deserunt in sed tenetur
            animi adipisci.
          </Paragraph>
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
  )
}
