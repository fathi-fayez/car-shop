<template>
  <section class="about-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="about-us col-md-6">
          <h2>About Us</h2>
          <p>
            Welcome to our company. Here is some information about who we are
            and what we do.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, velit sed sollicitudin tempor, eros metus ullamcorper nunc,
            et congue eros dolor in elit. Nam varius vel lorem non aliquet.
          </p>
          <p>
            Nulla facilisi. Mauris sit amet tortor felis. Mauris eu diam justo.
            Cras vel diam auctor, tempor mauris sed, condimentum lectus.
          </p>
          <div class="our-Mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality products/services to our
              customers and to create a positive impact in the community.
            </p>
          </div>
          <div class="our-Vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to become a leading company in our industry,
              recognized for our innovation, quality, and customer satisfaction.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="https://www.carshop.com/media/Home/CarShop-FeatureBox.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-section {
  padding: 50px;
}
h2 {
  color: #0b5ed7;
}

.our-Mission,
.our-Vision {
  border: 2px solid black;
  margin-bottom: 50px;
}
img {
  width: 600px;
}
</style>
