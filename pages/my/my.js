// pages/my/my.js
const app = getApp()

Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    myRegistrations: [],
    registeredCount: 0
  },

  onShow() {
    this.loadData()
  },

  loadData() {
    const userInfo = wx.getStorageSync('userInfo')
    const myRegistrations = wx.getStorageSync('myRegistrations') || []
    this.setData({
      userInfo,
      hasUserInfo: !!userInfo,
      myRegistrations,
      registeredCount: myRegistrations.length
    })
  },

  onGetUserInfo() {
    // 模拟获取用户信息
    const userInfo = {
      nickName: '沙龙爱好者',
      avatarUrl: 'https://picsum.photos/seed/avatar/200/200'
    }
    wx.setStorageSync('userInfo', userInfo)
    this.setData({
      userInfo,
      hasUserInfo: true
    })
    wx.showToast({ title: '登录成功', icon: 'success' })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  goCreate() {
    wx.navigateTo({
      url: '/pages/create/create'
    })
  },

  clearData() {
    wx.showModal({
      title: '确认清除',
      content: '将清除本地报名记录，确定吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('myRegistrations')
          wx.removeStorageSync('registeredEvents')
          this.loadData()
          wx.showToast({ title: '已清除', icon: 'success' })
        }
      }
    })
  }
})