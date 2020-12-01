import request from '@utils/request';

// 获取所有商品数据
export const reqGetSearchList = (data) => {
	return request({
		method: 'POST',
		url: '/list',
		data
	});
};
