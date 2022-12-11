import { createStore } from "vuex";
import { links } from "./modules/links";
import { edu } from "./modules/edu";
import { creators } from "./modules/creators";
import { videos } from "./modules/videos";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    links,
    edu,
    creators,
    videos,
  },
});
