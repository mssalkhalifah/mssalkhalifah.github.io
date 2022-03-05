import Link from 'next/link'
import { useState } from 'react'
import { FiSun, FiHome, FiList } from 'react-icons/fi'
import ActionButton from './ActionButton'
import Dropdown from './Dropdown'
import LinkButton from './LinkButton'

const Navbar = () => {
  const [isDropped, setDropdown] = useState(false)

  return (
    <div className='flex text-lightShades'>
      <div className=' fixed z-50 flex w-screen justify-between bg-primary bg-opacity-70 py-2 backdrop-blur'>
        <ul className=' ml-4 flex items-center text-sm'>
          <li>
            <Link href='/'>
              <a className='text-fg m-1 flex items-center font-bold underline hover:text-info'>
                <FiHome className=' mr-1 scale-125' />
                MSSALKHALIFAH
              </a>
            </Link>
          </li>
          <div className=' flex'>
            <ListLinkButton href='/projects' text='Projects' />
            <ListLinkButton href='#' text='Posts' />
            <ListLinkButton href='#' text='Contact' />
          </div>
        </ul>
        <div className='mr-4 flex flex-col xsm:flex-row '>
          <div className=' mb-2 mr-2 scale-100 transition-all duration-200 md:scale-0 xsm:mb-0'>
            <ActionButton
              onClick={() => {
                setDropdown(!isDropped)
              }}
            >
              <FiList />
            </ActionButton>
            <Dropdown
              dropdownItems={{
                HOME: '/',
                PROJECTS: '/projects',
                POSTS: '/posts',
                CONTACT: '/contact',
                SOURCE:
                  'https://github.com/mssalkhalifah/mssalkhalifah.github.io',
              }}
              isDropped={isDropped}
            />
          </div>
          <div className=' mr-2'>
            <ActionButton>
              <FiSun />
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListLinkButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <li className=' mx-2'>
      <LinkButton href={href} text={text} />
    </li>
  )
}

export default Navbar
