import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import SEASON from '../season.data'
import TYPE from '../type.data'
import { i18n } from '../../boot/i18n'

const ALL_YEAR = (TYPE) => {
  return [
    MONTHS.JANUARY(TYPE),
    MONTHS.FEBRUARY(TYPE),
    MONTHS.MARCH(TYPE),
    MONTHS.APRIL(TYPE),
    MONTHS.MAY(TYPE),
    MONTHS.JUNE(TYPE),
    MONTHS.JULY(TYPE),
    MONTHS.AUGUST(TYPE),
    MONTHS.SEPTEMBER(TYPE),
    MONTHS.OCTOBER(TYPE),
    MONTHS.NOVEMBER(TYPE),
    MONTHS.DECEMBER(TYPE)
  ]
}
export default [
  {
    name: i18n.t('plants.chard'),
    image: 'chard.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT)
    ],
    pathname: ''
  }, {
    name: i18n.t('plants.artichoke'),
    image: 'artichoke.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT)
    ],
    pathname: ''
  }, {
    name: i18n.t('plants.celery'),
    image: 'celery.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.JANUARY(TYPE.PLANT),
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT)
    ],
    pathname: ''
  }, {
    name: i18n.t('plants.broccoli'),
    image: 'broccoli.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.PLANT),
      MONTHS.AUGUST(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.zucchini'),
    image: 'zucchini.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.pumpkin'),
    image: 'pumpkin.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.onion'),
    image: 'onion.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.eggplant'),
    image: 'eggplant.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.JANUARY(TYPE.PLANT),
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.cauliflower'),
    image: 'cauliflower.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.JULY(TYPE.PLANT),
      MONTHS.AUGUST(TYPE.PLANT),
      MONTHS.SEPTEMBER(TYPE.PLANT)
    ],
    pathname: ''
  },
  {
    name: i18n.t('plants.spinach'),
    image: 'spinach.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.PLANT)
    ],
    pathname: ''
  },
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
      MONTHS.FEBRUARY(TYPE.PLANT)
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
    months: [
      MONTHS.JULY(TYPE.PLANT),
      MONTHS.AUGUST(TYPE.PLANT),
      MONTHS.NOVEMBER(TYPE.FRUIT),
      MONTHS.DECEMBER(TYPE.FRUIT)
    ],
    pathname: '/chili/'
  }, {
    name: i18n.t('plants.basils.clavo'),
    image: 'basil-clavo.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JULY(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT),
      MONTHS.OCTOBER(TYPE.FRUIT),
      MONTHS.NOVEMBER(TYPE.FRUIT)
    ],
    pathname: '/albahaca/albahaca-de-clavo/'
  },
  {
    name: i18n.t('plants.basils.anis'),
    image: 'basil-anis.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT)
    ],
    pathname: '/albahaca/anis/'
  },
  {
    name: i18n.t('plants.basils.small'),
    image: 'basil-small.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.JULY(TYPE.FLOWER),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/albahaca/hoja-pequena/'
  },
  {
    name: i18n.t('plants.basils.morada'),
    image: 'basil-morada.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.FRUIT)
    ],
    pathname: '/albahaca/morada/'
  },
  {
    name: i18n.t('plants.basils.tailandesa'),
    image: 'basil-thai.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JULY(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT),
      MONTHS.OCTOBER(TYPE.FRUIT),
      MONTHS.NOVEMBER(TYPE.FRUIT)
    ],
    pathname: '/albahaca/tailandesa/'
  },
  {
    name: i18n.t('plants.basils.tulsi'),
    image: 'basil-tulsi.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JULY(TYPE.FLOWER),
      MONTHS.JUNE(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT),
      MONTHS.OCTOBER(TYPE.FRUIT),
      MONTHS.NOVEMBER(TYPE.FRUIT)
    ],
    pathname: '/albahaca/tulsi/'
  },
  {
    name: i18n.t('plants.saffron'),
    image: 'saffron.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.OCTOBER(TYPE.FLOWER),
      MONTHS.SEPTEMBER(TYPE.FLOWER)
    ],
    pathname: '/azafran/'
  },
  {
    name: i18n.t('plants.chilis.habanero'),
    image: 'chili-habanero.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/chili/habanero/'
  },
  {
    name: i18n.t('plants.chilis.malagueta'),
    image: 'chili-malagueta.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/chili/malagueta/'
  },
  {
    name: i18n.t('plants.chilis.serrano'),
    image: 'chili-serrano.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/chili/serrano/'
  },
  {
    name: i18n.t('plants.cabbage'),
    image: 'cabbage.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JUNE(TYPE.PLANT),
      MONTHS.JULY(TYPE.PLANT),
      MONTHS.AUGUST(TYPE.PLANT)
    ],
    pathname: '/col/'
  },
  {
    name: i18n.t('plants.cabbages.bruselas'),
    image: 'cabbage-bruselas.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.NOVEMBER(TYPE.PLANT),
      MONTHS.DECEMBER(TYPE.PLANT),
      MONTHS.JANUARY(TYPE.PLANT),
      MONTHS.SEPTEMBER(TYPE.FRUIT),
      MONTHS.OCTOBER(TYPE.FRUIT)
    ],
    pathname: '/col/bruselas/'
  },
  {
    name: i18n.t('plants.cabbages.kale'),
    image: 'cabbage-kale.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.SEPTEMBER(TYPE.PLANT),
      MONTHS.OCTOBER(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT)
    ],
    pathname: '/col/kale/'
  },
  {
    name: i18n.t('plants.chamomile'),
    image: 'chamomile.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.SEPTEMBER(TYPE.PLANT),
      MONTHS.OCTOBER(TYPE.PLANT)
    ],
    pathname: '/manzanilla/'
  },
  {
    name: i18n.t('plants.mint'),
    image: 'mint.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT)],
    pathname: '/menta/'
  },
  {
    name: i18n.t('plants.oregano'),
    image: 'oregano.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: [
      MONTHS.JANUARY(TYPE.PLANT),
      MONTHS.FEBRUARY(TYPE.PLANT),
      MONTHS.MARCH(TYPE.PLANT)
    ],
    pathname: '/oregano/'
  },
  {
    name: i18n.t('plants.thymes.lemon'),
    image: 'thyme-lemon.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: ALL_YEAR(TYPE.PLANT),
    pathname: '/tomillo/limon/'
  },
  {
    name: i18n.t('plants.thymes.salsero'),
    image: 'thyme-salsero.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: ALL_YEAR(TYPE.PLANT),
    pathname: '/tomillo/salsero/'
  },
  {
    name: i18n.t('plants.thyme'),
    image: 'thyme.jpg',
    height: 1,
    width: 1,
    season: SEASON.ANNUAL,
    category: [CATEGORY.ANNUAL],
    months: ALL_YEAR(TYPE.PLANT),
    pathname: '/tomillo/'
  },
  {
    name: i18n.t('plants.azuki'),
    image: 'azuki.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: [
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.MAY(TYPE.PLANT),
      MONTHS.JULY(TYPE.FRUIT),
      MONTHS.AUGUST(TYPE.FRUIT),
      MONTHS.SEPTEMBER(TYPE.FRUIT)
    ],
    pathname: '/azuki/'
  },
  {
    name: i18n.t('plants.goji'),
    image: 'goji.jpg',
    height: 1,
    width: 1,
    season: SEASON.PERENNE,
    category: [CATEGORY.PERENNE],
    months: ALL_YEAR(TYPE.PLANT),
    pathname: '/goji/'
  }
]
