<template>
  <div class="story-search">
    <div class="search-input">
      <van-field
        v-model="value"
        center
        clearable
        placeholder="请输入想听的内容">
        <van-button slot="button" size="small" type="primary" @click="onSearch">搜索</van-button>
      </van-field>
    </div>
    <div class="result-list">
        <div class="item" v-for="story in results" :key="story._id" @click="openStory(story)">
          <div class="background" :style="{
            backgroundImage: getStoryCoverBg(story.cover)
          }"></div>
          <div class="story-title">
            {{story.title}}
          </div>
          <div class="short">
            {{story.dura}}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Field from 'vant/lib/field'
import Button from 'vant/lib/button'
import 'vant/lib/vant-css/field.css'
import 'vant/lib/vant-css/button.css'

export default {
  name: 'story-search',
  components: {
    'van-field': Field,
    'van-button': Button
  },
  data () {
    return {
      skip: 0,
      limit: 50,
      value: '',
      results: [],
      loading: false,
      finished: false
    }
  },
  computed: {
	  imageHost () {
		  return this.ctx.bootOpts.servers.default.baseURL
	  },
	  imageStyle () {
		  return {
			  width: window.clientWidth - 20,
			  height: window.clientWidth - 20
		  }
	  }
  },
  created () {
  },
  methods: {
	  getStoryCover (cover) {
		  return `${this.imageHost}/story/cover/480/480/${cover}.png`
	  },
	  getStoryCoverBg (cover) {
		  return "url('" + this.getStoryCover(cover) + "')"
	  },

    async onSearch () {
      this.skip = 0
      this.results = []
      await this.loadMore()
    },
    async loadMore () {
      if (this.value) {
        this.loading = true
        const list = await this.ctx.searchDao.search(this.value, this.skip, this.limit)
        this.loading = false
        this.skip += this.limit
        this.results = [...this.results, ...list]
        if (list.length === 0) {
          this.finished = true
        }
      }
    },
    openStory (story) {
      this.$router.replace('/generation?story=' + story._id + '&query=' + this.value + '&skip=' + this.skip + '&limit=' + this.limit)
    }
  }
}
</script>

<style lang="less">
.story-search {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  .van-cell {
    margin: 10px;
    width: auto;
  }
  .search-input {
  }
  .van-search {
    height: 56px;
  }

  .result-list {
    .item {
      float: left;
      width: 50vw;
      height: 50vw;
      box-sizing: border-box;
      position: relative;
      .background {
        width: 100%;
        height: 100%;
        background-size: contain;
      }
      .story-title {
        position: absolute;
        height: 20px;
        background: rgb(65, 126, 196);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        padding: 5px 10px;
        color: #efefef;
        left: 4px;
        right: 4px;
        bottom: 4px;
      }
    }
  }
}
</style>
