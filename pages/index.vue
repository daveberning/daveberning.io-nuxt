<template>
  <div class="component">
    <div class="wrapper">
      <div class="content">
        <picture>
          <source ref="image" :srcset="`images/compressed/dave-optimized-sm-${$store.state.theme}.jpg`"
                  media="(min-width: 1335px)">
          <img src="images/dave-mobile.jpg" alt="PP">
        </picture>
        <div>
          <theme-text tag="h1">{{ about.firstName }} {{ about.lastName }}</theme-text>
          <theme-text tag="h2">{{ about.role }} from {{ about.city }}, {{ about.state }}</theme-text>
          <theme-text tag="p" class="left">Photography by Jason Bayer</theme-text>
          <theme-text tag="p" class="right">Copyright &copy 2012 - {{ new Date().getFullYear() }}. All Rights Reserved.</theme-text>
          <navigation :navigation="navigation" />
          <social-media-icons :social-media="socialMedia" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { About, NavigationItem, SocialMedia, VueInstance } from '@/types'
  import { about } from '@/data/about'
  import { socialMedia } from '@/data/social-media'
  import { navigation } from '@/data/navigation'
  import Navigation from '@/components/Navigation.vue'
  import SocialMediaIcons from '~/components/SocialMediaIcons.vue'

  export default Vue.extend({
    name: 'Home' as string,
    components: {
      Navigation,
      SocialMediaIcons
    },
    props: {
      theme: {
        required: false,
        type: String
      }
    },
    data() {
      return {
        navigation: navigation as NavigationItem[],
        about: about as About,
        socialMedia: socialMedia as SocialMedia[],
        imgs: [] as any
      }
    },
    mounted(): void {
      const self: VueInstance = this
      window.addEventListener('keyup', (e: KeyboardEvent) => {
        if (e.keyCode === 65 && e.ctrlKey) {
          self.$router.push('/about')
        } // Shift + A
        if (e.keyCode === 87 && e.ctrlKey) {
          self.$router.push('/work')
        } // Shift + W
        if (e.keyCode === 71 && e.ctrlKey) {
          self.$router.push('/writing')
        } // Shift + G
        if (e.keyCode === 67 && e.ctrlKey) {
          self.$router.push('/contact')
        } // Shift + C
      })
    }
  })
</script>

<style lang="scss" scoped>
  .component {
    position: fixed;
    top: 0 !important;
    transform: translateY(0) !important;
  }

  h1 {
    font-size: 3rem;
    line-height: 4rem;
    margin: 1rem 0 0 0;

    @media screen and (min-width: 812px) { margin: 0; }

    @media screen and (min-width: 1335px) {
      font-size: 7rem;
      line-height: 11rem;
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2.25rem;

    @media screen and (min-width: 1335px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  p {
    position: absolute;
    font-size: .75rem;
    color: #cccccc;
    bottom: 1rem;
  }

  p.left {
    left: 1rem;
    display: none;

    @media screen and (min-width: 1400px) {
      display: block;
    }
  }

  p.right {
    left: 0;
    right: 0;

    @media screen and (min-width: 1400px) {
      left: unset;
      right: 1rem;
    }
  }

  ul li {
    display: inline-block;
    margin: 2.5rem 1rem 0 0;
    &:last-child { margin-right: 0; }
    a { font-size: 1.5rem; }
    @media screen and (min-width: 812px) { margin: 1rem 1rem 0 0; }
    @media screen and (min-width: 967px) { margin: 2.5rem 1rem 0 0; }
  }

  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 2000px;
    margin: 0 auto;
    height: 100vh;
    position: relative;
    padding: 2rem;
    z-index: -1;

    @media screen and (min-width: 1760px) {
      padding: 0 16rem;
    }

    @media screen and (min-width: 2000px) {
      max-width: 92%;
    }

    .content {
      margin-right: 0;
      width: 100%;

      @media screen and (min-width: 1335px) {
        margin-right: 1rem;
        width: auto;
      }

      @media screen and (min-width: 1400px) {
        margin-right: 2rem;
      }

      @media screen and (min-width: 1592px) {
        margin-right: 10rem;
      }

      @media screen and (min-width: 1760px) {
        margin-right: 0;
      }

      @media screen and (min-width: 2000px) {
        max-width: 59%;
      }
    }

    img {
      width: 150px;
      border-radius: 100%;
      border: 5px solid #3e9e91;
      z-index: -1;

      @media screen and (min-width: 812px) {
        width: 100px;
      }

      @media screen and (min-width: 1024px) {
        width: 225px;
      }

      @media screen and (min-width: 1336px) {
        position: absolute;
        width: 100%;
        top: 5px;
        -webkit-transform-style: preserve-3d;
        border: none;
        border-radius: unset;
        display: block;
        font-size: 8rem;
        max-width: 600px;
        left: 3rem;
      }

      @media screen and (min-width: 1400px) {
        left: 2rem;
      }

      @media screen and (min-width: 1592px) {
        left: 9rem;
      }

      @media screen and (min-width: 1760px) {
        left: 14rem;
        max-width: 660px;
      }

      @media screen and (min-width: 2000px) {
        max-width: 36%;
      }
    }
  }
</style>
