<template>
  <modal-content :is-inverted="true">
    <work-content title="Foxen" url="http://www.foxen.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/foxen-recording.gif" alt="A screen recording of the Foxen website" :style="$store.getters.darkBorder">
        <p>Foxen develops innovative technology to provide insurance solutions and financial services to property owners, managers and their residents. Foxen’s products solve for flawed and antiquated processes while simultaneously creating property revenue and greater financial wellbeing for residents. As a rapidly growing FinTech company, Foxen is disrupting the insurance and financial industries to achieve a greater vision of financial wellness through real estate.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-5 is-row-2 is-centered" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-6 large" :style="$store.getters.darkBkgColor">Nuxt.js</p>
          <p class="is-col-6 large" :style="$store.getters.darkBkgColor">Prismic</p>
        </div>
        <h3>My Role</h3>
        <p>For this project, I was given a robust Figma prototype, complete with branding foundations, atoms, molecules, and more. As the developer, I was tasked to take those mockups and build an interactive experience that is easily maintainable and content-driven by the client. We settled on a JAMStack development model with Prismic as the content management system (CMS) and Nuxt as the front-end library. This project was developed over the span of the three fall months.</p>

        <p>As an employee of Oodle, I was the <strong>developer</strong> of this project. This was a project with a quick
          turnaround time. I worked closely with Oodle designers, project managers, and account executives from development to launch.</p>
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
    head() {
      return {
        title: 'Foxen | Dave Berning | Cincinnati, OH'
      }
    }
  })
</script>

<style scoped>
  img {
    max-height: 700px;
    width: auto !important;
    border-width: 5px !important;
    border-radius: .5rem;
  }

  .is-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
