import { FC, ReactElement } from 'react'

interface IProps {
  svgId: string
  fileName?: string
  className? : string
  size?: [ number | string, number | string ]
  linearGradient?: ReactElement
}

const Sprite: FC<IProps> = ({
  svgId,
  fileName = 'main',
  className,
  size = [ '100%', '100%' ],
  linearGradient
}): ReactElement => (
  <svg
    className={ className }
    width={ size[0] }
    height={ size[1] }
  >
    { linearGradient }
    <use xlinkHref={ `${window.location.href || ''}/assets/sprites/${fileName}.svg#${svgId}` } />
  </svg>
)

export default Sprite
