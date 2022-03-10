import { motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { FiList } from 'react-icons/fi'
import useComponentVisible from './hooks/useComponentVisible'

const Dropdown = ({
  dropdownItems,
}: {
  dropdownItems?: { [key: string]: string }
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false, buttonRef)

  useEffect(() => console.log(isComponentVisible), [isComponentVisible])

  const dropdownMenu = {
    hidden: {
      scaleX: 0,
      height: 0,
      transition: {
        duration: 0.005,
      },
    },
    visible: {
      scaleX: 1,
      height: 200,
      transition: {
        duration: 0.01,
        staggerChildren: 0.06,
      },
    },
  }

  return (
    <>
      <div className=' mb-2 mr-2 scale-100 transition-all duration-200 md:scale-0 xsm:mb-0'>
        <button
          ref={buttonRef}
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className=' rounded-lg bg-primary p-3 shadow-md duration-75 hover:bg-info active:scale-90'
        >
          <FiList className='' />
        </button>
      </div>
      <motion.div
        initial='hidden'
        animate={isComponentVisible ? 'visible' : 'hidden'}
        variants={dropdownMenu}
        ref={ref}
        className={`absolute mt-10 ml-[-125px] grid w-40 grid-rows-3 rounded-lg bg-lightShades py-1 text-left text-sm uppercase text-darkShades shadow-lg duration-200`}
      >
        {dropdownItems
          ? Object.keys(dropdownItems).map((key) => (
              <DropdownItem
                onClick={setIsComponentVisible}
                key={key}
                text={key}
                link={dropdownItems[key]}
              />
            ))
          : {}}
      </motion.div>
    </>
  )
}

const DropdownItem = ({
  text,
  link,
  onClick,
}: {
  text?: string
  link?: string
  onClick?: Dispatch<SetStateAction<boolean>>
}) => {
  const dropdownItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <Link href={link ? link : '#'} passHref>
      <motion.a
        variants={dropdownItem}
        key={text}
        onClick={() => {
          if (onClick) {
            onClick(false)
          }
        }}
        className=' mx-1 rounded-lg px-1 py-2 transition-colors duration-100 hover:rounded-lg hover:bg-primary hover:text-lightShades hover:shadow-md'
      >
        {text}
      </motion.a>
    </Link>
  )
}

export default Dropdown
