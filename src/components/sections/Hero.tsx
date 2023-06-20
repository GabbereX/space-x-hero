import {
  FC, ReactElement, useEffect, useRef
} from 'react'

import { changePlanetMaskParams } from '@utils/elements.utils'

import Button from '@components/elements/Button'
import Container from '@components/layout/Container'

const Hero: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentWrapperRef = useRef<HTMLDivElement>(null)
  const planetImmitationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current
    const planetImmitation = planetImmitationRef.current

    const setPlanetMaskParams = changePlanetMaskParams(
      contentWrapper,
      planetImmitation
    )

    setPlanetMaskParams()
    window.onresize = () => setPlanetMaskParams()

    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (context) {
      // console.log(context.lineWidth)
      //
      // context.beginPath()
      // context.moveTo(0, 0)
      // context.lineTo(500, 500)
      // context.stroke()
    }
  }, [])

  return (
    <section className='hero relative'>
      <Container>
        <canvas
          ref={ canvasRef }
          className='canvas absolute'
        />
        <div
          ref={ planetImmitationRef }
          className='planet-imitation'
        />
        <div
          ref={ contentWrapperRef }
          className='hero-content'
        >
          <h1>
            Путешествие
          </h1>
          <h4>
            на красную планету
          </h4>
        </div>
        <Button>
          Начать путешествие
        </Button>
      </Container>
    </section>
  )
}

export default Hero
