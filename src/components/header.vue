<template>
  <div class="header text-center">
    <h5>Find cars for sale and for rent near you</h5>
    <h2>Find Your Dream Car</h2>
    <img
      src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "headerPage",
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #eef1fb;
  padding: 100px 150px 50px;
  margin-bottom: 100px;
  h5 {
    position: relative;
    top: 50px;
    animation: popup 0.7s 0.5s both;
  }
  h2 {
    font-size: 70px;
    font-weight: bold;
    position: relative;
    top: 100px;
    animation: popup 0.7s 0.5s both;
  }
  img {
    position: relative;
    top: 200px;
    animation: popup 1s 0.5s both;
  }
}
@keyframes popup {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
</style>
