import { ButtonHTMLAttributes, FC, ReactElement } from 'react'

import clsx from 'clsx'

import { IPropsWithChildren } from '@interfaces/common.types'

type TProps = IPropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<TProps> = ({ children, className, ...rest }): ReactElement => (
  <button
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

export default Button
