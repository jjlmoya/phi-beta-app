import FRUIT from './plants/fruit.plants'
import GREEN from './plants/green.plants'
import TUBER from './plants/tuber.plants'
import FLOWER from './plants/flower.plants'

const PLANTS = [
  ...FRUIT,
  ...GREEN,
  ...TUBER,
  ...FLOWER
]

console.log(PLANTS)
export default GREEN

/**

tree
plant
flower

tuber

fruit
 **/
