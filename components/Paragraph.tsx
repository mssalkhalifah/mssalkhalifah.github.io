interface ParagraphProps {
  children?: string
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  )
}

export default Paragraph
