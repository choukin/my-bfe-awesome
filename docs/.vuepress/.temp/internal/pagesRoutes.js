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
  ["v-1cf90032","/css/WindiCss.html",{"title":"windicss"},["/css/WindiCss","/css/WindiCss.md"]],
  ["v-a7937e8a","/css/css.html",{"title":"CSS 记录"},["/css/css","/css/css.md"]],
  ["v-987215e4","/hello-vue3/",{"title":"hello-vue3"},["/hello-vue3/index.html","/hello-vue3/README.md"]],
  ["v-df171ac4","/js/%08fullscreen.html",{"title":""},["/js/\bfullscreen.html","/js/%08fullscreen","/js/\bfullscreen.md","/js/%08fullscreen.md"]],
  ["v-d80503b6","/js/async-validator.html",{"title":"async-validator"},["/js/async-validator","/js/async-validator.md"]],
  ["v-2199ce72","/js/iphone.html",{"title":""},["/js/iphone","/js/iphone.md"]],
  ["v-689eb4c5","/js/js-native-copy.html",{"title":"javascript 原生 监听浏览器复制粘贴内容"},["/js/js-native-copy","/js/js-native-copy.md"]],
  ["v-4c767cbc","/js/js-task-origin.html",{"title":"js 任务源"},["/js/js-task-origin","/js/js-task-origin.md"]],
  ["v-77519413","/js/js%E7%89%87%E6%AE%B5.html",{"title":""},["/js/js片段.html","/js/js%E7%89%87%E6%AE%B5","/js/js片段.md","/js/js%E7%89%87%E6%AE%B5.md"]],
  ["v-a66e9428","/js/rem.html",{"title":"rem"},["/js/rem","/js/rem.md"]],
  ["v-2a5172b3","/js/savefile.html",{"title":""},["/js/savefile","/js/savefile.md"]],
  ["v-62ddaaad","/js/ts.html",{"title":"给现有的包声明d.ts文件"},["/js/ts","/js/ts.md"]],
  ["v-5bd6f702","/vue/vue-cli.html",{"title":"vue-cli 学习"},["/vue/vue-cli","/vue/vue-cli.md"]],
  ["v-5c093d67","/webpack/webpack.html",{"title":"webpack"},["/webpack/webpack","/webpack/webpack.md"]],
  ["v-6a4c4778","/guide/excel/",{"title":"exlcel 技巧"},["/guide/excel/index.html","/guide/excel/index.md"]],
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
