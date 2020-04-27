import PLANTS from '../data/plant.data'

export default class CraftingService {
  constructor ({ category, serie, search }) {
    this.plants = PLANTS
    this.maxItem = PLANTS.length
    this.category = category
    this.serie = serie
    this.search = search
    if (this.serie) {
      const filtered = this.plants.filter(craft => craft.serie && craft.serie.id === this.serie)
      this.plants = filtered
    }
    if (this.category) {
      this.plants = this.plants.filter(craft => this.hasCategory(this.category, craft.category))
    }
    this.plants = this.search ? this.filterByName() : this.plants
    this.ownedCount = this.getOwnedsByCrafts().length
    this.currentMaxItems = this.filtered ? this.filtered.length : this.maxItem
  }

  normalizeString (string) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()
  }

  filterByName (name) {
    return this.plants.filter(craft => this.normalizeString(craft.name).indexOf(this.normalizeString(this.search)) > -1)
  }

  hasOwn (entry, owneds) {
    return !!owneds.find(owned => owned === entry)
  }

  hasCategory (entry, owneds) {
    return !!owneds.find(owned => owned && owned.id === entry)
  }

  getOwnedsByCrafts () {
    let owneds = localStorage.owned
    if (owneds) {
      owneds = JSON.parse(owneds)
      return this.plants.filter(craft => this.hasOwn(craft.image, owneds))
    }
    return []
  }

  getCrafts () {
    return this.plants
  }

  getOwneds () {
    return this.ownedCount
  }

  getMaxObjets () {
    return this.maxItem
  }

  getCurrentObjets () {
    return this.plants.length
  }
}
