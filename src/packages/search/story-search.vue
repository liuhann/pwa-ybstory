<template>
  <div class="story-search">
    <div class="search-input">
      <van-field
        v-model="value"
        center
        clearable
        placeholder="请输入想听的内容">
        <van-icon slot="label" name="arrow-left"></van-icon>
        <van-button slot="button" size="small" type="primary" @click="onSearch">搜索</van-button>
      </van-field>
    </div>
    <div class="search-histories">
      <div >搜索历史</div>
      <div class="list">
        <div v-if="histories.length===0">无搜索历史</div>
        <div v-else>
          <div v-for="history in histories" :key="history" @click="searchHistory">
            {{history}}
          </div>
        </div>
      </div>
    </div>
    <div class="result-list">
        <div class="item" v-for="story in results" :key="story._id" @click="openStory(story)">
          <div class="background" :style="{
            backgroundImage: getStoryCoverBg(story)
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
import Icon from 'vant/lib/icon'
import Field from 'vant/lib/field'
import Button from 'vant/lib/button'
import 'vant/lib/vant-css/field.css'
import 'vant/lib/vant-css/button.css'
import 'vant/lib/vant-css/icon.css'
import coverMixins from '../utils/cover-mixin'

export default {
  name: 'story-search',
  components: {
    'van-field': Field,
    'van-button': Button,
    'van-icon': Icon
  },
  mixins: [coverMixins],
  data () {
    return {
      histories: [],
      skip: 0,
      limit: 50,
      value: '',
      results: [],
      loading: false,
      finished: false
    }
  },
  created () {
    this.histories = this.getSearchHistory()
  },
  methods: {
    async onSearch () {
      this.skip = 0
      this.results = []
      await this.loadMore()
    },
    async loadMore () {
      if (this.value) {
        this.loading = true
        this.addSearchHistory(this.value)
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
    },

    searchHistory (history) {
      this.value = history
      this.loadMore()
    },

    getSearchHistory () {
      var ybHistory = localStorage.getItem('yb-history')
      let histories = []
      if (ybHistory) {
        histories = JSON.parse(ybHistory)
      }
      return histories
    },

    addSearchHistory (qu) {
      var ybHistory = localStorage.getItem('yb-history')
      let histories = []
      if (ybHistory) {
        histories = JSON.parse(ybHistory)
      }
      histories.unshift(qu)
      if (histories.length > 10) {
        histories.length = 10
      }
      localStorage.setItem('yb-history', JSON.stringify(histories))
    }
  }
}
</script>

<style lang="less">
.story-search {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f8f8f8;
  .van-cell {
    .van-cell__title {
      max-width: 36px;
    }
  }
  .search-input {
  }
  .van-search {
    height: 56px;
  }

  .search-histories {
    padding: 10px;
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
