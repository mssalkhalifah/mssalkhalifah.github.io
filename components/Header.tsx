interface HeaderProps {
  children?: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className=" mt-20 mb-4 text-lg font-bold">
      <code>
        {'< '}
        {children}
        {' />'}
      </code>{' '}
    </div>
  )
}

export default Header
