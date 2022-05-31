import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import InputNumber from 'primevue/inputnumber';

const app = createApp(App);
app.mount('#app');
app.use(PrimeVue);
app.component('InputNumber', InputNumber);