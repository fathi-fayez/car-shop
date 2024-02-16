<template>
  <div class="row m-4">
    <div class="col-8">
      <div class="mainImageContainer">
        <img
          class="mainImage rounded d-block mx-auto"
          :src="getSelectedCar.mainImage"
          alt=""
        />
      </div>
    </div>
    <div class="col-4">
      <h2>Name: {{ getSelectedCar.name }}</h2>
      <h2>Model: {{ getSelectedCar.model }}</h2>
      <h2>Price: {{ getSelectedCar.price }}</h2>
      <h2>Year: {{ getSelectedCar.year }}</h2>
      <p>{{ getSelectedCar.description }}</p>
      <button type="button" class="btn btn-primary mt-4 w-50">Buy now</button>
    </div>
    <div class="col-10 text-center mt-4 d-flex flex-row">
      <img
        class="details-image rounded d-block mx-auto"
        v-for="(image, x) in getSelectedCar.images"
        :key="x"
        :src="image"
        @click="changeMainImage(image)"
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
  methods: {
    changeMainImage(image) {
      this.getSelectedCar.mainImage = image;
    },
  },
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
.details-image {
  width: 200px;
  cursor: pointer;
  transition: 0.5s;
}
.details-image:hover {
  transform: scale(1.1);
}
.mainImageContainer img {
  width: 600px;
  height: 400px;
}
</style>
