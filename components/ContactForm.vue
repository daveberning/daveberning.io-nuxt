<template>
  <form v-if="formSubmitted === false" :fields="fields" action="/contact" method="post" name="contact" netlify
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit">
    <section v-for="field in fields" :key="field.id">
      <label :for="field.id">{{ field.label }}</label>
      <input :type="field.type" :id="field.id" :name="field.name"
             @input="ev => form[`${field.name}`] = ev.target.value" :style="inputColor">
    </section>
    <section>
      <label for="message">Message</label>
      <textarea id="message" rows="5" name="message" @input="ev => form[`message`] = ev.target.value"
                :style="inputColor"></textarea>
    </section>
    <button type="submit" :style="`background: ${getThemeColors($store.state.theme).backgroundDarker}`">Send
    </button>
  </form>
  <div class="message" v-else>
    <div>
      <h2>Thanks for the message, {{ form.firstName }}!</h2>
      <p>We will be in touch shortly. In the mean time, please
        <nuxt-link to="/writing">read some of my writing</nuxt-link>
        or
        <nuxt-link to="/work">take a look at some of my work.</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { getThemeColors } from '~/data/theme-colors'
  import {FormField, FormModels} from '~/types'

  export default Vue.extend({
    props: {
      fields: {
        type: Array as () => FormField[],
        required: true,
      },
      form: {
        type: Object as () => FormModels,
        required: true
      }
    },
    data() {
      return {
        formSubmitted: false as boolean
      }
    },
    computed: {
      inputColor(): string {
        return `background: ${getThemeColors(this.$store.state.theme).backgroundLighter}`
      }
    },
    methods: {
      getThemeColors
    }
  })
</script>

<style lang="scss">
  form,
  .message {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;

    section {
      grid-column: span 4;

      @media screen and (min-width: 768px) {
        grid-column: span 2;
      }
    }

    section:nth-child(5) {
      grid-column: span 4;
    }

    button {
      grid-column: span 4;
      grid-row-start: 6;
      display: inline-block;
      border: none;
      background: darken(#3e9e91, 7%);
      font-size: 2rem;
      padding: 2rem;
      text-align: center !important;
      color: #ffffff !important;
      border-radius: 4px;

      @media screen and (min-width: 768px) {
        grid-row-start: 4;
        grid-column: span 4;
      }

      @media screen and (min-width: 1024px) {
        grid-column: span 2;
      }
    }
  }

  .message {
    h2 {
      margin-bottom: 2rem;
    }

    & > div {
      grid-column: span 4;
    }
  }

  input,
  label {
    display: block;
  }

  input,
  textarea {
    background: lighten(#a83c44, 6%);
    padding: 1rem;
    border-radius: 4px;
    border: 0;
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    width: 100%;
  }
</style>
