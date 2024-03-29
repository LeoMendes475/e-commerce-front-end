<template>
	<th class="pr-4">
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

