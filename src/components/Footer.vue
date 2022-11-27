<template>
  <v-sheet class="pa-4 mt-15" style="background-color: #d9d9d9">
    <p>
      By three methods we may learn wisdom: First, by reflection, which is
      noblest; Second, by imitation, which is easiest; and third by experience,
      which is the bitterest.
    </p>
    <span>Confucius</span>
  </v-sheet>
  <v-footer class="footer">
    <span>Marian Eduverse | 2022</span>
  </v-footer>
</template>

<script>
import { defineComponent } from "vue";

import { useStore } from "vuex";

export default defineComponent({
  name: "Footer",

  components: {},
  setup() {
    const { state } = useStore();

    return { state };
  },
});
</script>

<style lang="scss" >
.footer {
  background-color: #393939;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}
</style>