# my-bfe-awesome




前端个人积累 :tada:

<!-- 一加一等于 {{1+1}}
<span v-for="i in 3"> span: {{ i }} </span>
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
[[toc]] -->




## TODO

- [ ] 学习 sass
- [x] 学习 TypeScript
- [ ] 学习 redis
- [ ] webpack4.0 + vue
- [ ] [CreateJS 是基于 HTML5 开发的一套模块化的库和工具](http://www.createjs.cc/)

- [ ] [从 vue-cli 源码学习如何写模板](https://github.com/dwqs/blog/issues/56)
- [ ] [面试经验](https://juejin.im/post/5ba34e54e51d450e5162789b)
- [ ] [JavaScript 开发者应懂的 33 个概念](https://github.com/stephentian/33-js-concepts#1-%E8%B0%83%E7%94%A8%E5%A0%86%E6%A0%88)
- [ ] [面试问题](https://mp.weixin.qq.com/s/biVa8Wvg82uvTd5C0yerug)
- [ ] [开源 books](https://github.com/EbookFoundation/free-programming-books/blob/master/books/free-programming-books-zh.md)
- [] [make games](https://makejsgames.com/#articles)
- [] [storybook](https://storybook.js.org/)
- [] [手写面试](https://github.com/Mayandev/fe-interview-handwrite)
- [] [BEM 命名法](https://www.bemcss.com/)
- [] [web 全栈体系博客](https://hejialianghe.gitee.io/)
- [] [Markdown教程](https://commonmark.org/help/)
- [] [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)

- [] [头像生成1](https://kfs479.smartapps.cn/pages/blogdetail/blogdetail?id=3311880&_swebfr=1&_swebFromHost=baiduboxapp)
     [头像生成2](https://www.cnblogs.com/blueVictory/p/15457894.html)
      [头像生成3](https://github.com/YMAndroid/photoDemo)

    

## Typescript
- [] [ts](http://ts.xcatliu.com/)


## react
- [] [react 源码](https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718)







## Vue

### Vue 2
- [ ] [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)
- [ ] [Vue 组件的单元测试](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)
- [ ] [Vue SSR 指南](https://ssr.vuejs.org/zh/)
- [ ] [Vue 源码分析](http://hcysun.me/vue-design/)
- [ ] [Vue 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
- [ ] [Nuxt.js](https://nuxtjs.org/)


### VUE3 
- [] [vue3视频教程](https://space.bilibili.com/480140591)
- [x] [Vue3 入门指南，与实战案例](https://vue3.chengpeiquan.com/)
- [] [vue3.0](https://github.com/vue3/vue3-News#%E8%BF%8E%E6%8E%A5Vue3.0%E7%B3%BB%E5%88%97)
- [x] [vue3挑战合集](https://cn-vuejs-challenges.netlify.app/)
- [] [Nuxt 3](https://v3.nuxtjs.org/)
- [] [Nuxt content](content.nuxtjs.org)


## 目录
- [node 相关](#node-相关)
  - [node 常量](#node-常量)
- [电子书](#电子书)
- [webpack](#webpack)

- [突破防盗链机制](https://github.com/jpgerek/referrer-killer)
  > 很多图片链接设置了防盗链机制，从我的网站请求图片会返回 403 错误，但直接在浏览器中打开图片的 url 时却又正常。
- [mac 使用](mac/readme.md)
- 前端

  - [移动端调试](https://github.com/choukin/my-bfe-awesome/issues/1)
  - [动画库](#动画库)
  - [css](./css/css.md)
  - JS
    - [js 片段](./js/js片段.md)
    - [js 复制粘贴](./js/js-native-copy.md)
    - [js 任务源](./js/js-task-origin.md)
    - [JavaScript 常见设计模式解析](https://juejin.im/post/58f4c702a0bb9f006aa80f25)

- [git 使用](git-use.md)
- [shell 使用](shell-use.md)
- [adb 使用](adb-use.md)

- vue 常用组件

  - [Vue 源码分析](http://hcysun.me/vue-design/)
  - [Vue 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
  - 引导提示框 [vue-introjs](https://www.npmjs.com/package/vue-introjs)
  - 数字动画跳动 [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2?ref=madewithvuejs.com)
  - Vue 的 video.js 播放器组件[vue-video-player](https://npmjs.com/package/vue-video-player)
  - [better-scroll] (http://ustbhuangyi.github.io/better-scroll/)
  - [nuxt modules nuxt模块](https://modules.nuxtjs.org/?version=3.x)

- 工具

  - [Algolia 搜索 站内搜索](http://www.qingpingshan.com/m/view.php?aid=386198)
  - [知竹](https://www.yxsss.com/)

- 教程

  - [静态网站添加评论的方法](https://darekkay.com/blog/static-site-comments/)
  - [我的 Linux 开发环境](https://deepu.tech/my-beautiful-linux-development-environment/)

  - [linux 开发环境配置](https://deepu.tech/my-beautiful-linux-development-environment/)

## node 相关

### node 常量

- `__dirname` ：全局变量，存储的是代码所在文件的所在的文件目录
- `__filename`：全局变量，存储的是代码所在文件的文件名

```js
// /work/coding/githubbuild/my-bfe-awesome/test.js
console.log(__dirname);
// /work/coding/githubbuild/my-bfe-awesome
console.log(__filename);
// /work/coding/githubbuild/my-bfe-awesome/test.js
```

- 查看全局对象 再终端输入 node 后 安两次 tab 键

  ![](../img/node/doubletab.jpg)

## 电子书

- [深入浅出 Webpack ](http://webpack.wuhaolin.cn/)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)

## webpack

- 生成 html 的插件 https://github.com/ampedandwired/html-webpack-plugin 配置

```js{1, 6}
new HtmlWebpackPlugin({
    filename: path.resolve(config.build.assetsRoot, 'index.html'), // 生成的html的文件名
    template: 'index.html', // 依据的模板
    inject: true, // 注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
    minify: { // 压缩配置
    removeComments: true, // 删除html中的注释代码
    collapseWhitespace: true, // 删除html中的空白符
    removeAttributeQuotes: true, // 删除html元素中属性的引号
    minifyJS: {
        compress: {
        warnings: false
        }
    },
    // 更多配置
    // https://github.com/kangax/html-minifier#options-quick-reference
    },
    chunksSortMode: 'dependency' // 按dependency的顺序引入
}
```

## 动画库

1. [velocity.js](https://github.com/julianshapiro/velocity) 支持链式调用
2. [gsap](https://github.com/greensock/GreenSock-JS) GSAP 是一个 JavaScript 库，用于创建适用于所有主流浏览器的高性能动画
3. [tweenjs](http://www.createjs.cc/tweenjs/) TweenJS 类库主要用来调整和动画 HTML5 和 Javascript 属性，提供了简单并且强大的 tweening 接口。
4. [hilo](http://hiloteam.github.io/) 阿里的 HTML5 互动游戏引擎
5. [pixijs](https://www.pixijs.com/) PixiJS 是一个超快的 2D 渲染游戏引擎。它自动侦测使用 WebGL 或者 Canvas。
6. [Kaboom.js](https://kaboomjs.com/doc/intro) Kaboom 是一个 JavaScript 库，可帮助您快速有趣地制作游戏.

## 前端工具

- [Valine](https://valine.js.org/) 一款快速、简洁且高效的无后端评论系统。
- [基于 UI 组件的 Vue 可视化布局工具](https://github.com/jaweii/Vue-Layout)
- [正则表达式测试网址](https://jex.im/regulex/)
- [用户指引库](https://github.com/usablica/intro.js/)
- [腾讯蓝鲸](http://o.qcloud.com/static/api/v3/#templates)



## 工具



### pm2

#### 安装

```js
  npm install pm2 -g
  // 进程间通信模块保证日志正常打印 pm2 安装模块依赖 git
  pm2 install pm2-intercom
```

### 配置文件

```js
 // package.json 里 scripts 的配置
    "pm2": "pm2 start ./config/ecosystem.config.js --env production",
```

```js
// config/ecosystem.config.js
module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "",
      script: "./bin/www",
      watch: true,
      ignore_watch: [
        // 从监控目录中排除
        "node_modules",
        "logs",
        "public",
        ".idea",
        ".git",
      ],
      watch_options: {
        followSymlinks: false,
      },
      error_file: "./logs/pm2/app-err.log", // 错误日志路径
      out_file: "./logs/pm2/app-out.log", // 普通日志路径
      instances: 2,
      // instance_var: "NODE_APP_INSTANCE",
      exec_mode: "cluster", // 集群模式 负载均衡
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
      env_dev: {
        NODE_ENV: "dev",
      },
      env_test: {
        NODE_ENV: "test",
      },
    },
  ],
};
```

## 字符串模版 [折行转义字符](https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/)

```js
var htmlSTring =
  "<div>\
  This is a string.\
</div>";
```

http://[fe80::461c:a8ff:fe2a:accf%2]:3911/1ed680d5-6138-4608-a269-8840850a96f9



## 项目模版

- [vue3 + setup + ts， vw + rem等来搭建的移动端项目](https://github.com/cll123456/template-varlet-v3-ts)

- [vue3 企业端项目](https://vvbin.cn/doc-next/)



## 免费的软件

### 桌面软件

### 加速工具

- [Steam](https://steampp.net/)
#### 办公
- [WPS](https://www.wps.cn/) office的替代品
- [snipaste](https://www.snipaste.com/)截图工具
- 

#### 开发
- [git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
  - 插件
    - Better Align
    - Volar
    - vetur
    - Git Graph
    - Git History
    - Git History Diff

    - i18n Ally
    - Eslint
    - Prettier - code Formatter
    - auto Import
    - indent-rainbow
    - open in browser 
    - code Runner

- [PostMan](https://www.postman.com/)

- [oh my zsh](https://ohmyz.sh/)
- [asdf](https://asdf-vm.com/) 
- [iTerm2](https://iterm2.com/)

- [https://dber.tech/] 开源免费的设计数据库的web应用，可以导出sql





### 数据库
#### 图形化界面
- [DBeaver](https://dbeaver.io/)






