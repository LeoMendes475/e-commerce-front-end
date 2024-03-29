<template>
	<Searchbar :title="searchBarName"/>
	<router-link :to="route" tag="button">
		<Button :title="buttonName" :icon="buttonIcon"/>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Button from './form/Button.vue';
import Searchbar from './Searchbar.vue';

export default defineComponent({
	name: "SearchCreatePanel",
	props: {
		route: String,
		searchBarName: String,
		buttonName: String,
		buttonIcon: String,
	}
});
</script>
