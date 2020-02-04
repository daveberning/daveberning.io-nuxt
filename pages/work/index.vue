<template>
  <modal-content>
    <h1>Work</h1>
    <div class="is-grid has-col-6">
      <section class="is-col-3-sm is-col-2-lg" v-for="work in works" :key="work.name" :style="$store.getters.darkBkgColor">
        <nuxt-link :to="work.link">
          <img :src="work.icon" :alt="work.alt">
        </nuxt-link>
      </section>
      <section class="is-col-3-sm is-col-2-lg">
        <nuxt-link class="your-website" to="/contact">
          <span>+<br>Your Website or Application</span>
        </nuxt-link>
      </section>
    </div>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { works } from '~/data/work'
  import { Work } from '~/types'

  export default Vue.extend({
    name: 'Work' as string,
    data() {
      return {
        works: works as Work[]
      }
    },
  })
</script>

<style lang="scss" scoped>
  .your-website {
    text-decoration: none;
    font-weight: 900;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $md) {
      font-size: 2rem;
    }

    span {
      text-align: center;
      line-height: 2.25rem;

      @media screen and (min-width: $md) {
        line-height: 3rem;
      }
    }
  }

  section {
    padding: 3rem 0;
    border-radius: .25rem;
    display: flex;

    @media screen and (min-width: $md) {
      padding: 5rem 2rem;
    }

    & > div { width: 100%; }

    p {
      margin: 1rem 0 0 0;
      text-align: center;
    }

    a {
      width: 15rem;
      display: flex;
      margin: 0 auto;
      max-height: 6rem !important;

      @media screen and (min-width: $md) {
        max-height: 11rem !important;
      }

      @media screen and (min-width: $lg) {
        width: 13rem;
      }

      @media screen and (min-width: $xxl) {
        width: 16rem;
      }
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      max-width: 11rem;

      @media screen and (min-width: $md) {
        max-width: 20rem;
      }
    }
  }
</style>
