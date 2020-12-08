import { reqGetCartList, reqPostAddToCart, reqGetCheckCart, reqDeleteCart } from '@api/shopcart';

export default {
	state: {
		cartList: [] // 所有购物车数据
	},
	getters: {},
	actions: {
		//获取购物车列表
		async getCartList({ commit }) {
			const cartList = await reqGetCartList();
			commit('GET_CART_LIST', cartList);
		},
		// actions函数只能接受外面的一个参数
		// this.updateCartCheck(a, b) 第二个参数b actions函数是接受不到的
		//添加到购物车(对已有物品进行数量改动)
		async PostAddToCart({ commit }, { skuId, skuNum }) {
			await reqPostAddToCart(skuId, skuNum);
			// console.log(commit);
			// 1. 手动更新vuex的数据 --> 页面就会重新渲染
			// 2. 重新请求所有购物车数据
			commit('POST_ADDTO_CART', { skuId, skuNum });
		},
		//切换商品选中状态
		async GetCheckCart({ commit }, { skuId, isChecked }) {
			await reqGetCheckCart(skuId, isChecked);
			commit('GET_CHECK_CART', { skuId, isChecked });
		},
		//删除购物车商品
		async DeleteCart({ commit }, skuId) {
			await reqDeleteCart(skuId);
			commit('DELETE_CART', skuId);
		}
	},
	mutations: {
		//获取购物车列表
		GET_CART_LIST(state, cartList) {
			state.cartList = cartList;
		},
		//添加到购物车(对已有物品进行数量改动)
		POST_ADDTO_CART(state, { skuId, skuNum }) {
			state.cartList = state.cartList.map((cart) => {
				if (cart.skuId === skuId) {
					cart.skuNum += skuNum;
				}
				return cart;
			});
		},
		//切换商品选中状态
		GET_CHECK_CART(state, { skuId, isChecked }) {
			state.cartList = state.cartList.map((cart) => {
				if (cart.skuId === skuId) {
					cart.isChecked = isChecked;
				}
				return cart;
			});
		},
		//删除购物车商品
		DELETE_CART(state, skuId) {
			state.cartList = state.cartList.filter((cart) => cart.skuId !== skuId);
		}
	}
};
