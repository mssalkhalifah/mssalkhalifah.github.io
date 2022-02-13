const Layout = ({
  ...props
}: JSX.IntrinsicElements[keyof JSX.IntrinsicElements]) => {
  return <div className=" h-screen bg-lightShades">{props.children}</div>
}

export default Layout
