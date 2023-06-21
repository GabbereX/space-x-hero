import {
  ButtonHTMLAttributes, forwardRef, ReactElement
} from 'react'

import clsx from 'clsx'

type TProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, TProps>((props, ref): ReactElement => {
  const { children, className, ...rest } = props

  return (
    <button
      ref={ ref }
      type='button'
      className={ clsx(
        'button corner-box corner-box--small',
        className
      ) }
      { ...rest }
    >
      { children }
    </button>
  )
})

export default Button
