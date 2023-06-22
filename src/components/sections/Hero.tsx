import {
  FC, ReactElement, useEffect, useRef, useState
} from 'react'

import { renderLineCanvas, updatePlanetMaskParams } from '@utils/elements.utils'

import Button from '@components/elements/Button'
import Container from '@components/layout/Container'
import Benefits from '@components/views/Benefits'

import { ElementsSize } from '@interfaces/elements.types'

const Hero: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const planetRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [ sizeCanvas, setSizeCanvas ] = useState<ElementsSize>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const content = contentRef.current
    const planet = planetRef.current
    const container = sectionRef.current

    const isElementsPresent = content && planet && container

    if (isElementsPresent) {
      const updateParams = (): void => {
        const { width, height } = container.getBoundingClientRect()

        setSizeCanvas({
          width: Math.round(width),
          height: Math.round(height)
        })

        updatePlanetMaskParams(
          content,
          planet
        )
      }

      updateParams()
      window.onresize = () => updateParams()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const { width, height } = sizeCanvas

    const button = buttonRef.current
    const planet = planetRef.current

    const isElementsPresent = canvas && context && button && planet

    if (isElementsPresent) {
      canvas.width = width
      canvas.height = height

      renderLineCanvas(
        context,
        button,
        planet
      )
    }
  }, [ sizeCanvas ])

  return (
    <section ref={ sectionRef } className='hero relative'>
      <Container>
        <div>
          <canvas ref={ canvasRef } className='canvas absolute' />
          <div ref={ planetRef } className='planet-imitation' />
          <div ref={ contentRef } className='hero-content'>
            <h1>Путешествие</h1>
            <h4>на красную планету</h4>
          </div>
          <Button ref={ buttonRef }>
            Начать путешествие
          </Button>
        </div>
        <Benefits />
      </Container>
    </section>
  )
}

export default Hero
