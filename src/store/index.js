import { createStore } from "vuex";
import { links } from "./modules/links";
import { edu } from "./modules/edu";
import { creators } from "./modules/creators";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    links,
    edu,
    creators,
  },
});
