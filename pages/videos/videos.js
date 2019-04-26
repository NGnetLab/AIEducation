// pages/videos/videos.js
/**
 * input:点击触碰播放视频
 * fullscreenchange：全屏播放
    binderror:播放失败返回
    bindtap:点击
    onload: loading   
    onshareappmessage:
    videoplay:视频的key值索引分别进行指向播放过程
    bindended:
*/

Page({
  data: {
    playIndex: null,//用于记录当前播放的视频的索引值
    courseList: [{
      videoUrl: 'xxxx'//视频路径
    }],
  },
})
