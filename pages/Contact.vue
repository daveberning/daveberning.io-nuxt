<template>
  <Modal>
    <h1>Contact</h1>
    <div class="grid">
      <form method="post" name="contact" netlify data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit"
            v-if="formSubmitted === false">
        <section v-for="field in fields" :key="field.id">
          <label :for="field.id">{{ field.label }}</label>
          <input :type="field.type" :id="field.id" :name="field.name" @input="ev => form[`${field.name}`] =
          ev.target.value">
        </section>
        <section>
          <label for="message">Message</label>
          <textarea id="message" rows="5" name="message"></textarea>
        </section>
        <button type="submit">Send</button>
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
      <ul>
        <li v-for="media in socialMedia" :key="media.icon">
          <a :href="media.href">
            <i :class="`fab fa-${media.icon}`"></i>
          </a>
        </li>
      </ul>
    </div>
  </Modal>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'
  import Modal from '@/components/Modal.vue'
  import {socialMedia} from '@/data/social-media'
  import {FormField, FormModels, SocialMedia} from '~/types'

  export default Vue.extend({
    name: 'Contact' as string,
    components: {
      Modal
    },
    data() {
      return {
        socialMedia: socialMedia as SocialMedia[],
        fields: [
          {id: 'firstName', type: 'text', label: 'First Name', name: 'firstName'},
          {id: 'lastName', type: 'text', label: 'Last Name', name: 'lastName'},
          {id: 'phone', type: 'tel', label: 'Phone Number', name: 'phone'},
          {id: 'email', type: 'email', label: 'Email Address', name: 'email'}
        ] as FormField[],
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: ''
        } as FormModels,
        formSubmitted: false as boolean
      }
    },
    methods: {
      encode(data: any) {
        return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
      },
      handleSubmit() {
        const axiosConfig: any = {
          header: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
        axios.post('/', this.encode({'form-name': 'contact', ...this.form}), axiosConfig)
          .then(() => {
            this.formSubmitted = true
          })
      }
    }
  })
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    @media screen and (min-width: 967px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-column: span 2;

    @media screen and (min-width: 768px) {
      grid-column: span 2;
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
      grid-column: span 1;
    }

    li {
      grid-column: span 2;
      background: darken(#3e9e91, 7%);
      border-radius: 4px;
      padding: 5rem;

      @media screen and (min-width: 768px) {
        grid-column: span 1;
      }

      i {
        font-size: 4.5rem;
      }
    }

    li a {
      background: none;
      color: #ffffff;
      position: absolute;
      z-index: 9999;
      text-decoration: none;
      height: 100%;
      width: 100%;
      padding: 0;
      justify-content: center;
      align-items: center;
      top: 0 !important;
      left: 0 !important;
      display: flex;
    }
  }

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
    background: lighten(#3e9e91, 6%);
    padding: 1rem;
    border-radius: 4px;
    border: 0;
    margin-top: .5rem;
    font-size: 2rem;
    font-weight: 300;
    width: 100%;
  }
</style>
