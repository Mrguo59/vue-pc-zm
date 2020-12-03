// search组件的vuex状态
import { reqGetSearchList } from '@api/search';

export default {
	state: {
		searchList: {
			trademarkList: [], // 品牌数据
			attrsList: [], // 品牌属性数据
			goodsList: [] // 商品数据
		}
	},

	getters: {
		// 方便使用数据
		trademarkList(state) {
			return state.searchList.trademarkList;
		},
		attrsList(state) {
			return state.searchList.attrsList;
		},
		goodsList(state) {
			return state.searchList.goodsList;
		},
		total(state){
			return state.searchList.total
		}
	},

	actions: {
		async getSearchList({ commit }, data = {}) {
			const searchList = await reqGetSearchList(data);
			commit('GET_SEARCH_LIST', searchList);
		}
	},

	mutations: {
		GET_SEARCH_LIST(state, searchList) {
			state.searchList = searchList;
		}
	}
};
