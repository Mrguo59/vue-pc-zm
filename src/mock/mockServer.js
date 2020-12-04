import Mock from 'mockjs';
import banners from './rbanners.json';
import floors from './rfloors.json';
import todayRecommends from './rtodayRecommends.json';
import rank from './rrank.json';
import brand from './rbrand.json';
// 一旦运行就会拦截Get请求，请求地址/mock/banners
// 并最后参数作为响应结果响应~
Mock.mock('/mock/banners', 'get', {
	code: 200,
	'data|4': banners
});

Mock.mock('/mock/floors', 'get', {
	code: 200,
	'data|3-5': floors
});

Mock.mock('/mock/todayRecommend', 'get', {
	code: 200,
	data: todayRecommends
});

Mock.mock('/mock/rank', 'get', {
	code: 200,
	'data|4': rank
});

Mock.mock('/mock/brand', 'get', {
	code: 200,
	'data|10': brand
});
