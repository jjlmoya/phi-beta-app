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
      MONTHS.MARCH(TYPE.PLANT),
      MONTHS.APRIL(TYPE.PLANT),
      MONTHS.JUNE(TYPE.FLOWER),
      MONTHS.AUGUST(TYPE.FRUIT)
    ],
    pathname: '/tomate/'
  }
]

/**

/aguacate
/coco/
/kiri/
/mango
/mango/ataulfo/
/mango/manila/

 */
