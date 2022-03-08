import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactElement } from 'react'
import ContactPageLayout from '../../components/layouts/contact/ContactPageLayout'
import IndexLayout from '../../components/layouts/IndexLayout'

const ContactPage = () => {
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

ContactPage.getLayout = (page: ReactElement) => {
  return (
    <IndexLayout>
      <ContactPageLayout>{page}</ContactPageLayout>
    </IndexLayout>
  )
}

export default ContactPage
