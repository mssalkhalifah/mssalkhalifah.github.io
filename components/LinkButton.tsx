import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface LinkButtonProps {
  href?: string
  text?: string
  icon?: JSX.IntrinsicElements['div']
  newtab?: boolean
  selected?: boolean
}

const LinkButton = ({
  href,
  text,
  icon,
  newtab,
  selected,
}: LinkButtonProps) => {
  const animationControl = useAnimation()

  useEffect(() => {
    if (selected) {
      animationControl.start({ backgroundColor: '#F9F5D7', borderRadius: 5 })
    } else {
      animationControl.start({ backgroundColor: '#b7845b', borderRadius: 20 })
    }
  })

  return (
    <Link href={href ? href : '#'} passHref>
      <motion.a
        key={text}
        whileHover={selected ? {} : { backgroundColor: '#F9F5D7' }}
        target={newtab ? '_blank' : '_self'}
        initial={{ borderRadius: 20, backgroundColor: '#b7845b' }}
        animate={animationControl}
        transition={{ duration: 0.1 }}
        className='mx-1 flex scale-0 cursor-pointer items-center justify-center px-3 py-2 uppercase text-darkShades shadow-md transition-colors duration-100 md:scale-100'
      >
        <div className='mr-2'>{icon}</div>
        {text}
      </motion.a>
    </Link>
  )
}

export default LinkButton
