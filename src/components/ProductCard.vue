<template>
	<TableRow>
		<TableItem>{{ name }}</TableItem>
		<TableItem>{{ description }}</TableItem>
		<TableItem>{{ productId }}</TableItem>
		<TableItem>{{ quantity }}</TableItem>
		<TableItem>{{ price }}</TableItem>
		<TableItem>{{ category ? category : 'Sem categoria' }}</TableItem>
		<TableItem>
			<a class="cursor-pointer">
				<span class="material-symbols-outlined">
					more_horiz
				</span>
			</a>
		</TableItem>
	</TableRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableItem from "./table/TableItem.vue";
import TableRow from "./table/TableRow.vue";

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
