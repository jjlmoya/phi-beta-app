<template>
    <div class="p-ac p-ac--crafting">
        <Layout :category="category">
            <form class="crafting-search" :class="this.search ? 'is-active' : ''">
              <div class="close" @click="deleteResult">
                 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                      <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374
                        c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374
                        c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374
                        c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374
                        c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z"/>
                    </g>
                 </svg>
              </div>
              <input class="crafting-search__searcher" type="text"  @keyup="onSearch" :v-model="search" placeholder="¿Qué buscas?">
            </form>
            <div class="crafting-counter">
              <span class="crafting-counter__owned">{{this.owneds}}</span> de <span class="crafting-counter__current">{{this.current}}</span>
            </div>
            <div class="crafting-result">
                <Card @updateOwneds="updateOwneds"
                    v-for="craft in crafts.slice(0, limit)"
                    :key="craft.name"
                    :image="craft.image"
                    :name="craft.name"
                    :months="craft.months"
                    :pathname="craft.pathname"
                    :owneds="owneds"
                    :season="craft.season"
                />
                <div @click="expendLimits" class="craft-card craft-card__see-more" v-if="crafts.length > limit">
                  <span class="text">Ver todos</span>
                </div>

                <div class="crafting-result__empty" v-if="crafts.length===0">
                  No hay nada llamado "{{this.search}}" <a @click="deleteResult">Eliminar Búsqueda</a>
                </div>
            </div>
        </layout>
    </div>
</template>

<style lang="scss">
  @import 'index.scss';
</style>

<script>
import Layout from '../layouts/Default.vue'
import Card from '../components/Card/Card.vue'
import CraftingService from '../services/crafting.service'

export default {
  name: 'Home',
  components: {
    Layout,
    Card
  },
  data () {
    const crafting = this.getCrafts(this.$route.query.category)
    return {
      crafts: crafting.crafts,
      maxItems: crafting.max,
      current: crafting.current,
      owneds: crafting.owneds,
      category: this.$route.query.category,
      limit: 300,
      search: ''
    }
  },
  methods: {
    getCrafts (category, search) {
      const craftObjet = new CraftingService({ category: category, search: search })
      return {
        crafts: craftObjet.getCrafts(),
        max: craftObjet.getMaxObjets(),
        current: craftObjet.getCurrentObjets(),
        owneds: craftObjet.getOwneds()
      }
    },
    updateOwneds (value) {
      this.owneds += value
    },
    expendLimits () {
      this.limit = this.limit + 500
    },
    onUpdatePage (category, search) {
      const crafting = this.getCrafts(category, search)
      this.crafts = crafting.crafts
      this.maxItems = crafting.max
      this.current = crafting.current
      this.owneds = crafting.owneds
      this.category = category
    },
    onSearch (event) {
      this.search = event.target.value.trim().toLowerCase()
      this.onUpdatePage(this.category, this.search)
    },
    deleteResult () {
      this.search = ''
      document.querySelector('.crafting-search__searcher').value = ''
      this.onUpdatePage(this.id, this.category, this.search)
    }
  },
  watch: {
    '$route.query.category' (newCategory, oldCategory) {
      this.onUpdatePage(this.$route.query.category)
    }
  }
}
</script>
