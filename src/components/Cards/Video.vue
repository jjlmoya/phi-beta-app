<template>
    <div class="phi-card-video" @click="$emit('onNext', id)">
        <img
            class="phi-card-video__image"
            :src="image"
            :alt="title"
        >
        <div class="phi-card-video__overlay">
            {{ title }}
        </div>
    </div>
</template>

<script>
    export default {
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
            }
        },
        emits: ['onStar', 'onNext'],
    }
</script>

<style lang="postcss">
  .phi-card-video {
    color: white;
    position: relative;
    padding: 10px 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .phi-card-video__image {
    border-radius: 15px;
    overflow: hidden;
  }

  .phi-card-video__overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px;
    border-radius: 15px;
  }

</style>
