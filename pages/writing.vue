<template>
  <modal-content>
    <h1>Writing</h1>
    <div class="is-grid">
      <a class="is-col-6-md is-col-3-xl" v-for="(writing, i) in writings" :key="i" :href="writing.to"
         :style="$store.getters.darkBkgColor">
        <h2>{{ writing.title }}</h2>
        <ul class="is-grid has-col-2">
          <li class="is-col-1" :style="$store.getters.textColor">{{ writing.date }}</li>
          <li class="is-col-1">
            <span :class="{ book: isBook(writing) }" :style="isBook(writing) ? bookButtonStyles : ``">
              {{ isBook(writing) ? 'Buy Book' : writing.type }}
            </span>
          </li>
        </ul>
      </a>
    </div>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Writing } from '@/types'
  import { getThemeColors } from '~/data/theme-colors'
  import { writing } from '@/data/writing'

  export default Vue.extend({
    name: 'Writing' as string,
    data() {
      return {
        writings: writing as Writing[]
      }
    },
    computed: {
      bookButtonStyles(): string {
        return `background: ${getThemeColors(this.$store.state.theme).background}`
      },
    },
    methods: {
      isBook(writing: Writing): boolean {
        return writing.type.toLowerCase() === 'book'
      },
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
      position: absolute !important;
      bottom: 1rem;
      width: 100%;
      left: 0;
    }

    ul li,
    ul li span { color: #fff !important; }

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
