export const data = {
  "key": "v-744a811d",
  "path": "/npm/",
  "title": "npm 包规范",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "npm 包收集",
      "slug": "npm-包收集",
      "children": []
    }
  ],
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
  "filePathRelative": "npm/readme.md"
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
