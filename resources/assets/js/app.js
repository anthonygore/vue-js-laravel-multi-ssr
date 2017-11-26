import App from './components/App.vue';
import Vue from 'vue';
import router from './router'

export default new Vue({
    router,
    render: h => h(App)
});
