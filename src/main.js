import AsyncBoot from 'async-boot'
import config from './config'
import './packages/styles/animation.less'
import RouterView from './view'

import dao from './packages/dao'
import generation from './packages/generation'
import modify from './packages/modify'
import search from './packages/search'
import cordova from './packages/cordova'

const boot = new AsyncBoot({
  vue: {
    rootApp: RouterView,
    mount: '#app'
  },
  servers: config.servers,
  packages: [
    dao, generation, modify, search, cordova
  ],
  started: async (ctx, next) => {
    if (!location.href.match('generation')) {
      ctx._router.replace('/generation')
    }
    await next()
  }
})

boot.startUp()
