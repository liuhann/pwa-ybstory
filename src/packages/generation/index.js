import Generation from './pages/generation'
import GenDAO from './dao/gen-dao'
// 异步的写法
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')

export default {
  routes: [{
    path: '/generation',
    component: Generation
  }],

  async loaded (ctx) {
    ctx.gendao = new GenDAO(this.ctx)
  }
}
