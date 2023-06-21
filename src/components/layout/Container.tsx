import {
  DetailedHTMLProps, FC, HTMLAttributes, ReactElement
} from 'react'

import clsx from 'clsx'

type TProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Container: FC<TProps> = ({
  children,
  className,
  ...rest
}): ReactElement => (
  <div
    className={ clsx('container', className) }
    { ...rest }
  >
    { children }
  </div>
)

export default Container
