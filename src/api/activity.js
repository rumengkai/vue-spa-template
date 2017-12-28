import fetch from '@/utils/fetch'

/* 获取活动详情 */
export function getActivityDetail(params) {
	return fetch({
		url: '/api/activity/targets/get_detail',
		method: 'get',
		params
	})
}
/* 获取活动列表 */
export function getActivityList(params) {
	return fetch({
		url: '/api/activity/targets/get_list',
		method: 'get',
		params
	})
}
/* 获取报名活动中的表单 */
export function getActivityItems(params) {
	return fetch({
		url: '/api/activity/targets/get_items',
		method: 'get',
		params
	})
}