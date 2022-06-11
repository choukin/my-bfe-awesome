export const data = {
  "key": "v-987215e4",
  "path": "/hello-vue3/",
  "title": "hello-vue3",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Project setup",
      "slug": "project-setup",
      "children": [
        {
          "level": 3,
          "title": "Compiles and hot-reloads for development",
          "slug": "compiles-and-hot-reloads-for-development",
          "children": []
        },
        {
          "level": 3,
          "title": "Compiles and minifies for production",
          "slug": "compiles-and-minifies-for-production",
          "children": []
        },
        {
          "level": 3,
          "title": "Lints and fixes files",
          "slug": "lints-and-fixes-files",
          "children": []
        },
        {
          "level": 3,
          "title": "Customize configuration",
          "slug": "customize-configuration",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1646640020000
  },
  "filePathRelative": "hello-vue3/README.md"
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
