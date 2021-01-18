import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
// import Home from '../views/Home'
import blankPage from '../views/blankPage/index'
import page from '../views/blankPage/page'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const routes = [
  {
    path: '/',
    component: Layout,
    name: '',
    redirect: '/reportList',
    hidden: true,
  },
  {
    path: '/1',
    component: Layout,
    name: '数据管理',
    iconCls: 'el-icon-message',
    children: [
      {
        path: '/1-2',
        component: blankPage,
        redirect: '/reportList',
        name: '报告数据',
        children: [
          { path: '/reportList', component: page, name: '报告列表' },
          { path: '/reportAnalysis', component: page, name: '报告统计分析' },
        ],
      },
      { path: '/1-3', component: blankPage, name: '运营数据', children: [{ path: '/dataBoard', component: page, name: '数据面板' }] },
    ],
  },
  {
    path: '/2',
    component: Layout,
    name: '人员管理',
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/2-1', component: blankPage, redirect: '/orgList', name: '机构管理', children: [{ path: '/orgList', component: page, name: '机构列表' }] },
      {
        path: '/2-2',
        component: blankPage,
        name: '医师管理',
        children: [
          { path: '/depaManagement', component: page, name: '科室管理' },
          { path: '/doctManagement', component: page, name: '医师管理' },
          { path: '/pharManagement', component: page, name: '药师管理' },
          { path: '/doctClass', component: page, name: '医师分级' },
          { path: '/doctFunction', component: page, name: '功能列表' },
          { path: '/messHistory', component: page, name: '群发历史' },
        ],
      },
      {
        path: '/2-3',
        component: blankPage,
        name: '患者管理',
        children: [
          { path: '/patientList', component: page, name: '患者列表' },
          { path: '/patientClass', component: page, name: '患者分类' },
          { path: '/patientFunction', component: page, name: '功能列表' },
          { path: '/patientMessHistory', component: page, name: '群发历史' },
        ],
      },
      {
        path: '/2-4',
        component: blankPage,
        name: '权限管理',
        children: [
          { path: '/accountManagement', component: page, name: '管理账号' },
          { path: '/roleManagement', component: page, name: '角色管理' },
          { path: '/loginLog', component: page, name: '登录日志' },
        ],
      },
    ],
  },
  {
    path: '/3',
    component: Layout,
    name: '服务管理',
    iconCls: 'fa fa-address-card',
    children: [
      {
        path: '/3-1',
        component: blankPage,
        redirect: '/consRecords',

        name: '服务记录',
        children: [
          { path: '/consRecords', component: page, name: '问诊记录' },
          { path: '/presRecords', component: page, name: '处方记录' },
        ],
      },
      {
        path: '/3-2',
        component: blankPage,
        name: '服务包管理',
        children: [
          { path: '/servTemplate', component: page, name: '服务包模板' },
          { path: '/servList', component: page, name: '服务包列表' },
          { path: '/servUser', component: page, name: '服务包用户' },
        ],
      },
    ],
  },
  {
    path: '/4',
    component: Layout,
    name: '药品管理',
    iconCls: 'fa fa-address-card',
    children: [
      {
        path: '/4-1',
        component: blankPage,
        redirect: '/drugClass',
        name: '药品管理',
        children: [
          { path: '/drugClass', component: page, name: '药品分类' },
          { path: '/drugList', component: page, name: '药品列表' },
          { path: '/stockManagement', component: page, name: '库存管理' },
        ],
      },
      {
        path: '/4-2',
        component: blankPage,
        name: '订单记录',
        children: [
          { path: '/buyRecords', component: page, name: '购买记录' },
          { path: '/cancelRecords', component: page, name: '退货记录' },
        ],
      },
    ],
  },
  {
    path: '/5',
    component: Layout,
    name: '工具管理',
    iconCls: 'fa fa-address-card',
    children: [
      {
        path: '/5-1',
        component: blankPage,
        redirect: '/questionTemplate',
        name: '问卷管理',
        children: [
          { path: '/questionTemplate', component: page, name: '问卷模板' },
          { path: '/questionList', component: page, name: '问卷列表' },
          { path: '/questionRecords', component: page, name: '问卷记录' },
        ],
      },
      { path: '/5-2', component: blankPage, name: '健康评测', children: [{ path: '/healthList', component: page, name: '健康评测列表' }] },
      {
        path: '/5-3',
        component: blankPage,
        name: '随访计划管理',
        children: [
          { path: '/followTemplate', component: page, name: '随访计划模板' },
          { path: '/followList', component: page, name: '随访计划列表' },
        ],
      },
    ],
  },
  {
    path: '/6',
    component: Layout,
    name: '内容管理',
    iconCls: 'fa fa-bar-chart',
    children: [
      {
        path: '/6-1',
        component: blankPage,
        redirect: '/scieClass',
        name: '科普宣教',
        children: [
          { path: '/scieClass', component: page, name: '科普宣教分类' },
          { path: '/scieList', component: page, name: '科普宣教列表' },
        ],
      },
      { path: '/6-2', component: blankPage, name: '活动位管理', children: [{ path: '/LayoutpageBanner', component: page, name: '首页轮播图' }] },
      {
        path: '/6-3',
        component: blankPage,
        name: '医生文章',
        children: [
          { path: '/articleList', component: page, name: '医生文章列表' },
          { path: '/article', component: page, name: '医生文章统计' },
        ],
      },
      {
        path: '/6-4',
        component: blankPage,
        name: '药品知识库',
        children: [
          { path: '/drugClass', component: page, name: '药品知识分类' },
          { path: '/drugList', component: page, name: '药品知识列表' },
        ],
      },
      {
        path: '/6-5',
        component: blankPage,
        name: '疾病知识库',
        children: [
          { path: '/diseaseClass', component: page, name: '疾病知识分类' },
          { path: '/diseaseList', component: page, name: '疾病知识列表' },
        ],
      },
      {
        path: '/6-6',
        component: blankPage,
        name: 'Q/A文件',
        children: [
          { path: '/doctorQA', component: page, name: '医生端Q/A' },
          { path: '/userQA', component: page, name: '用户端Q/A' },
        ],
      },
    ],
  },
  {
    path: '/404',
    component: Layout,
    name: '',
    hidden: true,
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' },
  },
]

const router = new Router({
  routes,
})

export default router
