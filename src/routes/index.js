import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue"
import Productlist from "../pages/product/index.vue"
import CreateProduct from "../pages/product/create.vue"
import Orderlist from "../pages/order/index.vue"
import CreateOrder from "../pages/order/create.vue"

const rotas = [
  {path: "/", component: Home},
  {path: "/product-list", component: Productlist},
  {path: "/product-create", component: CreateProduct},
	{path: "/order-list", component: Orderlist},
  {path: "/order-create", component: CreateOrder},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router;
