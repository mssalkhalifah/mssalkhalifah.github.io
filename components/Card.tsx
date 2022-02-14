import { motion } from 'framer-motion'
import Link from 'next/link'
import { useContext } from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { ProjectContext } from './layouts/ProjectLayout'

interface CardProps {
  image?: string
  description?: string
  title?: string
  className?: string
  link?: string
}

const Card = ({ image, description, title, className, link }: CardProps) => {
  const { state, setState } = useContext(ProjectContext)
  return (
    <div
      className={` ${className} max-w-sm overflow-hidden rounded bg-lightShades shadow-lg`}
    >
      <img className="w-full" src={image} alt="Card Image" />
      <div className="px-6 py-4">
        <div className=" mb-2 text-center text-xl font-bold">{title}</div>
        <p className=" text-base">{description}</p>
      </div>
      <div className=" flex justify-center px-6 pt-4 pb-2">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <button
            onClick={() => {
              state.isClicked = true
            }}
            className=" flex items-center rounded-lg bg-primary py-2 pr-2 pl-3 text-lightShades shadow-md"
          >
            <Link href={link ? link : '#'}>
              <a>Check it out</a>
            </Link>
            <IoArrowForwardCircleOutline className=" mx-2 scale-150" />
          </button>
        </motion.button>
      </div>
    </div>
  )
}

export default Card
