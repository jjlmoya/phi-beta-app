import FRUIT from './plants/fruit.plants'
import GREEN from './plants/green.plants'
import TUBER from './plants/tuber.plants'
import FLOWER from './plants/flower.plants'
import TREE from './plants/tree.plants'

const PLANTS = [
  ...FRUIT,
  ...GREEN,
  ...TUBER,
  ...FLOWER,
  ...TREE
]

console.log(PLANTS)
export default PLANTS
