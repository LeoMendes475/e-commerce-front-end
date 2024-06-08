import { createApp } from 'vue';
import './assets/css/index.css';
import App from './App.vue';
import router from './routes';
import PrimeVue from 'primevue/config';
import PrimeVuePlugin from './plugins/primevue';
import 'primevue/resources/themes/aura-light-cyan/theme.css';
import 'primeicons/primeicons.css';


createApp(App)
	.use(router)
	.use(PrimeVue)
	.use(PrimeVuePlugin)
	.mount('#app')
