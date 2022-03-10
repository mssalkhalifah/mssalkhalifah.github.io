import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiSun, FiHome, FiList } from 'react-icons/fi'
import ActionButton from './ActionButton'
import Dropdown from './Dropdown'
import LinkButton from './LinkButton'
import { GoProject } from 'react-icons/go'
import { BsFilePost } from 'react-icons/bs'
import { RiContactsLine, RiGithubLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import useComponentVisible from './hooks/useComponentVisible'

const Navbar = () => {
  const [isDropped, setDropdown] = useState(false)
  const [projectsActive, setProjectsActive] = useState(false)
  const [postsActive, setPostsActice] = useState(false)
  const [contactActive, setContactActive] = useState(false)
  const router = useRouter()
  const { ref, isComponentVisible } = useComponentVisible(false)

  useEffect(() => {
    const currentRoute = router.pathname.trim().split('/')[1]
    setProjectsActive(false)
    setPostsActice(false)
    setContactActive(false)
    switch (currentRoute) {
      case 'projects':
        setProjectsActive(true)
        break
      case 'posts':
        setPostsActice(true)
        break
      case 'contact':
        setContactActive(true)
        break
    }
  }, [router])

  return (
    <div className='flex text-lightShades'>
      <div className=' fixed z-50 flex w-screen justify-between bg-mainColor bg-opacity-70 py-2 backdrop-blur'>
        <div className=' ml-4 grid grid-cols-5 items-center text-sm'>
          <Link href='/'>
            <a className='m-1 flex items-center font-bold text-darkShades underline hover:text-lightShades'>
              <FiHome className=' mr-1 scale-125' />
              MSSALKHALIFAH
            </a>
          </Link>
          <LinkButton
            href={'/projects'}
            text={'Projects'}
            icon={<GoProject />}
            selected={projectsActive}
          />
          <LinkButton
            href={'/posts'}
            text={'Posts'}
            icon={<BsFilePost />}
            selected={postsActive}
          />
          <LinkButton
            href={'/contact'}
            text={'Contact'}
            icon={<RiContactsLine />}
            selected={contactActive}
          />
          <LinkButton
            href={
              'https://github.com/mssalkhalifah/mssalkhalifah.github.io.git'
            }
            text={'Source'}
            icon={<RiGithubLine />}
            newtab
          />
        </div>
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

export default Navbar
