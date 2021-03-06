<template>
<div class="horizontal-swipper">
    <swiper class="swiper" :options="swiperOption" ref="swiper" @slideChange="slideChange($event)">
        <swiper-slide class="slide" v-for="(story, index) in stories" :key="index">
          <img @click="chooseStory(story)" class="cover" :src="getStoryCover(story)" :style="imageStyle">
          <div class="story-intro">
              <div class="title">
                  {{story.title}}
              </div>
              <div class="short">
                  {{story.short}}
              </div>
          </div>
          <div class="bg-mask"></div>
          <div class="background" :style="{
            backgroundImage: getStoryCoverBg(story)
          }"></div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import coverMixins from '../../utils/cover-mixin'
export default {
  name: 'swipped-stories',
  components: {
    swiper,
    swiperSlide
  },
  mixins: [coverMixins],
  props: {
    filter: {
      type: Object
    },
    playStory: {
      type: Object
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical'
      },
      stories: [],
      currentIndex: 0,
      skip: 0,
      limit: 20
    }
  },
  computed: {
    imageStyle () {
      return {
        width: window.clientWidth - 20,
        height: window.clientWidth - 20
      }
    }
  },
  async created () {
    this.fetchMore()
  },
  watch: {
    playStory () {
      if (this.playStory) {
        this.stories.unshift(this.playStory)
        this.chooseStory(this.playStory)
      }
    },
    filter () {
      this.stories = []
      this.currentIndex = 1
      this.skip = 0
      this.fetchMore()
    }
  },

  methods: {
    slideChange (index) {
      this.currentIndex = this.$refs.swiper.swiper.activeIndex
      if (this.currentIndex + 10 > this.stories.length) {
        this.fetchMore()
      }
      this.$emit('swipped-to', this.stories[this.currentIndex])
    },
    async fetchMore () {
      if (this.filter.title) {
        const list = await this.ctx.searchDao.search(this.filter.title, this.skip, this.limit)
        this.stories = [...this.stories, ...list]
        this.skip += this.limit
      } else {
        let more = await this.ctx.gendao.someMoreStories()
        if (this.stories.length === 0) {
          this.$emit('swipped-to', more[0])
        }
        this.stories = [...this.stories, ...more]
      }
    },
    chooseStory (story) {
      this.$emit('choose-story', story)
    }
  }
}
</script>

<style lang="less">
.horizontal-swipper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    .swiper-container {
        height: 100vh;
    }
    .swiper-slide {
        position: relative;
        img.cover {
          position: absolute;
          width: 66vw;
          height: 66vw;
          left: 17vw;
          top: 20%;
          z-index: 11;
          border: 3px solid rgba(255,255,255,.9);
        }
        .background {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-size: cover;
            -webkit-filter: blur(5px);
        }
        .bg-mask {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: .5;
            z-index: 4;
            background-color: #000;
        }
        .story-intro {
          position: absolute;
          z-index: 11;
          font-size: 4.2vw;
          line-height: 9vw;
          font-weight: bold;
          padding: 10px;
          color: #fff;
          bottom: 15vh;
          height: 23.5vw;
          overflow: hidden;
            .short {
              line-height: 5vw;
              font-weight: normal;
              font-size: 3.5vw;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
        }
    }
}

@-webkit-keyframes filter-animation {
    0% {
        background-position: top;
    }

    50% {
        background-position: bottom;
    }

    100% {
        background-position: top;
    }
}
</style>
