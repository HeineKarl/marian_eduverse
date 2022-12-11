export const videos = {
  namespaced: true,
  state: {
    dialog: false,
    vidID: null,
    videos: [
      {
        title: "Color Design for Colorblind",
        description:
          "This is video is all about colors and its appropriateness in design. It is important to note that colors have different meanings for everyone and thinking about not seeing it correctly might change your perspective towards color picking. With this, the video will showcase awareness for colors that is at the same time appropriate and maintaining your design better.",
        link: "https://drive.google.com/file/d/1_ubgEdoyopREBV-ZRIUpS_wJBl18r1VK/preview",
        creators: ["Karl Vincent Del Rosario", "Maurice Bernardino"],
      },
      {
        title: "Title2",
        description: "Desc2",
        link: "#",
        creators: ["Adrian Cedo", "Kenchi"],
      },
      {
        title: "Title3",
        description: "Desc3",
        link: "#",
        creators: ["Karl Vincent Del Rosario", "Maurice Bernardino"],
      },
    ],
  },
  mutations: {
    toggleDialog(state) {
      state.dialog = !state.dialog;
    },
    getVidID(state, id) {
      state.vidID = id;
    },
  },
};
