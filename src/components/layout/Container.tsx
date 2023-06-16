import { FC, ReactElement } from 'react'

import { IPropsWithChildren } from '@interfaces/common.types'

const Container: FC<IPropsWithChildren> = ({ children }): ReactElement => (
  <div>
    { children }
  </div>
)

export default Container
