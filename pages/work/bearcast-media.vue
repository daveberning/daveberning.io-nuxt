<template>
  <modal-content :is-inverted="true">
    <work-content title="Bearcast Media" url="http://www.bearcastmedia.com/">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/bearcast-responsive.png"
             alt="The Bearcast Media website on various devices">
        <p>Bearcast Media is a media organization aimed at producing quality audio, visual, and digital content. It's
          an entirely student-run organization and the official radio station of the University of Cincinnati. Some of
          the work they do includes: broadcast video, broadcast radio, graphic design, web design, and video
          productions. Students from all backgrounds and majors are encouraged to participate.</p>

        <p>During a rebranding campaign, I was asked to join the team by then General Manager, Colin Lutz, to develop
          the new Bearcast Media website. I worked closely with a designer Brett Valls to bring his branding
          and vision a reality on the web.</p>

        <p>The website was built with WordPress, so new students moving forward can create and maintain content. The
          site is still in production today and is managed entirely by student volunteers. This project was
          completed in the Winter of 2014.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-7" :style="$store.getters.darkBkgColor">HTML</p>
          <p class="is-col-5 is-row-2 is-centered" :style="$store.getters.darkBkgColor">PHP</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
          <p class="is-col-12 large" :style="$store.getters.darkBkgColor">Wordpress</p>
        </div>
        <h3>My Role</h3>
        <p>I was the <strong>New Media Director</strong> and <strong>developer</strong> for this project. In this role,
          making sure that the
          development of the website continued smoothly and was completed on time was a top priority. As a Bearcast
          Media director, I would manage a small team of developers and designers to ensure that the website
          correctly reflected Brett's branding and vision.</p>

        <p>In the Spring of 2015, I was awarded Bearcast Media's Director of the Year as a reflection of my hard work
          put into this project.</p>
      </template>
      <template slot="testimonial">
        <theme-text class="is-bold" tag="h2">Director of the Year</theme-text>
        <p>In the Spring of 2015, I was awarded Bearcast Media's Director of the Year as a reflection of my hard work
          put into this project. This is the highest honor one can receive within the organization.</p>
        <img src="~/assets/images/award.svg">
      </template>
    </work-content>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkContent from '~/components/WorkContent.vue'

export default Vue.extend({
  name: 'Work' as string,
  components: {
    WorkContent
  },
  head() {
    return {
      title: 'Bearcast Media | Dave Berning | Cincinnati, OH',
      description:
        `Bearcast Media is a media organization aimed at producing quality audio, visual, and digital content. It's an entirely student-run organization and the official radio station of the University of Cincinnati. Dave worked closely with student groups and designers to deliver the best website the organization has had to improve their reach.`
    }
  }
})
</script>

<style>
img:last-child {
  width: 12rem;
}

.is-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
