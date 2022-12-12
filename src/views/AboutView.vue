<template>
  <div class="mt-15">
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12" sm="6">
          <v-img mt-5 src="@/assets/img/about.png"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="mt-15">
            <h1 class="mt-15">How it started</h1>
            <p class="mt-2">
              The website aims to make the students and anyone in the field of
              education know and understand the importance of education in our
              lives.
            </p>
            <p class="mt-3">
              The website contains visual presentation/ videos that can
              contribute to the knowledge of the people. Our website starts from
              the simple projects of the BSIT students and aims to be able to
              share informations especially our knowledge in our field.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-container class="mt-10">
          <span style="font-size: 1.5rem">Creators</span>
        </v-container>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="creator in state.creators.creators"
          :key="creator.name"
        >
          <v-card
            height="300"
            class="
              pa-3
              mt-3
              d-flex
              flex-column
              align-center
              justify-space-around
            "
          >
            <v-avatar size="92">
              <v-img :src="creator.img"></v-img>
            </v-avatar>

            <div
              class="
                ma-0
                pa-0
                mt-3
                d-flex
                flex-column
                align-center
                justify-center
              "
            >
              <v-card-title class="ma-0 pa-0" style="font-size: 1.25rem">{{
                creator.name
              }}</v-card-title>
              <span class="text-center">{{ creator.quote }}</span>
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
  name: "AboutView",

  components: {},
  setup() {
    const { state } = useStore();

    return { state };
  },
});
</script>