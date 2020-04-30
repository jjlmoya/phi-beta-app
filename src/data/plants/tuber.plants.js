import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import SEASON from '../season.data'
import TYPE from '../type.data'
import { i18n } from '../../boot/i18n'

export default [
  {
    name: i18n.t('tuber.potato'),
    image: 'potato.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      /** MONTHS.MARCH(TYPE.PLANT)**/
    ],
    pathname: '/patata/'
  }, {

    name: i18n.t('tuber.potatoes.kennebec'),
    image: 'potato-kennebec.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.MAY(TYPE.FRUIT),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT),
      MONTHS.OCTOBER(TYPE.FRUIT)
    ],
    pathname: '/patata/kennebec'
  }, {
    name: i18n.t('tuber.potatoes.sour'),
    image: 'potato-sour.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      /** MONTHS.MARCH(TYPE.PLANT)**/
    ],
    pathname: '/patata/agria/'
  }
]

/**
/curcuma/
/patata/
/patata/agria/
/patata/kennebec/
/patata/monalisa/
 */
