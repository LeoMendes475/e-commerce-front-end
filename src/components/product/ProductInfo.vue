<template>
  <div class="product__info">
    <h2 class="product__title">{{ title }}</h2>
    <h3 class="product__desc">{{ productDescription }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductInfo",
  props: {
    title: String,
    productDescription: String,
  }
});
</script>

<style>
.product__info {
  height: 5rem;
}

.product__title {
  color: #9fa3a1;
}

.product__desc {
  height: 100%;
  overflow-y: hidden;
}
</style>
