<template>
  <modal-content :is-inverted="true">
    <work-content title="Drees Homes" url="https://www.dreeshomes.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/drees-homes.png"
             alt="The Drees Homes website on various devices">
        <p>Drees Homes was founded in 1928. Since it's founding, it has grown into a multi-billion dollar private
        business, building new homes across the United States. I was hired in the fall of 2016 as a front-end developer to build the front-end of their internal applications and maintain the company website.</p>

        <p>During my time at Drees Homes, I modernized their front-end stack and created new libraries to expedite
          development. Some of these technologies I helped adopted and explored are Vue.js, TypeScript, CSS Grid,
          service workers, Jest, and more.</p>

        <p>In addition to development, my responsibilities also included the designing of user interfaces and
        creating solid user experiences for various department applications like Dream Builder.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">HTML</p>
          <p class="is-col-5" :style="$store.getters.darkBkgColor">Jest</p>
          <p class="is-col-4" :style="$store.getters.darkBkgColor">PHP</p>
          <p class="is-col-8" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-5" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">Nuxt.js</p>
        </div>
        <h3>My Role</h3>
        <p>I was the <strong>tech lead</strong> and <strong>lead front-end developer</strong> on this project. In this role, I was responsible for
          weekly deployments and development of the company website. As the tech lead, I managed a small group of front-end developers and delegated their tasks as well as my own. Part of our development process was bi-weekly code reviews, which I led to maintain a high coding standard.</p>

        <p>This project is built with Nuxt.js, SCSS, TypeScript, and more. External TypeScript utility functions were
        tested using Jest with 90% code coverage.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">Top Caliber Award</theme-text>
        <p>In in spring of 2019, I was awarded the Top Caliber Award for Outstanding Performance. This was presented
          by the Vice President of Marketing and the Systems Architect Manager (IT) during our annual meeting to
          reflect the hard work that I put in to the Drees Homes website and various "90th Anniversary" projects.</p>
        <img src="~/assets/images/award.svg" alt="">
      </template>
    </work-content>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { works } from '~/data/work'
  import { Work } from '~/types'
  import WorkContent from '~/components/WorkContent.vue'

  export default Vue.extend({
    name: 'Work' as string,
    components: {
      WorkContent
    },
    data() {
      return {
        works: works as Work[]
      }
    },
  })
</script>

<style>
  img:last-child {
    width: 12rem;
  }
</style>
