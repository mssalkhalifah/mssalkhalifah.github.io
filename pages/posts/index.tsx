import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import IndexLayout from '../../components/layouts/IndexLayout'
import { PostsPageLayout } from '../../components/layouts/posts/PostsPageLayout'

const PostsPage = () => {
  return <motion.div></motion.div>
}

PostsPage.getLayout = (page: ReactElement) => {
  return (
    <IndexLayout>
      <PostsPageLayout>{page}</PostsPageLayout>
    </IndexLayout>
  )
}

export default PostsPage
