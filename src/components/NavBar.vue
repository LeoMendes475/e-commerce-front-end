<template>
  <aside class="w-64">
		<nav class="flex flex-col items-center h-screen border-r">
			<img class="w-100 h-12 mt-16 mb-12" src="../assets/images/logo.png">

			<ul class="flex flex-col">
				<router-link v-for="route in mainRoutes" :to="route.route"
					class="flex items-center rounded-[12px] w-48 h-12 pl-10 mb-2 "
					:class="[isActive ? activeClass : '']">
					<span class="material-symbols-outlined pr-2">{{ route.icon }}</span> {{ route.name }}
				</router-link>
			</ul>

			<hr class="w-[80%] border border-inherit my-8">

			<ul class="flex flex-col">
				<router-link v-for="route in otherRoutes" :to="route.route"
					class="flex items-center rounded-[12px] w-48 h-12 pl-10 mb-2 "
					:class="[isActive ? activeClass : '']">
					<span class="material-symbols-outlined pr-2">{{ route.icon }}</span> {{ route.name }}
				</router-link>
			</ul>
		</nav>
	</aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "NavBar",
  data() {
		return {
			isActive: false,
			activeClass: 'hover:bg-[#4b68ff] hover:text-white',
      mainRoutes: [
        { icon: "analytics", name: "Dashboard", route: "/"},
        { icon: "inventory_2", name: "Product", route: "/product-list"},
        { icon: "person", name: "Customer", route: "/customer"},
        { icon: "label", name: "Category", route: "/category"},
        { icon: "shopping_bag", name: "Orders", route: "/order"},
        { icon: "local_activity", name: "Coupon", route: "/coupon"},
      ],
			otherRoutes: [
        { icon: "settings", name: "Settings", route: "/settings"},
        { icon: "logout", name: "Logout", route: "/logout"},
      ],
    };
  }
});
</script>

<style>
.link__item {
	height: 35px;
	margin-bottom: 0.5rem;
	border-radius: 8px;
}

.link__item:hover {
	background-color: #e2f0ed;
}
</style>
