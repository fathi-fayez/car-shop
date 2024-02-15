<template>
  <div class="main">
    <h1 class="text-center">Best Seller Cars</h1>
    <div class="row cars-container justify-content-evenly">
      <div v-for="car in bestSellerCars" :key="car.id" class="each-car col-4">
        <img class="rounded d-block mx-auto" :src="car.mainImage" alt="" />
        <h3 class="text-center">{{ car.name }}</h3>
        <div class="d-flex justify-content-between">
          <div>
            <button type="button" class="btn btn-light">{{ car.price }}</button>
          </div>
          <div>
            <router-link
              :to="{
                name: 'carInfo',
                params: { id: car.id, name: car.name },
              }"
              ><button type="button" class="btn btn-primary">
                More Details
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderSection",
  components: {},
  data() {
    return {};
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
h1 {
  border-bottom: 2px solid black;
  width: fit-content;
  margin: 30px auto;
}
.main {
  margin: 150px auto;
}
.cars-container {
  background-color: #000;
}
.each-car {
  padding: 10px;
  margin-bottom: 10px;
  border: 10px solid #eee;
  img {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
  }
}
</style>
