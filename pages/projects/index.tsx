import Head from 'next/head'
import React from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import ProjectLayout from '../../components/layouts/ProjectLayout'

const ProjectPage = () => {
  return (
    <div className=" flex items-center justify-center">
      <Head>
        <title>My Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      </Head>
    </div>
  )
}

ProjectPage.PageLayout = ProjectLayout

export default ProjectPage
