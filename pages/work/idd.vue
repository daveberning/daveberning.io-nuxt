<template>
  <modal-content :is-inverted="true">
    <work-content title="Ideal Due Diligence" url="http://permitsmadepossible.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/drees-homes.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod vestibulum molestie. In blandit euismod neque, non pharetra lectus vestibulum eu. Aliquam vel eleifend quam. Quisque consectetur ligula eget neque eleifend, vel mollis arcu ultrices. Curabitur gravida mi id sagittis varius. In ligula magna, fermentum vel venenatis at, mollis cursus augue. Ut faucibus malesuada libero, non ornare quam. Donec vitae vehicula erat, in convallis dolor. Nam in sodales quam, sit amet porttitor metus. Aenean egestas lorem tellus, non congue neque porta sed. Fusce ac ornare metus. Mauris vulputate ipsum at ipsum convallis, et pharetra purus tincidunt. Nam vel ullamcorper orci, id malesuada libero. Suspendisse tincidunt lorem arcu, sit amet scelerisque nibh dictum condimentum. Cras finibus placerat nisl et pellentesque. Mauris urna lectus, placerat ut varius quis, scelerisque ut nulla. </p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">CSS</p>
          <p class="is-col-5" :style="$store.getters.darkBkgColor">Javascript</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">HTML</p>
        </div>
        <h3>My Role</h3>
        <p>I was the <strong>tech lead</strong> and <strong>lead front-end developer</strong> on this project. In this role, I was
          responsible for weekly deployments and the development of the company website. As the tech lead, I
          managed a small group of front-end developers, delegated their tasks, and performed bi-weekly code
          reviews to maintain a high coding standard.</p>

        <p>This project was built with Nuxt.js, SCSS, TypeScript, and more. External TypeScript utility functions
          were tested using Jest with 90% code coverage.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">Looking for Something Similar?</theme-text>
        <p>Parsec Digital have been an excellent web developer resource for Kroger Wireless. They totally redesigned our mobile app and were attentive and flexible to our input, while working independently and remotely! I'd highly recommend Parsec Digital as a top-notch development resource.</p>
        <nuxt-link tag="button" to="/contact" :style="$store.getters.darkBkgColor">Contact Me</nuxt-link>
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
