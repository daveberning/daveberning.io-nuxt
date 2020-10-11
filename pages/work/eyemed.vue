<template>
  <modal-content :is-inverted="true">
    <work-content title="EyeMed Member Portal" url="https://member.eyemedvisioncare.com/#/member/en"
                  url-text="View Portal">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/eyemed.png" alt="EyeMed landing page on various devices.">
        <p>EyeMed is America's fastest-growing vision benefits company and located in Greater Cincinnati. They
          have a diverse and expansive network across the United States, including private doctors and national
          providers like LensCrafters®, Pearle Vision®, and Target Optical®. They are a part of Luxottica of America
          Inc, a global leader in eye care and eyewear.</p>

        <p>As part of a recent push to provide customers with a variety of online tools, Oodle was contracted out
          to develop their "Member Web Portal". This online portal provides EyeMed customers the ability to view
          their plan, update dependencies, find an nearby eye doctor, and more.</p>

        <p>In addition to user insurance plan control, "Member Web Portal" also provided the ability for third party
          companies who use
          EyeMed insurance to
          create their own branded member portal for their own employees. Organizations and business such as
          <strong>Instagram</strong>,
          the <strong>University of Kentucky</strong>, <strong>Johnson &amp; Johnson</strong>, and <strong>Aetna
          </strong> are
          able to create their own
          branded
          instance of the EyeMed Member
          Portal for their own employees to login to. The work that the development team and I put in essentially
          provides an unlimited amount of branded portals.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-6" :style="$store.getters.darkBkgColor">HTML</p>
          <p class="is-col-6 is-row-2 is-centered-vertically" :style="$store.getters.darkBkgColor">
            <span>TypeScript</span></p>
          <p class="is-col-6" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-8" :style="$store.getters.darkBkgColor">Concise</p>
          <p class="is-col-4" :style="$store.getters.darkBkgColor">Oodle.js</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">Vue.js</p>
        </div>
        <h3>My Role</h3>
        <p>As an employee of Oodle, I was one the main <strong>developers</strong> on this project. I worked closely
          with Oodle designers, project managers, and account executives from development to launch.</p>

        <p>This project is built on top of Content Stack, complete with a number of configurable fields which
          allowed for a number of scoped and branded portals for EyeMed's clients. In addition to Nuxt and
          TypeScript, this project heavily used Oodle's own JavaScript utility library which I created before the
          start of this project.</p>

        <p>This project was heavily developed with a data layer that the developer can toggle between a mock layer
          and a REST API data layer. The whole application can be completely developed using the mock data if needed
          .</p>

        <p>This project was developed using Nuxt, Vue, TypeScript, SCSS, Concise, and more.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">Like What You See?</theme-text>
        <p>Let's talk over a coffee or a beer, your choice. We'll discuss how I may be able to help you with your next
          project(s) and anything else you want. Regardless, we'll enjoy a nice craft beer or coffee.</p>
        <theme-text style="text-align: center;">
          <nuxt-link to="/contact" :style="`${$store.getters.borderColor}; ${$store.getters.textColor}`">Contact
            Me
          </nuxt-link>
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
  }
})
</script>

<style lang="scss" scoped>
.is-centered-vertically {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
