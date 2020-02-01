<template>
  <form class="is-grid has-col-2 contact-form" v-if="formSubmitted === false" action="/contact" method="post"
        name="contact" netlify data-netlify-honeypot="bot-field">
    <section class="is-col-1-md is-grid has-col-2" v-for="field in fields" :key="field.id">
      <label class="is-col-1" :for="field.id">{{ field.label }}</label>
      <span class="is-col-1" v-if="formAttempt && !form[field.name] && field.required">Field is required</span>
      <span class="is-col-1" v-if="formAttempt && !form[email] && field.required && !isValidEmail && field.name ===
      'email'">Must be a valid email</span>
      <input class="is-col-2"
             :type="field.type"
             :id="field.id"
             :name="field.name"
             :required="field.required"
             @input="ev => form[`${field.name}`] = ev.target.value"
             :style="$store.getters.lightBkgColor">
    </section>
    <section class="is-col-2 is-grid has-col-2">
      <label class="is-col-1" for="message">Message *</label>
      <span class="is-col-1" v-if="formAttempt && !form.message">Field is required</span>
      <textarea class="is-col-2" id="message" rows="5" name="message"
                @input="ev => form[`message`] = ev.target.value" :style="$store.getters.lightBkgColor"
                :required="form.message.required" />
    </section>
    <p class="is-col-2">* denotes a required field</p>
    <button @click.prevent="handleSubmit" type="submit" :style="$store.getters.darkBkgColor">Send</button>
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
          { id: 'firstName', type: 'text', label: 'First Name *', name: 'firstName', required: true, },
          { id: 'lastName', type: 'text', label: 'Last Name *', name: 'lastName', required: true, },
          { id: 'phone', type: 'tel', label: 'Phone Number', name: 'phone', required: false, },
          { id: 'email', type: 'email', label: 'Email Address *', name: 'email', required: true, }
        ] as FormField[],
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        } as FormModels,
        formSubmitted: false as boolean,
        formAttempt: false as boolean
      }
    },
    computed: {
      isValidEmail() {
        // @ts-ignore
        return !(this.form.email && !this.form.email.includes('@'))
      }
    },
    methods: {
      encode(data: any): string {
        return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
      },
      handleSubmit(): void {
        // @ts-ignore
        const doesFormHaveValues = !!(this.form.firstName && this.form.lastName && this.form.email && this.form.message && this.isValidEmail)

        if (doesFormHaveValues) {
          const axiosConfig: any = { header: { 'Content-Type': 'application/x-www-form-urlencoded' } }
          axios.post('/', this.encode({'form-name': 'contact', ...this.form}), axiosConfig).then(() => this.formSubmitted = true)
        } else {
          this.formAttempt = true
        }
      }
    }
  })
</script>

<style lang="scss">
  .contact-form {
    button {
      display: inline-block;
      border: none;
      background: darken(#3e9e91, 7%);
      font-size: 2rem;
      padding: 2rem;
      text-align: center !important;
      color: #ffffff !important;
      border-radius: .25rem;

      &:hover { cursor: pointer; }
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
      font-family: inherit;
    }

    p,
    span {
      margin: 0;
      font-size: 1rem;
      font-style: italic;
    }

    span {
      text-align: right !important;
      color: var(--danger) !important;
    }
  }
</style>
