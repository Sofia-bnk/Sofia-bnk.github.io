<template>
  <div>
    <b-card
      :title="$store.state.map.get($route.params.id).author"
      :img-src="$store.state.map.get($route.params.id).download_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 75%;"
      class="mb-2"
      img-width="100%"
    >
      <b-card-text>
        Size: {{ $store.state.map.get($route.params.id).width }} x
        {{ $store.state.map.get($route.params.id).height }}
      </b-card-text>
      <p>price: {{ price }}</p>
      <div style="margin-bottom:1rem">
        <b-button
          variant="outline-dark"
          size="sm"
          style="text"
          @click="decrease"
          >_</b-button
        >
        {{ quantity }}
        <b-button variant="outline-dark" size="sm" @click="increase"
          >+</b-button
        >
      </div>
      <b-button
        href="#"
        variant="info"
        @click="addToCart($route.params.id, price, quantity)"
      >
        Add to cart
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return { price: 1000, quantity: 0 };
  },

  methods: {
    addToCart(id, price, quantity) {
      if (quantity != 0) {
        var product = { id: id, price: price, quantity: quantity };
        this.$store.dispatch("addToCart", product);
      }
    },
    decrease() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    increase() {
      this.quantity++;
    },
  },
};
</script>

<style scoped>
.mb-2 {
  margin: auto;
}
</style>
