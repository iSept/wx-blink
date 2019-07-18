// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js';

Component({
  /**
   * behaviors
   * 用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”
   */
  behaviors: [classicBeh], // 多个同名 behavior 属性，后面会覆盖前面

  /**
   * 组件的属性列表
   */
  properties: { // 组件间公用的数据放到了 behavior 中了
    // img: String,
    // content: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playSrc: 'images/player@playing.png',
    pauseSrc: 'images/player@waitting.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
