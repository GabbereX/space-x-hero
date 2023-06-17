import { FC, ReactElement } from 'react'

import clsx from 'clsx'

import { IPropsWithChildren } from '@interfaces/common.types'

interface IProps extends IPropsWithChildren {
  className?: string
}

const Container: FC<IProps> = ({
  children,
  className
}): ReactElement => (
  <div className={ clsx('container', className) }>
    { children }
  </div>
)

export default Container
