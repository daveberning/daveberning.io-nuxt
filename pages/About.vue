<template>
  <Modal>
    <h1>About Dave</h1>
    <div class="is-grid">
      <div class="modal-content is-col-7-md is-col-8-xl" v-html="about.bio"/>
      <div class="is-col-5-md is-col-4-xl">
        <div :style="`background: ${getThemeColors(this.$store.state.theme).backgroundDarker}`">
          <p>Currently at</p>
          <img :src="about.companyLogo" alt="Oodle Logo">
          <hr :style="`border-color: ${getThemeColors(this.$store.state.theme).background}`">
          <p>B.F.A in Electronic Media from</p>
          <img :src="about.almaMaterLogo" alt="The University of Cincinnati Logo">
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { about } from '@/data/about'
  import { getThemeColors } from '@/data/theme-colors'
  import { About } from '@/types'
  import Modal from '@/components/Modal.vue'

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
  .modal-content + div > div {
    background: darken(#a83c44, 7%);
    padding: 4rem 2rem;
    border-radius: .25rem;

    p { text-align: center; }

    hr {
      margin: 4rem 0 3rem 0;
      border: 1px solid #3e9e91;
    }

    img {
      display: block;
      width: 100%;
      margin: 0 auto;
      max-width: 20rem;
      &:last-child { margin-bottom: 0; }
    }
  }
</style>
