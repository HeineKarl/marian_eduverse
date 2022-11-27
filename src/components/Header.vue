<template>
  <v-app-bar color="teal lighten-3" mt-1 fixed temporary>
    <v-app-bar-nav-icon @click.stop="toggleDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title>Marian Eduverse</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer
    v-model="state.links.drawer"
    class="absolute right temporary"
  >
    <v-list nav dense>
      <v-list-item-group v-for="link in state.links.links" :key="link">
        <v-list-item class="mt-1" link :to="link.route">
          <div class="d-flex align-center">
            <v-icon class="mr-2">{{ link.icon }}</v-icon>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>



<script>
import { defineComponent, watch, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// Components

export default defineComponent({
  name: "Header",
  components: {},

  setup() {
    const { state, commit } = useStore();
    const route = useRoute();
    // const group = ref(null);

    function toggleDrawer() {
      console.log(state);
      commit("toggleDrawer");
    }

    watch(route, () => {
      console.log("WATCH");
      commit("toggleDrawer");
    });

    return {
      state,
      toggleDrawer,
    };
  },
});
</script>

<style>
</style>



<style lang="scss" scoped>
</style>