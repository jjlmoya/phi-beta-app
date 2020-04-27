<template>
    <div class="l-default l-default--background">
        <div class="l-default__main">
            <div class="l-default__content">
                <div class="l-default__filters" style="margin: 10px 18px;">
                  <Category :click="toggleCategories"
                    :selected="selected"
                    :cat="category"
                    :fold="activeCategories ? 'is-active' : ''" />
                  <Owneds :click="toggleOwneds"
                    :selected="selected"
                    :cat="category"
                    :fold="activeOwneds ? 'is-active' : ''" />
                </div>
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>
<style lang="scss">@import 'default.scss';
</style>
<script>
import Footer from '../components/Footer/Default.vue'
import Category from '../components/Filter/Category.vue'
import Owneds from '../components/Filter/Owneds.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    Category,
    Owneds
  },
  props: {
    selected: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeCategories: false,
      activeOwneds: false
    }
  },
  methods: {
    toggleCategories () {
      this.activeCategories = !this.activeCategories
      document.body.classList.toggle('overflow', this.activeCategories)
    },
    toggleOwneds () {
      this.activeOwneds = !this.activeOwneds
      document.body.classList.toggle('own-filter', this.activeOwneds)
    }
  }
}
</script>
