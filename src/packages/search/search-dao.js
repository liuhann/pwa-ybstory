export default class SearchDAO {
  constructor (ctx) {
    this.ctx = ctx
  }
  async search (query, skip = 0, limit = 20) {
    const result = await this.ctx.client.get('/story/search',  {
      params: {
        query,
        skip,
        limit
      }
    })
    return result.data
  }
}
