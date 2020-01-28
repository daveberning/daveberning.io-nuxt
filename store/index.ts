import Vuex, { ActionTree, MutationTree, GetterTree } from 'vuex'
import { State } from '@/types/store'
import { getThemeColors } from '~/data/theme-colors'

const state: State = {
  theme: 'default' as string,
  inspectionNotice: true as boolean | undefined
}

const mutations: MutationTree<State> = {
  CHANGE_THEME(state: State, payload: string) {
    state.theme = payload
  },
  DISMISS_INSPECTION_NOTICE(state: State, payload: boolean) {
    state.inspectionNotice = payload
  }
}

const actions: ActionTree<State, State> = {
  changeTheme({commit}, payload: string) {
    commit('CHANGE_THEME', payload)
  },
  dismissCodeInspectionNotice({commit}, payload: boolean) {
    commit('DISMISS_INSPECTION_NOTICE', payload)
  }
}

const getters: GetterTree<State, State> = {
  textColor: (state: State): string => `color: ${getThemeColors(state.theme).background}`,
  darkTextColor: (state: State): string => `color: ${getThemeColors(state.theme).textColorDark}`,
  darkBorder: (state: State): string => `border: 2px solid ${getThemeColors(state.theme).textColorDark}`,
  borderColor: (state: State) => `border-color: ${getThemeColors(state.theme).background}`,
  bkgColor: (state: State) => `background: ${getThemeColors(state.theme).background}`,
  darkBkgColor: (state: State) => `background: ${getThemeColors(state.theme).backgroundDarker}`,
  lightBkgColor: (state: State) => `background: ${getThemeColors(state.theme).backgroundLighter}`
}

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
}

export default store
