import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue"
import Productlist from "../pages/ProductList.vue"
import CreateProduct from "../pages/product/create.vue"

const rotas = [
  {path: "/", component: Home},
  {path: "/product-list", component: Productlist},
  {path: "/product-create", component: CreateProduct},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router;
