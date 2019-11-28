<template>
  <div class="container">
    <div
      v-video-player:myVideoPlayer="playerOptions"
      :playsinline="playsinline"
      class="video-player-box vjs-big-play-centered"
    />
  </div>
</template>
 
<script>
import "videojs-flash";

export default {
  props: ["isLoad2D1", "vedioUrl"],
  data() {
    return {
      playsinline: true,
      playerOptions: {
        // muted: true,
        controls: true,
        language: "zh-CN",
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速率
        aspectRatio: "16:9",
        sources: [
          {
            src: "rtmp://212.64.57.40:1935/vod/测试008.mp4",
            type: "rtmp/mp4" // 类型
          }
        ],
        // hls: true, //启用hls？
        fluid: true, //设置播放器为流体  宽度为外层盒子大小  ps：想设置width：100%找不到方法？这个就对了
        techOrder: ["flash", "html5"], //设置兼容顺序，
        currentTimeDisplay: true // 当前时间
        // autoplay: false
      }
    };
  }
};
</script>
 
<style scoped>
.container {
  width: 50%;
  height: 567px;
}
</style>
