import Header from './Header'

interface TextBlockProps {
  header?: string[]
  children?: React.ReactNode
}

const TextBlock = ({ header, children }: TextBlockProps) => {
  return (
    <div className='mx-2 grid'>
      {header?.map((head) => (
        <Header
          key={head}
          className='my-2 self-center justify-self-center text-xl font-bold'
        >
          {head}
        </Header>
      ))}
      {children}
    </div>
  )
}

export default TextBlock
