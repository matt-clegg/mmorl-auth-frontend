<template>
  <div class="user-form__wrapper">
    <h3>Register</h3>
    <form
      method="POST"
      class="user-form__content"
      @submit="onSubmit"
      @submit.prevent
    >
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input type="submit" value="Register" class="button-primary" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";

export default {
  name: "RegisterForm",
  data() {
    return {
      username: null,
      email: null,
      password: null,
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
        .post("http://localhost:3000/api/user/register", user)
        .then((result) => {
          console.log(result);
          router.push("profile");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    },
  },
};
</script>

<style>
</style>