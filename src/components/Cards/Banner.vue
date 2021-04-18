<template>
    <div class="phi-card-banner" :class="{'is-fav': fav}">
        <PhiIcon
            class="phi-card-banner__icon"
            icon="star"
            @click="$emit('onStar', id, fav)"
        />
        <img
            class="phi-card-banner__image"
            :src="image"
            :alt="title"
            @click="$emit('onNext', id)"
        >
    </div>
</template>

<script>
    import PhiIcon from '@/components/Commons/Icon.vue'

    export default {
        components: {
            PhiIcon,
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            id: {
                type: String,
                default: ''
            },
            fav: {
                type: Boolean,
                default: false
            },
        },
        emits: ['onStar', 'onNext'],
    }
</script>

<style lang="postcss">
  .phi-card-banner {
    color: white;
    position: relative;
    height: 100px;
    border-radius: 15px;
  }

  .is-fav .phi-card-banner__icon {
    color: yellow;
  }

  .phi-card-banner__image {
    border-radius: 15px;
    height: 100px;
    width: 100%;
  }

  .phi-card-banner__icon {
    position: absolute;
    text-align: center;
    margin: 0 auto;
    right: 0;
    bottom: -5px;
    font-size: 20px;
  }
</style>
