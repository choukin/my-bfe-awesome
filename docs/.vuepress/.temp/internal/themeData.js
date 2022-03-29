export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "repo": "choukin/my-bfe-awesome",
  "docsBranch": "main/docs",
  "navbar": [
    {
      "text": "目录",
      "link": "/guide/main.md"
    },
    {
      "text": "VUE",
      "link": "/vue/vue3.md"
    },
    {
      "text": "工具",
      "link": "/guide/tools.md"
    },
    {
      "text": "参考",
      "children": [
        {
          "text": "vuePress",
          "link": "https://v2.vuepress.vuejs.org/zh/"
        },
        {
          "text": "vue",
          "link": "https://v3.cn.vuejs.org/"
        },
        {
          "text": "vue3-news",
          "link": "https://vue3.github.io/vue3-News/"
        },
        {
          "text": "前端(Not just)工程师终究要掌握的知识",
          "link": "https://kb.zhangzhipeng.net/#/"
        }
      ]
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "目录",
        "children": [
          "/guide/main.md",
          "/guide/mac/readme.md",
          "/guide/npm/readme.md",
          "/guide/git-use.md"
        ]
      }
    ],
    "/vue/": [
      {
        "text": "vue",
        "children": [
          "/vue/vue3.md",
          "/vue/vite+eslint+prettier.md",
          "/vue/elementui.md",
          "/vue/lowcode.md",
          "/vue/differerent.md"
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "editLinkText": "在 GitHub 上编辑此页",
  "editLinks": true,
  "lastUpdatedText": "上次更新",
  "contributors": false,
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "notFound": [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接"
  ],
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换夜间模式",
  "toggleSidebar": "切换侧边栏",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdated": true,
  "contributorsText": "Contributors"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
