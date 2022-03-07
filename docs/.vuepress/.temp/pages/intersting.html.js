export const data = {
  "key": "v-1f91015b",
  "path": "/intersting.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
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
  "filePathRelative": "intersting.md"
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
