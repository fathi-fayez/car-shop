<template>
  <section class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Contact Us</h2>
          <p>
            Feel free to get in touch with us for any inquiries or questions.
          </p>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="formData.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                v-model="formData.message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-6">
          <h2>Contact Information</h2>
          <p>You can also reach us through the following:</p>
          <ul class="list-unstyled">
            <li>Email: fathifayez155@.com</li>
            <li>Phone: +2010 2271 6283</li>
            <li>Address: 123 Main St, City, Egypt</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Reset form after submission
      this.formData = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 100px;
}
</style>
