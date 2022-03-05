import Link from 'next/link'
import { useContext } from 'react'
import AppContext from './context/AppContext'

interface LinkButtonProps {
  href: string
  text?: string
}

const LinkButton = ({ href, text }: LinkButtonProps) => {
  const currentPageContext = useContext(AppContext)
  return (
    <Link href={href} passHref>
      <div className=' absolute grid w-32 text-center md:relative '>
        <a
          onClick={() => {
            currentPageContext.currentPage = 'project'
          }}
          className=' scale-0 rounded-full bg-primary px-3 py-2 uppercase shadow-md transition-all duration-100 hover:bg-info md:scale-100'
        >
          {text}
        </a>
      </div>
    </Link>
  )
}

export default LinkButton
