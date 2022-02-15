import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import IndexLayout from '../../components/layouts/IndexLayout'
import ProjectDetailsLayout from '../../components/layouts/projects/ProjectDetailsLayout'
import ProjectPageLayout from '../../components/layouts/projects/ProjectPageLayout'

const ProjectPage = () => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimation"
      variants={{
        pageInitial: { opacity: 0, x: -50 },
        pageAnimation: { opacity: 1, x: 0 },
      }}
    >
      <div>ProjectPage</div>
    </motion.div>
  )
}

ProjectPage.getLayout = (page: ReactElement) => {
  return (
    <IndexLayout>
      <ProjectPageLayout>
        <ProjectDetailsLayout>{page}</ProjectDetailsLayout>
      </ProjectPageLayout>
    </IndexLayout>
  )
}

export default ProjectPage
