<template>
  <modal-content :is-inverted="true">
    <work-content title="Clinical Trial Consulting" url="http://www.ctifacts.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/cti-screen.png" alt="A desktop view of the CTI website homepage" :style="$store.getters.darkBorder">
        <p>CTI Clinical Trial and Consulting Services is a global, privately held, full-service contract research organization (CRO), delivering a complete spectrum of clinical trial and consulting services throughout the lifecycle of development, from concept to commercialization.</p>

        <p>CTI’s focused therapeutic approach provides pharmaceutical, biotechnology, and medical device firms with clinical and disease area expertise in rare diseases, regenerative medicine/gene therapy, immunology, transplantation, nephrology, hematology/oncology, neurology, infectious diseases, hepatology, cardiopulmonary, and pediatric populations. CTI also offers a fully integrated multi-specialty clinical research site that conducts phase I-IV trials.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-5 is-row-2 is-centered" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-6 large" :style="$store.getters.darkBkgColor">Nuxt.js</p>
          <p class="is-col-6 large" :style="$store.getters.darkBkgColor">Prismic CMS</p>
        </div>
        <h3>My Role</h3>
        <p>For this project, I was given a robust Figma prototype, complete with branding foundations, atoms, molecules, and more. As the developer, I was tasked to take those mockups and build an interactive experience that is easily maintainable and content-driven by the client. We settled on a JAMStack development model with Prismic as the content management system (CMS) and Nuxt as the front-end library. This project was developed over the span of the three summer months.</p>

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
        title: 'Clinical Trial Consulting | Dave Berning | Cincinnati, OH'
      }
    }
  })
</script>

<style scoped>
  img {
    border-width: 5px !important;
    border-radius: .5rem;
  }

  .is-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
