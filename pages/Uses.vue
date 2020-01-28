<template>
  <modal-content>
    <h1>Uses</h1>
    <div class="grid">
      <div class="model-content">
        <p>It's getting increasingly common for developers to have a list of hardware and software that they use on a daily basis. This isn't comprehensive by any means, but it's what I've been using recently.</p>
        <h2>Hardware</h2>
        <h3>Computer</h3>
        <p>I currently use two Macbook computers; one for personal development and a company issued one for Oodle development. My personal computer is a 2014 MacBook Pro (15 inch) that I bought in my last year of college after I gifted my older MacBook Pro to my parents. My wife mostly uses this one now, I use it from time to time.</p>
        <p>My company issued computer is a 2016 MacBook Pro (15 inch, Space Grey) with a 2.7 GHz Quad-Core Intel Core i7 processor, 16GB of RAM, and Radeon Pro 455 2 GB Intel graphics card. I use this computer the most during the day-to-day activities.</p>
        <h3>Monitors and Dock</h3>
        <p>I dock my 2016 MacBook Pro with the <a
          href="https://www.amazon.com/LandingZone-Docking-Station-15-inch-Released/dp/B074DSHH2R/ref=sr_1_1?crid=2MXJ6YZ5L47I&keywords=landing+zone+dock+macbook+pro+15+with+touch+bar&qid=1578861061&sprefix=macbook+pro+dock+landing+zon%2Caps%2C143&sr=8-1">LandingZone Docking Station</a>. It's a great dock that is sleek and dependable. Connected to the dock are two white <a
            href="https://www.amazon.com/NB24CW-24-Inch-Speakers-Bezel-Less-FreeSync/dp/B07FSWD1MY/ref=sr_1_2_sspa?crid=2DDSJM7HDV189&keywords=viotek+monitor&qid=1578861141&sprefix=viotek%2Caps%2C157&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWktVRlc2U1I1SVdZJmVuY3J5cHRlZElkPUExMDM4ODM3MTlMN01PWjRPVUlGQSZlbmNyeXB0ZWRBZElkPUEwMzczNTcwMUkxN1RINE4zME1SVyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">Viotek curved monitors</a> that I bought when getting my office together. It's not a bad monitor for coding or graphic design and is fairly inexpensive. However, if you are looking for a monitor that you can also game on, I wouldn't recommend this.</p>

        <h3>Keyboard and Mouse</h3>
        <p>I use the Apple made Keyboard (no number pad) and a Magic Mouse 2. I like the gestures and features of the Magic Mouse 2. Again, if you are looking for something that is also good for gaming, I would steer clear of Apple's mouse and keyboard.</p>

        <h3>Home Office</h3>
        <p>In general, my home office is decorated with various Nintendo-related items. Including a wall of mounted amiibos, an 8-bit Luigi poster, various Legend of Zelda posters, patent blueprints of various Nintendo controllers and more. Next to me, I have a mounted glass whiteboard, my AAS and BFA degrees, an FC Cincinnati jersey towel, and two conference passes for Ohio DevFest and An Event Apart: Seattle.</p>

        <h2>Software</h2>
        <p>I have been using the following consistently over the past two years:</p>
        <ul>
          <li v-for="(soft, i) in uses.software" :key="i">{{ soft }}</li>
        </ul>

        <h2>On Repeat</h2>
        <ul>
          <li v-for="(artist, i) in uses.onRepeat" :key="i">{{ artist }}</li>
        </ul>

        <h2>Podcasts</h2>
        <ul>
          <li v-for="(podcast, i) in uses.podcasts" :key="i">{{ podcast }}</li>
        </ul>
      </div>
    </div>
  </modal-content>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { uses } from '~/data/uses'
  import { getThemeColors } from '~/data/theme-colors'

  export default Vue.extend({
    name: 'Uses' as string,
    data() {
      return {
        uses
      }
    },
    computed: {
      themeDarkTextColor(): string {
        return `color: ${getThemeColors(this.$store.state.theme).textColorDark}`
      }
    },
    methods: {
      getThemeColors
    }
  })
</script>

<style lang="scss" scoped>
  h2 {
    font-weight: bold;
    font-size: 3rem;
    margin: 3rem 0 1rem 0;
  }

  h3 {
    font-weight: bold;
    font-size: 2rem;
    margin: 3rem 0 1rem 0;
  }

  ul {
    list-style-type: disc;
    padding-left: 2rem;

    li {
      margin-bottom: 1rem;
    }
  }
</style>
