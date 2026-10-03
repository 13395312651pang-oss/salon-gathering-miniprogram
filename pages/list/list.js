// pages/list/list.js
const app = getApp()

Page({
  data: {
    tabs: [
      { key: 'all', name: '全部' },
      { key: 'ongoing', name: '进行中' },
      { key: 'upcoming', name: '即将开始' },
      { key: 'ended', name: '已结束' }
    ],
    currentTab: 'all',
    events: [],
    filteredEvents: []
  },

  onLoad() {
    this.loadEvents()
  },

  onShow() {
    this.loadEvents()
  },

  loadEvents() {
    const events = app.globalData.events || []
    this.setData({ events }, () => {
      this.filterEvents()
    })
  },

  onTabChange(e) {
    const key = e.currentTarget.dataset.key
    this.setData({ currentTab: key }, () => {
      this.filterEvents()
    })
  },

  filterEvents() {
    const { events, currentTab } = this.data
    let filtered = events
    if (currentTab !== 'all') {
      filtered = events.filter(e => e.status === currentTab)
    }
    this.setData({ filteredEvents: filtered })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  getStatusText(status) {
    const map = {
      ongoing: '进行中',
      upcoming: '即将开始',
      ended: '已结束'
    }
    return map[status] || status
  }
})