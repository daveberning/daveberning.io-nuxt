<template>
  <div>
    <nuxt />
    <theme-picker />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ThemePicker from '~/components/ThemePicker.vue'
  import CodeInspection from '~/components/CodeInspection.vue'

  export default Vue.extend({
    transition: 'slide' as string,
    components: {
      ThemePicker,
      CodeInspection
    },
    data() {
      return {
        contextMenuActive: false as boolean,
      }
    },
    methods: {
      openCodeInspectionNotice(e: Event): void {
        if (!this.$store.state.inspectionNotice) {
          e.preventDefault()
          this.contextMenuActive = true
        }
      }
    },
    mounted(): void {
      this.$store.dispatch('dismissCodeInspectionNotice', false)
    },
  })
</script>
