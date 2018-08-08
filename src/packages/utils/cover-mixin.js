export default {
  computed: {
    imageHost () {
      return this.ctx.bootOpts.servers.default.baseURL
    }
  },
  methods: {
    getStoryCover (story) {
      if (story.cover) {
        return `${this.imageHost}/story/cover/480/480/${story.cover}.png`
      } else {
        const i = Math.floor(Math.random() * 1000) % 4 + 1
        return 'http://m.yuanbaogushi.com/img/story_cover' + i + '.png'
      }
    },
    getStoryCoverBg (story) {
      return "url('" + this.getStoryCover(story) + "')"
    }
  }
}
