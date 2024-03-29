<template>
  <div id="app" class="flex">
    <NavBar></NavBar>
    <router-view class="ml-4"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar
  }
});
</script>

