import MONTHS from '../data/month.data'
console.log(MONTHS)

export default class MonthService {
  constructor () {
    this.months = MONTHS
  }

  getMonths () {
    return this.months
  }
}
