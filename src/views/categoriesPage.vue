<template>
  <div>
    <ul class="sidebar-nav d-flex flex-wrap">
      <li v-for="(type, x) in carTypes" :key="x">
        <router-link
          class="rounded"
          :to="{ name: 'eachCar', params: { carType: type.carName } }"
          exact
        >
          <img :src="type.background" :alt="type.carName" />
        </router-link>
        <h5 class="text-center">{{ type.carName }}</h5>
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
    transition: 0.5s;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      width: 200px;
      height: 200px;
      padding: 10px;
      margin: 20px;
      border: 4px solid black;
      display: flex;
      align-items: center;
      img {
        max-width: 100%;
      }
    }
  }
  li:hover {
    transform: scale(1.1);
  }
}
</style>
