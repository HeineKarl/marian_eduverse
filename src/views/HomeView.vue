<template>
  <div class="mt-15">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" sm="6">
          <v-img mt-5 src="@/assets/img/home.png"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="mt-5">
            <h1>A Safer World</h1>
            <p class="mt-4">
              We are in between us to excel in many explorations and experience.
              See the light upon us to squeeze the opportunity as you begin a
              new journey.
            </p>
            <v-btn class="mt-8"> Learn More</v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-15">
        <v-col>
          <span style="font-size: 1.5rem">Importance of Education</span>
          <v-card
            elevation="0"
            class="pa-2 pt-1 mt-3"
            v-for="edu in state.edu.edu"
            :key="edu.header"
          >
            <v-card-title class="ma-0 pa-0">{{ edu.header }}</v-card-title>
            <v-card-content>{{ edu.content }}</v-card-content>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-container class="mt-10">
          <span style="font-size: 1.5rem">Virtual Tutorials</span>
        </v-container>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="edu in state.edu.edu"
          :key="edu.header"
        >
          <v-card class="pa-3 mt-3">
            <v-img
              src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            ></v-img>

            <div class="ma-0 pa-0 mt-3 d-flex align-center">
              <v-card-title class="ma-0 pa-0" style="font-size: 1rem">{{
                edu.header
              }}</v-card-title>
              <v-spacer></v-spacer>
              <v-icon>mdi-information</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

// Components

export default defineComponent({
  name: "HomeView",

  components: {},
  setup() {
    const { state } = useStore();

    return { state };
  },
});
</script>

<style>
/* .home {
  overflow: hidden;
} */
/*
.sample {
  background: lightgray;
} */

.onscroll {
  overflow-y: scroll;
}
</style>
