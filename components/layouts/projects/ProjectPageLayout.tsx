import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../Header'

const ProjectPageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [path, setPath] = useState('')
  useEffect(() => {
    setPath(() => {
      let result = router.asPath.split('/')
      return `${result[2] ? `/${result[2]}` : ''}`
    })
  }, [router.asPath])

  return (
    <div className=" flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Header className=" mt-20 text-2xl font-bold ">Project{path}</Header>
      </motion.div>
      <main>{children}</main>
    </div>
  )
}

export default ProjectPageLayout
