<template>
    <div class="card" :class="owned ? 'is-owned' : 'is-not-owned'">
        <div class="card__name">
            {{ name }}
        </div>
        <img class="card__corner" :src="`${assets}${owned ? 'star-full' : 'star-empty'}.png`" @click="toggleOwned(image)"/>
        <img class="card__image" :src="`${assets}/assets/plants/${image}`">
        <div class="card__months">
          <div  v-for="(month, index) in commonMonths" :key="month().id">
            <div class="month__wrap" :class="getMonthState(month().id, index)">
                <i></i>
                <span>{{ month().shortName }}</span>
            </div>
          </div>
        </div>
        <div class="card__info">
            <a :href="`${domain}${pathname}`" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 283.922 283.922" style="enable-background:new 0 0 283.922 283.922;" xml:space="preserve">
                <g>
                  <path d="M266.422,0h-97.625c-9.65,0-17.5,7.851-17.5,17.5c0,9.649,7.85,17.5,17.5,17.5h55.377l-92.375,92.374   c-3.307,3.305-5.127,7.699-5.127,12.375c0,4.676,1.819,9.069,5.125,12.371c3.306,3.309,7.699,5.13,12.375,5.13   c4.674,0,9.069-1.82,12.376-5.127l92.374-92.375v55.377c0,9.649,7.851,17.5,17.5,17.5c9.649,0,17.5-7.851,17.5-17.5V17.5   C283.922,7.851,276.071,0,266.422,0z"/>
                  <path d="M201.137,253.922H30V82.785h128.711l30-30H15c-8.284,0-15,6.716-15,15v201.137c0,8.284,6.716,15,15,15h201.137   c8.284,0,15-6.716,15-15V95.211l-30,30V253.922z"/>
                </g>
            </svg>
          </a>
        </div>
        <div class="card__season">{{season.name}}</div>
    </div>
</template>

<style lang="scss">
  @import 'card.scss';
</style>

<script>
import MonthService from '../../services/month.service'

export default {
  props: {
    months: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    assets: {
      type: String,
      default: './statics/'
    },
    domain: {
      type: String,
      default: 'https://plantasyflores.online'
    },
    pathname: {
      type: String,
      default: ''
    },
    monthIndex: {
      type: Number,
      default: new Date().getMonth()
    },
    season: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    const monthService = new MonthService()
    return {
      owned: this.isOwned() || false,
      commonMonths: monthService.getMonths()
    }
  },
  mounted () {
    let globalOwned = localStorage.owned
    if (globalOwned) {
      globalOwned = JSON.parse(globalOwned)
      this.owned = globalOwned.findIndex(e => e === this.image) > -1
    } else {
      localStorage.owned = '[]'
      this.owned = false
    }
  },
  methods: {
    isOwned () {
      let globalOwned = localStorage.owned
      if (globalOwned) {
        globalOwned = JSON.parse(globalOwned)
        return globalOwned.findIndex(e => e === this.image) > -1
      }
      return false
    },
    toggleOwned (id) {
      let globalOwned = localStorage.owned
      let count = 0
      if (globalOwned) {
        globalOwned = JSON.parse(globalOwned)
        const index = globalOwned.findIndex(e => e === id)
        if (index > -1) {
          globalOwned.splice(index, 1)
          count--
        } else {
          globalOwned.push(id)
          count++
        }
      } else {
        globalOwned = [id]
      }
      this.owned = !this.owned
      localStorage.owned = JSON.stringify(globalOwned)
      this.$emit('updateOwneds', count)
    },
    getMonthState (activeMonth, index) {
      const match = this.months.find(month => month.id === activeMonth)
      const isActive = this.monthIndex === index ? 'is-active' : ''
      return `${(match ? match.type : '')} ${isActive}`
    }
  }
}
</script>
