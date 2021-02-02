<template>
  <div>
    <div>Author: {{ currentAuthor }}</div>
    <b-card-group style="margin-left:10rem">
      <Card
        @pic-mouseover="onPicMouseover"
        :pic="pic"
        :key="pic.id"
        v-for="pic in $store.state.pictures"
      />
    </b-card-group>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardList",

  data() {
    return {
      currentAuthor: "",
    };
  },

  mounted() {
    this.$store.dispatch("getPicz");
  },

  methods: {
    onPicMouseover(pic) {
      this.currentAuthor = pic.author;
    },
  },

  components: {
    Card,
  },
};
</script>

<style scoped></style>
