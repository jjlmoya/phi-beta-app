import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import SEASON from '../season.data'
import TYPE from '../type.data'
import { i18n } from '../../boot/i18n'

export default [
  {
    name: i18n.t('plants.basil'),
    image: 'basil.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.AUGUST(TYPE.FLOWER)
    ],
    pathname: '/albahaca/'
  },
  {
    name: i18n.t('plants.chili'),
    image: 'chili.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/chili/'
  },
  {
    name: i18n.t('chili.habanero'),
    image: 'habanero.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/chili/'
  }
]

/**
/albahaca/albahaca-de-clavo/
/albahaca/anis/
/albahaca/hoja-pequena/
/albahaca/morada/
/albahaca/tailandesa/
/albahaca/tulsi/
/azafran/
/chili/
/chili/habanero/
/chili/malagueta/
/chili/serrano/
/col/
/col/bruselas/
/col/kale/
/manzanilla/
/menta/
/oregano/
/tomillo/limon/
/tomillo/salsero/
/azuki/
/goji/
 */
