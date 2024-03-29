<template>
  <div class="flex flex-col pb-2">
		<label class="text-gray-400 text-base pb-1">{{ title }}</label>
		<select v-model="selectedOption" @change="updateSelection" class="border rounded h-7">
			<option value="" disabled>
				{{ teste }}
			</option>
			<option v-for="option in optionsObject" :key="option.id" :value="option.id">{{ option.name }}</option>
		</select>
	</div>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from "vue";

export default defineComponent({
  name: "SelectList",
  props: {
		title: String,
    optionsObject: {
      type: Object,
      required: true
    },
    value: {
      type: String
    },
		teste: String,
  },
	emits: ['updateValue'],
  setup(props, { emit }) {
    const selectedOption: Ref<string | null> = ref(props.value || null);
    const options: Ref<Record<string, string>> = ref({});

    onMounted(() => {
      options.value = props.optionsObject;
    });

    const updateSelection = () => {
      const selectedValue = selectedOption.value;
      emit("updateValue", selectedValue);
    };

    return { selectedOption, options, updateSelection };
  }
});
</script>
