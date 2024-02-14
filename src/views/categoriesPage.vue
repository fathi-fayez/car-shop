<template>
  <div>
    <ul class="sidebar-nav d-flex">
      <li v-for="(type, x) in carTypes" :key="x">
        <router-link
          class="rounded"
          :to="{ name: 'eachCar', params: { carType: type.carName } }"
          exact
          >{{ type.carName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import carTypes from "@/data/carTypes.json";
export default {
  name: "categoriesPage",
  data() {
    return {
      carTypes: carTypes,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  li {
    list-style: none;
    border-bottom: 2px solid #b80f0f;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      padding: 10px;
      display: block;
      width: 200px;
      height: 200px;
      margin: 20px;
      background-color: #4c4f60;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
