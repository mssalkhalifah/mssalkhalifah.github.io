import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

interface CardProps {
  image?: string
  description?: string
  title?: string
  className?: string
  link?: string
}

const imageLoadingVariant = {
  visible: { opacity: 1, image: 'none' },
  hidden: { opacity: 0.5, image: '/placeholder.jpg' },
}

const Card = ({ image, description, title, className, link }: CardProps) => {
  const imageRef = React.createRef<HTMLImageElement>()
  const [isLoaded, setLoading] = useState(false)
  const animationControls = useAnimation()

  return (
    <div
      className={` ${className} max-w-sm overflow-hidden rounded-lg bg-lightShades shadow-lg`}
    >
      <div className=" w-200 h-full overflow-hidden duration-150">
        <Image
          src={`${image ? image : '/placeholder.jpg'}`}
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
          width="426"
          height="240"
          className={`${isLoaded ? ' animate-unblur' : ''}`}
          onLoadingComplete={() => setLoading(false)}
          onLoad={() => setLoading(true)}
        />
      </div>

      {/*<img src="/placeholder.jpg" className={` ${isLoaded ? 'hidden' : ''} `} />
      <motion.div
        initial={'hidden'}
        animate={animationControls}
        variants={imageLoadingVariant}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <img
          src="https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg"
          onLoad={() => setLoading(true)}
        />
      </motion.div>*/}
      {/*<motion.div className=" w-full">
        <img
          src="/placeholder.jpg"
          className={`${isLoaded ? ' blur-lg' : 'hidden'} transition-all`}
        />
        <img
          className={`${isLoaded ? 'hidden' : 'block'}`}
          ref={imageRef}
          src={
            'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg'
          }
        />
      </motion.div>*/}
      <div className="px-6 py-4">
        <div className=" mb-2 text-center text-xl font-bold">{title}</div>
        <p className=" text-base">{description}</p>
      </div>
      <div className=" flex justify-center px-6 pt-4 pb-2">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link scroll={false} href={link ? link : '#'}>
            <a className=" flex items-center rounded-lg bg-primary py-2 pr-2 pl-3 text-lightShades shadow-md">
              Check it out{' '}
              <IoArrowForwardCircleOutline className=" mx-2 scale-150" />
            </a>
          </Link>
        </motion.button>
      </div>
    </div>
  )
}

const largeImage =
  'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg'

export default Card
