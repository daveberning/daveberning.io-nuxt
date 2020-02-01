<template>
  <div class="modal" :class="[ { active: isActive }, { regular: !this.isInverted },  { inverted: this.isInverted }]"
       :style="`background: ${backgroundColor}; color: ${textColor} !important;`">
    <div class="content" :class="{ regular: !this.isInverted }">
      <nuxt-link to="/" class="close">
        <img src="/images/cancel.svg" alt="Close">
      </nuxt-link>
      <slot />
    </div>
    <p class="right" :style="`color: ${getThemeColors($store.state.theme).backgroundDarker}`">Copyright &copy 2012 -
      {{ new Date().getFullYear() }}. All Rights Reserved.</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {VueInstance} from '@/types'
  import {getThemeColors} from '@/data/theme-colors'

  export default Vue.extend({
    name: 'Modal' as string,
    props: {
      isInverted: {
        type: Boolean as () => boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        isActive: true as boolean,
        bodyClass: 'modal-background' as string
      }
    },
    destroyed(): void {
      this.isActive = false
    },
    methods: {
      getThemeColors
    },
    computed: {
      backgroundColor() {
        return this.isInverted ? 'white' : `${getThemeColors(this.$store.state.theme).background}`
      },
      textColor() {
        return this.isInverted ? `${getThemeColors(this.$store.state.theme).background}` : 'white'
      }
    },
    mounted(): void {
      this.isActive = true
    }
  })
</script>

<style lang="scss">
  .modal {
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    overflow: auto;
    z-index: 10000;
    @media screen and (min-width: 768px) { padding: 2rem; }
    @media screen and (min-width: 1200px) { padding: 2rem 4rem; }

    h1 {
      font-size: 4rem;
      line-height: 7rem;

      @media screen and (min-width: $lg) {
        font-size: 7rem;
        line-height: 11rem;
      }
    }

    .content {
      transition-delay: .35s;
      padding: 0 0 2rem 0;
    }

    &.regular * {
      color: #ffffff;
      text-align: left;
      position: relative;
    }

    * {
      text-align: left;
      position: relative;
    }

    .close {
      background: none;
      color: #ffffff;
      position: absolute;
      top: 0;
      right: -15px;
      padding: .5rem 1rem;
      z-index: 9999;

      @media screen and (min-width: $lg) {
        top: 15px;
        right: 10px;
      }

      img {
        width: 25px;
        height: 25px;

        @media screen and (min-width: $lg) {
          width: 50px;
          height: 50px;
        }
      }
    }

    p {
      font-size: 1.25rem;
      line-height: 2.25rem;
      font-weight: 300;
      margin-bottom: 2rem;

      @media screen and (min-width: $lg) {
        font-size: 1.5rem;
        line-height: 3rem;
      }

      em {
        font-style: italic;
        font-weight: 600;
        letter-spacing: .25px;
      }

      &.right {
        position: relative;
        bottom: 0;
        margin: 1rem 0 0 0;
        text-align: center;
        right: 0;
        font-size: .75rem;
        color: lighten(#3e9e91, 20%);
        line-height: 1rem;

        @media screen and (min-width: $lg) {
          position: absolute;
          line-height: 3rem;
          right: 4rem;
          margin-top: 0;
          text-align: unset;
        }
      }
    }
  }
</style>
