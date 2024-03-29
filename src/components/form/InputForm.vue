<template>
  <div class="flex flex-col pb-2">
    <label class="text-gray-400 text-base pb-1">{{ title }}</label>
    <input class="border rounded w-full h-7 px-3" :placeholder="placeholder" :type="type">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputForm",
  props: {
    title: String,
    placeholder: String,
    type: String,
		inputValue: String,
  },
	emits: ['updateValue'],
});
</script>
