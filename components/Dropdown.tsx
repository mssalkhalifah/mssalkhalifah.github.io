import Link from 'next/link'

const Dropdown = ({
  dropdownItems,
  isDropped,
}: {
  dropdownItems?: { [key: string]: string }
  isDropped?: boolean
}) => {
  return (
    <div
      className={`absolute mt-3 ml-[-150px] grid w-40 ${
        isDropped ? 'opacity-100' : 'opacity-0'
      } grid-rows-3 rounded-lg bg-lightShades py-1 text-left text-sm uppercase text-darkShades shadow-lg duration-200`}
    >
      {dropdownItems
        ? Object.keys(dropdownItems).map((key) => (
            <DropdownItem key={key} text={key} link={dropdownItems[key]} />
          ))
        : {}}
    </div>
  )
}

const DropdownItem = ({ text, link }: { text?: string; link?: string }) => {
  return (
    <Link href={link ? link : '#'}>
      <a className=' mx-1 rounded-lg px-1 py-2 transition-colors duration-100 hover:rounded-lg hover:bg-primary hover:text-lightShades hover:shadow-md'>
        {text}
      </a>
    </Link>
  )
}

export default Dropdown
