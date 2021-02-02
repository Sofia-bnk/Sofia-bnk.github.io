<template>
  <div class="container" style="border:solid">
    <div style="margin:20px" class="container">
      <ul
        class="list-unstyled container"
        :key="product.id"
        v-for="product in $store.state.cart"
      >
        <b-media tag="li">
          <template #aside>
            <b-img
              :src="getPic(product.id)"
              width="64"
              alt="placeholder"
              style="margin-left:12rem"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">price: {{ product.price }}</h5>
          <p class="mb-0">Quantity: {{ product.quantity }}</p>
        </b-media>
      </ul>
      <p style="margin-top:4rem">Items: {{ items }}</p>
      <p>Total price: {{ totalPrice }}</p>
      <b-button variant="info">Buy</b-button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      var price = 0;
      this.$store.state.cart.forEach((s) => {
        price += s.price * s.quantity;
      });
      return price;
    },
    items() {
      var items = 0;
      this.$store.state.cart.forEach((s) => {
        items += s.quantity;
      });
      return items;
    },
  },
  methods: {
    getPic(id) {
      const item = this.$store.state.map.get(id);
      console.log(item);
      return item.download_url;
    },
    calculation() {
      this.$store.state.cart.forEach((s) => {
        this.price += s.price * s.quantity;
        this.items += s.quantity;
      });
    },
  },
};
</script>
