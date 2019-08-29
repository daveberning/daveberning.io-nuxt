import {Vue} from 'vue/types/vue'
import {VueRouter} from 'vue-router/types/router'

export interface VueInstance extends Vue {
  $router: VueRouter;
}

export * from './form'
export * from './links'
export * from './pages'
