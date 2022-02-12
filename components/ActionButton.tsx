interface ActionButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}

const ActionButton = ({ children, onClick }: ActionButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className=" rounded-lg bg-primary p-3 shadow-md duration-75 hover:bg-info active:scale-90"
      >
        {children}
      </button>
    </div>
  )
}

export default ActionButton
