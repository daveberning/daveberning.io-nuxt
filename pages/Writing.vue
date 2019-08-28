<template>
  <Modal>
    <h1>Writing</h1>
    <div class="grid">
      <a v-for="(writing, i) in writings" :href="writing.to">
        <h2>{{ writing.title }}</h2>
        <ul>
          <li>{{ writing.date }}</li>
          <li><span :class="{ book: writing.type.toLowerCase() === 'book' }">{{ writingType(writing) }}</span></li>
        </ul>
      </a>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Modal from '@/components/Modal.vue'
  import {Writing} from '@/types'
  import {writing} from '@/data/writing'

  export default Vue.extend({
    name: 'Writing' as string,
    components: {
      Modal
    },
    data() {
      return {
        writings: writing as Writing[]
      }
    },
    methods: {
      writingType(piece: Writing): string {
        return piece.type.toLowerCase() === 'book' ? 'Buy Book' : piece.type
      }
    }
  })
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1rem;

    @media screen and (min-width: 768px) {
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    }

    @media screen and (min-width: 967px) {
      grid-row-gap: 3rem;
    }

    a {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-column: span 6;
      background: darken(#3e9e91, 7%);
      padding: 2rem 2rem 2.5rem 2rem;
      border-radius: 4px;
      text-decoration: none;

      @media screen and (min-width: 768px) {
        grid-column: span 3;
        grid-column-gap: 1rem;
      }

      @media screen and (min-width: 1025px) {
        grid-column: span 2;
      }

      h2 {
        font-size: 1.25rem;
        line-height: 2rem;
        grid-column: span 2;
        padding-bottom: 3rem;

        @media screen and (min-width: 967px) {
          font-size: 2rem;
          line-height: 2.5rem;
        }
      }

      ul {
        padding: .5rem 2rem;
        position: absolute;
        bottom: 1rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }

      ul li,
      ul li span {
        color: lighten(#3e9e91, 20%);
      }

      ul li {
        margin: 2rem 0 0 0;
        font-style: italic;
        grid-column: span 1;

        &:last-child {
          text-align: right;
        }
      }
    }

    .book {
      background: #3e9e91;
      display: inline-block;
      padding: .5rem 1rem;
      color: #ffffff;
      border-radius: 4px;
    }
  }
</style>
