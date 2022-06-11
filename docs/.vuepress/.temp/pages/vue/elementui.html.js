export const data = {
  "key": "v-6b7082aa",
  "path": "/vue/elementui.html",
  "title": "element UI 问题记录",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "问题描述：",
      "slug": "问题描述",
      "children": [
        {
          "level": 3,
          "title": "知识点：",
          "slug": "知识点",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1648537056000
  },
  "filePathRelative": "vue/elementui.md"
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
