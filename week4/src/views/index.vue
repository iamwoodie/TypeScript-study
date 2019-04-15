<template>
  <div class="page-container">
    <div class="page-header">
      首页
    </div>
    <div class="page-content">
      <div class="tab-wrapper">
        <ul class="tab-list">
          <li
            v-for="item in tabList"
            class="tab-item"
            :class="{'active': curTab === item.value}"
            @click="handleToggleTab(item.value)">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="movie-list-wrapper">
        <ul class="movie-list">
          <li class="movie-item" v-for="item in movieList">
            <movie-item :movieInfo="item"></movie-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getMovieList } from '@/api/index.ts'
import MovieItem from '@/components/MovieItem.vue'
import { movieItemInterface, movieListInterface } from '@/interface/index.ts'

export default {
  components: {
    MovieItem
  },
  data () {
    return {
      curTab: 1,
      tabList: [
        {
          name: '正在上映',
          value: 1
        },
        {
          name: '即将上映',
          value: 2
        },
        {
          name: 'Top250',
          value: 3
        }
      ],
      movieList: []
    }
  },
  created(){
    this.getMovieList()
  },
  methods: {
    handleToggleTab(tabValue) {
      this.curTab = tabValue
      this.getMovieList()
    },
    getMovieList() {
      getMovieList().then(res => {
        this.movieList = res
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .page-container {
    font-size: .24rem;
    font-family: "PingFangSC-Regular";
    
    .page-header {
      height: .9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ff0000;
      color: #fff;
      font-size: .32rem;
    }

    .page-content {

      .tab-list {
        display: flex;
        flex-direction: row;
        padding: 0 .2rem;

        .tab-item {
          width: 33.33%;
          padding: .2rem .4rem;
          line-height: .3rem;
          font-size: .3rem;
          text-align: center;
          border-bottom: 2px solid #fff;
          span {
            line-height: .45rem;
          }

          &.active {
            border-bottom: 2px solid #ff0000;
            span {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
</style>
