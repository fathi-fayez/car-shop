<template>
  <div class="row">
    <div class="col-8">
      <div>
        <img
          class="mainImage rounded d-block mx-auto"
          :src="getSelectedCar.mainImage"
          alt=""
        />
      </div>
    </div>
    <div class="col-4">
      <h2>{{ getSelectedCar.name }}</h2>
      <h2>{{ getSelectedCar.model }}</h2>
      <h2>{{ getSelectedCar.price }}</h2>
      <h2>Year: {{ getSelectedCar.year }}</h2>
      <p>{{ getSelectedCar.description }}</p>
    </div>
    <div class="col-12 text-center mt-5 d-flex flex-row">
      <!-- <img v-for="(image, x) in getSelectedCar.images" :key="x" :src="image" /> -->
      <img
        class="rounded d-block mx-auto"
        :src="getSelectedCar.mainImage"
        alt=""
      />
      <img
        class="rounded d-block mx-auto"
        :src="getSelectedCar.mainImage"
        alt=""
      />
      <img
        class="rounded d-block mx-auto"
        :src="getSelectedCar.mainImage"
        alt=""
      />
      <img
        class="rounded d-block mx-auto"
        :src="getSelectedCar.mainImage"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import carsData from "../data/carsDetails.json";
export default {
  name: "carInfo",
  data() {
    return {
      myCars: carsData,
      carName: this.$route.params.name,
      carId: this.$route.params.id,
    };
  },
  components: {},
  computed: {
    getSelectedCar() {
      const selectedCar = this.myCars.find((item) => item.id == this.carId);
      return selectedCar;
    },
  },
};
</script>
<style lang="scss" scoped>
.mainImage {
  width: 600px;
}
</style>
