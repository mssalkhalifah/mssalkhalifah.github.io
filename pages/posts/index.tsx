import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactElement } from 'react'
import IndexLayout from '../../components/layouts/IndexLayout'
import { PostsPageLayout } from '../../components/layouts/posts/PostsPageLayout'

const PostsPage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className='flex items-center'
    >
      <Image
        src={'protfolio/Work-in-progress_y0twh7.png'}
        height={600}
        width={600}
      />
    </motion.div>
  )
}

PostsPage.getLayout = (page: ReactElement) => {
  return (
    <IndexLayout>
      <PostsPageLayout>{page}</PostsPageLayout>
    </IndexLayout>
  )
}

export default PostsPage
