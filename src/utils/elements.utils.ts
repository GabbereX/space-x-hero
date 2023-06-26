export const getScrollTop = (): number => (
  window.scrollY
    || document.documentElement.scrollTop
    || document.body.scrollTop
    || 0
)

const setPlanetPosition = (axis: 'x' | 'y', value: number): void => (
  document.documentElement.style
    .setProperty(`--position-planet-mask-${axis}`, `${value}px`))

export const updatePlanetMaskParams = (
  content: HTMLDivElement,
  planet: HTMLDivElement
): void => {
  const {
    top: planetTop = 0,
    left: planetLeft = 0
  } = planet.getBoundingClientRect()

  const {
    top: contentTop = 0,
    left: contentLeft = 0
  } = content.getBoundingClientRect()

  const maskPositionLeft = Math.round(planetLeft) - Math.round(contentLeft)
  const maskPositionTop = Math.round(planetTop) - Math.round(contentTop)

  setPlanetPosition('x', maskPositionLeft)
  setPlanetPosition('y', maskPositionTop)
}

export const renderLineCanvas = (
  context: CanvasRenderingContext2D,
  button: HTMLButtonElement,
  planet: HTMLDivElement
): void => {
  const END_POSITION_BOTTOM_PERCENT = 18
  const FIRST_LINE_WIDTH_PERCENT = 25
  const ARC_RADIUS = 2
  const scrollTop = Math.round(getScrollTop())

  // 1. position button

  const {
    top: buttonTop = 0,
    right: buttonRight = 0,
    height: buttonHeight = 0
  } = button.getBoundingClientRect()

  const startPositionX = Math.round(buttonRight)
  const startPositionY = Math.round(buttonTop) + buttonHeight / 2 + scrollTop

  // 2. position rocket in planet

  const {
    bottom: planetBottom = 0,
    left: planetLeft = 0,
    width: planetWidth = 0,
    height: planetHeight = 0
  } = planet.getBoundingClientRect()

  const endPositionX = Math.round(planetLeft)
      + Math.round(planetWidth / 2)
  const endPositionY = Math.round(planetBottom)
      - Math.round((END_POSITION_BOTTOM_PERCENT / 100) * planetHeight) + scrollTop

  // 3. width line

  const fullLineWidth = endPositionX - startPositionX
  const firstLineWidth = (FIRST_LINE_WIDTH_PERCENT / 100) * fullLineWidth

  // 4. generate gradient

  const gradient = context.createLinearGradient(
    startPositionX,
    startPositionY,
    endPositionX,
    endPositionY
  )

  gradient.addColorStop(0, 'transparent')
  gradient.addColorStop(0.05, 'rgba(255, 255, 255, 0.03)')
  gradient.addColorStop(1, 'white')

  // render line

  context.beginPath()
  context.moveTo(startPositionX, startPositionY)
  context.lineTo(startPositionX + firstLineWidth, endPositionY)
  context.lineTo(endPositionX - ARC_RADIUS * 2, endPositionY)

  context.strokeStyle = gradient
  context.lineJoin = 'round'

  context.stroke()

  // render acc

  context.beginPath()
  context.arc(
    endPositionX - ARC_RADIUS,
    endPositionY,
    ARC_RADIUS,
    Math.PI * 2,
    -Math.PI * 2
  )

  context.strokeStyle = 'white'

  context.stroke()
}
