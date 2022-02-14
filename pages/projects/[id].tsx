import { motion } from 'framer-motion'
import React from 'react'
import ProjectLayout from '../../components/layouts/ProjectLayout'

const ProjectPage = () => {
  return (
    <>
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
    </>
  )
}

ProjectPage.PageLayout = ProjectLayout

export default ProjectPage
