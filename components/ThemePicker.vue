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

    li:hover {
      cursor: pointer;
    }

    li span {
      display: block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-top: 1rem;

      &.active {
        border: 4px solid #000000;
      }
    }
  }
</style>
