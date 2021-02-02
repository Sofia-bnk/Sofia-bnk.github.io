import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { pictures: null, map: new Map(), cart: [], login: true },
  mutations: {
    setPictures(state, pictures) {
      state.pictures = pictures;

      pictures.forEach((pic) => {
        state.map.set(pic.id, pic);
      });
    },
    setCart(state, product) {
      state.cart.push(product);
    },
  },
  actions: {
    getPicz(context) {
      axios
        .get("https://picsum.photos/v2/list", {
          crossdomain: true,
        })
        .then((response) => {
          context.commit("setPictures", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addToCart(context, product) {
      context.commit("setCart", product);
    },
  },
});
