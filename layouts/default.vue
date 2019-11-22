<template>
  <div>
    <nuxt />
    <theme-picker />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ThemePicker from '~/components/ThemePicker.vue'

  export default Vue.extend({
    transition: 'slide',
    components: {
      ThemePicker
    }
  })
</script>
