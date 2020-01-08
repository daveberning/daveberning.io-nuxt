<template>
  <ul>
    <li v-for="(theme, i) in listOfThemes" :key="i" @click="changeTheme(theme.name)">
      <span :class="{active: $store.state.theme === theme.name}" :style="`background: ${theme.color}`" />
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {listOfThemes} from '@/data/theme-colors'

  export default Vue.extend({
    data() {
      return {
        listOfThemes
      }
    },
    methods: {
      changeTheme(theme: string): void {
        this.$store.dispatch('changeTheme', theme)
      }
    }
  })
</script>

<style lang="scss" scoped>
  ul {
    position: absolute;
    left: 1rem;
    bottom: 3rem;
    display: none;
    width: 25px;
    z-index: 101;

    @media screen and (min-width: 1025px) {
      display: block;
    }

    li:hover {
      cursor: pointer;
    }

    li span {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid lighten(#000000, 15%);
      margin: 1rem auto 0 auto;
      transition: all .2s ease;

      &.active {
        border: 4px solid #000000;
        width: 25px;
        height: 25px;
        transition: all .2s ease;
      }
    }
  }
</style>
