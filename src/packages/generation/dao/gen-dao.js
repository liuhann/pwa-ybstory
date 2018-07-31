export default class GenDAO {
  constructor (ctx) {
    this.ctx = ctx
  }

  async someMoreStories () {
    const result = await this.ctx.client.get('/story/samples')
    return result.data
  }

  async markStory (story, mark) {
    const result = await this.ctx.client.get('/story/view/' + story._id + '/' + mark)
    return result.data
  }
}
