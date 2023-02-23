<template>
  <modal-content :is-inverted="true">
    <work-content title="Kroger Wireless" url="https://apps.apple.com/us/app/kroger-wireless-my-account/id1499394715" url-text="View in App Store">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/kroger-wireless.png"
             alt="Various screens of the Kroger Wireless App">
        <p>Kroger Wireless (formally i-Wireless) is the phone plan provider of Kroger, the nationwide grocery chain.
          There are many brands under the Kroger Family, which include: Kroger, King Soopers, Pay Less Super
          Markets, Fred Meyers, and more. Kroger Wireless provides affordable phone plans under the Sprint network.</p>

        <p>As part of a recent rebrand, I was approached by Mark Strong, the Director of Network Operations at Kroger
          Wireless, to develop the new Kroger Wireless My Account application. This application is built using
          NativeScript for Vue.js to allow for both iOS and Android builds of the single codebase. In addition to
          NativeScript, this application also uses TypeScript and consumes back-end API data via Axios.</p>

        <p>This application has since been launched in the Apple App Store as well as the Google Play Store. Kroger
          Wireless is pre-installing the "My Account" mobile application on all phones sold in their stores. Most
          notability in Cincinnati, Seattle, and Oregon.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-12" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-4" :style="$store.getters.darkBkgColor">CSS</p>
          <p class="is-col-8" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">NativeScript</p>
        </div>
        <h3>My Role</h3>
        <p>I am the <strong>developer</strong> and <strong>consultant</strong> on this project. I am responsible for all
          the development and
          maintenance
          of the application as well as connecting it to the Google Play and App Stores.</p>

        <p>NativeScript was considered and approved for this project so we can build and deploy iOS and Android
          versions of the same codebase. This is a project that I work on as a freelancer outside of my day job.
          Kroger Wireless' mobile application is an ongoing project with more improvements planned soon. Including
          rebranding the application for their sister company Access Wireless.</p>
      </template>
      <template slot="testimonial">
        <theme-text tag="h2" class="is-bold">His Words Not Mine</theme-text>
        <p>Dave have been an excellent web developer resource for Kroger Wireless. He totally redesigned our mobile
          app and was attentive and flexible to our input, while working independently and remotely! I'd highly
          recommend Dave as a top-notch development resource.</p>
        <img src="~/assets/images/mark.jpg" alt="">
        <p>Mark Strong <br><em>Director of Network Operations at Kroger Wireless</em></p>
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
  head() {
    return {
      title: 'Kroger Wireless - My Account | Dave Berning | Cincinnati, OH',
      description:
        `Kroger Wireless (formally i-Wireless) is the phone plan provider of Kroger, the nationwide grocery chain. My Account is a mobile app that provides customers with the tools needed to update and manage their wireless phone account.`
    }
  }
})
</script>

<style lang="scss" scoped>
::v-deep img {
  max-width: 30rem;
}
</style>
