// pages/classic/classic.js
import ClassicModel from '../../models/classic.js'; // 重要：只能使用相对路径
import LikeModel from '../../models/like.js';

Page({

  /**
   * 页面的初始数据
   * 1、对一个page页面来说，wxml里面所用的所有变量都是有data所决定的；
   * 2、对一个组件来说，wxml里面使用的变量除了data还有properties;
   */
  data: {
    classic: null, // 也可以省略声明
    likeCount: 0, // 当前期刊点赞数量
    likeStatus: false  // 当前期刊点赞状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 数据更新
    ClassicModel.getLatest(res => {
      this.setData({ // 更新数据必须使用setData方法
        classic: res, // data中可不必声明wxml可直接使用
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  onLike(event) {
    // console.log(behavior);
    const behavior = event.detail.behavior;
    let { id, type } = this.data.classic;
    LikeModel.like(behavior, id, type);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
