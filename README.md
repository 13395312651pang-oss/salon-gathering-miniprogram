# 沙龙聚会 · 微信小程序

一款简洁美观的沙龙/线下活动管理微信小程序，支持活动浏览、报名、发布与签到。

## 功能特性

| 模块 | 说明 |
|------|------|
| **首页** | Banner 轮播、分类筛选、热门沙龙推荐、即将开始列表 |
| **活动列表** | 全部 / 进行中 / 即将开始 / 已结束 筛选 |
| **活动详情** | 封面、时间地点、费用、名额、介绍、流程、一键报名与分享 |
| **报名** | 姓名、手机号、公司、备注表单，本地存储报名记录 |
| **我的** | 用户信息、我的报名列表、发布活动入口 |
| **发布活动** | 完整表单发布新沙龙（写入本地全局数据） |
| **签到** | 扫码签到 + 手动输入手机号签到（管理员用） |

## 技术栈

- 微信小程序原生框架（WXML + WXSS + JS）
- 本地存储模拟后端数据（`wx.setStorageSync`）
- 全局数据 `app.globalData.events` 作为活动源

## 快速开始

1. 克隆本仓库
```bash
git clone https://github.com/13395312651pang-oss/salon-gathering-miniprogram.git
```

2. 打开微信开发者工具 → 导入项目 → 选择本目录

3. AppID 可使用测试号（`touristappid`），或替换为你自己的 AppID

4. 编译运行即可预览

> **注意**：TabBar 图标路径已配置，但仓库中暂无实际图标文件。请在 `assets/icons/` 下自行放置 `home.png`、`home-active.png`、`list.png`、`list-active.png`、`my.png`、`my-active.png`（建议 81×81 px），或暂时在 `app.json` 中移除 `iconPath` / `selectedIconPath` 字段以纯文字显示。

## 目录结构

```
├── app.js / app.json / app.wxss     # 全局逻辑与样式
├── project.config.json             # 项目配置
├── sitemap.json
├── pages/
│   ├── index/                      # 首页
│   ├── list/                       # 活动列表
│   ├── detail/                     # 活动详情
│   ├── register/                   # 报名页
│   ├── my/                         # 我的
│   ├── create/                     # 发布活动
│   └── checkin/                    # 签到
└── README.md
```

## 后续可扩展方向

- 接入真实后端（云开发 / Node.js）
- 微信支付报名收费
- 活动二维码生成与核销
- 用户真实登录（wx.login + 后端）
- 评论/互动、活动海报生成
- 地图导航、日历提醒

## License

MIT
