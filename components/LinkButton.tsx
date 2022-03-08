import { AnimationControls, motion } from 'framer-motion'
import Link from 'next/link'
import { useContext } from 'react'
import AppContext from './context/AppContext'

interface LinkButtonProps {
  href?: string
  text?: string
  icon?: JSX.IntrinsicElements['div']
  animationControl?: AnimationControls
  newtab?: boolean
}

const LinkButton = ({
  href,
  text,
  icon,
  animationControl,
  newtab,
}: LinkButtonProps) => {
  const currentPageContext = useContext(AppContext)

  return (
    <Link href={href ? href : '#'} passHref>
      <motion.a
        key={text}
        whileHover={{ backgroundColor: '#F9F5D7' }}
        target={newtab ? '_blank' : '_self'}
        initial={{ borderRadius: 20, backgroundColor: '#b7845b' }}
        animate={animationControl}
        transition={{ duration: 0.1 }}
        onClick={() => {
          currentPageContext.currentPage = 'project'
        }}
        className='mx-1 flex scale-0 cursor-pointer items-center justify-center px-3 py-2 uppercase text-darkShades shadow-md transition-colors duration-100 md:scale-100'
      >
        <div className='mr-2'>{icon}</div>
        {text}
      </motion.a>
    </Link>
  )
}

export default LinkButton
