<template>
  <div>
    <b-navbar type="dark" fixed="top" variant="info">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/basket">
          <BIconBasket font-scale="1" />
        </b-nav-item>
        <b-nav-item>{{ items }}</b-nav-item>

        <b-nav-item v-if="$store.state.login === true" to="/login"
          >Login</b-nav-item
        >
        <b-nav-item-dropdown right v-else>
          <template #button-content>
            <em>Sofia</em>
          </template>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav style="margin-left:2rem"> </b-nav>
        <p style="color:red" v-if="off === true">Offline</p>
        <p style="color:white" v-if="on === true">Online</p>
      </b-navbar-nav>
    </b-navbar>

    <div id="app">
      <router-view />
    </div>
  </div>
</template>
<script>
import { BIconBasket } from "bootstrap-vue";

export default {
  data() {
    return { on: false, off: false };
  },

  computed: {
    items() {
      var totalCount = null;
      this.$store.state.cart.forEach((s) => {
        totalCount += s.quantity;
      });
      return totalCount;
    },
  },
  methods: {
    logout() {
      this.$store.state.login = true;
    },
  },

  mounted() {
    if (navigator.onLine) {
      this.on = true;
    }

    addEventListener("offline", () => {
      console.log("Offline");
      this.off = true;
      this.on = false;
    });
    addEventListener("online", () => {
      console.log("Online");
      this.on = true;
      this.off = false;
    });
  },
  components: {
    BIconBasket,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  position: relative;
  top: 7em;
}
</style>
