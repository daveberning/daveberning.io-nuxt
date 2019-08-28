<template>
  <Modal>
    <h1>Contact</h1>
    <div class="grid">
      <form action="">
        <section v-for="field in fields" :key="field.id">
          <label :for="field.id">{{ field.label }}</label>
          <input :type="field.type" :id="field.id">
        </section>
        <section>
          <label for="message">Message</label>
          <textarea id="message" rows="5"></textarea>
        </section>
        <button>Send</button>
      </form>
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
  import Modal from '@/components/Modal.vue'
  import {socialMedia} from '@/data/social-media'
  import {FormField, SocialMedia} from '@/types'

  export default Vue.extend({
    name: 'Contact' as string,
    components: {
      Modal
    },
    data() {
      return {
        socialMedia: socialMedia as SocialMedia[],
        fields: [
          {id: 'firstName', type: 'text', label: 'First Name'},
          {id: 'lastName', type: 'text', label: 'Last Name'},
          {id: 'phone', type: 'tel', label: 'Phone Number'},
          {id: 'email', type: 'email', label: 'Email Address'}
        ] as FormField[]
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

        @media screen and (min-width: 1024px) {
          font-size: 3.5rem;
        }
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

  form {
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
