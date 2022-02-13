import Head from 'next/head'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Profile from '../components/Profile'
import { prefix } from '../components/utils/prefix'

export default function Home() {
  return (
    <div className=" flex w-screen flex-col bg-lightShades">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col">
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
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            saepe nobis quia nemo vero, voluptate, magni consequatur quos
            ducimus ab vitae voluptas aut omnis aliquid at eveniet dolore non?
            Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            nam cupiditate quisquam dolores voluptatibus, ut ullam at dolor
            assumenda! Adipisci voluptatibus quas, itaque placeat beatae qui
            laboriosam quasi vero doloribus.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
