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
      className=" flex flex-col items-center justify-center"
    >
      <Head>
        <title>My Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>
      <div className=" grid grid-cols-2">
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </div>
    </motion.div>
  )
}

const GridItem = () => {
  return (
    <div className=" p-2">
      <Card image="/firefox_Dxp4vNtLPT.png" link="/projects/1" />
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
