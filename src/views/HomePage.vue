<template>
  <headerPage></headerPage>
  <cars-page :carsdetailes="myCars"></cars-page>
  <bestSellerCars :carsdetailes="myCars"></bestSellerCars>
  <panner-section></panner-section>
  <featuresSection></featuresSection>
</template>

<script>
import CarsPage from "../components/carsPage.vue";
import carsData from "../data/carsDetails.json";
import headerPage from "../components/header.vue";
import bestSellerCars from "../components/bestSellerCars.vue";
import pannerSection from "../components/pannerSection.vue";
import featuresSection from "../components/features.vue";

export default {
  name: "HomeView",
  data() {
    return {
      myCars: carsData,
    };
  },
  components: {
    CarsPage,
    headerPage,
    bestSellerCars,
    pannerSection,
    featuresSection,
  },
};
</script>
