import MONTHS from '../month.data'
import CATEGORY from '../category.data'
import TYPE from '../type.data'
export default [
  {
    name: 'Tomates',
    image: 'tomato.jpg',
    height: 1,
    width: 1,
    category: [CATEGORY.CAP, CATEGORY.ACCESORY],
    months: [
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.JUNE(TYPE.FLOWER),
      MONTHS.AUGUST(TYPE.FRUIT)
    ],
    pathname: '/tomate/'
  }
]
