interface HeaderProps {
  children?: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className=" mt-20 mb-4 text-lg font-bold">
      <code className="flex items-center">
        &#60;
        {children}
        /&#62;
      </code>
    </div>
  )
}

export default Header
