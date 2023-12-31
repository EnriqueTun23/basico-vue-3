import { createApp } from 'vue';
import router from '@/router/index';
import App from './App.vue';

// importacion del store
import store from './store/index';

createApp(App).use(router).use(store).mount('#app');
