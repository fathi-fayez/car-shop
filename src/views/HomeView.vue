<template>
  <headerPage></headerPage>
  <div class="home container">
    <cars-page :carsdetailes="myCars"></cars-page>
    <bestSellerCars :carsdetailes="myCars"></bestSellerCars>
  </div>
  <panner-section></panner-section>
</template>

<script>
import CarsPage from "../components/carsPage.vue";
import carsData from "../data/carsDetails.json";
import headerPage from "../components/header.vue";
import bestSellerCars from "../components/bestSellerCars.vue";
import pannerSection from "../components/pannerSection.vue";

export default {
  name: "HomeView",
  data() {
    return {
      myCars: carsData,
    };
  },
  components: { CarsPage, headerPage, bestSellerCars, pannerSection },
};
</script>
