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
            <v-btn class="mt-8" @click="$router.push('/about')">
              Learn More</v-btn
            >
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
          v-for="(video, index) in state.videos.videos"
          :key="index"
        >
          <v-card class="pa-3 mt-3">
            <div class="video-container">
              <iframe
                :src="video.link"
                allow="autoplay"
                allowfullscreen
              ></iframe>
            </div>

            <div class="ma-0 pa-0 mt-3 d-flex align-center">
              <v-card-title class="ma-0 pa-0" style="font-size: 1rem">{{
                video.title
              }}</v-card-title>
              <v-spacer></v-spacer>
              <v-btn @click="openDialog(index)" icon elevation="0">
                <v-icon>mdi-information</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <div class="text-center">
          <v-dialog v-model="state.videos.dialog" width="800">
            <v-card>
              <v-card-title class="text-h5 ml-2 grey">
                {{ state.videos.videos[state.videos.vidID].title }}
              </v-card-title>

              <v-card-text>
                {{ state.videos.videos[state.videos.vidID].description }}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="openDialog(-1)">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import VideoBackground from "vue-responsive-video-background-player";

// Components

export default defineComponent({
  name: "HomeView",

  components: { VideoBackground },
  setup() {
    const { state, commit } = useStore();

    let vidID;
    function openDialog(index) {
      // console.log(index);

      if (index === -1) {
        commit("videos/toggleDialog");
        return;
      }
      // console.log();
      commit("videos/toggleDialog");

      vidID = index;

      commit("videos/getVidID", vidID);
      // console.log(vidID);
    }

    console.log(state.videos.dialog);

    return { state, openDialog };
  },
});
</script>

<style>
.video-container {
  width: 100%;
  height: 14rem;
}
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
