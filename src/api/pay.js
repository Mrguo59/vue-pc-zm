import request from '@utils/request';
// 获取订单信息列表
export const reqGetTrade = () => {
	return request({
		method: 'GET',
		url: '/order/auth/trade'
	});
};
// 提交订单
export const reqSubmitOrder = ({
	tradeNo,
	consignee,
	consigneeTel,
	deliveryAddress,
	paymentWay,
	orderComment,
	orderDetailList
}) => {
	return request({
		method: 'POST',
		url: '/order/auth/submitOrder',
		// query参数
		params: { tradeNo },
		data: {
			// body参数
			consignee,
			consigneeTel,
			deliveryAddress,
			paymentWay,
			orderComment,
			orderDetailList
		}
	});
};
//获取订单支付信息
export const reqCreateNative = (orderId) => {
	return request({
		method: 'GET',
		url: `/payment/weixin/createNative/${orderId}`
	});
};
//获取我的订单列表
export const reqGetOrderAuth = ({ page, limit }) => {
	return request({
		method: 'GET',
		url: `/order/auth/${page}/${limit}`
	});
};
