import StorySearch from './story-search'
import SearchDAO from './search-dao'

export default {
  routes: [{
    path: '/search',
    component: StorySearch
  }],
  async onload (ctx) {
    ctx.searchDao = new SearchDAO(ctx)
  }
}
