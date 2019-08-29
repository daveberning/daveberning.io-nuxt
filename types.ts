import {Vue} from 'vue/types/vue'
import {VueRouter} from 'vue-router/types/router'

export interface VueInstance extends Vue {
  $router: VueRouter;
}

export interface NavigationItem {
  text: string;
  to: string;
  keyboard?: string;
}

export interface About {
  firstName: string;
  lastName: string;
  role: string;
  city: string;
  state: string;
  bio: string;
  twitterHandle: string;
  companyLogo: string;
  almaMaterLogo: string;
}

export interface Work {
  name: string;
  icon: string;
  to: string;
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  name?: string;
}

export interface SocialMedia {
  icon: string;
  href: string;
}

export interface Writing {
  title: string;
  date: string;
  featured?: boolean;
  type: string;
  to: string;
}
