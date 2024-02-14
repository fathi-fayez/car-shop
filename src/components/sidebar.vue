<template>
  <div>
    <ul class="sidebar-nav">
      <li class="d-flex">
        <router-link
          v-for="(type, x) in carTypes"
          :key="x"
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
  name: "sideBar",
  data() {
    return {
      carTypes: carTypes,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  li {
    list-style: none;
    width: 100%;
    border-bottom: 2px solid #fff;
    background-color: #4c4f60;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      padding: 10px;
      display: block;
    }
  }
}
</style>
