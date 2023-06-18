import { FC, ReactElement, useRef } from 'react'

import Container from '@components/layout/Container'

const Hero: FC = (): ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <section className='hero'>
      <Container className='relative'>
        <canvas ref={ canvasRef } />
        <div className='mars-imitation' />
        <div className='hero-content'>
          <h1>
            Путешествие
          </h1>
          <h4>
            на красную планету
          </h4>
        </div>
      </Container>
    </section>
  )
}

export default Hero
