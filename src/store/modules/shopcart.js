import { reqGetCartList, reqPostAddToCart } from '@api/shopcart';

export default {
	state: {
		cartList: [] // 所有购物车数据
	},
	getters: {},
	actions: {
		async getCartList({ commit }) {
			const cartList = await reqGetCartList();
			commit('GET_CART_LIST', cartList);
		},
		// actions函数只能接受外面的一个参数
		// this.updateCartCheck(a, b) 第二个参数b actions函数是接受不到的
		async PostAddToCart({ commit }, { skuId, skuNum }) {
			await reqPostAddToCart(skuId, skuNum);
			// console.log(commit);
			// 1. 手动更新vuex的数据 --> 页面就会重新渲染
			// 2. 重新请求所有购物车数据
			commit('POST_ADDTO_CART', { skuId, skuNum });
		}
	},
	mutations: {
		GET_CART_LIST(state, cartList) {
			state.cartList = cartList;
		},
		POST_ADDTO_CART(state, { skuId, skuNum }) {
			state.cartList = state.cartList.map((cart) => {
				if (cart.skuId === skuId) {
					cart.skuNum += skuNum;
				}
				return cart;
			});
		}
	}
};
