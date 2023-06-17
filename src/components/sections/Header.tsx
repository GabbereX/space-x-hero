import { FC, ReactElement } from 'react'

import Logo from '@components/elements/Logo'
import Container from '@components/layout/Container'
import Nav from '@components/views/Nav'

const Header: FC = (): ReactElement => (
  <header className='header'>
    <Container>
      <Logo />
      <Nav />
    </Container>
  </header>
)

export default Header
