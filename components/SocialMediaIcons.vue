<template>
  <ul>
    <li v-for="media in socialMedia" :key="media.icon">
      <a :href="media.href" :style="themeDarkTextColor">
        <i :class="`fab fa-${media.icon}`" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { SocialMedia } from '../types'
  import { getThemeColors } from '@/data/theme-colors'

  export default Vue.extend({
    props: {
      socialMedia: {
        type: Array as () => SocialMedia[],
        required: true,
      }
    },
    computed: {
      themeDarkTextColor(): string {
        return `color: ${getThemeColors(this.$store.state.theme).textColorDark}`
      }
    }
  })
</script>

<style lang="scss" scoped>
  ul li {
    display: inline-block;
    margin: 2.5rem 1rem 0 0;

    a { font-size: 1.5rem; }
  }
</style>
