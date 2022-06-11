export const data = {
  "key": "v-9b03dde6",
  "path": "/guide/nuxt-readme.html",
  "title": "Nuxt",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "新建项目",
      "slug": "新建项目",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1646877060000
  },
  "filePathRelative": "guide/nuxt-readme.md"
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
