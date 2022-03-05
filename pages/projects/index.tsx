import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { ReactElement } from 'react'
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
      <div className='mb-10 flex max-w-3xl flex-col overflow-x-auto'>
        <div className=' flex flex-row p-2'>
          <GridItem />
          <GridItem />
        </div>
        <div className='flex flex-row p-2'></div>
      </div>
    </motion.div>
  )
}

const GridItem = () => {
  return (
    <div className='p-2'>
      <Card
        title='Template'
        link='/projects/2'
        description='lorem hhjsdflusadhjsdflusadjsdflusad alkdsjfh alksjdhfla'
      />
    </div>
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
