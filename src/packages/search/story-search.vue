<template>
  <div class="story-search">
    搜索看看
    <input v-model="value" type="search"> <button  @click="onSearch">搜</button>
    <vant-search
      v-model="value"
      placeholder="请输入你想听的内容"
      show-action
      @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </vant-search>
    <div class="result-list">
      <vant-list
        v-model="loading"
        :finished="finished"
        @load="loadMore">
        <div v-for="story in results" :key="story._id" @click="openStory(story)">
          {{story.title}}
        </div>
      </vant-list>
    </div>
  </div>
</template>

<script>
import Search from 'vant/lib/search'
import List from 'vant/lib/list'
import 'vant/lib/vant-css/search.css'
import 'vant/lib/vant-css/list.css'

export default {
  name: 'story-search',
  components: {
    'vant-search': Search,
    'vant-list': List
  },
  data () {
    return {
      skip: 0,
      limit: 20,
      value: '',
      results: [],
      loading: false,
      finished: false
    }
  },
  created () {
    alert('story search created')
  },
  methods: {
    async onSearch () {
      this.skip = 0
      alert('on search')
      await this.loadMore()
    },
    async loadMore () {
      if (this.value) {
        this.loading = true
        alert('load more  ' + this.value)
        const list = await this.ctx.searchDao.search(this.value, this.skip, this.limit)
        alert(list.length)
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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  .van-search {
    height: 56px;
  }
}
</style>
