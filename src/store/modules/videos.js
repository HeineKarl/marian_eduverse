export const videos = {
  namespaced: true,
  state: {
    dialog: false,
    vidID: null,
    videos: [
      {
        title: "Color Design for Colorblind",
        description:
          "This video is all about colors and its appropriateness in design. It is important to note that colors have different meanings for everyone and thinking about not seeing it correctly might change your perspective towards color picking. With this, the video will showcase awareness for colors that is at the same time appropriate and maintaining your design better.",
        link: "https://drive.google.com/file/d/1_ubgEdoyopREBV-ZRIUpS_wJBl18r1VK/preview",
        creators: [
          "Karl Vincent Del Rosario",
          "Maurice Bernardino",
          "Patricia Lenon",
          "Francescine Ian Dela Rosa",
          "Edward Tamayo",
          "Marycel Pacaldo",
          "Juan Carlo Villena",
          "Mark Morante",
        ],
      },
      {
        title: "Job Interview",
        description:
          "This video would talk about on what would you expect before, during and after an interview. It wyoudl also showcase tips that might help increase the changes of you being hired by the interviewee. And what behaviors such as aneurysm that one should avoid and necessary documents to bring before the meeting.",
        link: "https://drive.google.com/file/d/1pGqp4TvnlCxGWpDCustyDFGZ6mST55T4/preview",
        creators: [
          "Adrian Cedo",
          "Kenchi San Andres",
          "Rovic Saguiped",
          "Christopher Corpuz",
          "Johannes Bermundo",
          "Raniel Ronidel",
          "Rey Serrano",
        ],
      },
      {
        title: "Professionalism",
        description:
          "Professionalism is an everyone's responsibility to engage with other professionals. With this, the video will teach you the basic approach towards professionalism.",
        link: "https://drive.google.com/file/d/18CORyKLqZ_fvT20OBL-Ky6ZrZWFLdOKy/preview",
        creators: [
          "Prince Roño",
          "Marc Buladas",
          "Jayvee Navarro",
          "Alberto Ricky",
          "Gabriel Arique",
          "Joshua Acid",
        ],
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
