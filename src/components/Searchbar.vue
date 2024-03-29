<template>
	<input class="w-56 h-10 border rounded-[12px] placeholder:pl-12" :placeholder="title">
		<span class="material-symbols-outlined absolute top-[10%] left-[15%]">
			search
		</span>
	</input>
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
