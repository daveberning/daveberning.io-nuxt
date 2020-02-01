<template>
  <modal-content :is-inverted="true">
    <work-content title="EyeMed" url="https://landing.eyemed.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/eyemed.png" alt="EyeMed landing page on various devices.">
        <p>EyeMed is America's fastest-growing vision benefits company and located in Greater Cincinnati. They
          have a diverse and expansive network across the United States, including private doctors and national
          providers like LensCrafters®, Pearle Vision®, and Target Optical®. They are a part of Luxottica of America Inc, a global leader in eye care and eyewear.</p>

          <p>As part of a marketing campaign, I developed a simple landing page complete with a color theme and
          scrolling animations. This landing page is part of a national marketing campaign targeting users via Google
          searches and clicks. Users can get immediate information regarding EyeMed and submit an online form for additional information.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-4" :style="$store.getters.darkBkgColor">HTML</p>
          <p class="is-col-8" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">Jekyll</p>
        </div>
        <h3>My Role</h3>
        <p>As an employee of Oodle, I was the <strong>developer</strong> of this project. This was a project with a quick
          turnaround
          time but complete with an EyeMed-specific CSS library and scroll animations. I worked closely with Oodle
          designers, project managers, and account executives from development to launch.</p>

          <p>This project was developed using Jekyll, a popular static site generator.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">Like What You See?</theme-text>
        <p>Let's talk over a coffee or a beer, your choice. We'll discuss how I may be able to help you with your next
          project(s) and anything else you want. Regardless, we'll enjoy a nice craft beer or coffee.</p>
        <theme-text style="text-align: center;">
          <nuxt-link to="/contact" :style="`${$store.getters.borderColor}; ${$store.getters.textColor}`">Contact
            Me</nuxt-link>
        </theme-text>
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
