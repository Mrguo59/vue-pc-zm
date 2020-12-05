import { reqGetCartList, reqPostAddToCart } from '@api/shopcart';

export default {
	state: {
		cartList: []// 所有购物车数据
	},
	getters: {},
	actions: {
		async getCartList({ commit }) {
			const cartList = await reqGetCartList();
			commit('GET_CART_LIST', cartList);
		},
		async reqPostAddToCart({ commit }, { skuId, skuNum }) {
			await reqPostAddToCart(skuId, skuNum);
			console.log(commit);
		}
	},
	mutations: {
		GET_CART_LIST(state, cartList) {
			state.cartList = cartList;
		}
	}
};
