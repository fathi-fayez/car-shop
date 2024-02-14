<template>
  <navBar></navBar>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";

export default {
  components: { navBar },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
