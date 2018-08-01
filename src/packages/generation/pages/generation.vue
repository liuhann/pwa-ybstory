<template>
    <div class="root">
        <van-tabs v-model="active" class="root-tabs">
            <van-tab v-for="category in mainCategories" :title="category" :key="category">
            </van-tab>
        </van-tabs>
        <div class="root-icons">
            <van-icon name="search" @click="goSearch"></van-icon>
            <!--<van-icon name="like-o" @click="likeCurrentStory"><span>{{likeCount}}</span></van-icon>-->
            <van-icon name="info-o"><span>{{listenCount}}</span></van-icon>
            <!--<van-icon name="edit" @click="editCurrentStory"></van-icon>-->
        </div>
        <swipped-stories :filter="filter" @choose-story="chooseStory" @swipped-to="swippedToStory"></swipped-stories>
        <story-player :story="story"></story-player>
    </div>
</template>

<script>
import SwippedStories from './swipped-stories'
import Tab from 'vant/lib/tab'
import Tabs from 'vant/lib/tabs'
import StoryPlayer from './story-player'
import Icon from 'vant/lib/icon'
import 'vant/lib/vant-css/icon.css'
import 'vant/lib/vant-css/tab.css'

export default {
  name: 'generation',
  components: {
    SwippedStories,
    StoryPlayer,
    'van-icon': Icon,
    'van-tabs': Tabs,
    'van-tab': Tab
  },
  data () {
    return {
      searchTitle: null,
      storyId: null,
      mainCategories: ['首页', '睡前故事', '绘本'],
      story: null,
      active: '首页',
      swippedStory: null
    }
  },

  watch: {
    '$route': function (from, to) {
      this.loadQueryFromRoute()
    }
  },

  computed: {
    filter () {
      const filter = {}
      if (this.active !== '首页') {
        filter.type = this.active
      }
      if (this.searchTitle) {
        filter.title = this.searchTitle
      }
      return filter
    },
    likeCount () {
      if (this.swippedStory && this.swippedStory.like) {
        return this.swippedStory.like
      } else {
        return ''
      }
    },
    listenCount () {
      if (this.swippedStory && this.swippedStory.listened) {
        return this.swippedStory.listened
      } else {
        return ''
      }
    }
  },

  created () {
    this.loadQueryFromRoute()
  },

  methods: {
    loadQueryFromRoute () {
      this.searchTitle = this.$route.query.title
      this.storyId = this.$route.query.id
    },
    chooseStory (story) {
      this.story = story
      this.ctx.gendao.markStory(this.story, 'listened')
    },
    swippedToStory (story) {
      this.swippedStory = story
    },
    editCurrentStory () {
      this.$router.push('/system/modify/' + this.swippedStory._id)
    },
    likeCurrentStory () {
      if (this.swippedStory) {
        this.ctx.gendao.markStory(this.story, 'like')
      }
    },
    goSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less">
.root {
    position: relative;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    .root-tabs {
        position: absolute;
        left: 12vw;
        top: 2vw;
        right: 12vw;
        z-index: 101;
        .van-tabs__wrap:after {
            border: none;
        }
        .van-tab, .van-tabs, .van-tabs__nav {
            background-color: transparent;
        }
    }
    .root-icons .van-icon {
        color: rgba(255,255,255,.85);
        position: absolute;
        right: 4vw;
        z-index: 101;
        font-size: 6vw;
        span {
            display: block;
            font-size: 3.2vw;
            text-align: center;
        }
    }
    .van-icon-search {
        top: 4vw;
    }
    .van-icon-info-o {
        top: 55%;
    }
    .van-icon-like-o {
        top: 45%;
    }
    .van-icon-edit {
        top: 75%
    }
}
</style>
