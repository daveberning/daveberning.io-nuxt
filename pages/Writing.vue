<template>
  <Modal>
    <h1>Writing</h1>
    <div class="is-grid has-col-6">
      <a class="is-col-3-md is-col-2-lg" v-for="(writing, i) in writings" :href="writing.to"
          :style="`background: ${getThemeColors($store.state.theme).backgroundDarker}`">
        <h2>{{ writing.title }}</h2>
        <ul class="is-grid has-col-2">
          <li :style="sourceColor">{{ writing.date }}</li>
          <li>
            <span :class="{ book: writing.type.toLowerCase() === 'book' }" :style="writing.type.toLowerCase() === 'book' ? bookButtonStyles : sourceColor">
              {{ writingType(writing) }}
            </span>
          </li>
        </ul>
      </a>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Modal from '@/components/Modal.vue'
  import {Writing} from '@/types'
  import {getThemeColors} from '~/data/theme-colors'
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
    computed: {
      bookButtonStyles() {
        return `background: ${getThemeColors(this.$store.state.theme).background}`
      },
      sourceColor() {
        return `color: ${getThemeColors(this.$store.state.theme).backgroundLighter}`
      }
    },
    methods: {
      writingType(piece: Writing): string {
        return piece.type.toLowerCase() === 'book' ? 'Buy Book' : piece.type
      },
      getThemeColors
    }
  })
</script>

<style lang="scss" scoped>
  a {
    padding: 2rem 2rem 2.5rem 2rem;
    border-radius: 4px;
    text-decoration: none;

    h2 {
      font-size: 1.25rem;
      line-height: 2rem;
      padding-bottom: 3rem;

      @media screen and (min-width: 967px) {
        font-size: 2rem;
        line-height: 2.5rem;
      }
    }

    ul {
      padding: 0 2rem;
      position: absolute;
      bottom: 1rem;
      width: 100%;
      left: 0;
    }

    ul li,
    ul li span { color: lighten(#3e9e91, 20%); }

    ul li {
      margin: 2rem 0 0 0;
      font-style: italic;
      display: flex;
      align-self: center;
      &:last-child { justify-self: end; }
    }
  }

  .book {
    background: #3e9e91;
    display: inline-block;
    padding: .5rem 1rem;
    color: #ffffff;
    border-radius: 4px;
  }
</style>
