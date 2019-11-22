import Vuex, {ActionTree, MutationTree} from 'vuex'
import {State} from '@/types/store'

const state: State = {
  theme: 'default' as string
}

const mutations: MutationTree<State> = {
  CHANGE_THEME(state: State, payload: string) {
    state.theme = payload
  }
}

const actions: ActionTree<State, State> = {
  changeTheme({commit}, payload: string) {
    commit('CHANGE_THEME', payload)
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
