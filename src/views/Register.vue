<template>
  <div class="register-page">
    <button class="button-secondary back-button" @click="onBackClick">
      Back
    </button>

    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";

export default {
  name: "Register",
  components: {
    RegisterForm,
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