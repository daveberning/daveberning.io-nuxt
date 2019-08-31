<template>
  <Modal>
    <h1>Work</h1>
    <div class="grid">
      <section v-for="work in works" :key="work.name">
        <a :href="work.link">
          <img :src="work.icon" alt="">
        </a>
      </section>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {works} from '@/data/work'
  import Modal from '@/components/Modal.vue'
  import {Work} from '@/types'

  export default Vue.extend({
    name: 'Work' as string,
    components: {
      Modal
    },
    data() {
      return {
        works: works as Work[]
      }
    }
  })
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;

    @media screen and (min-width: 767px) {
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1025px) {
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 3rem;
      grid-column-gap: 3rem;
    }

    section {
      grid-column: span 1;
      background: darken(#3e9e91, 7%);
      padding: 5rem 2rem;
      border-radius: 4px;
      display: flex;

      & > div {
        width: 100%;
      }

      p {
        margin: 1rem 0 0 0;
        text-align: center;
      }

      a {
        width: 70%;
        display: flex;
        margin: 0 auto;
      }

      img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
      }
    }
  }
</style>
