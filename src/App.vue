<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
// Components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  data: () => ({
    //
  }),
};
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
  outline: 0;
  border: 2px solid;
}
/* body {
  scrollbar-width: 0;
}
*/
/* ::-webkit-scrollbar {
  display: none;
} */
</style>
