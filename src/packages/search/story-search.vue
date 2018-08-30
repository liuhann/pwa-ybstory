<template>
  <div class="story-search">
    <div class="search-input
">
      <van-field
        v-model="value"
        center
        clearable
        placeholder="请输入想听的内容">
        <van-icon slot="label" name="arrow-left" @click="navBack"></van-icon>
        <van-button slot="button" size="small" type="primary" @click="onSearch">搜索</van-button>
      </van-field>
    </div>
    <div class="search-histories" v-if="!searched">
      <div class="title">
        <div class="name">搜索历史</div>
        <div class="clear" @click="clearHistory()">清除搜索历史</div>
      </div>
      <div class="list">
        <div v-if="histories.length===0" class="no-history">无搜索历史</div>
        <div v-else>
          <div class="history" v-for="history in histories" :key="history" @click="searchHistory(history)">
            {{history}}
          </div>
        </div>
      </div>
    </div>
    <div class="result-list" v-if="searched">
      <div v-if="results.length===0" class="empty">
        没有找到相关的故事
      </div>
        <div class="item" v-for="story in results" :key="story._id" @click="openStory(story)">
          <div class="cover">
            <img :src="getStoryCover(story)">
          </div>
          <div class="story-title">
            {{story.title}}
          </div>
          <div class="short">
            {{story.short}}
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
      searched: false
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
        list.sort((a, b) => {
          if (a.cover && !b.cover) {
            return -1
          }
          return 1
        })

        this.loading = false
        this.results = list
        this.searched = true
      }
    },
    navBack () {
      this.$router.go(-1)
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
      return histories || []
    },

    clearHistory () {
      localStorage.removeItem('yb-history')
      this.histories = []
    },

    addSearchHistory (qu) {
      var ybHistory = localStorage.getItem('yb-history')
      let histories = []
      if (ybHistory) {
        histories = JSON.parse(ybHistory)
      }
      if (histories.indexOf(qu) === -1) {
        histories.unshift(qu)
        if (histories.length > 10) {
          histories.length = 10
        }
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
  overflow-y: auto;
  background: #f8f8f8;
  .van-cell {
    .van-cell__title {
      max-width: 36px;
    }
  }
  .search-input {
    border-bottom: 1px solid #f1f1f1;
  }
  .van-search {
    height: 56px;
  }

  .search-histories {
    padding: 10px;
    .title {
      display: flex;
      margin: 10px 0px;
      .name {
        flex: 1;
        color: #666;
      }
      .clear {
        color: #44bb00;
      }
    }

    .list {
      .history {
        float: left;
        padding: 6px 10px;
        margin-right: 16px;
        background: #fff;
        color: #999;
      }
    }
  }

  .result-list {
    .item {
      height: 65px;
      background: #fff;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
      position: relative;
      .cover {
        position: absolute;
        left: 10px;
        top:5px;
        img {
          width: 55px;
          height: 55px;
        }
      }
      .story-title {
        position: absolute;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #666;
        top: 12px;
        left: 76px;
        right: 10px;
        height: 28px;
      }
      .short {
        position: absolute;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        color: #999;
        top: 37px;
        left: 76px;
        right: 10px;
      }
    }
  }
}
</style>
