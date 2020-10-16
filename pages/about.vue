<template>
  <modal-content>
    <h1>About Dave</h1>
    <div class="is-grid">
      <div class="modal-content is-col-7-md is-col-8-xl" v-html="about.bio" />
      <div class="is-col-5-md is-col-4-xl">
        <div :style="$store.getters.darkBkgColor">
          <p>Currently at</p>
          <img :src="about.companyLogo" alt="Oodle Logo">
          <hr :style="`${$store.getters.borderColor}`">
          <p>B.F.A in Electronic Media from</p>
          <img :src="about.almaMaterLogo" alt="The University of Cincinnati Logo">
        </div>
      </div>
    </div>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import { about } from '@/data/about'
import { About } from '@/types'

export default Vue.extend({
  name: 'About' as string,
  data() {
    return {
      about: about as About
    }
  },
  head() {
    return {
      title: 'About | Software Engineer | Dave Berning | Cincinnati, OH',
      description:
        `Dave Berning is a software engineer from Cincinnati, Ohio. Since 2013, Dave has worked with several national and local companies through a range of projects. Dave is also a mentor and author, writing for Digital Ocean and Bleeding Edge Press.`
    }
  }
})
</script>

<style lang="scss" scoped>
.modal-content + div > div {
  background: darken(#a83c44, 7%);
  padding: 4rem 2rem;
  border-radius: .25rem;

  p {
    text-align: center;
  }

  hr {
    margin: 4rem 0 3rem 0;
    border: 1px solid #3e9e91;
  }

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: 20rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
