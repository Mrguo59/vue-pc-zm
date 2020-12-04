// detail组件的vuex状态
import { reqGetDetailList } from '@api/detail';

export default {
	state: {
		DetailList: {
			categoryView: {}, // 分类数据
			spuSaleAttrList: [], // 商品详情数据
			skuInfo: {} // 商品选择属性数据列表
		}
	},
	getters: {
		categoryView(state) {
			return state.DetailList.categoryView;
		},
		spuSaleAttrList(state) {
			return state.DetailList.spuSaleAttrList;
		},
		skuInfo(state) {
			return state.DetailList.skuInfo;
		}
	},
	actions: {
		async getDetailList({ commit }, id) {
			const DetailList = await reqGetDetailList(id);
			commit('GET_DETAIL_LIST', DetailList);
		}
	},
	mutations: {
		GET_DETAIL_LIST(state, DetailList) {
			state.DetailList = DetailList;
		}
	}
};
