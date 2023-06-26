import {
  FC, ReactElement, useState
} from 'react'

import { mainMenuLinks } from '@const/localData.const'
import clsx from 'clsx'

import Sprite from '@components/elements/Sprite'

const Nav: FC = (): ReactElement => {
  const [ navHidden, setNavHidden ] = useState<boolean>(true)

  return (
    <div>
      <nav className={ clsx(
        'nav',
        navHidden && 'nav-hidden'
      ) }
      >
        <div className='nav-wrapper'>
          <ul className='nav-list'>
            {
              mainMenuLinks.map(({ text, href }) => (
                <li key={ text }>
                  <a
                    key={ text }
                    href={ href }
                    className='link-style-1'
                  >
                    { text }
                  </a>
                </li>
              ))
            }
          </ul>
          <button
            type='button'
            className='nav-close-button d-none'
            onClick={ () => setNavHidden(true) }
          >
            <Sprite
              className='svg-standard'
              svgId='nav-close-button-svg'
              size={ [ 21, 21 ] }
            />
          </button>
        </div>
      </nav>
      <button
        type='button'
        className='burger d-none'
        onClick={ () => setNavHidden(false) }
      >
        <Sprite
          className='svg-standard'
          svgId='burger-svg'
          size={ [ 28, 28 ] }
        />
      </button>
    </div>
  )
}

export default Nav
