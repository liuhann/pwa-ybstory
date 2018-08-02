import AsyncBoot from 'async-boot'
import config from './config'

import 'vant/lib/vant-css/base.css'

import RouterView from './view'

import dao from './packages/dao'
import generation from './packages/generation'
import modify from './packages/modify'
import search from './packages/search'

const boot = new AsyncBoot({
  vue: {
    rootApp: RouterView,
    mount: '#app'
  },
  servers: config.servers,
  packages: [
    dao, generation, modify, search
  ],
  started: async (ctx, next) => {
    if (!location.href.match('generation')) {
      ctx._router.replace('/generation')
    }
    await next()
  }
})

boot.startUp()
