import { IBenefitsItem, IMainMenuLink } from '@interfaces/localData.types'

export const mainMenuLinks: IMainMenuLink[] = [
  {
    text: 'Главная',
    href: '/'
  },
  {
    text: 'Технология',
    href: '#'
  },
  {
    text: 'График полетов',
    href: '#'
  },
  {
    text: 'Гарантии',
    href: '#'
  },
  {
    text: 'О компании',
    href: '#'
  },
  {
    text: 'Контакты',
    href: '#'
  }
]

export const benefitsList: IBenefitsItem[] = [
  {
    upperContent: 'мы',
    centralContent: '1',
    lowerContent: 'на рынке'
  },
  {
    upperContent: 'гарантируем',
    centralContent: '50%',
    lowerContent: 'безопасность'
  },
  {
    upperContent: 'календарик за',
    centralContent: '2001',
    lowerContent: 'в подарок'
  },
  {
    upperContent: 'путешествие',
    centralContent: '597',
    lowerContent: 'дней'
  }
]
