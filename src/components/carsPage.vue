<template>
  <div class="container">
    <h1 class="text-center">All Cars</h1>
    <div class="row justify-content-evenly">
      <div
        v-for="car in carsdetailes"
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
  </div>
</template>

<script>
export default {
  name: "carsPage",
  props: ["carsdetailes"],
};
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 3px solid black;
  width: fit-content;
  margin: 30px auto;
  font-weight: bold;
}
.each-car {
  padding: 10px;
  margin-bottom: 10px;
  border: 10px solid #eee;
  img {
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
    max-width: 100%;
  }
}
</style>
