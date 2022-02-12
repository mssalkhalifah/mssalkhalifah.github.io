import Link from 'next/link'

interface LinkButtonProps {
  href: string
  text?: string
}

const LinkButton = ({ href, text }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <div className=" absolute grid w-32 text-center md:relative ">
        <a className=" scale-0 rounded-full bg-primary px-3 py-2 uppercase shadow-md transition-all duration-100 hover:bg-info md:scale-100">
          {text}
        </a>
      </div>
    </Link>
  )
}

export default LinkButton
