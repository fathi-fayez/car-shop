<template>
  <headerPage></headerPage>
  <div class="home container">
    <div class="row">
      <div class="col">
        <cars-page :carsdetailes="myCars"></cars-page>
      </div>
    </div>
  </div>
</template>

<script>
import CarsPage from "../components/carsPage.vue";
import carsData from "../data/carsDetails.json";
import headerPage from "../components/header.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      myCars: carsData,
    };
  },
  components: { CarsPage, headerPage },
};
</script>
