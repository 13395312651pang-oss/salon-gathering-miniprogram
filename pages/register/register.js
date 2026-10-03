// pages/register/register.js
const app = getApp()

Page({
  data: {
    eventId: null,
    event: null,
    form: {
      name: '',
      phone: '',
      company: '',
      remark: ''
    }
  },

  onLoad(options) {
    const id = parseInt(options.id)
    const events = app.globalData.events || []
    const event = events.find(e => e.id === id)
    if (event) {
      this.setData({ eventId: id, event })
    } else {
      wx.showToast({ title: '活动不存在', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 1500)
    }
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [`form.${field}`]: e.detail.value
    })
  },

  onSubmit() {
    const { form, eventId, event } = this.data
    if (!form.name.trim()) {
      wx.showToast({ title: '请输入姓名', icon: 'none' })
      return
    }
    if (!form.phone.trim() || !/^1\d{10}$/.test(form.phone)) {
      wx.showToast({ title: '请输入正确手机号', icon: 'none' })
      return
    }

    wx.showLoading({ title: '提交中...' })

    // 模拟提交
    setTimeout(() => {
      // 更新报名人数
      const events = app.globalData.events
      const idx = events.findIndex(e => e.id === eventId)
      if (idx > -1) {
        events[idx].currentPeople += 1
      }

      // 记录已报名
      const registered = wx.getStorageSync('registeredEvents') || []
      if (!registered.includes(eventId)) {
        registered.push(eventId)
        wx.setStorageSync('registeredEvents', registered)
      }

      // 保存报名信息
      const myRegistrations = wx.getStorageSync('myRegistrations') || []
      myRegistrations.unshift({
        eventId,
        eventTitle: event.title,
        ...form,
        registerTime: new Date().toISOString()
      })
      wx.setStorageSync('myRegistrations', myRegistrations)

      wx.hideLoading()
      wx.showToast({ title: '报名成功', icon: 'success' })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }, 800)
  }
})