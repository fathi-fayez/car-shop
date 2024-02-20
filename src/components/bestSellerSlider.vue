<template>
  <div class="slider-container">
    <h1 class="text-center">Best Seller Cars</h1>
    <VueAIcarousel :Property="{ ID: 'Unique_id', Dlay: 1000 }">
      <div v-for="(car, index) in bestSellerCars" :key="index" class="each-car">
        <img :src="car.mainImage" alt="" />
      </div>
    </VueAIcarousel>
  </div>
</template>
<script>
import VueAIcarousel from "vue-ai-carousel";
export default {
  name: "bestSellerSlider",
  components: {
    VueAIcarousel,
  },
  props: ["carsdetailes"],
  computed: {
    bestSellerCars() {
      let bestSellerCars = [];
      for (let index = 0; index < 6; index++) {
        bestSellerCars.push(this.carsdetailes[index]);
      }
      return bestSellerCars;
    },
  },
};
</script>
<style lang="scss" scoped>
.slider-container {
  padding: 150px 100px;
}
h1 {
  border-bottom: 3px solid black;
  width: fit-content;
  margin: 30px auto;
  font-weight: bold;
}
.each-car {
  height: 400px;
  width: 380px;
  img {
    max-width: 100%;
  }
}
@media (max-width: 767px) {
  .each-car {
    height: 200px;
  }
  h1 {
    font-size: 20px;
  }
}
</style>
