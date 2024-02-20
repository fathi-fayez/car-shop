<template>
  <headerPage></headerPage>
  <cars-page :carsdetailes="myCars"></cars-page>
  <bestSellerSlider :carsdetailes="myCars"></bestSellerSlider>
  <panner-section></panner-section>
  <featuresSection></featuresSection>
</template>

<script>
import CarsPage from "../components/carsPage.vue";
import carsData from "../data/carsDetails.json";
import headerPage from "../components/header.vue";
import bestSellerSlider from "../components/bestSellerSlider.vue";
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
    bestSellerSlider,
    pannerSection,
    featuresSection,
  },
};
</script>
