<template>
	<div class="px-3 w-72 h-10 py-1.5 border rounded-[12px] flex items-center gap-3">
		<span class="material-symbols-outlined size-4 pb-6">
			search
		</span>
		<input class="bg-transparent focus:ring-0 flex-1 outline-none border-0 p-0 text-sm" :placeholder="title" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Searchbar",
	props: {
		title: String,
	},
});
</script>
