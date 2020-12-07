import Vue from 'vue';
import VueRouter from 'vue-router';

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplate, onAbort) {
	// 如果用户想处理失败，就处理
	if (onComplate && onAbort) {
		return push.call(this, location, onComplate, onAbort);
	}
	// 如果用户不处理失败，给默认值：空函数
	return push.call(this, location, onComplate, () => {});
};

VueRouter.prototype.replace = function(location, onComplate, onAbort) {
	// 如果用户想处理失败，就处理
	if (onComplate && onAbort) {
		return replace.call(this, location, onComplate, onAbort);
	}

	return replace.call(this, location, onComplate, () => {});
};

// 安装插件
Vue.use(VueRouter);

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Search from '../views/Search';
import Detail from '../views/Detail';
import ShopCart from '../views/ShopCart';
import AddCartSuccess from '../views/AddCartSuccess';
import Trade from '../views/Trade';
import Center from '../views/Center';
import Pay from '../views/Pay';
import PaySuccess from '../views/PaySuccess';

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login,
			// 当组件加载显示时，meta中的参数会传到$route中
			// 当组件不加载显示时，meta中的参数不会传
			meta: {
				isFooterShow: true
			}
		},
		{
			path: '/register',
			component: Register,
			meta: {
				isFooterShow: true
			}
		},
		{
			// ?: 代表 params 参数是可选的
			name: 'search',
			path: '/search/:searchText?',
			component: Search
		},
		{
			name: 'detail',
			path: '/detail/:id',
			component: Detail
		},
		{
			name: 'shopcart',
			path: '/shopcart',
			component: ShopCart
		},
		{
			name: 'addcartsuccess',
			path: '/addcartsuccess',
			component: AddCartSuccess
		},
		{
			name: 'trade',
			path: '/trade',
			component: Trade
		},
		{
			name: 'pay',
			path: '/pay',
			component: Pay
		},
		{
			name: 'paysuccess',
			path: '/paysuccess',
			component: PaySuccess
		},
		{
			name: 'center',
			path: '/center/myorder',
			component: Center
		}
	],
	// 每次切换路由页面滚动条位置
	scrollBehavior() {
		return { x: 0, y: 0 };
	}
});
