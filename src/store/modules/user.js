import { reqRegister, reqLogin, reqLogout } from '@api/user';

export default {
	state: {
		//读取localStorage里的数据，如果有就使用，如果没有就把token设置为空
		token: localStorage.getItem('token') || '',
		name: localStorage.getItem('name') || ''
	},
	getters: {},
	actions: {
		//注册
		async register({ commit }, { phone, password, code }) {
			await reqRegister({ phone, password, code });
			console.log(commit);
		},
		//登录
		async login({ commit }, { phone, password }) {
			const user = await reqLogin({ phone, password });
			commit('LOGIN', user);
		},
		//退出登录
		async Logout({ commit }) {
			await reqLogout();
			commit('LOGOUT');
		}
	},
	mutations: {
		LOGIN(state, user) {
			(state.token = user.token), (state.name = user.name);
		},
		LOGOUT(state) {
			//点击退出登录，清除vuex里的token和name
			(state.token = ''), (state.name = '');
			//清除localStorage存储的token和name
			localStorage.removeItem('token');
			localStorage.removeItem('name');
		}
	}
};
