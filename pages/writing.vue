<template>
  <modal-content>
    <h1>Writing</h1>
    <p>{{ numberOfArticles }} Articles / {{ numberOfBooks }} Books</p>
    <div class="is-grid">
      <a
        v-for="(writing, i) in writings"
        :key="i"
        :href="writing.to"
        :style="$store.getters.darkBkgColor"
        class="is-col-6-md is-col-4-xl">
        <h2>{{ writing.title }}</h2>
        <ul class="is-grid has-col-2">
          <li :style="$store.getters.textColor" class="is-col-1">{{ writing.date }}</li>
          <li class="is-col-1">
            <span
              :class="{ book: isBook(writing) }"
              :style="isBook(writing) ? bookButtonStyles : $store.getters.textColor">
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
    numberOfBooks(): number {
      return this.writings.filter(writing => writing.type === 'Book')?.length || 0
    },
    numberOfArticles(): number {
      return this.writings.filter(writing => writing.type !== 'Book')?.length || 0
    }
  },
  methods: {
    isBook(writing: Writing): boolean {
      return writing.type.toLowerCase() === 'book'
    }
  },
  head() {
    return {
      title: 'Writing | Dave Berning | Cincinnati, OH',
      description:
        `Dave Berning is a technical writer for Digital Ocean and a published author through Bleeding Edge Press. He is the author of various Vue.js, JavaScript, and CSS works including "Vue.js: Understanding Its Tools and EcoSystem."`
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  padding: 2rem 2rem 2.5rem 2rem;
  text-decoration: none;
  border-radius: 4px;

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
    position: absolute !important;
    bottom: 1rem;
    left: 0;
    width: 100%;
    padding: 0 2rem;
  }

  ul li,
  ul li span {
    color: #ffffff !important;
  }

  ul li {
    font-style: italic;
    display: flex;
    align-self: center;
    margin: 2rem 0 0 0;

    &:last-child {
      justify-self: end;
    }
  }
}

.book {
  display: inline-block;
  padding: .5rem 1rem;
  color: #ffffff;
  border-radius: 4px;
  background: #3e9e91;
}

p {
  font-size: 1.25rem;
  margin: 0;
  text-align: right !important;
}
</style>
