import { FC, ReactElement } from 'react'

import { benefitsList } from '@const/localData.const'

const Benefits: FC = (): ReactElement => (
  <div className='benefits relative'>
    <div className='benefits-background absolute'>
      {
        new Array(benefitsList.length).fill(null).map((_, index) => (
          <div key={ index } />
        ))
      }
    </div>
    <ul className='benefits-list absolute'>
      {
        benefitsList.map(({ upperContent, centralContent, lowerContent }, index) => (
          <li key={ index } className='benefits-item'>
            <span className='benefits-content--upper'>
              { upperContent }
            </span>
            <span className='benefits-content--central'>
              { centralContent }
            </span>
            <span className='benefits-content--lower'>
              { lowerContent }
            </span>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Benefits
