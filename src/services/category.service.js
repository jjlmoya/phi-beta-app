import CATEGORIES from '../data/category.data'

export default class CategoryService {
  constructor () {
    this.categories = Object.keys(CATEGORIES)
      .map(k => CATEGORIES[k])
      .sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  getCategories () {
    return this.categories
  }
}
