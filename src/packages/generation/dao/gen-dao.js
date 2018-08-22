export default class GenDAO {
  constructor (ctx) {
    this.ctx = ctx
  }
  async getStoryDetail () {

  }
  async someMoreStories () {
    const result = await this.ctx.client.get('/story/samples')
    return result.data
  }

  async findSome (filter) {
    const result = await this.ctx.client.get('/story/random', filter)
    return result.data
  }

  async markStory (story, mark) {
    const result = await this.ctx.client.put('/story/mark/' + story._id + '/' + mark)
    return result.data
  }

  async getRecommends () {
    const result = await this.ctx.client.get('/story/recommends')
    return result.data
  }
  async getLabels () {
    const result = await this.ctx.client.get('/story/labels')
    return result.data
  }
  async getCategories () {
    const result = await this.ctx.client.get('/story/categories')
    return result.data
  }
}
