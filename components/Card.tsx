import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useWindowSize from './hooks/useWindowResize'

interface CardProps {
  image?: string
  description?: string
  title?: string
  className?: string
  link?: string
}

const Card = ({ image, description, title, className, link }: CardProps) => {
  const currentLink = link ? link : ''
  const windowSize = useWindowSize()
  const animate = useAnimation()
  const [isLoaded, setLoading] = useState(false)
  const [isHoverable, setHoverable] = useState(true)
  const cardHoverVariant = {
    hover: { y: isHoverable ? -4 : 0 },
    height: { maxHeight: isHoverable ? '400px' : '500px' },
  }

  useEffect(() => {
    if (windowSize[0] <= 640) {
      setHoverable(false)
    } else {
      setHoverable(true)
    }
    if (!isHoverable) {
      animate.start({
        maxHeight: 500,
        transition: { duration: 0.5 },
      })
    } else {
      animate.start({
        maxHeight: 350,
        transition: { duration: 0.5 },
      })
    }
  }, [windowSize, isHoverable])

  return (
    <motion.div
      whileHover='hover'
      whileTap='tab'
      animate={animate}
      variants={cardHoverVariant}
      className={`${className} max-w-sm overflow-hidden rounded-lg bg-lightShades shadow-lg`}
    >
      <div
        className={` w-200 h-full overflow-hidden duration-150 hover:${
          isHoverable ? 'cursor-pointer' : 'pointer-events-none cursor-default'
        }`}
      >
        <Link scroll={false} href={currentLink}>
          <Image
            src={`${image ? image : '/placeholder_1280_720.jpg'}`}
            placeholder='blur'
            blurDataURL='/placeholder.jpg'
            width='426'
            height='240'
            className={`${isLoaded ? ' animate-unblur' : ''}`}
            onLoadingComplete={() => setLoading(false)}
            onLoad={() => setLoading(true)}
          />
        </Link>
      </div>

      <div className='px-6 py-4'>
        <Link scroll={false} href={currentLink}>
          <a
            className={`mb-2 flex justify-center self-center text-xl font-bold hover:${
              isHoverable
                ? 'cursor-pointer'
                : 'pointer-events-none cursor-default'
            }`}
          >
            {title}
          </a>
        </Link>
        <p className=' text-base'>{description}</p>
      </div>

      <AnimatePresence>
        {
          <Link scroll={false} href={currentLink}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              initial={false}
              animate={{ scale: isHoverable ? 0 : 1 }}
              className=' m-4 flex items-center justify-center rounded-md bg-primary text-lightShades shadow-md hover:cursor-pointer sm:scale-0'
            >
              Check it out
            </motion.a>
          </Link>
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Card
