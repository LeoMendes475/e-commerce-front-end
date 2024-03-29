<template>
  <div>
    <h2 class="p-4">Marketplace</h2>
		<div class="flex justify-between items-center my-8">
			<Searchbar :title="'Search in product'"/>
			<router-link to="/product-create" tag="button">
				<Button :title="'Add Product'" :icon="'add'"/>
			</router-link>
		</div>
    <div class="flex flex-col justify-items-center gap-x-12 gap-y-6 px-12">
			<table border="1">
				<TableRowHeader>
					<TableHeader v-for="header in tableHeaders" :columnName="header"/>
				</TableRowHeader>
				<ProductCard v-for="product in products" :key="product.id"
					:name="product.name"
					:description="product.description"
					:productId="product.id"
					:quantity="product.quantityAvailable"
					:price="product.value"
					:category="'Coming soon'"
				/>
			</table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import Button from '../components/form/Button.vue';
import Searchbar from '../components/Searchbar.vue';
import TableRowHeader from '../components/table/TableRowHeader.vue'
import TableHeader from '../components/table/TableHeader.vue'

import { Product } from '../types/product/product.type.ts'
import ProductCard from '../components/ProductCard.vue';
import api from "../services/index.ts";

const products = ref<Product[]>([]);
const tableHeaders = ref<string[]>(['Name', 'Description', 'ProductId', 'Quantity', 'Price', 'Category'])

onMounted(() => {
  getData();
})

async function getData() {
  try {
    const { data } = await api.get("/product");
    products.value = data.productList;
    return products;
  } catch (error) {
    console.log("Error: ", error);
  }
}
</script>
