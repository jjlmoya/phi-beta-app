import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import SEASON from '../season.data'
import TYPE from '../type.data'
export default [
  {
    name: 'Albahaca',
    image: 'albahaca.jpg',
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
  }
]
