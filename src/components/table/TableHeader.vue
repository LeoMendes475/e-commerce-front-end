<template>
	<th class="py-3 px-8 text-sm font-semibold text-left">
		{{ columnName }}
	</th>
	</template>

	<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "TableHeader",
		props: {
			columnName: String,
		}
	});
	</script>

