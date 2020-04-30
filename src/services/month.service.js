import MONTHS from '../data/month.data'

export default class MonthService {
  constructor () {
    this.months = MONTHS
  }

  getMonths () {
    return this.months
  }
}
