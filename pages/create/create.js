// pages/create/create.js
const app = getApp()

Page({
  data: {
    form: {
      title: '',
      date: '',
      time: '',
      location: '',
      address: '',
      price: '',
      maxPeople: '',
      category: '科技',
      host: '',
      description: '',
      tags: ''
    },
    categories: ['科技', '文化', '创业', '艺术', '生活']
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [`form.${field}`]: e.detail.value
    })
  },

  onCategoryChange(e) {
    this.setData({
      'form.category': this.data.categories[e.detail.value]
    })
  },

  onDateChange(e) {
    this.setData({ 'form.date': e.detail.value })
  },

  onSubmit() {
    const { form } = this.data
    if (!form.title.trim()) {
      wx.showToast({ title: '请输入活动标题', icon: 'none' })
      return
    }
    if (!form.date || !form.time) {
      wx.showToast({ title: '请填写活动时间', icon: 'none' })
      return
    }
    if (!form.location.trim()) {
      wx.showToast({ title: '请输入活动地点', icon: 'none' })
      return
    }

    wx.showLoading({ title: '发布中...' })

    setTimeout(() => {
      const events = app.globalData.events
      const newId = events.length ? Math.max(...events.map(e => e.id)) + 1 : 1
      const newEvent = {
        id: newId,
        title: form.title,
        cover: `https://picsum.photos/seed/${newId}/750/400`,
        date: form.date,
        time: form.time,
        location: form.location,
        address: form.address || form.location,
        price: parseFloat(form.price) || 0,
        maxPeople: parseInt(form.maxPeople) || 50,
        currentPeople: 0,
        status: 'upcoming',
        category: form.category,
        host: form.host || '匿名主办',
        description: form.description || '暂无详细介绍',
        agenda: [],
        tags: form.tags ? form.tags.split(/[,，]/).map(t => t.trim()).filter(Boolean) : [form.category]
      }
      events.unshift(newEvent)

      wx.hideLoading()
      wx.showToast({ title: '发布成功', icon: 'success' })
      setTimeout(() => {
        wx.navigateTo({
          url: `/pages/detail/detail?id=${newId}`
        })
      }, 1200)
    }, 600)
  }
})