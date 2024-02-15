<template>
  <headerPage></headerPage>
  <div class="home container">
    <cars-page :carsdetailes="myCars"></cars-page>
    <sliderSection :carsdetailes="myCars"></sliderSection>
  </div>
</template>

<script>
import CarsPage from "../components/carsPage.vue";
import carsData from "../data/carsDetails.json";
import headerPage from "../components/header.vue";
import sliderSection from "../components/slider.vue";

export default {
  name: "HomeView",
  data() {
    return {
      myCars: carsData,
    };
  },
  components: { CarsPage, headerPage, sliderSection },
};
</script>
