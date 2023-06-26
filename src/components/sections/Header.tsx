import {
  FC, ReactElement, useEffect, useState
} from 'react'

import clsx from 'clsx'

import { getScrollTop } from '@utils/elements.utils'

import Nav from '@components/blocks/Nav'
import Logo from '@components/elements/Logo'
import Container from '@components/layout/Container'

const Header: FC = (): ReactElement => {
  const [ headerBlur, setHeaderBlur ] = useState<boolean>(false)

  const blurHeader = () => {
    if (getScrollTop() > 0) setHeaderBlur(true)
    else setHeaderBlur(false)
  }

  useEffect(() => {
    blurHeader()
    window.onscroll = () => blurHeader()
  }, [])

  return (
    <header
      className={ clsx(
        'header',
        headerBlur && 'backdrop-blur'
      ) }
    >
      <Container>
        <Logo />
        <Nav />
      </Container>
    </header>
  )
}

export default Header
