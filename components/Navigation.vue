<template>
  <nav>
    <ul>
      <li v-for="item in navigation" :key="item.to">
        <nuxt-link :to="item.to" :style="`${themeTextColor}; ${themeBorder}`">
          {{ item.text }}
          <span>{{ item.keyboard }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {NavigationItem} from '@/types'

  export default Vue.extend({
    name: 'Navigation' as string,
    props: {
      navigation: {
        type: Array as () => NavigationItem[],
        required: true
      },
      themeTextColor: {
        type: String as () => string,
        required: false
      },
      themeBorder: {
        type: String as () => string,
        required: false
      }
    }
  })
</script>

<style scoped lang="scss">
  nav ul li {
    display: block;

    @media screen and (min-width: 767px) {
      display: inline-block;
    }

    a {
      border: 2px solid #334241;
      // color: #334241;
      padding: .5rem 2rem 1.25rem 2rem;
      border-radius: 100px;
      margin: 1.5rem 0 0 0;
      display: inline-block;
      text-decoration: none;
      position: relative;
      width: 100%;

      @media screen and (min-width: 767px) {
        width: auto;
        margin: 1rem 1rem 0 0;
        padding: .75rem 2rem 1.5rem 2rem;
      }

      @media screen and (min-width: 1024px) {
        margin: 2.5rem 1rem 0 0;
        padding: .75rem 2rem 1.5rem 2rem;
      }

      &::after {
        content: '';
        font-size: .6rem;
        display: block;
        position: absolute;
        width: 100%;
        left: 0;
        margin-top: 5px;
        font-style: italic;
      }

      & span {
        font-size: .6rem;
        display: block;
        position: absolute;
        width: 100%;
        left: 0;
        margin-top: 5px;
        font-style: italic;
      }

      @media screen and (min-width: 2000px) {
        font-size: 1vw;
      }
    }
  }
</style>
