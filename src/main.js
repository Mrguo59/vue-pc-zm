import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';
// 引入公共资源
import './styles/reset.css';
//引入element-ui的配置文件
import './plugins/element.js';
//引入懒加载插件
import './plugins/lazyload';

// 引入mockServer，为了加载里面代码
// 里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServer';
import './styles/iconfont.css';

Vue.config.productionTip = false;

new Vue({
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
	render: (h) => h(App),
	// 应用router
	router,
	store
}).$mount('#app');
