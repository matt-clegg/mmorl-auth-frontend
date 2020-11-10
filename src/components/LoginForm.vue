<template>
  <div class="user-form__wrapper">
    <h3>Login</h3>
    <form
      method="POST"
      class="user-form__content"
      @submit="onSubmit"
      @submit.prevent
    >
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <input type="submit" value="Login" class="button-primary" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null,
      errorMessage: null,
    };
  },
  methods: {
    onSubmit() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      axios
        .post("http://localhost:3000/api/user/login", user)
        .then((result) => {
          console.log(result);
          router.push("profile");
        })
        .catch((error) => {
          if (error?.response?.data ?? false) {
            console.log("here");
            this.errorMessage = error.response.data;
          } else {
            this.errorMessage = "Unable to login";
          }
          console.log(error.response);
        });
    },
  },
};
</script>

<style>
</style>