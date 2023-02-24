<template>
  <modal-content :is-inverted="true">
    <work-content title="Narrative Editor">
      <template slot="default">
        <img class="img-responsive" src="~/assets/images/narrative-editor-screen.png" alt="A screen grab of the Narrative Editor" :style="$store.getters.darkBorder">
        <p>Walker & Dunlop (NYSE: WD) is one of the largest providers of capital to the commercial real estate industry in the United States, enabling real estate owners and operators to bring their visions of communities — where people live, work, shop and play — to life.</p>
        <p>With over 1,400 employees across every major U.S. market, Walker & Dunlop has consistently been named one of Fortune’s Great Places to Work® and is committed to making the commercial real estate industry more inclusive and diverse while creating meaningful social, environmental, and economic change in our communities.</p>
      </template>
      <template slot="side-content">
        <h3>Built With</h3>
        <div class="built-with is-grid">
          <p class="is-col-12" :style="$store.getters.darkBkgColor">Vue.js</p>
          <p class="is-col-12" :style="$store.getters.darkBkgColor">Vuex</p>
          <p class="is-col-5 is-centered" :style="$store.getters.darkBkgColor">TypeScript</p>
          <p class="is-col-7" :style="$store.getters.darkBkgColor">SCSS</p>
        </div>
        <h3>My Role</h3>
        <p>For this project, I was tasked to develop the front-end of a "Google Docs-like" editor for underwriters to create and edit loan narratives. The editor needed to be able to handle a large amount of text, and be able to handle multiple users editing the same document at the same time. With the Narrative Editor, users can add content blocks to their document as well as custom graphics generated from the active deal they're working in.</p>
        <p>In addition to editing and creating documents, users can view an "audit trail" which is a record of every change made to the document. Much like a version control system, users can select a specific point in time and view the document at that moment.</p>
        <p>I was given a few days to take an existing proof-of-concept, and plan out it's architecture. Planning consisted of how we store data in Vuex to component structure and more. Because of this, we delivered an MVP two-weeks early and later delivered a polished product two months ahead of schedule.</p>
        <p>The core package we developed is planned to be released to the public as an open-source project.</p>
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
        title: 'Foxen | Dave Berning | Cincinnati, OH'
      }
    }
  })
</script>

<style scoped>
  img {
    max-height: 700px;
    width: auto !important;
    border-width: 5px !important;
    border-radius: .5rem;
  }

  .is-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
