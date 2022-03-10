import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactElement } from 'react'
import Card from '../../components/Card'
import IndexLayout from '../../components/layouts/IndexLayout'
import ProjectPageLayout from '../../components/layouts/projects/ProjectPageLayout'

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className=' flex flex-col items-center justify-center justify-self-center '
    >
      <Head>
        <title>My Portfolio</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'></meta>
      </Head>
      <div className='grid lg:grid-cols-2'>
        <div className='mx-4 py-2'>
          <Card
            title='My Portfolio'
            link='/projects/Portfolio'
            description='This is my first and personal web project'
            image='protfolio/Thumbnail_w4oehm.jpg'
          />
        </div>
      </div>
    </motion.div>
  )
}

ProjectPage.getLayout = (page: ReactElement) => {
  return (
    <IndexLayout>
      <ProjectPageLayout>{page}</ProjectPageLayout>
    </IndexLayout>
  )
}

export default ProjectPage
