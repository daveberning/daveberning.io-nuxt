<template>
  <div class="component">
    <div class="wrapper">
      <div class="content">
        <picture>
          <source
            ref="image"
            :srcset="`images/portraits/dave-${$store.state.theme}.png`"
            media="(min-width: 1335px)">
          <img alt="PP" src="images/dave-mobile.jpg">
        </picture>
        <div>
          <theme-text tag="h1">{{ about.firstName }} {{ about.lastName }}</theme-text>
          <theme-text tag="h2">{{ about.role }} from {{ about.city }}, {{ about.state }}</theme-text>
          <theme-text class="left" tag="p">
            Photography by
            <a :style="`${$store.getters.darkTextColor};`" href="http://jmanstudios.com" target="_blank">Jason Bayer</a>
          </theme-text>
          <theme-text class="right" tag="p">
            Copyright &copy {{ new Date().getFullYear() }}. All Rights Reserved.
          </theme-text>
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
  },
  head() {
    return {
      title: 'Dave Berning | Software Engineer | Cincinnati, OH',
      description:
        `Dave Berning is a software engineer from Cincinnati, Ohio. Since 2013, Dave has worked with several national and local companies through a range of projects. Dave is also a mentor and author, writing for Digital Ocean and Bleeding Edge Press.`
    }
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

  @media screen and (min-width: 812px) {
    margin: 0;
  }

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
  font-size: .75rem;
  position: absolute;
  bottom: 1rem;
  color: #cccccc;
}

p.left {
  left: 1rem;
  display: none;

  @media screen and (min-width: 1400px) {
    display: block;
  }
}

p.right {
  right: 0;
  left: 0;

  @media screen and (min-width: 1400px) {
    right: 1rem;
    left: unset;
  }
}

ul li {
  display: inline-block;
  margin: 2.5rem 1rem 0 0;

  &:last-child {
    margin-right: 0;
  }

  a {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 812px) {
    margin: 1rem 1rem 0 0;
  }
  @media screen and (min-width: 967px) {
    margin: 2.5rem 1rem 0 0;
  }
}

.wrapper {
  position: relative;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 2000px;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (min-width: 1760px) {
    padding: 0 16rem;
  }

  @media screen and (min-width: 2000px) {
    max-width: 92%;
  }

  .content {
    width: 100%;
    margin-right: 0;

    @media screen and (min-width: 1335px) {
      width: auto;
      margin-right: 1rem;
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
    z-index: -1;
    width: 150px;
    border: 5px solid #3e9e91;
    border-radius: 100%;

    @media screen and (min-width: 812px) {
      width: 100px;
    }

    @media screen and (min-width: 1024px) {
      width: 225px;
    }

    @media screen and (min-width: 1336px) {
      font-size: 8rem;
      position: absolute;
      top: 5px;
      left: 3rem;
      display: block;
      width: 100%;
      max-width: 600px;
      border: none;
      border-radius: unset;
      -webkit-transform-style: preserve-3d;
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
