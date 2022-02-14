import { motion } from 'framer-motion'

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <motion.div
        initial="pageInitial"
        animate="pageAnimation"
        variants={{
          pageInitial: { opacity: 0, x: 0, y: 100 },
          pageAnimation: { opacity: 1, x: 0, y: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default IndexLayout
