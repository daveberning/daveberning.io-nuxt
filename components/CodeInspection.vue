<template>
  <div id="wrapper" :style="`background: ${getThemeColors($store.state.theme).textColorDark}`">
    <div>
      <h3><strong>Trying to peek at my code?</strong></h3>
      <p>I'm flattered :)</p>
      <p>Admiring, copying, critiquing, and or experimenting with code just makes the web a better place. So go right
        ahead. Copy any code that you want, improve it, and call it your own.</p>
      <ul>
        <li><a href="https://github.com/daveberning/daveberning.io-nuxt">[G] View on GitHub</a></li>
        <li>[B] Continue in {{ browserName }} DevTools</li>
      </ul>
      <p><small>(I promise that I won't show this again until you refresh your browser)</small></p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import * as bowser from "bowser"
  import { getThemeColors } from '@/data/theme-colors'
  import {VueInstance} from '~/types'

  export default Vue.extend({
    methods: {
      getThemeColors,
      keyboardActions(e: KeyboardEvent): void {
        if (e.keyCode === 27 || e.keyCode === 66) {
          this.$emit('closeCodeInspection')
          this.$store.dispatch('dismissCodeInspectionNotice' , true)
        } // Esc, B

        if (e.keyCode === 71) {
          window.location.href = 'https://github.com/daveberning/daveberning.io-nuxt'
        } // G
      }
    },
    computed: {
      browserName(): string {
        return bowser.getParser(window.navigator.userAgent).getBrowserName()
      }
    },
    destroyed(): void {
      window.removeEventListener('keyup', this.keyboardActions)
    },
    mounted(): void {
      window.addEventListener('keyup', this.keyboardActions)
    }
  })
</script>

<style lang="scss" scoped>
  #wrapper {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 12000;
    font-family: "Courier New", serif;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      max-width: 1400px;
      padding: 2rem;
    }
  }

  h3 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 2rem 0;
  }

  p,
  ul li {
    font-size: 1.5rem;
    margin: 2rem;
    line-height: 2.5rem;
  }

  p:last-child {
    margin: 0;
  }

  ul {
    border-top: 1px dashed #fff;
    padding: 1rem 0 0 0;
    margin: 2rem 0 0 0;

    li {
      display: inline-block;
      margin: 1rem 2rem;
      cursor: pointer;
    }

    li a {
      color: inherit;
      text-decoration: none;
    }
  }

  small {
    font-size: .8rem;
    color: #ccc;
  }
</style>
