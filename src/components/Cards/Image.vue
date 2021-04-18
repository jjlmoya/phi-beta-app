<template>
    <div class="phi-card-image" :class="{'is-fav': fav}">
        <img
            class="phi-card-image__image"
            :src="image"
            :alt="title"
            @click="$emit('onNext', id)"
        >
        <PhiIcon class="phi-card-image__icon" icon="star" @click="$emit('onStar', id, fav)" />
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
  .phi-card-image {
    color: white;
    position: relative;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
  }

  .is-fav .phi-card-image__icon {
    color: yellow;
  }

  .phi-card-image__image {
    border-radius: 15px;
  }

  .phi-card-image__icon {
    position: absolute;
    right: -5px;
    top: -5px;
  }
</style>
