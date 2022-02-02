<template>
  <ul>
    <li
      v-for="(theme, i) in listOfThemes"
      :key="i"
      :class="{active: $store.state.theme === theme.name}"
      @click="changeTheme(theme.name)">
      <img v-if="theme.image" :src="`images/${theme.image}`" alt="theme logo">
      <span v-else :style="`background: ${theme.color}`" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { listOfThemes } from '@/data/theme-colors'
import { ThemeSwatch } from '~/types/theme'

export default Vue.extend({
  data() {
    return {
      listOfThemes: listOfThemes as ThemeSwatch[]
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
  z-index: 101;
  bottom: 3rem;
  left: 1rem;
  display: none;
  width: 25px;

  @media screen and (min-width: 1025px) {
    display: block;
  }

  li {
    width: 35px;

    img {
      width: 20px;
      margin: 0 auto;
    }

    span {
      display: block;
      width: 15px;
      height: 15px;
      margin: 1rem auto 0 auto;
      transition: all .2s ease;
      border: 1px solid lighten(#000000, 15%);
      border-radius: 50%;
    }
  }

  li:hover {
    cursor: pointer;
  }

  li.active {
    span {
      width: 25px;
      height: 25px;
      transition: all .2s ease;
      border: 4px solid #000000;
    }

    img {
      width: 35px;
      height: auto;
    }
  }
}
</style>
