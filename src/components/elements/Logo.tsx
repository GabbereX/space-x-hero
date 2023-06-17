import { FC, ReactElement } from 'react'

import Sprite from '@components/elements/Sprite'

const Logo: FC = (): ReactElement => {
  const renderGradient = (): ReactElement => (
    <linearGradient
      id='svg-gradient-orange'
      x1='1874.28'
      y1='271.85'
      x2='1874.28'
      y2='0'
      gradientUnits='userSpaceOnUse'
    >
      <stop offset='0' stopColor='var(--orange-350)' />
      <stop offset='1' stopColor='var(--orange-300)' />
    </linearGradient>
  )

  return (
    <a
      href='/'
      className='logo corner-box corner-box--large'
    >
      <Sprite
        svgId='logo-svg'
        className='logo-svg'
        linearGradient={ renderGradient() }
        size={ [ 274, 34 ] }
      />
    </a>
  )
}

export default Logo
