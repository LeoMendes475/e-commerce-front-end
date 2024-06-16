<template>
	<div class="max-w-[1600px] mx-auto">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Wrapper",
});
</script>
