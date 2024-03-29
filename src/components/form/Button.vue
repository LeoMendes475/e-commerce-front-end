<template>
	<button class="border pl-5 bg-[#4b68ff] text-white h-10 w-40 flex items-center rounded-[12px]">
		<span class="material-symbols-outlined" v-if="icon">
			{{ icon }}
		</span>

		{{ title }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
		title: String,
		icon: String,
  },
});
</script>
