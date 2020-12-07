import { reqRegister, reqLogin } from '@api/user';

export default {
	state: {
		//读取localStorage里的数据，如果有就使用，如果没有就把token设置为空
		token: localStorage.getItem('token') || '',
		name: localStorage.getItem('name') || ''
	},
	getters: {},
	actions: {
		async register({ commit }, { phone, password, code }) {
			await reqRegister({ phone, password, code });
			console.log(commit);
		},
		async login({ commit }, { phone, password }) {
			const user = await reqLogin({ phone, password });
			commit('LOGIN', user);
		}
	},
	mutations: {
		LOGIN(state, user) {
			(state.token = user.token), (state.name = user.name);
		}
	}
};
