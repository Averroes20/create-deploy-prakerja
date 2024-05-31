import axios from 'axios';

const state = {
  data: [],
  loading: false,
  error: null,
};

const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchData({ commit }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b08a69245ded4942bd122ee2d4fe63a3');
      commit('SET_DATA', response.data.articles);
			console.log(response);
    } catch (error) {
      commit('SET_ERROR', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
};

const getters = {
  data: (state) => state.data,
  isLoading: (state) => state.loading,
  error: (state) => state.error,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
