import { motion } from 'framer-motion'
import Header from '../../Header'

const ProjectPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Header>Project</Header>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default ProjectPageLayout
