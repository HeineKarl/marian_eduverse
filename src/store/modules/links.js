export const links = {
  state: {
    drawer: false,
    links: [
      { icon: "mdi-home", route: "/", title: "Home" },
      { icon: "mdi-information", route: "/about", title: "About" },
    ],
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
  },
};
