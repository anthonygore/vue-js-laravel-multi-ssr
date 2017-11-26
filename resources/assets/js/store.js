import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';

export function createStore () {
  return new Vuex.Store({
    state: {
      name: undefined
    },
    actions: {
      setName ({ commit }, page) {
        return axios.get(`/api/name/${page}`).then(({ data }) => commit('setName', data));
      }
    },
    mutations: {
      setName (state, payload) {
        state.name = payload;
      }
    }
  })
}
