<template>
  <modal-content :is-inverted="true">
    <work-content title="M80, Inc." url="http://m80inc.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/m80inc.png" alt="The M80 website on various devices">
        <p>M80, Inc is a product design company located in Cincinnati, OH. They are known for breaking the status quo
          and working in unconventional ways to develop the best product for their clients. Some of their product design
          work includes: Gorilla Shipping Tape, Tic-Tac Chill, Chapstick Duo, and Barilla Sauce Jar.</p>

        <p>In the spring of 2016, I was approached by M80 designer, Brett Valls, to consult with and develop the new and
          improved company website. Brett is a graphic and web designer who designed the M80 website. During the
          development process, he provided design mockups for mobile, tablet, and desktop devices.</p>

        <p>This website was built using WordPress to provide the client with the ability to manage their content.
          Included in the deliverable was a small custom library of classes that their in-house designers can leverage
          to modify the design of their website within branding guidelines.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">HTML</p>
          <p class="is-col-5" :style="$store.getters.darkBkgColor">Javascript</p>
          <p class="is-col-4" :style="$store.getters.darkBkgColor">PHP</p>
          <p class="is-col-8" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">WordPress</p>
        </div>
        <h3>My Role</h3>
        <p>I was the <strong>developer</strong> and <strong>technical consultant</strong> on this project. It was my job
          as a freelance consultant
          to
          provide the best possible solution for their business within their budget. I collaborated heavily with
          their in-house designer to produce a product that reflected their brand as close as possible.</p>

        <p>This project was launched in the Summer of 2016. I continue to support this website for more significant
          modifications like new anniversary pages.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">His Words Not Mine</theme-text>
        <p>Dave has been instrumental in the development and deployment of our web presence and continue to deliver
          service
          excellence whenever called upon. His creativity, speed, and value make him a key contributor to our success
          and we look forward to partnering with him as we continue to evolve our online brand expression.</p>
        <img src="~/assets/images/bill.jpg" alt="" width="100">
        <p>Bill Valls<br><em>Co-Founder, CEO & Disruptive Influence at M80 inc.</em></p>
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
      title: 'M80 Inc | Dave Berning | Cincinnati, OH',
      description:
        `M80, Inc is a product design company located in Cincinnati, OH. They are known for breaking the status quo and working in unconventional ways to develop the best product for their clients. Some of their product design work includes: Gorilla Shipping Tape, Tic-Tac Chill, Chapstick Duo, and Barilla Sauce Jar.`
    }
  }
})
</script>
