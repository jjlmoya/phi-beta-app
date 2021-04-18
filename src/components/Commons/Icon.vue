<template>
    <div class="phi-icon-button">
        <i class="fas" :class="`fa-${icon}`"></i>
    </div>
</template>
<script>
    export default {
        name: 'IconButton',
        props: {
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="postcss">
  .phi-icon {
    color: var(--color-text);
    background-color: var(--color-background);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
</style>
