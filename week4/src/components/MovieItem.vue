<template lang='html'>
  <div class='movie-item'>
    <div class="img-panel">
      <img :src="movieInfo.moviePicture" alt="">
    </div>
    <div class="info-panel">
      <p class="base-info">
        <span class="movie-name">{{movieInfo.movieName}}</span>
        <span class="movie-grade">{{movieInfo.grade}}分</span>
      </p>
      <p class="classify">
        <span class="label">类别:</span>
        <span class="info-value">{{movieInfo.movieClassify}}</span>
      </p>
      <p class="actor">
        <span class="label">主演:</span>
        <span class="info-value">{{movieInfo.actor}}</span>
      </p>
      <p class="director">
        <span class="label">导演:</span>
        <span class="info-value">{{movieInfo.director}}</span>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>

export default {
  name: 'movie-item',
  props: {
    movieInfo: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang='less' scoped>
  .movie-item {
    display: flex;
    padding: .2rem;
    border-bottom: 1px solid #e5e5e5;
    font-family: "PingFangSC-Regular";

    .img-panel {
      width: 2rem;
      height: 2.4rem;
      flex: 0 0 auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info-panel {
      padding: 0 .2rem;
      font-size: .3rem;
      flex: 1 0 auto;
      line-height: .42rem;

      .base-info {
        display: flex;
        justify-content: space-between;
        font-size: .34rem;
        padding-bottom: .3rem;

        .movie-name {
          color: #333;
        }

        .movie-grade {
          color: orange;
        }
      }

      .classify,
      .actor {
        color: #666;
        padding-bottom: .1rem;
      }

      .director {
        padding-top: .1rem;
        color: #999;
      }
    }
  }
</style>
