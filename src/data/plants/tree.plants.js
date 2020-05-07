import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'
import SEASON from '../season.data'
import { i18n } from '../../boot/i18n'
export default [
  {
    name: i18n.t('tree.mango'),
    image: 'mango.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JANUARY(TYPE.FLOWER),
      MONTHS.FEBRUARY(TYPE.FLOWER),
      MONTHS.MARCH(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/mango/'
  },
  {
    name: i18n.t('tree.mangos.ataulfo'),
    image: 'mango-ataulfo.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JANUARY(TYPE.FLOWER),
      MONTHS.FEBRUARY(TYPE.FLOWER),
      MONTHS.MARCH(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/mango/ataulfo'
  },
  {
    name: i18n.t('tree.mangos.manila'),
    image: 'mango-manila.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JANUARY(TYPE.FLOWER),
      MONTHS.FEBRUARY(TYPE.FLOWER),
      MONTHS.MARCH(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/mango/manila'
  },
  {
    name: i18n.t('tree.kiri'),
    image: 'kiri.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT)
    ],
    pathname: '/kiri/'
  },
  {
    name: i18n.t('tree.coco'),
    image: 'coco.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.MAY(TYPE.PLANT)
    ],
    pathname: '/coco/'
  },
  {
    name: i18n.t('tree.avocado'),
    image: 'avocado.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.NOVEMBER(TYPE.FLOWER),
      MONTHS.DECEMBER(TYPE.FLOWER),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/aguacate/'
  }
]
