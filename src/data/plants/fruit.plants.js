import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'
import SEASON from '../season.data'
import { i18n } from '../../boot/i18n'
export default [{
  name: i18n.t('fruits.strawberry'),
  image: 'strawberry.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.PLANT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.FRUIT),
    MONTHS.OCTOBER(TYPE.FRUIT)
  ],
  pathname: '/fresa/'
},
{
  name: i18n.t('fruits.strawberries.pineberry'),
  image: 'strawberry-pineberry.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.PLANT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.FRUIT),
    MONTHS.OCTOBER(TYPE.FRUIT)
  ],
  pathname: '/fresa/pineberry/'
},
{
  name: i18n.t('fruits.kiwi'),
  image: 'kiwi.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.JANUARY(TYPE.FRUIT),
    MONTHS.FEBRUARY(TYPE.FRUIT),
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.AUGUST(TYPE.FLOWER),
    MONTHS.OCTOBER(TYPE.FRUIT),
    MONTHS.NOVEMBER(TYPE.FRUIT),
    MONTHS.DECEMBER(TYPE.FRUIT)
  ],
  pathname: '/kiwi/'
},
{
  name: i18n.t('fruits.pina'),
  image: 'pina.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.SEPTEMBER(TYPE.PLANT),
    MONTHS.OCTOBER(TYPE.PLANT),
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.FRUIT),
    MONTHS.JANUARY(TYPE.FRUIT)
  ],
  pathname: '/pina/'
},
{
  name: i18n.t('fruits.pinas.enana'),
  image: 'pina-enana.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.SEPTEMBER(TYPE.PLANT),
    MONTHS.OCTOBER(TYPE.PLANT),
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.FRUIT),
    MONTHS.JANUARY(TYPE.FRUIT)
  ],
  pathname: '/pina/enana/'
},
{
  name: i18n.t('fruits.banana'),
  image: 'banana.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.PLANT),
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.FEBRUARY(TYPE.FRUIT),
    MONTHS.MARCH(TYPE.FRUIT),
    MONTHS.APRIL(TYPE.FRUIT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.FRUIT),
    MONTHS.OCTOBER(TYPE.FRUIT)
  ],
  pathname: '/platano/'
},
{
  name: i18n.t('fruits.bananas.macho'),
  image: 'banana-macho.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.PLANT),
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.FEBRUARY(TYPE.FRUIT),
    MONTHS.MARCH(TYPE.FRUIT),
    MONTHS.APRIL(TYPE.FRUIT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.FRUIT),
    MONTHS.OCTOBER(TYPE.FRUIT)
  ],
  pathname: '/platano/macho/'
},
{
  name: i18n.t('fruits.bananas.manzano'),
  image: 'banana-manzano.jpg',
  height: 1,
  width: 1,
  season: SEASON.PERENNE,
  category: [CATEGORY.PERENNE],
  months: [
    MONTHS.APRIL(TYPE.FRUIT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.PLANT),
    MONTHS.OCTOBER(TYPE.PLANT)
  ],
  pathname: '/platano/manzano/'
},
{
  name: i18n.t('fruits.bananas.rojo'),
  image: 'banana-rojo.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.NOVEMBER(TYPE.PLANT),
    MONTHS.DECEMBER(TYPE.PLANT),
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.FEBRUARY(TYPE.FRUIT),
    MONTHS.MARCH(TYPE.FRUIT),
    MONTHS.APRIL(TYPE.FRUIT),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT),
    MONTHS.SEPTEMBER(TYPE.FRUIT),
    MONTHS.OCTOBER(TYPE.FRUIT)
  ],
  pathname: '/platano/rojo/'
},
{
  name: i18n.t('fruits.tomato'),
  image: 'tomato.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.JUNE(TYPE.FLOWER),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/'
},
{
  name: i18n.t('fruits.tomatoes.cherry'),
  image: 'tomato-cherry.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.MAY(TYPE.PLANT),
    MONTHS.JUNE(TYPE.FLOWER),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/cherry/'
},
{
  name: i18n.t('fruits.tomatoes.corazon-de-buey'),
  image: 'tomato-corazon.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.FEBRUARY(TYPE.PLANT),
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.MAY(TYPE.FLOWER),
    MONTHS.JUNE(TYPE.FRUIT),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/corazon-de-buey/'
},
{
  name: i18n.t('fruits.tomatoes.indigo'),
  image: 'tomato-indigo.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.FEBRUARY(TYPE.PLANT),
    MONTHS.APRIL(TYPE.FLOWER),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT)
  ],
  pathname: '/tomate/indigo/'
},
{
  name: i18n.t('fruits.tomatoes.kumato'),
  image: 'tomato-kumato.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.JANUARY(TYPE.PLANT),
    MONTHS.FEBRUARY(TYPE.PLANT),
    MONTHS.APRIL(TYPE.FLOWER),
    MONTHS.MAY(TYPE.FRUIT),
    MONTHS.JUNE(TYPE.FRUIT)
  ],
  pathname: '/tomate/kumato/'
},
{
  name: i18n.t('fruits.tomatoes.pera'),
  image: 'tomato-pera.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.JUNE(TYPE.FLOWER),
    MONTHS.JULY(TYPE.FRUIT),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/pera/'
},
{
  name: i18n.t('fruits.tomatoes.rama'),
  image: 'tomato-rama.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.JUNE(TYPE.FLOWER),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/rama/'
},
{
  name: i18n.t('fruits.tomatoes.roma'),
  image: 'tomato-roma.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.APRIL(TYPE.PLANT),
    MONTHS.JUNE(TYPE.FLOWER),
    MONTHS.AUGUST(TYPE.FRUIT)
  ],
  pathname: '/tomate/roma/'
},
{
  name: i18n.t('fruits.tomatoes.rosa'),
  image: 'tomato-rosa.jpg',
  height: 1,
  width: 1,
  season: SEASON.ANNUAL,
  category: [CATEGORY.ANNUAL],
  months: [
    MONTHS.FEBRUARY(TYPE.PLANT),
    MONTHS.MARCH(TYPE.PLANT),
    MONTHS.MAY(TYPE.FLOWER),
    MONTHS.JUNE(TYPE.FRUIT)
  ],
  pathname: '/tomate/rosa/'
}
]
