import StoryModify from './story-modify'
// 异步的写法
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')

export default {
  routes: [{
    path: '/system/modify/:id',
    component: StoryModify
  }],

  async onload (ctx) {
  }
}
