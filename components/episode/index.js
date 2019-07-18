// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function(newVal, oldVal, changedPath) { // 数据改变时调用 observer
        // console.log(newVal, oldVal, changedPath);
        let val = newVal < 10 ? '0' + newVal : newVal;
        // 千万不要在属性的observer监听函数里面尝试修改属性自身的值，否则极有可能引起无限递归的情况
        this.setData({
          _index: val // 最好的解决方案是 wxs
        })
      }
    }
  },

  /**
   * 组件的初始数据
   * data 的值也会被页面绑定, 不可以从组件外部设置
   * data 里面的数据要赋初始值，跟 properties 里面的变量不能重复
   * 1、对一个 page 页面来说，wxml 里面所用的所有变量都是有 data 所决定的；
   * 2、对一个组件来说，wxml 里面使用的变量除了 data 还有 properties;
   */
  data: {
    _index: 0,
    year: 0, // 当前的年份
    month: '', // 当前的月份
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  // 组件生命周期函数，在组件实例进入页面节点树时执行
  attached: function() {
    // console.log(this.properties); // propertiex 和 data 数据一致。小程序将两者合并了
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth(); // 0 - 11
    this.setData({
      year,
      month: this.data.months[month]
    })
  },

  // 组件生命周期函数，在组件布局完成后执行
  ready() {},

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
