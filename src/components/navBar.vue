<template>
  <div class="sticky-top">
    <ul class="nav">
      <li>
        <router-link :to="{ name: 'home' }" exact>Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'categories' }">Categories</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: black;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 20px;

  li {
    display: inline-block;
    padding: 10px;
    a {
      text-decoration: none;
      color: white;
      padding: 5px 10px;
    }
  }
}
.router-link-exact-active {
  color: white;
  background-color: green;
}
</style>
