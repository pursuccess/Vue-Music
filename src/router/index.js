import Vue from 'vue'
import Router from 'vue-router'
// import recommend from 'components/recommend/recommend'
// import singer from 'components/singer/singer'
// import singerDetail from 'components/singer-detail/singer-detail'
// import rank from 'components/rank/rank'
// import disc from 'components/disc/disc'
// import topList from 'components/top-list/top-list'
// import search from 'components/search/search'
// import userCenter from 'components/user-center/user-center'

Vue.use(Router)

const recommend = () => import('components/recommend/recommend')
const singer = () => import('components/singer/singer')
const rank = () => import('components/rank/rank')
const search = () => import('components/search/search')
const singerDetail = () => import('components/singer-detail/singer-detail')
const disc = () => import('components/disc/disc')
const topList = () => import('components/top-list/top-list')
const userCenter = () => import('components/user-center/user-center')

export default new Router({
  routes: [
    {
      // 地址为空默认跳转首页
      path: '/',
      redirect: '/recommend'
    },
    {
      // 推荐
      path: '/recommend',
      name: 'recommend',
      component: recommend,
      children: [
        {
          path: ':id',
          component: disc
        }
      ]
    },
    {
      // 歌手页
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [
        {
          path: ':id',
          component: singerDetail
        }
      ]
    },
    {
      // 排行榜页
      path: '/rank',
      name: 'rank',
      component: rank,
      children: [
        {
          path: ':id',
          component: topList
        }
      ]
    },
    {
      // 搜索页
      path: '/search',
      name: 'search',
      component: search,
      children: [
        {
          path: ':id',
          component: singerDetail
        }
      ]
    },
    {
      // 搜索页
      path: '/user',
      name: 'userCenter',
      component: userCenter,
    }
  ]
})
