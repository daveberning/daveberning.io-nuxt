<template>
  <modal-content :is-inverted="true">
    <theme-text>
      <div class="is-grid">
        <h1 class="is-col-8">Drees Homes</h1>
        <div class="is-col-4 link">
          <a href="#" :style="`${$store.getters.darkTextColor}; ${$store.getters.darkBorderColor}`">Visit Website</a>
        </div>
      </div>
      <div class="is-grid">
        <div class="is-col-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod vestibulum molestie. In blandit euismod neque, non pharetra lectus vestibulum eu. Aliquam vel eleifend quam. Quisque consectetur ligula eget neque eleifend, vel mollis arcu ultrices. Curabitur gravida mi id sagittis varius. In ligula magna, fermentum vel venenatis at, mollis cursus augue. Ut faucibus malesuada libero, non ornare quam. Donec vitae vehicula erat, in convallis dolor. Nam in sodales quam, sit amet porttitor metus. Aenean egestas lorem tellus, non congue neque porta sed. Fusce ac ornare metus. Mauris vulputate ipsum at ipsum convallis, et pharetra purus tincidunt. Nam vel ullamcorper orci, id malesuada libero. Suspendisse tincidunt lorem arcu, sit amet scelerisque nibh dictum condimentum. Cras finibus placerat nisl et pellentesque. Mauris urna lectus, placerat ut varius quis, scelerisque ut nulla. </p>
        </div>
        <div class="is-col-4 tldr" :style="$store.getters.bkgColor">
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
          <h3>Role</h3>
          <p>I was the tech lead and lead front-end developer on this project. In this role, I was
            responsible for weekly deployments and the development of the company website. As the tech lead, I
            managed a small group of front-end developers, delegated their tasks, and performed bi-weekly code
            reviews to maintain a high coding standard.</p>

          <p>This project was built with Nuxt.js, SCSS, TypeScript, and more. External TypeScript utility functions
            were tested using Jest with 90% code coverage.</p>

          <h3>Other</h3>
          <p>The data for this website was fetched through RESTful JSON APIs created with Java by the Drees Homes
            back-end team. I occasionally aided the back-end developers to update the APIs as needed</p>
        </div>
      </div>
    </theme-text>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { works } from '~/data/work'
  import { Work } from '~/types'

  export default Vue.extend({
    name: 'Work' as string,
    data() {
      return {
        works: works as Work[]
      }
    },
  })
</script>

<style lang="scss" scoped>
  .tldr {
    padding: 1rem 2rem 3rem 2rem;
    border-radius: .25rem;
    font-size: 1rem;

    h3 {
      font-weight: bold;
      font-size: 3rem;
      margin: 2rem 0;
    }

    & * {
      color: #ffffff;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  strong { font-weight: bold; }

  .built-with p {
    padding: .5rem 1rem;
    border-radius: .25rem;
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      border: 2px solid;
      border-radius: 100px;
      padding: 1rem 4rem;
      text-decoration: none;
    }
  }
</style>
