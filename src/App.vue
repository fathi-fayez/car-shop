<template>
  <navBar></navBar>
  <div id="app">
    <router-view />
    <footerComponent></footerComponent>
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import footerComponent from "./components/footer.vue";

export default {
  components: { navBar, footerComponent },
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
