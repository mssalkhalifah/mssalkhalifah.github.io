import React, { MutableRefObject, RefObject } from 'react'

interface ActionButtonProps {
  onClick?: () => void
  ref?: RefObject<HTMLButtonElement>
  children?: React.ReactNode
}

const ActionButton = ({ children, onClick, ref }: ActionButtonProps) => {
  return (
    <div>
      <button
        ref={ref}
        onClick={onClick}
        className=' rounded-lg bg-primary p-3 shadow-md duration-75 hover:bg-info active:scale-90'
      >
        {children}
      </button>
    </div>
  )
}

export default ActionButton
