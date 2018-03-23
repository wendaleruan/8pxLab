//app.js
App({
  onLaunch: function() {

    // 引入 SDK
    require('./utils/sdk-v1.1.6.js')

    // 初始化 SDK
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
    
  },

  globalData: {
    clientId: 'f23af36ae6c274230254', // 从 BaaS 后台获取 ClientID
  }
})
