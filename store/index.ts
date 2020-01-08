import Vuex, {ActionTree, MutationTree} from 'vuex'
import {State} from '@/types/store'

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

const store = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default store
