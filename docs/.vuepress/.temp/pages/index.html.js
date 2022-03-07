export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "actions": [
      {
        "text": "开始",
        "link": "/guide/main.html",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/guide/main.html",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "个人成长",
        "details": "学习前端知识，记录个人成长."
      },
      {
        "title": "好项目收集",
        "details": "好记性不如烂笔头."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present 赵鑫"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1646640020000,
    "contributors": [
      {
        "name": "zhaoxin",
        "email": "zhaoxin01@qingsongchou.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
