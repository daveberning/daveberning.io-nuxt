<template>
  <Modal>
    <h1>Contact</h1>
    <div class="is-grid">
      <contact-form :form="form" :fields="fields" class="is-col-7-lg" />
      <ul class="is-col-5-lg is-grid has-col-2">
        <li class="is-col-1-md" v-for="media in socialMedia" :key="media.icon">
          <a :href="media.href" :style="`background: ${getThemeColors($store.state.theme).backgroundDarker}`">
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
  import { getThemeColors } from '~/data/theme-colors'
  import { socialMedia } from '@/data/social-media'
  import { FormField, FormModels, SocialMedia } from '~/types'
  import ContactForm from '@/components/ContactForm.vue'
  import Modal from '@/components/Modal.vue'

  export default Vue.extend({
    name: 'Contact' as string,
    components: {
      Modal,
      ContactForm
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
          phone: '',
          message: ''
        } as FormModels,
        formSubmitted: false as boolean
      }
    },
    methods: {
      getThemeColors,
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
  li {
    padding: 5rem;

    i { font-size: 6rem; }
  }

  li a {
    border-radius: .25rem;
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
