<template>
  <div class="row mt-5 justify-content-evenly">
    <div
      v-for="car in getSelectedType"
      :key="car.id"
      class="each-car col-sm-6 col-lg-4"
    >
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
</template>

<script>
import carsData from "../data/carsDetails.json";
export default {
  name: "carInfo",
  data() {
    return {
      myCars: carsData,
      carType: this.$route.params.carType,
    };
  },
  components: {},
  computed: {
    getSelectedType() {
      const selectedType = this.myCars.filter(
        (item) => item.name == this.carType
      );
      return selectedType;
    },
  },
};
</script>
<style lang="scss" scoped>
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
