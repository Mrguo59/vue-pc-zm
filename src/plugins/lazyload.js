import Vue from 'vue';
//从vue-lazyload导出VueLazyload
import VueLazyload from 'vue-lazyload';

//引入loading图片
import loading from '../assets/imgs/loading.gif';

//引入插件
Vue.use(VueLazyload, {
    //把图片配置到插件中
	loading: loading
});
