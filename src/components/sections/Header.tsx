import { FC, ReactElement } from 'react'

import Logo from '@components/elements/Logo'
import Container from '@components/layout/Container'

const Header: FC = (): ReactElement => (
  <header className='header'>
    <Container>
      <Logo />
      here
    </Container>
  </header>
)

export default Header
