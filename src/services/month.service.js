const MONTHS = [{
  id: 'JAN',
  name: 'Enero'
}, {
  id: 'FEB',
  name: 'Febrero'
}, {
  id: 'MAR',
  name: 'Marzo'
}, {
  id: 'APR',
  name: 'Abril'
}, {
  id: 'MAY',
  name: 'Mayo'
}, {
  id: 'JUN',
  name: 'Junio'
}, {
  id: 'JUL',
  name: 'Julio'
}, {
  id: 'AUG',
  name: 'Agosto'
}, {
  id: 'SEPT',
  name: 'Septiembre'
}, {
  id: 'OCT',
  name: 'Octubre'
}, {
  id: 'NOV',
  name: 'Noviembre'
}, {
  id: 'DEC',
  name: 'Diciembre'
}]

export default class MonthService {
  constructor () {
    this.months = MONTHS
  }

  getMonths () {
    return this.months
  }
}
