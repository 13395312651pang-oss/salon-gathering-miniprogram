// pages/index/index.js
const app = getApp()

Page({
  data: {
    banners: [
      { id: 1, image: 'https://picsum.photos/seed/salon1/750/360', title: '发现身边的精彩沙龙' },
      { id: 2, image: 'https://picsum.photos/seed/salon2/750/360', title: '连接有趣的灵魂' }
    ],
    categories: [
      { id: 'all', name: '全部' },
      { id: '科技', name: '科技' },
      { id: '文化', name: '文化' },
      { id: '创业', name: '创业' },
      { id: '艺术', name: '艺术' },
      { id: '生活', name: '生活' }
    ],
    currentCategory: 'all',
    hotEvents: [],
    upcomingEvents: []
  },

  onLoad() {
    this.loadEvents()
  },

  onShow() {
    this.loadEvents()
  },

  loadEvents() {
    const events = app.globalData.events || []
    const hot = events.filter(e => e.status !== 'ended').slice(0, 4)
    const upcoming = events.filter(e => e.status === 'upcoming')
    this.setData({
      hotEvents: hot,
      upcomingEvents: upcoming
    })
  },

  onCategoryTap(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ currentCategory: id })
    // 可扩展筛选逻辑
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  goList() {
    wx.switchTab({
      url: '/pages/list/list'
    })
  },

  onSearch() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    })
  }
})