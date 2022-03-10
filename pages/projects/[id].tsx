import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import IndexLayout from '../../components/layouts/IndexLayout'
import ProjectDetailsLayout from '../../components/layouts/projects/ProjectDetailsLayout'
import ProjectPageLayout from '../../components/layouts/projects/ProjectPageLayout'
import { IoArrowForward } from 'react-icons/io5'
import TextBlock from '../../components/TextBlock'
import StackList, { StackType } from '../../components/StackList'

const ProjectPage = ({ image }: { image?: string }) => {
  image = 'protfolio/Thumbnail_w4oehm.jpg'
  const imageSource = {
    url: image ? image : 'protfolio/placeholder_1280_720_idtgoz.jpg',
    blurImg: image ? image : 'q_1/protfolio/placeholder_1280_720_idtgoz.jpg',
  }
  return (
    <motion.div
      initial='pageInitial'
      animate='pageAnimation'
      variants={{
        pageInitial: { opacity: 0, x: -50 },
        pageAnimation: { opacity: 1, x: 0 },
      }}
      className='grid max-w-3xl'
    >
      <Link href={'/projects'} scroll={false}>
        <a className=' my-2 flex items-center place-self-start rounded-full bg-primary py-2 px-8 text-lightShades hover:bg-info'>
          <IoArrowForward className=' mr-2 rotate-180' /> Back
        </a>
      </Link>
      <div className=' relative max-w-xl place-self-center'>
        <Image
          src={imageSource.url}
          placeholder='blur'
          blurDataURL={imageSource.blurImg}
          width='1280'
          height='720'
          className=' rounded-lg'
        />
      </div>
      <TextBlock header={['Description', 'Stack']}>
        <div className='row-start-2 m-4 flex flex-col self-center'>
          One of the courses I chose for last semester is Internet Technologies
          which focuses on web development. And I wanted to improve my web
          development skills. Hence, building a portfolio website as my entry
          project into web development.
        </div>
        <StackList
          props={{
            'https://nextjs.org/': {
              'NextJS/React - Front End': StackType.FRONT,
            },
          }}
        />
      </TextBlock>
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
