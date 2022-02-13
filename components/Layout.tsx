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
          pageInitial: { opacity: 0 },
          pageAnimation: { opacity: 1 },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Layout
