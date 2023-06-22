import { FC, ReactElement } from 'react'

import { mainMenuLinks } from '@const/localData.const'

const Nav: FC = (): ReactElement => (
  <nav>
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
  </nav>
)

export default Nav
