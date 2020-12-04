// home组件的vuex状态
import {
	reqGetBaseCategoryList,
	reqGetBanners,
	reqGetFloors,
	reqGetRecommends,
	reqGetRank,
	reqGetBrand
} from '@api/home';

export default {
	state: {
		categoryList: [], // 首页三级分类列表数据
		banners: [], // 首页轮播图数据
		floors: [], // 首页楼层数据
		recommends: [],
		ranks: [],
		brands: []
	},

	getters: {},

	actions: {
		// 获取首页三级分类列表数据
		async getCategoryList({ commit }) {
			// 发送请求
			const categoryList = await reqGetBaseCategoryList();
			// 触发mutation函数
			commit('GET_CATEGORY_LIST', categoryList);
		},

		async getBanners({ commit }) {
			// 发送请求
			const banners = await reqGetBanners();
			// 触发mutation函数
			commit('GET_BANNERS', banners);
		},

		async getFloors({ commit }) {
			const floors = await reqGetFloors();
			commit('GET_FLOORS', floors);
		},

		async getRecommends({ commit }) {
			const recommends = await reqGetRecommends();
			commit('GET_RECOMMENDS', recommends);
		},

		async getRank({ commit }) {
			const ranks = await reqGetRank();
			commit('GET_RANK', ranks);
		},

		async getBrand({ commit }) {
			const brands = await reqGetBrand();
			commit('GET_BRAND', brands);
		}
	},

	mutations: {
		GET_CATEGORY_LIST(state, categoryList) {
			state.categoryList = categoryList;
		},
		GET_BANNERS(state, banners) {
			state.banners = banners;
		},
		GET_FLOORS(state, floors) {
			state.floors = floors;
		},
		GET_RECOMMENDS(state, recommends) {
			state.recommends = recommends;
		},
		GET_RANK(state, ranks) {
			state.ranks = ranks;
		},
		GET_BRAND(state, brands) {
			state.brands = brands;
		}
	}
};
