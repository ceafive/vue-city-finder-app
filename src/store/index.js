import Vue from "vue";
import Vuex from "vuex";

// const zipcodes = (async () => {
//   try {
//     const module = await import("../data/zipcodes");
//     return module;
//   } catch (e) {
//     console.log(e.message);
//   }
// })();

Vue.use(Vuex);

const state = () => {
  return {
    ipData: "",
    cityData: "",
  };
};

const mutations = {
  IP_INFO(state, ipData) {
    state.ipData = ipData;
  },
  FETCH_CITY(state, cityData) {
    state.cityData = cityData;
  },
};

const actions = {
  ipInfo: async ({ commit }, apiKey) => {
    const res = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
    );
    const ipData = await res.json();
    commit("IP_INFO", ipData);
  },
  fetchCity: async ({ commit }, zipCode) => {
    // commit("FETCH_CITY", cityData);
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
    //throw errow when zipcode is not valid eg. not a US zipcode or longer than 5 digits
    if (!isValidZip) return alert("Enter Valid US Zip Code");
    try {
      const res = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      //throw error for when zipcode is not found
      if (res.status === 404) {
        alert(`Zip Code ${zipCode} Not Valid!`);
        throw new Error(`Zip Code ${zipCode} Not Valid!`);
      }
      const cityData = await res.json();
      commit("FETCH_CITY", cityData);
    } catch (e) {
      console.log(e.message);
    }
  },
};

const getters = {
  ipData: (state) => {
    return state.ipData;
  },
  cityData: (state) => {
    return state.cityData;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
