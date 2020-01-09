import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  ipData: "",
  cityData: ""
};

const mutations = {
  async IP_INFO(state, apiKey) {
    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
    );
    state.ipData = await res.json();
  },
  async FETCH_CITY(state, zipCode) {
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
    if (!isValidZip) {
      return alert("Enter Valid US Zip Code");
    }
    const res = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
    if (res.status === 404) {
      alert(`Zip Code ${zipCode} Not Valid!`);
      return;
    }
    state.cityData = await res.json();
  }
};

const actions = {
  ipInfo: ({ commit }, apiKey) => {
    commit("IP_INFO", apiKey);
  },
  fetchCity: ({ commit }, zipCode) => {
    commit("FETCH_CITY", zipCode);
  }
};

const getters = {
  ipData: state => {
    return state.ipData;
  },
  cityData: state => {
    return state.cityData;
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;


