// pages/detail/detail.js
const app = getApp()

Page({
  data: {
    event: null,
    isRegistered: false
  },

  onLoad(options) {
    const id = parseInt(options.id)
    const events = app.globalData.events || []
    const event = events.find(e => e.id === id)
    if (event) {
      this.setData({ event })
      // 检查是否已报名
      const registered = wx.getStorageSync('registeredEvents') || []
      this.setData({
        isRegistered: registered.includes(id)
      })
    } else {
      wx.showToast({ title: '活动不存在', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 1500)
    }
  },

  onRegister() {
    const { event, isRegistered } = this.data
    if (isRegistered) {
      wx.showToast({ title: '您已报名该活动', icon: 'none' })
      return
    }
    if (event.currentPeople >= event.maxPeople) {
      wx.showToast({ title: '名额已满', icon: 'none' })
      return
    }
    if (event.status === 'ended') {
      wx.showToast({ title: '活动已结束', icon: 'none' })
      return
    }
    wx.navigateTo({
      url: `/pages/register/register?id=${event.id}`
    })
  },

  onShareAppMessage() {
    const { event } = this.data
    return {
      title: event ? event.title : '沙龙聚会',
      path: `/pages/detail/detail?id=${event ? event.id : 1}`
    }
  }
})