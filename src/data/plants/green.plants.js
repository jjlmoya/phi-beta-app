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
  }, {
    name: i18n.t('plants.basils.clavo'),
    image: 'basil-clavo.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/albahaca-de-clavo/'
  },
  {
    name: i18n.t('plants.basils.anis'),
    image: 'basil-anis.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/anis/'
  },
  {
    name: i18n.t('plants.basils.small'),
    image: 'basil-small.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/hoja-pequena/'
  },
  {
    name: i18n.t('plants.basils.morada'),
    image: 'basil-morada.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/morada/'
  },
  {
    name: i18n.t('plants.basils.tailandesa'),
    image: 'basil-thai.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/tailandesa/'
  },
  {
    name: i18n.t('plants.basils.tulsi'),
    image: 'basil-tulsi.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/albahaca/tulsi/'
  },
  {
    name: i18n.t('plants.saffron'),
    image: 'saffron.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/azafran/'
  },
  {
    name: i18n.t('plants.chilis.habanero'),
    image: 'chili-habanero.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/chili/habanero/'
  },
  {
    name: i18n.t('plants.chilis.malagueta'),
    image: 'chili-malagueta.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/chili/malagueta/'
  },
  {
    name: i18n.t('plants.chilis.serrano'),
    image: 'chili-serrano.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/chili/serrano/'
  },
  {
    name: i18n.t('plants.cabbage'),
    image: 'cabbage.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/col/'
  },
  {
    name: i18n.t('plants.cabbages.bruselas'),
    image: 'cabbage-bruselas.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/col/bruselas/'
  },
  {
    name: i18n.t('plants.cabbages.kale'),
    image: 'cabbage-kale.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/col/kale/'
  },
  {
    name: i18n.t('plants.chamomile'),
    image: 'chamomile.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/manzanilla/'
  },
  {
    name: i18n.t('plants.mint'),
    image: 'mint.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/menta/'
  },
  {
    name: i18n.t('plants.oregano'),
    image: 'oregano.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/oregano/'
  },
  {
    name: i18n.t('plants.thymes.lemon'),
    image: 'thyme-lemon.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/tomillo/limon/'
  },
  {
    name: i18n.t('plants.thymes.salsero'),
    image: 'thyme-salsero.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/tomillo/salsero/'
  },
  {
    name: i18n.t('plants.thyme'),
    image: 'thyme.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/tomillo/'
  },
  {
    name: i18n.t('plants.azuki'),
    image: 'azuki.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/azuki/'
  },
  {
    name: i18n.t('plants.goji'),
    image: 'goji.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [],
    pathname: '/goji/'
  }
]
