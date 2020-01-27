<template>
  <Modal>
    <h1>Work</h1>
    <div class="is-grid has-col-6">
      <section class="is-col-3-md is-col-2-lg" v-for="work in works" :key="work.name"
               :style="`background: ${getThemeColors($store.state.theme).backgroundDarker}`">
        <a :href="work.link">
          <img :src="work.icon" alt="">
        </a>
      </section>
      <section class="is-col-3-md is-col-2-lg">
        <nuxt-link class="your-website" to="/contact">
          <span>+<br>Your Website or Application</span>
        </nuxt-link>
      </section>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { works } from '@/data/work'
  import { getThemeColors } from '~/data/theme-colors'
  import { Work } from '@/types'
  import Modal from '@/components/Modal.vue'

  export default Vue.extend({
    name: 'Work' as string,
    components: {
      Modal
    },
    data() {
      return {
        works: works as Work[]
      }
    },
    methods: {
      getThemeColors
    }
  })
</script>

<style lang="scss" scoped>
  .your-website {
    text-decoration: none;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      text-align: center;
      line-height: 3rem;
    }
  }

  section {
    padding: 5rem 2rem;
    border-radius: .25rem;
    display: flex;

    & > div { width: 100%; }

    p {
      margin: 1rem 0 0 0;
      text-align: center;
    }

    a {
      width: 70%;
      display: flex;
      margin: 0 auto;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }
</style>
