import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import Header from '../../components/Header'
import IndexLayout from '../../components/layouts/IndexLayout'
import ProjectDetailsLayout from '../../components/layouts/projects/ProjectDetailsLayout'
import ProjectPageLayout from '../../components/layouts/projects/ProjectPageLayout'
import { IoArrowForward } from 'react-icons/io5'

const ProjectPage = () => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimation"
      variants={{
        pageInitial: { opacity: 0, x: -50 },
        pageAnimation: { opacity: 1, x: 0 },
      }}
    >
      <main className=" mx-2 mt-2 mb-10 grid max-w-3xl ">
        <Link href={'/projects'} scroll={false}>
          <a className=" my-2 flex items-center place-self-start rounded-full bg-primary py-2 px-8 text-lightShades hover:bg-info">
            <IoArrowForward className=" mr-2 rotate-180" /> Back
          </a>
        </Link>
        <div className=" relative max-w-xl place-self-center">
          <Image
            src={'/placeholder_1280_720.jpg'}
            width="1280"
            height="720"
            className=" rounded-lg"
          />
        </div>
        <div className=" mx-2 flex flex-col">
          <div className=" grid grid-cols-2">
            <Header className=" mt-4 mb-2 self-center justify-self-center text-xl font-bold">
              Description
            </Header>
            <Header className=" mt-4 mb-2 self-center justify-self-center text-xl font-bold">
              Stack
            </Header>
            <div className="m-4 flex flex-col self-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                quas, accusantium ratione obcaecati, qui tenetur nulla velit
                animi ab minus facere at ea excepturi. Amet quae nam voluptas
                doloribus totam. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Vel accusamus, facilis sed non nihil, fugiat
                delectus possimus ab facere expedita, mollitia obcaecati hic
                quidem accusantium ipsa natus quia velit reiciendis.
              </p>
            </div>
            <div className=" m-4 flex flex-col">
              <div className=" grid grid-cols-4">
                <Link href={'https://reactjs.org/'}>
                  <a
                    target="_blank"
                    className=" min-w-full place-self-start self-center rounded-r-full bg-primary pl-2 text-lightShades hover:bg-info"
                  >
                    React
                  </a>
                </Link>
                <p className=" col-span-3 py-1 pl-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, eveniet sequi magnam tempore dolorum pariatur.
                </p>
                <Link href={'#'}>
                  <a className=" min-w-full place-self-start self-center rounded-r-full bg-primary pl-2 text-lightShades hover:bg-info">
                    Tailwind
                  </a>
                </Link>
                <p className=" col-span-3 py-1 pl-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, eveniet sequi magnam tempore dolorum pariatur.
                </p>
                <Link href={'#'}>
                  <a className=" min-w-full place-self-start self-center rounded-r-full bg-primary pl-2 text-lightShades hover:bg-info">
                    NextJs
                  </a>
                </Link>
                <p className=" col-span-3 py-1 pl-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, eveniet sequi magnam tempore dolorum pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

const GridItem = ({
  href,
  description,
}: {
  href: string
  description: string
}) => {}

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
