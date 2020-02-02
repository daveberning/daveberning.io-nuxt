<template>
  <modal-content>
    <h1>Contact</h1>
    <div class="is-grid">
      <contact-form class="is-col-7-lg" />
      <ul class="is-col-5-lg is-grid has-col-2">
        <li class="is-col-1-md" v-for="media in socialMedia" :key="media.icon" :style="$store.getters.darkBkgColor">
          <a :href="media.href">
            <i :class="`fab fa-${media.icon}`" />
          </a>
        </li>
      </ul>
    </div>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { socialMedia } from '@/data/social-media'
  import { SocialMedia } from '~/types'
  import ContactForm from '@/components/ContactForm.vue'

  export default Vue.extend({
    name: 'Contact' as string,
    components: {
      ContactForm
    },
    data() {
      return {
        socialMedia: socialMedia as SocialMedia[],
      }
    },
  })
</script>

<style lang="scss" scoped>
  li {
    padding: 5rem;

    i {
      font-size: 4rem;
      @media screen and (min-width: $xl) { font-size: 6rem; }
    }
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

  form button,
  .message button {
    display: inline-block;
    border: none;
    background: darken(#3e9e91, 7%);
    font-size: 2rem;
    padding: 2rem;
    text-align: center !important;
    color: #ffffff !important;
    border-radius: .25rem;
  }

  .message h2 { margin-bottom: 2rem; }

  input,
  label { display: block; }

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
