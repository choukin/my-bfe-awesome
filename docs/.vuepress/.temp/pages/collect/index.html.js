export const data = {
  "key": "v-9e04a384",
  "path": "/collect/",
  "title": "我是收藏",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "我是收藏",
    "description": "收集好玩的"
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
  "filePathRelative": "collect/README.md"
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
