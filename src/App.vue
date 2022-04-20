<template>
  <div id="app">
    <router-view />
    <!-- Overlay -->
    <v-overlay v-if="getLoading" />
  </div>
</template>

<script>
import VOverlay from '@/components/UI/VOverlay.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
    VOverlay,
  },

  computed: {
    ...mapGetters(['getLoading']),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
