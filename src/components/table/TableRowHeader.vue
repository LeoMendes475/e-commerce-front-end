<template>
<tr class="bg-[#f9f9f9] border-b rounded-t-lg h-10">
	<slot/>
</tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableRowHeader",
});
</script>

