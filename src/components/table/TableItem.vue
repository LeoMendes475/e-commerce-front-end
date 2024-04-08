<template>
	<td class="py-3 px-4 text-sm">
		<slot/>
	</td>
	</template>

	<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "TableItem",
	});
	</script>

