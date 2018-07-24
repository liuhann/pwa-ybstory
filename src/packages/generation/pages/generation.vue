<template>
    <div class="root">
        <div class="root-icons">
            <van-icon name="search"></van-icon>
            <van-icon name="like-o"><span>112</span></van-icon>
            <van-icon name="completed"></van-icon>
            <van-icon name="edit" @click="editCurrentStory"></van-icon>
        </div>
        <swipped-stories @choose-story="chooseStory" @swipped-to="swippedToStory"></swipped-stories>
        <story-player :story="story"></story-player>
    </div>
</template>

<script>
import SwippedStories from './swipped-stories'
import StoryPlayer from './story-player'
import GenDAO from '../dao/gen-dao'
import Icon from 'vant/lib/icon'
import 'vant/lib/vant-css/icon.css'

export default {
  name: 'generation',
  components: {
    SwippedStories,
    StoryPlayer,
    'van-icon': Icon
  },
  data () {
    return {
      story: null,
      swippedStory: null
    }
  },
  created () {
    this.ctx.gendao = new GenDAO(this.ctx)
  },
  methods: {
    chooseStory (story) {
      this.story = story
    },
	  swippedToStory (story) {
    	this.swippedStory = story
    },

	  editCurrentStory () {
      this.$router.push('/system/modify/' + this.swippedStory._id)
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
    .van-icon-share {
        top: 65%;
    }
    .van-icon-completed {
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
