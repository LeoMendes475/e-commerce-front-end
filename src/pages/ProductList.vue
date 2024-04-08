<template>
	<Wrapper>
		<div class="px-12">
			<h2 class="p-4">Marketplace</h2>
			<div class="flex justify-between items-center my-8">
				<Searchbar :title="'Search in product'" />
				<router-link to="/product-create" tag="button">
					<Button :title="'Add Product'" :icon="'add'" />
				</router-link>
			</div>
			<div class="flex flex-col justify-items-center gap-x-12 gap-y-6">
				<table border="1">
					<TableRowHeader>
						<TableHeader :columnName="'Name'" />
						<TableHeader :columnName="'Description'" />
						<TableHeader :columnName="'ProductId'" />
						<TableHeader :columnName="'Quantity'" />
						<TableHeader :columnName="'Price'" />
						<TableHeader :columnName="'Category'" />
						<TableHeader></TableHeader>
					</TableRowHeader>
					<ProductCard v-for="product in products" :key="product.id" :name="product.name"
						:description="product.description" :productId="product.id" :quantity="product.quantityAvailable"
						:price="product.value" :category="'Coming soon'" />
				</table>
			</div>
		</div>
	</Wrapper>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from "../services/index.ts";
import { Product } from '../types/product/product.type.ts'
import Wrapper from '../components/layout/Wrapper.vue';
import Button from '../components/form/Button.vue';
import Searchbar from '../components/Searchbar.vue';
import TableRowHeader from '../components/table/TableRowHeader.vue'
import TableHeader from '../components/table/TableHeader.vue'
import ProductCard from '../components/ProductCard.vue';

const products = ref<Product[]>([]);

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
