import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    errorName: true,
    errorEmail: true,
    errorPhone: true,
    checkbox: false,
  },
  getters: {
    errorName(state) {
      return state.errorName
    },
    errorEmail(state) {
      return state.errorEmail
    },
    errorPhone(state) {
      return state.errorPhone
    },
    checkbox(state) {
      return state.checkbox
    },
  },
  mutations: {
    SET_ERROR_NAME(state, payload) {
      state.errorName = payload
    },
    SET_ERROR_EMAIL(state, payload) {
      state.errorEmail = payload
    },
    SET_ERROR_PHONE(state, payload) {
      state.errorPhone = payload
    },
    SET_CHECKBOX(state, payload) {
      state.checkbox = payload
    },
  },
  actions: {},
});

export default store;
