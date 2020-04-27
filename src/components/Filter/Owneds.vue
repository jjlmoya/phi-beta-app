<template>
    <div class="filter" @click="click">
      <button class="filter__button filter__button--owned">
          <img  class="active" :src="`${assets}star-full.png`"/>
          <img  class="inactive" :src="`${assets}star-empty.png`"/>
      </button>
    </div>
</template>

<script>
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
    },
    assets: {
      type: String,
      default: './statics/'
    }
  }
}
</script>
