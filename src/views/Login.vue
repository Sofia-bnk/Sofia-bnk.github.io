<template>
  <div class="container">
    <b-form>
      <label>User ID:</label>
      <b-form-input
        v-model="userId"
        style="margin-bottom:2rem"
        placeholder="Enter username (sofia)"
      ></b-form-input>
      <label for="text-password">Password:</label>
      <b-form-input
        type="password"
        v-model="password"
        placeholder="Enter password (1234)"
      ></b-form-input>

      <b-button variant="info" @click="onClickLogin" style="margin-top:2rem"
        >Login</b-button
      >

      <p id="note" v-if="show">
        Incorrect username or password! Try again!
      </p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return { userId: "", password: null, show: false };
  },
  methods: {
    onClickLogin() {
      if (this.userId === "sofia" && this.password === "1234") {
        this.$store.state.login = false;
        this.show = false;
        this.$router.push({ path: "/" });
      } else {
        this.show = true;
      }
    },
  },

  watch: {
    userId(newUserId, oldUserId) {
      console.log(`userId have changed from ${oldUserId} to ${newUserId}`);
    },
  },
};
</script>
<style lang="scss" scoped>
$test-color: red;
#note {
  color: $test-color;
}
</style>
