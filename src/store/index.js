import { createStore } from 'vuex';
import axios from 'axios';


const store = createStore({
  state: {
    vacinaData: [],
    formData: {
      nome: '',
      publico_alvo: '',
    },
    vaccineId: null,
  },
  mutations: {
    setVacinaData(state, data) {
      state.vacinaData = data;
    },
    setFormData(state, formData) {
      state.formData = formData;
    },
    setVaccineId(state, id) {
      state.vaccineId = id;
    },
  },
  actions: {
  async fetchVacinaData({ commit }) {
    try {
      const response = await axios.get('http://localhost:8000/vacinas/');
      commit('setVacinaData', response.data);
    } catch (error) {
      console.error(error);
    }
  },
},
  getters: {
  },
});

export default store;
