<template>
	<Wrapper>
		<div class="px-12">
			<div class="flex justify-between items-center my-8">
				<Searchbar :title="'Search in product'" />
				<router-link to="/product-create" tag="button">
					<Button :title="'Add Product'" :icon="'add'" />
				</router-link>
			</div>

			<div>
				<div class="card">
					<PrimeToolbar class="mb-4">
						<template #start>
							<PrimeButton label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" class=" flex text-center justify-center items-center w-[120px] h-[34px] rounded-[12px] border border-[#4b68ff] pl-5 pr-5 text-[#4b68ff] hover:bg-[#4b68ff] hover:text-white" />
						</template>
					</PrimeToolbar>

					<PrimeDataTable class="border rounded-[12px] p-4" ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" :paginator="true"
						:rows="10" :filters="filters"
						paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
						currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
						<template #header>
							<div class="flex flex-wrap gap-2 align-items-center justify-content-between">
								<h4 class="m-0 pb-6 text-xl font-semibold">Manage Products</h4>
								<InputText v-model="filters['global'].value" placeholder="Search..." />
							</div>
						</template>

						<PrimeColumn selectionMode="multiple" style="width: 3rem" :exportable="false"></PrimeColumn>
						<PrimeColumn field="id" header="Code" style="min-width:12rem"></PrimeColumn>
						<PrimeColumn field="name" header="Name" style="min-width:16rem"></PrimeColumn>
						<PrimeColumn field="value" header="Price" style="min-width:8rem">
							<template #body="slotProps">
								{{ formatCurrency(slotProps.data.value) }}
							</template>
						</PrimeColumn>
						<PrimeColumn field="categoryId" header="Category" style="min-width:16rem"></PrimeColumn>
						<PrimeColumn field="quantity_available" header="Quantity" style="min-width:6rem"></PrimeColumn>
						<PrimeColumn :exportable="false" style="min-width:8rem">
							<template #body="slotProps">
								<PrimeButton icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
								<PrimeButton icon="pi pi-trash" outlined rounded severity="danger"
									@click="confirmDeleteProduct(slotProps.data)" />
							</template>
						</PrimeColumn>
					</PrimeDataTable>
				</div>

				<PrimeDialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true"
					class="p-fluid">
					<img v-if="product.image" :src="`https://primefaces.org/cdn/primevue/images/product/${product.image}`"
						:alt="product.image" class="block m-auto pb-3" />
					<div class="field">
						<label for="name">Name</label>
						<PrimeInputText id="name" v-model.trim="product.name" required="true" autofocus
							:invalid="submitted && !product.name" />
						<small class="p-error" v-if="submitted && !product.name">Name is required.</small>
					</div>
					<div class="field">
						<label for="description">Description</label>
						<PrimeTextarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
					</div>

					<div class="field">
						<label for="inventoryStatus" class="mb-3">Inventory Status</label>
						<PrimeDropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses"
							optionLabel="label" placeholder="Select a Status">
							<template #value="slotProps">
								<div v-if="slotProps.value && slotProps.value.value">
									<Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
								</div>
								<div v-else-if="slotProps.value && !slotProps.value.value">
									<Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
								</div>
								<span v-else>
									{{ slotProps.placeholder }}
								</span>
							</template>
						</PrimeDropdown>
					</div>

					<div class="field">
						<label class="mb-3">Category</label>
						<div class="formgrid grid">
							<div class="field-radiobutton col-6">
								<PrimeRadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
								<label for="category1">Accessories</label>
							</div>
							<div class="field-radiobutton col-6">
								<PrimeRadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
								<label for="category2">Clothing</label>
							</div>
							<div class="field-radiobutton col-6">
								<PrimeRadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
								<label for="category3">Electronics</label>
							</div>
							<div class="field-radiobutton col-6">
								<PrimeRadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
								<label for="category4">Fitness</label>
							</div>
						</div>
					</div>

					<div class="formgrid grid">
						<div class="field col">
							<label for="price">Price</label>
							<PrimeInputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
						</div>
						<div class="field col">
							<label for="quantity">Quantity</label>
							<PrimeInputNumber id="quantity" v-model="product.quantity" integeronly />
						</div>
					</div>
					<template #footer>
						<PrimeButton label="Cancel" icon="pi pi-times" text @click="hideDialog" />
						<PrimeButton label="Save" icon="pi pi-check" text />
					</template>
				</PrimeDialog>

				<PrimeDialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
					<div class="confirmation-content">
						<i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
						<span v-if="product">Are you sure you want to delete <b>{{ product.name }}</b>?</span>
					</div>
					<template #footer>
						<PrimeButton label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
						<PrimeButton label="Yes" icon="pi pi-check" text @click="deleteProduct" />
					</template>
				</PrimeDialog>

				<PrimeDialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
					<div class="confirmation-content">
						<i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
						<span v-if="product">Are you sure you want to delete the selected products?</span>
					</div>
					<template #footer>
						<PrimeButton label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
						<PrimeButton label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
					</template>
				</PrimeDialog>
			</div>
		</div>
	</Wrapper>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from "../../services/index.ts";
import { Product } from '../../types/product/product.type.ts'

import Wrapper from '../../components/layout/Wrapper.vue';
import Button from '../../components/form/Button.vue';
import Searchbar from '../../components/Searchbar.vue';
import { FilterMatchMode } from 'primevue/api';
// import { useToast } from 'primevue/usetoast';

const products = ref<Product[]>([]);

onMounted(() => {
	getData();
})

async function getData() {
	try {
		const { data } = await api.get("/product");
		products.value = data.productList;
	} catch (error) {
		console.log("Error: ", error);
	}
}


// const toast = useToast();
const dt = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
	'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
});
const submitted = ref(false);
const statuses = ref([
	{ label: 'INSTOCK', value: 'instock' },
	{ label: 'LOWSTOCK', value: 'lowstock' },
	{ label: 'OUTOFSTOCK', value: 'outofstock' }
]);

const formatCurrency = (value) => {
	if (value)
		return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	return;
};
const openNew = () => {
	product.value = {};
	submitted.value = false;
	productDialog.value = true;
};
const hideDialog = () => {
	productDialog.value = false;
	submitted.value = false;
};
const editProduct = (prod) => {
	product.value = { ...prod };
	productDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
	product.value = prod;
	deleteProductDialog.value = true;
};
const deleteProduct = () => {
	products.value = products.value.filter(val => val.id !== product.value.id);
	deleteProductDialog.value = false;
	product.value = {};
	// toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

const exportCSV = () => {
	dt.value.exportCSV();
};
const confirmDeleteSelected = () => {
	deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
	products.value = products.value.filter(val => !selectedProducts.value.includes(val));
	deleteProductsDialog.value = false;
	selectedProducts.value = null;
	// toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};

const getStatusLabel = (status) => {
	switch (status) {
		case 'INSTOCK':
			return 'success';

		case 'LOWSTOCK':
			return 'warning';

		case 'OUTOFSTOCK':
			return 'danger';

		default:
			return null;
	}
};
</script>
