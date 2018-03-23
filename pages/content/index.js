// pages/content/index.js
const wxParser = require('../../wxParser/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var contentID = options.content_id;
    wx.BaaS.getContent({ richTextID:contentID }).then((res)=>{
      wx.setNavigationBarTitle({ title: res.data.title})
      wxParser.parse({
        bind:'richText',
        html:res.data.content,
        target:this,
        enablePreviewImage:true
      })
      res.data.created_at = this.formatTimestamp(res.data.created_at)
      
      this.setData({
        content: res.data
      })
    },(err)=>{
      console.log(err)
    })
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