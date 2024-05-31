import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import newsapi from './newsapi.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addItem(state, item) {
      state.todoList.push(item);
    },
    deleteItem(state, index) {
      state.todoList.splice(index, 1);
    },
    updateItem(state, { index, item }) {
      Vue.set(state.todoList, index, item);
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    deleteItem({ commit }, index) {
      commit('deleteItem', index);
    },
    updateItem({ commit }, payload) {
      commit('updateItem', payload);
    },
  },
  getters: {
    todoList: state => state.todoList,
    isHebat: state => state.todoList.length >= 4 ? 'Hebat!' : '',
  },
  modules:{
    newsapi,
  },
  plugins: [createPersistedState()], 
});
