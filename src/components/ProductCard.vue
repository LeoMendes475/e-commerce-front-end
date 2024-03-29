<template>
  <tr class="text-sm">
		<td class="max-w-64 pr-4">{{ name }}</td>
		<td class="max-w-96 pr-4">{{ description }}</td>
		<td class="max-w-64 pr-4">{{ productId }}</td>
		<td class="w-32 text-center pr-4">{{ quantity }}</td>
		<td class="w-32 text-center pr-4">{{ price }}</td>
		<td class="max-w-64 text-center pr-4">{{ category }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    name: String,
    description: String,
    productId: String,
    quantity: Number,
    price: Number,
    category: String,
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
