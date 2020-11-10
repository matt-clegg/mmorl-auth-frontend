<template>
  <div class="login-page">
    <button class="button-secondary back-button" @click="onBackClick">
      Back
    </button>

    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  methods: {
    onBackClick() {
      window.location = "/";
    },
  },
};
</script>

<style lang="less" scoped>
.back-button {
  margin-bottom: 30px;
}
</style>