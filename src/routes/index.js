/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Index = r => require(['views/index'], r);
const NotFound = r => require(['views/notfound'], r);
const ActivityList = r => require(['views/activity/list'], r);
const ActivityItems = r => require(['views/activity/items'], r);
const ActivityDetail = r => require(['views/activity/detail'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {path: '', redirect: {name: 'activity-list'}},
  {path: '/index', component: Index, name: 'index'},
  {path: '/activity/list', component: ActivityList, name: 'activity-list'},
  {path: '/activity/items/:id', component: ActivityItems, name: 'activity-items'},
  {path: '/activity/detail/:id', component: ActivityDetail, name: 'activity-detail'}
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
