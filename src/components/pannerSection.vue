<template>
  <div class="main row">
    <div class="image-container col-sm-12 col-md-6">
      <img
        src="https://demoapus1.com/boxcar/wp-content/uploads/2023/10/h10.jpg"
        alt=""
      />
    </div>
    <div class="text-container col-sm-12 col-md-6 text-light">
      <h2>Online, in-person, everywhere</h2>
      <p>
        Choose from thousands of vehicles from multiple brands and buy online
        with Click & Drive, or visit us at one of our dealerships today.
      </p>
      <button type="button" class="btn btn-outline-secondary">
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pannerSection",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.image-container {
  padding: 0;
}
.text-container {
  background-color: #050b20;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  h2 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 50px;
  }
  button {
    align-self: flex-start;
    margin-top: 20px;
  }
}
img {
  max-width: 100%;
  padding: 0;
}
</style>
