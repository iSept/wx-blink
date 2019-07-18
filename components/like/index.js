// components/like/index.js

// 组件封装：
// 1.封装性，开放性
// 2.组件粒度

Component({
  /**
   * 组件的属性列表
   * --> 组件的对外属性数据
   */
  properties: {
    like: { // 属性名
      type: Boolean, // 属性的类型
      value: false, // 属性的初始值
      // observer 在新版本基础库中不推荐使用这个字段，
      // 而是使用 Component 构造器的 observers 字段代替，它更加强大且性能更好
      observer: function(newVal, oldVal) {} // 属性值变化时的回调函数
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   * --> 组件的内部私有数据（数据绑定），和 properties 一同用于组件的模板渲染
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLink: function(event) {
      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count - 1 : count + 1;
      this.setData({ // 设置 properties 数据方法
        count,
        like: !like
      })
      let behavior = this.properties.like ? 'like' : 'cancel';
      // 激活自定义事件, 参数一：事件名称, 参数二设置事件event事件的detail属性
      this.triggerEvent('like', { behavior }, {});
      // 这里的 properties 和 data 数据一模一样，小程序做了合并
      // console.log(this.properties, this.data);
    }
  }
})
