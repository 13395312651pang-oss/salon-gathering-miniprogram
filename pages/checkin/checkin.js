// pages/checkin/checkin.js
Page({
  data: {
    result: null
  },

  onScan() {
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        // 模拟签到逻辑，实际可解析二维码中的 eventId + userId
        this.setData({
          result: {
            success: true,
            message: '签到成功！',
            code: res.result
          }
        })
        wx.showToast({ title: '签到成功', icon: 'success' })
      },
      fail: () => {
        this.setData({
          result: {
            success: false,
            message: '扫码失败，请重试'
          }
        })
      }
    })
  },

  onManual() {
    wx.showModal({
      title: '手动签到',
      editable: true,
      placeholderText: '输入报名手机号',
      success: (res) => {
        if (res.confirm && res.content) {
          this.setData({
            result: {
              success: true,
              message: `手机号 ${res.content} 签到成功`
            }
          })
          wx.showToast({ title: '签到成功', icon: 'success' })
        }
      }
    })
  }
})