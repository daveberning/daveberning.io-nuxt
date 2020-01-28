<template>
  <form class="is-grid has-col-2" v-if="formSubmitted === false" action="/contact" method="post" name="contact"
        @submit.prevent="handleSubmit" netlify data-netlify-honeypot="bot-field">
    <section class="is-col-1-md" v-for="field in fields" :key="field.id">
      <label :for="field.id">{{ field.label }}</label>
      <input :type="field.type" :id="field.id" :name="field.name" @input="bindFieldValue($event, field.name)" :style="$store.getters.lightBkgColor">
    </section>
    <section class="is-col-2">
      <label for="message">Message</label>
      <textarea id="message" rows="5" name="message" @input="bindFieldValue($event, 'message')"
                :style="$store.getters.lightBkgColor" />
    </section>
    <button type="submit" :style="$store.getters.darkBkgColor">Send</button>
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
  import { FormField, FormModels } from '~/types'
  import axios from '~/node_modules/axios'

  export default Vue.extend({
    data() {
      return {
        fields: [
          { id: 'firstName', type: 'text', label: 'First Name', name: 'firstName' },
          { id: 'lastName', type: 'text', label: 'Last Name', name: 'lastName' },
          { id: 'phone', type: 'tel', label: 'Phone Number', name: 'phone' },
          { id: 'email', type: 'email', label: 'Email Address', name: 'email' }
        ] as FormField[],
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        } as FormModels,
        formSubmitted: false as boolean
      }
    },
    methods: {
      bindFieldValue(e: any, fieldName: string): void {
        // @ts-ignore
        this.form[fieldName] = e.target.value
      },
      encode(data: any): string {
        return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
      },
      handleSubmit(): void {
        const axiosConfig: any = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        axios.post('/', this.encode({'form-name': 'contact', ...this.form}), axiosConfig)
        .then(() => this.formSubmitted = true)
      }
    }
  })
</script>

<style lang="scss">
  form button {
    display: inline-block;
    border: none;
    background: darken(#3e9e91, 7%);
    font-size: 2rem;
    padding: 2rem;
    text-align: center !important;
    color: #ffffff !important;
    border-radius: .25rem;
  }

  .message {
    h2 { margin-bottom: 2rem; }
    & > div { grid-column: span 4; }
  }

  input,
  label { display: block; }

  input,
  textarea {
    background: lighten(#a83c44, 6%);
    padding: 1rem;
    border-radius: .25rem;
    border: 0;
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    width: 100%;
  }
</style>
