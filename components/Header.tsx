interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={className ? className : ' mt-20 mb-4 text-lg font-bold'}>
      <code className="flex items-center">
        &#60;
        {children}
        /&#62;
      </code>
    </div>
  )
}

export default Header
