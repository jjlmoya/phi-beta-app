<template>
    <div class="filter" @click="click">
        <button class="filter__button filter__button--category">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve">
            <g>
              <g>
                <g>
                  <rect x="128" y="128" width="85.333" height="85.333"/>
                  <rect x="0" y="0" width="85.333" height="85.333"/>
                  <rect x="128" y="256" width="85.333" height="85.333"/>
                  <rect x="0" y="128" width="85.333" height="85.333"/>
                  <rect x="0" y="256" width="85.333" height="85.333"/>
                  <rect x="256" y="0" width="85.333" height="85.333"/>
                  <rect x="128" y="0" width="85.333" height="85.333"/>
                  <rect x="256" y="128" width="85.333" height="85.333"/>
                  <rect x="256" y="256" width="85.333" height="85.333"/>
                </g>
              </g>
            </g>
            </svg>
        </button>
        <div class="filter-select">
          <div class="filter-select__tabs">
            <router-link
                :to="{ query: {category: ''}}" class="filter-select__tab"
                :class="[!cat? 'is-active' : '']">
              Todos
            </router-link>
            <router-link
              v-for="category in categories"
              :key="category.id"
              :to="{ query: {category: category.id}}"
              :class="[cat === category.id ? 'is-active' : '']" class="filter-select__tab">
              <span>{{ category.name }}</span>
            </router-link>
          </div>
      </div>
    </div>
</template>

<style lang="scss">@import 'filter.scss';
</style>

<script>
import CategoryService from '../../services/category.service'

export default {
  name: 'CategoryFilter',
  components: {},
  props: {
    selected: {
      type: String,
      default: ''
    },
    cat: {
      type: String,
      default: ''
    },
    click: {
      type: Function
    }
  },
  data () {
    return {
      categories: this.getCategories()
    }
  },
  methods: {
    getCategories () {
      return new CategoryService().getCategories()
    }
  }
}
</script>
