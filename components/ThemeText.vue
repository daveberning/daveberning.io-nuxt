<template>
  <component :is="tag" :style="themeDarkTextColor">
    <slot />
  </component>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { getThemeColors } from '~/data/theme-colors'

  export default Vue.extend({
    props: {
      tag: {
        type: String as () => string,
        required: false,
        default: 'p'
      }
    },
    computed: {
      themeDarkTextColor(): string {
        return `color: ${getThemeColors(this.$store.state.theme).textColorDark}`
      }
    }
  })
</script>
