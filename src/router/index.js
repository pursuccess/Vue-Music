import Vue from 'vue'
import Router from 'vue-router'
import recommend from 'components/recommend/recommend'
import singer from 'components/singer/singer'
import singerDetail from 'components/singer-detail/singer-detail'
import rank from 'components/rank/rank'
// import search from 'components/search/search'

Vue.use(Router)

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
      component: recommend
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
      // 页
      path: '/rank',
      name: 'rank',
      component: rank
    },
    // {
    //   // 搜索页
    //   path: '/search',
    //   name: 'search',
    //   component: search
    // }
  ]
})
