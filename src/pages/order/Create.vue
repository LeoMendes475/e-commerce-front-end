<template>
  <div class="px-12">
    <h2 class="p-4">Register Product</h2>
      <div class="flex flex-col w-64 bg-white">
        <InputForm title="Nome" :type="'text'" :value="product.name" @input="e => product.name = e.target.value"/>
        <InputForm title="Descrição" :type="'text'" :value="product.description" @input="($event: any) => product.description = $event"/>
        <InputForm title="Quantidade" :type="'number'" :value="product.quantityAvailable" @input="($event: any) => product.quantityAvailable = $event"/>
        <InputForm title="Preço" :type="'number'" :value="product.value" @input="($event: any) => product.value = $event"/>

        <SelectList :title="'Categoria'" :optionsObject="categoryList" @updateValue="($event: string) => product.categoryId = $event" :teste="'Selecione a categoria'"/>

				<Button :title="'Cadastrar'" @click="submit"/>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import api from "../../services";
import { Product } from '../../types/product/product.type';

import InputForm from "../../components/form/InputForm.vue";
import SelectList from '../../components/form/SelectList.vue';
import Button from '../../components/form/Button.vue';

const product: Product = {
  name: "",
  value: 0,
  quantityAvailable: 0,
  description: "",
  categoryId: "",
}

const categoryList = ref<any>([]);

onMounted(() => {
  getCategories();
})

async function getCategories() {
  try {
    const { data } = await api.get("/category");
    categoryList.value = data;
    return categoryList;
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function submit() {
   try {
    await api.post("/product", product);
  } catch (error) {
    console.log("Error: ", error)
  }
}
</script>
