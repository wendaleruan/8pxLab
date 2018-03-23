// pages/tools/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    contents:[]
    // contentGroupID: 1513132500758615
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let contentGroupID = 1513132500758615;
    let categoryID = 1513132644574432;
    wx.BaaS.getContentList({ contentGroupID, categoryID }).then((res) => {
      console.log(res.data.objects)
      this.setData({
        contents: res.data.objects
      }), (err) => {
        console.log(err)
      }
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