import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-90172ace","/adb-use.html",{"title":""},["/adb-use","/adb-use.md"]],
  ["v-7ffd4570","/chrome%20headless.html",{"title":"chrome headless"},["/chrome headless.html","/chrome%20headless","/chrome headless.md","/chrome%20headless.md"]],
  ["v-22a08b1b","/chrome_apps.html",{"title":"chrome app 列表"},["/chrome_apps","/chrome_apps.md"]],
  ["v-6ce48554","/contributing.html",{"title":"contributing"},["/contributing","/contributing.md"]],
  ["v-1f91015b","/intersting.html",{"title":""},["/intersting","/intersting.md"]],
  ["v-485c23c5","/miniProgram.html",{"title":""},["/miniProgram","/miniProgram.md"]],
  ["v-9e04a384","/collect/",{"title":"我是收藏"},["/collect/index.html","/collect/README.md"]],
  ["v-5926181f","/collect/getting-started.html",{"title":"start"},["/collect/getting-started","/collect/getting-started.md"]],
  ["v-987215e4","/hello-vue3/",{"title":"hello-vue3"},["/hello-vue3/index.html","/hello-vue3/README.md"]],
  ["v-1cf90032","/css/WindiCss.html",{"title":"windicss"},["/css/WindiCss","/css/WindiCss.md"]],
  ["v-a7937e8a","/css/css.html",{"title":"CSS 记录"},["/css/css","/css/css.md"]],
  ["v-2192a38e","/guide/git-use.html",{"title":"git 常用命令"},["/guide/git-use","/guide/git-use.md"]],
  ["v-8c6c7118","/guide/less.html",{"title":"less"},["/guide/less","/guide/less.md"]],
  ["v-d5fa1158","/guide/main.html",{"title":"my-bfe-awesome"},["/guide/main","/guide/main.md"]],
  ["v-9b03dde6","/guide/nuxt-readme.html",{"title":"Nuxt"},["/guide/nuxt-readme","/guide/nuxt-readme.md"]],
  ["v-4d1e69ca","/guide/tools.html",{"title":"工具集🔧"},["/guide/tools","/guide/tools.md"]],
  ["v-d80503b6","/js/async-validator.html",{"title":"async-validator"},["/js/async-validator","/js/async-validator.md"]],
  ["v-edfb001e","/js/fullscreen.html",{"title":""},["/js/fullscreen","/js/fullscreen.md"]],
  ["v-2199ce72","/js/iphone.html",{"title":"尺寸相关"},["/js/iphone","/js/iphone.md"]],
  ["v-689eb4c5","/js/js-native-copy.html",{"title":"javascript 原生 监听浏览器复制粘贴内容"},["/js/js-native-copy","/js/js-native-copy.md"]],
  ["v-4c767cbc","/js/js-task-origin.html",{"title":"js 任务源"},["/js/js-task-origin","/js/js-task-origin.md"]],
  ["v-77519413","/js/js%E7%89%87%E6%AE%B5.html",{"title":"js 片段"},["/js/js片段.html","/js/js%E7%89%87%E6%AE%B5","/js/js片段.md","/js/js%E7%89%87%E6%AE%B5.md"]],
  ["v-a66e9428","/js/rem.html",{"title":"rem"},["/js/rem","/js/rem.md"]],
  ["v-2a5172b3","/js/savefile.html",{"title":"操作文件"},["/js/savefile","/js/savefile.md"]],
  ["v-62ddaaad","/js/ts.html",{"title":"给现有的包声明d.ts文件"},["/js/ts","/js/ts.md"]],
  ["v-d3edbba8","/vscode/",{"title":"VSCode 插件"},["/vscode/index.html","/vscode/index.md"]],
  ["v-94d24d62","/vue/differerent.html",{"title":"Vue2 vs Vue3"},["/vue/differerent","/vue/differerent.md"]],
  ["v-6b7082aa","/vue/elementui.html",{"title":"element UI 问题记录"},["/vue/elementui","/vue/elementui.md"]],
  ["v-35ac8d1a","/vue/lowcode.html",{"title":"low code"},["/vue/lowcode","/vue/lowcode.md"]],
  ["v-1bb18df1","/vue/vite+eslint+prettier.html",{"title":"Vue3+Vite+Eslint+Prettier 添加项目规范"},["/vue/vite+eslint+prettier","/vue/vite+eslint+prettier.md"]],
  ["v-5bd6f702","/vue/vue-cli.html",{"title":"vue-cli 学习"},["/vue/vue-cli","/vue/vue-cli.md"]],
  ["v-6abdbdea","/vue/vue3.html",{"title":"vue3 项目解析"},["/vue/vue3","/vue/vue3.md"]],
  ["v-5c093d67","/webpack/webpack.html",{"title":"webpack"},["/webpack/webpack","/webpack/webpack.md"]],
  ["v-6a4c4778","/guide/excel/",{"title":"exlcel 技巧"},["/guide/excel/index.html","/guide/excel/index.md"]],
  ["v-5404b4b2","/guide/linux/",{"title":"Linux常用命令"},["/guide/linux/index.html","/guide/linux/index.md"]],
  ["v-5d5230a8","/guide/mac/",{"title":"mac 使用 软件"},["/guide/mac/index.html","/guide/mac/readme.md"]],
  ["v-5d50d4e0","/guide/npm/",{"title":"npm 包规范"},["/guide/npm/index.html","/guide/npm/readme.md"]],
  ["v-2b71ae87","/guide/npm/util.html",{"title":""},["/guide/npm/util","/guide/npm/util.md"]],
  ["v-f62b4d42","/js/mp/",{"title":"小程序收集"},["/js/mp/index.html","/js/mp/index.md"]],
  ["v-a8845b5a","/js/renderavatar/",{"title":"工具"},["/js/renderavatar/index.html","/js/renderavatar/README.md"]],
  ["v-f9230c74","/editor/ckeditor/ckeditordemo/",{"title":"ckeditordemo"},["/editor/ckeditor/ckeditordemo/index.html","/editor/ckeditor/ckeditordemo/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
