<template>
  <div class="search">
    <van-search
      v-model="value"
      placeholder="请输入你想听的内容"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <van-list
      v-model="loading"
      :finished="finished"
      @load="loadMore"
    >
      <div v-for="story in results" :key="story._id">
        {{story.title}}
      </div>
    </van-list>
  </div>
</template>

<script>
import Search from 'vant/lib/search'
import List from 'vant/lib/list'
import 'vant/lib/vant-css/search.css'
import 'vant/lib/vant-css/list.css'

export default {
  name: 'story-search.vue',
  components: {
    'van-search': Search,
    'van-list': List
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
  methods: {
    async onSearch () {
      this.skip = 0
      await this.loadMore()
    },
    async loadMore () {
      if (this.value) {
        this.loading = true
        const list = await this.ctx.searchDao.search(this.value, this.skip, this.limit)
        this.loading = false
        this.skip += this.limit
        this.results = list
        if (list.length === 0) {
          this.finished = true
        }
      }
    }
  }
}
</script>

<style lang="less">
.search {

}
</style>
