import { ReactNode } from 'react'

export interface IPropsWithChildren {
  children: ReactNode
}

export type Nullable<T> = null | T
