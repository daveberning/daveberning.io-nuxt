<template>
  <Modal>
    <h1>About Dave</h1>
    <div class="grid">
      <div class="modal-content" v-html="about.bio"></div>
      <div :style="`background: ${getThemeColors(this.$store.state.theme).backgroundDarker}`">
        <p>Currently at</p>
        <img :src="about.companyLogo" alt="">
        <hr :style="`border-color: ${getThemeColors(this.$store.state.theme).background}`">
        <p>B.F.A in Electronic Media from</p>
        <img :src="about.almaMaterLogo" alt="">
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {about} from '@/data/about'
  import Modal from '@/components/Modal.vue'
  import {getThemeColors} from '@/data/theme-colors'
  import {About} from '@/types'

  export default Vue.extend({
    name: 'About' as string,
    components: {
      Modal
    },
    data() {
      return {
        about: about as About
      }
    },
    methods: {
      getThemeColors
    }
  })
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;

    & > div:first-child {
      grid-column: span 3;

      @media screen and (min-width: 967px) {
        grid-column: span 2;
      }

      p {
        text-align: justify;
      }
    }

    & > div:last-child {
      grid-column: span 3;
      background: darken(#a83c44, 7%);
      padding: 4rem 2rem;
      border-radius: 4px;

      @media screen and (min-width: 967px) {
        grid-column: span 1;
      }

      hr {
        margin: 4rem 0 3rem 0;
        border: 1px solid #3e9e91;
      }

      img {
        display: block;
        width: 100%;
        margin: 0 auto;
        max-width: 325px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      p {
        text-align: center;
        grid-column: span 2;
      }

      section {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
