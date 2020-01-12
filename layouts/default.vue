<template>
  <div @contextmenu="openCodeInspectionNotice($event)">
    <nuxt />
    <theme-picker />
    <code-inspection v-if="contextMenuActive && $nuxt.$route.path !== '/uses'" @closeCodeInspection="contextMenuActive
     = false" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ThemePicker from '~/components/ThemePicker.vue'
  import CodeInspection from '~/components/CodeInspection.vue'

  export default Vue.extend({
    transition: 'slide',
    components: {
      ThemePicker,
      CodeInspection
    },
    data() {
      return {
        contextMenuActive: false,
      }
    },
    methods: {
      openCodeInspectionNotice(e: Event) {
        if (!this.$store.state.inspectionNotice) {
          e.preventDefault()
          this.contextMenuActive = true
        }
      }
    },
    mounted() {
      this.$store.dispatch('dismissCodeInspectionNotice', false)
    }
  })
</script>
