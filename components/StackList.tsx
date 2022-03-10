import Link from 'next/link'
import { BsServer } from 'react-icons/bs'
import { SiHtml5 } from 'react-icons/si'
import { AiFillApi } from 'react-icons/ai'

export enum StackType {
  FRONT,
  SERVER,
  API,
}

interface StackListProps {
  props?: { [link: string]: { [header: string]: StackType } }
}

const StackList = ({ props }: StackListProps) => {
  return (
    <div className='mx-2 flex flex-col justify-center'>
      {props ? (
        <>
          {Object.keys(props).map((key) => {
            const link = key
            const header = Object.keys(props[key])[0]
            const type = props[key][header]
            return (
              <>
                <Link href={link}>
                  <a
                    target='_blank'
                    className='my-1 flex min-w-fit items-center self-center rounded-full bg-primary px-2 text-lightShades transition-colors hover:bg-info'
                  >
                    {getStackIcon(type)}
                    {header}
                  </a>
                </Link>
              </>
            )
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

const getStackIcon = (icon: StackType) => {
  const className = 'mr-2'
  switch (icon) {
    case StackType.SERVER:
      return <BsServer className={className} />
    case StackType.FRONT:
      return <SiHtml5 className={className} />
    case StackType.API:
      return <AiFillApi className={className} />

    default:
      return <></>
  }
}

export default StackList
