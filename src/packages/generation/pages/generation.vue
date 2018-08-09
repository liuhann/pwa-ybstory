<template>
    <div class="root">
        <!--<van-tabs v-model="active" class="root-tabs">
            <van-tab v-for="category in mainCategories" :title="category" :key="category">
            </van-tab>
        </van-tabs>-->
        <div v-if="queryTitle" class="query-title" @click="refreshToHome">{{queryTitle}}</div>
        <div class="root-icons">
            <van-icon name="search" @click="goSearch"></van-icon>
            <van-icon class="animated faster" v-if="swippedStory" :name="likeIconName" @click="likeCurrentStory($event)"><span>{{swippedStory.like}}</span></van-icon>
            <van-icon v-if="swippedStory" name="info-o"><span>{{listenCount}}</span></van-icon>
            <!--<van-icon name="edit" @click="editCurrentStory"></van-icon>-->
        </div>
        <swipped-stories :play-story="playStory" :filter="filter" @choose-story="chooseStory" @swipped-to="swippedToStory"></swipped-stories>
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
import addClickEffect from '../../utils/click-effect'

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
      playStory: null,
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
    queryTitle () {
      return this.$route.query.query
    },
    filter () {
      const filter = {}
      if (this.$route.query.query) {
        filter.title = this.$route.query.query
      }
      return filter
    },
    likeCount () {
      debugger
      if (this.swippedStory && this.swippedStory.like) {
        return this.swippedStory.like
      } else {
        return ''
      }
    },
    likeIconName () {
      if (this.swippedStory.liked) {
        return 'like'
      } else {
        return 'like-o'
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
      if (this.$route.query.story) {
        this.loadOneStory(this.$route.query.story)
      } else {
        this.playStory = null
      }
    },

    refreshToHome () {
      this.$router.replace('/generation')
    },

    async loadOneStory (storyId) {
      const result = await this.ctx.appDao.getStoryById(storyId)
      this.swippedStory = result
      this.playStory = result
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

    likeCurrentStory (event) {
      addClickEffect(event.currentTarget, 'pulse')
      if (this.swippedStory) {
        if (!this.swippedToStory.liked) {
          if (this.swippedStory.like) {
            this.swippedStory.like++
          } else {
            this.swippedStory.like = 1
          }
          this.$set(this.swippedStory, 'liked', true)
          this.ctx.gendao.markStory(this.swippedStory, 'like')
        }
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
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    .query-title {
        color: #fff;
        position: absolute;
        left: 12vw;
        z-index: 101;
        width: 60vw;
        top: 2vw;
        font-size: 4.2vw;
        line-height: 9vw;
    }
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
    .van-icon-like-o, .van-icon-like {
        top: 45%;
    }
    .van-icon-edit {
        top: 75%
    }
}
</style>
