<template>
  <img ref="image" :src="src">
</template>
​
<script lang="ts">
  import Vue from 'vue'
  ​
  export default Vue.extend({
    name: 'inline-svg',
    props: {
      src: {
        type: String,
        required: true
      }
    },
    mounted(): void {
      if (process.client) {
        const SVGInjector = require('svg-injector')
        SVGInjector(this.$refs.image)
      }
    }
  })
</script>
