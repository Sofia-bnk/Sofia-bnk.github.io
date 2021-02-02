<template>
  <div>
    <b-card
      :title="pic.author"
      :img-src="pic.download_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      @mouseover="onMouseOver"
    >
      <b-card-text> </b-card-text>

      <b-button @click="onClick" href="#" variant="info">
        View
      </b-button>
    </b-card>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Card",
  methods: {
    onClick() {
      router.push({ path: `/view/${this.pic.id}` });
    },
    onMouseOver() {
      this.$emit("pic-mouseover", this.pic);
    },
  },

  props: {
    pic: Object,
  },
};
</script>
