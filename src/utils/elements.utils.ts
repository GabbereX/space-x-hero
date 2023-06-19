import { Nullable } from '@interfaces/common.types'

export const setPlanetPosition = (axis: 'x' | 'y', value: number): void => (
  document.documentElement.style
    .setProperty(`--position-planet-mask-${axis}`, `${value}px`))

export const changePlanetMaskParams = (
  content: Nullable<HTMLDivElement>,
  planet: Nullable<HTMLDivElement>
): () => void => (): void => {
  if (content && planet) {
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
}
