<template>
  <theme-text>
    <div class="is-grid work">
      <theme-text tag="h1" class="is-col-7-md is-col-8-xl">{{ title }}</theme-text>
      <div class="is-col-5-md is-col-4-xl link has-no-m" v-if="url">
        <a :href="url" target="_blank" :style="`${$store.getters.darkTextColor}; ${$store.getters.darkBorder}`">
          {{ urlText }}
        </a>
      </div>
    </div>
    <div class="is-grid">
      <div class="is-col-7-lg is-col-8-xl">
        <slot />
      </div>
      <div class="is-col-5-lg is-col-4-xl tldr">
        <div :style="$store.getters.bkgColor">
          <slot name="side-content" />
        </div>
      </div>
    </div>
    <div class="is-grid">
      <div class="is-col-12">
        <div class="testimonial">
          <slot name="testimonial" />
        </div>
      </div>
    </div>
  </theme-text>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String as () => string,
      required: false as boolean,
      default: '' as string
    },
    urlText: {
      type: String as () => string,
      required: false as boolean,
      default: 'Visit Website' as string
    },
    title: {
      type: String as () => string,
      required: true as boolean
    }
  }
})
</script>

<style lang="scss">
.work h1 {
  @media screen and (max-width: $md) {
    text-align: center;
  }

  @media screen and (min-width: $xl) {
    font-size: 5rem !important;
    line-height: 7rem !important;
  }

  @media screen and (max-width: $xl) {
    font-size: 3rem !important;
    line-height: 4rem !important;
  }
}

.tldr > div {
  padding: 1rem 2rem 3rem 2rem;
  border-radius: .25rem;

  h3 {
    font-weight: bold;
    font-size: 3rem !important;
    margin: 2rem 0;
  }

  & * {
    color: #ffffff;
    font-size: 1.25rem !important;
    line-height: 2rem !important;
  }
}

strong {
  font-weight: bold !important;
}

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
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;

  a {
    border: 2px solid;
    border-radius: 100px;
    padding: 1rem 1rem;
    text-decoration: none;
    min-width: 15rem;
    text-align: center;

    &:last-of-type {
      border: none;
    }
  }
}

img {
  max-width: 80%;
  display: block;
  margin: 0 auto 2rem auto;
}

.testimonial {
  max-width: 60rem;
  margin: 4rem auto 0 auto;

  h2 {
    text-align: center;
  }

  p {
    margin-top: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;

    &:last-child {
      margin-top: 1rem;
      text-align: center;
    }
  }

  img:not([src*="svg"]) {
    border-radius: 50%;
    box-shadow: 0 .5em 1em -.125em rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .02);
  }

  button {
    border: 0;
    padding: 1rem 3rem;
    font-size: 1rem;
    color: #ffffff;
    display: block;
    margin: 0 auto;
    border-radius: 100px;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    border: 2px solid;
    border-radius: 100px;
    padding: 1rem 1rem;
    text-decoration: none;
    display: inline-block;
    margin: 0 auto;
  }
}
</style>
