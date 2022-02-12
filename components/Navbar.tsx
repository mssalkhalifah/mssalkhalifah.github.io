import Link from 'next/link'
import { useState } from 'react'
import { FiSun, FiHome, FiList } from 'react-icons/fi'
import ActionButton from './ActionButton'
import LinkButton from './LinkButton'

const Navbar = () => {
  const [isDropped, setDropdown] = useState(false)

  return (
    <div className=" flex flex-col text-lightShades">
      <div className=" fixed flex w-screen justify-between bg-primary bg-opacity-70 py-2 backdrop-blur">
        <ul className=" ml-4 flex items-center">
          <li>
            <a
              href="#"
              className="text-fg hover:text-fg3 m-1 flex items-center font-bold underline"
            >
              <FiHome className=" mr-1 scale-125" />
              MSSALKHALIFAH
            </a>
          </li>
          <div className=" flex">
            <ListLinkButton href="#" text="Projects" />
            <ListLinkButton href="#" text="Posts" />
            <ListLinkButton href="#" text="Contact" />
          </div>
        </ul>
        <div className="flex flex-col xsm:flex-row ">
          <div className=" mb-2 mr-2 scale-100 transition-all duration-200 xsm:mb-0 md:scale-0">
            <ActionButton
              onClick={() => {
                setDropdown(!isDropped)
              }}
            >
              <FiList />
            </ActionButton>
            <div
              className={`absolute mt-3 ml-[-150px] grid w-40 ${
                isDropped ? 'opacity-100' : 'opacity-0'
              } grid-rows-3 rounded-lg bg-lightShades py-1 text-left text-sm uppercase text-darkShades shadow-lg duration-200`}
            >
              <DropdownItem text="home" />
              <DropdownItem text="projects" />
              <DropdownItem text="contact" />
            </div>
          </div>
          <div className=" mr-2">
            <ActionButton>
              <FiSun />
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const DropdownItem = ({ text }: { text: string }) => {
  return (
    <div className=" mx-1 rounded-lg px-1 py-2 transition-colors duration-100 hover:rounded-lg hover:bg-primary hover:text-lightShades hover:shadow-md">
      <Link href="#">
        <a>{text}</a>
      </Link>
    </div>
  )
}

const ListLinkButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <li className=" mx-2">
      <LinkButton href={href} text={text} />
    </li>
  )
}

export default Navbar
