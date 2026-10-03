// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res.code)
      }
    })
  },
  globalData: {
    userInfo: null,
    // 模拟活动数据
    events: [
      {
        id: 1,
        title: '人工智能趋势沙龙',
        cover: 'https://picsum.photos/seed/ai/750/400',
        date: '2026-10-15',
        time: '19:00-21:00',
        location: '北京市朝阳区三里屯SOHO',
        address: '北京市朝阳区工体北路8号',
        price: 0,
        maxPeople: 50,
        currentPeople: 32,
        status: 'ongoing', // ongoing | ended | upcoming
        category: '科技',
        host: '科技前沿社',
        description: '本次沙龙将邀请AI领域专家，共同探讨大模型最新进展、应用落地案例以及对未来社会的影响。适合开发者、产品经理、创业者参与。',
        agenda: [
          { time: '19:00-19:15', content: '签到与破冰' },
          { time: '19:15-20:00', content: '主题分享：大模型技术演进' },
          { time: '20:00-20:30', content: '圆桌讨论' },
          { time: '20:30-21:00', content: '自由交流与合影' }
        ],
        tags: ['AI', '大模型', '技术分享']
      },
      {
        id: 2,
        title: '城市阅读分享会',
        cover: 'https://picsum.photos/seed/book/750/400',
        date: '2026-10-18',
        time: '14:00-16:30',
        location: '上海静安区某独立书店',
        address: '上海市静安区南京西路1788号',
        price: 29,
        maxPeople: 30,
        currentPeople: 18,
        status: 'upcoming',
        category: '文化',
        host: '城市阅读圈',
        description: '本期分享《人类简史》，一起聊聊历史、科技与人性。现场提供咖啡与轻食。',
        agenda: [
          { time: '14:00-14:20', content: '签到与自我介绍' },
          { time: '14:20-15:20', content: '主讲分享' },
          { time: '15:20-16:00', content: '开放讨论' },
          { time: '16:00-16:30', content: '自由交流' }
        ],
        tags: ['读书', '人文', '分享']
      },
      {
        id: 3,
        title: '创业者下午茶',
        cover: 'https://picsum.photos/seed/startup/750/400',
        date: '2026-10-12',
        time: '15:00-17:00',
        location: '深圳市南山区科技园',
        address: '深圳市南山区高新南四道18号',
        price: 0,
        maxPeople: 40,
        currentPeople: 40,
        status: 'ended',
        category: '创业',
        host: '创投联盟',
        description: '线上线下结合的创业交流活动，分享融资经验与产品打磨心得。',
        agenda: [
          { time: '15:00-15:30', content: '嘉宾介绍' },
          { time: '15:30-16:30', content: '经验分享' },
          { time: '16:30-17:00', content: 'networking' }
        ],
        tags: ['创业', '融资', 'networking']
      },
      {
        id: 4,
        title: '摄影爱好者外拍沙龙',
        cover: 'https://picsum.photos/seed/photo/750/400',
        date: '2026-10-20',
        time: '09:00-12:00',
        location: '杭州西湖景区',
        address: '杭州市西湖区龙井路1号',
        price: 50,
        maxPeople: 20,
        currentPeople: 12,
        status: 'upcoming',
        category: '艺术',
        host: '光影社',
        description: '秋季外拍活动，主题「秋日光影」，专业摄影师带队指导构图与后期。',
        agenda: [
          { time: '09:00-09:30', content: '集合与器材检查' },
          { time: '09:30-11:00', content: '外拍实践' },
          { time: '11:00-12:00', content: '作品点评' }
        ],
        tags: ['摄影', '外拍', '艺术']
      }
    ]
  }
})