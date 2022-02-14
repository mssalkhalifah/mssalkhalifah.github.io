import { motion } from 'framer-motion'
import { Router } from 'next/router'

interface LayoutProps {
  children?: React.ReactNode
  router?: Router
}

const Layout = ({ children, router }: LayoutProps) => {
  return (
    <div>
      <motion.div
        key={router?.route}
        initial="pageInitial"
        animate="pageAnimation"
        variants={{
          pageInitial: { opacity: 0, x: 0, y: 200 },
          pageAnimation: { opacity: 1, x: 0, y: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Layout
