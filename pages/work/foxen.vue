<template>
  <modal-content :is-inverted="true">
    <work-content title="Foxen" url="http://www.foxen.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/bearcast-responsive.png"
             alt="The Bearcast Media website on various devices">
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
          <p class="is-col-7" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-5 is-row-2 is-centered" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">Nuxt.js</p>
        </div>
        <h3>My Role</h3>
        <p>As an employee of Oodle, I was the <strong>developer</strong> of this project. This was a project with a quick
          turnaround
          time but complete with an EyeMed-specific CSS library and scroll animations. I worked closely with Oodle
          designers, project managers, and account executives from development to launch.</p>

        <p>This project was developed using Jekyll, a popular static site generator.</p>
      </template>
    </work-content>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import WorkContent from '~/components/WorkContent.vue'

  export default Vue.extend({
    name: 'Work' as string,
    components: {
      WorkContent
    },
  })
</script>

<style>
  img:last-child {
    width: 12rem;
  }

  .is-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
