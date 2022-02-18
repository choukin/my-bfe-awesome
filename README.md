# my-bfe-awesome
前端个人积累

## TODO
 - [ ] 学习sass
 - [x] 学习TypeScript
 - [ ] 学习redis
- [ ] webpack4.0 + vue
 - [ ] [Vue源码分析](http://hcysun.me/vue-design/) 
 - [ ] [Vue技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
 - [ ] [CreateJS是基于HTML5开发的一套模块化的库和工具](http://www.createjs.cc/)
 - [ ] [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)
 - [ ]  [Vue 组件的单元测试](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)
 - [ ]  [Vue SSR 指南](https://ssr.vuejs.org/zh/)
 - [ ] [Nuxt.js](https://nuxtjs.org/)  
 - [ ] [从vue-cli源码学习如何写模板](https://github.com/dwqs/blog/issues/56)
 - [ ] [面试经验](https://juejin.im/post/5ba34e54e51d450e5162789b)
 - [ ] [JavaScript开发者应懂的33个概念](https://github.com/stephentian/33-js-concepts#1-%E8%B0%83%E7%94%A8%E5%A0%86%E6%A0%88)
 - [ ] [面试问题](https://mp.weixin.qq.com/s/biVa8Wvg82uvTd5C0yerug)
 - [ ] [开源books](https://github.com/EbookFoundation/free-programming-books/blob/master/books/free-programming-books-zh.md) 
 - [] [react 源码](https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718)
 - [] [ts](http://ts.xcatliu.com/)
 - [] [make games](https://makejsgames.com/#articles)
 - [] [storybook](https://storybook.js.org/)
 - [] [vue3.0](https://github.com/vue3/vue3-News#%E8%BF%8E%E6%8E%A5Vue3.0%E7%B3%BB%E5%88%97)
 - [] [手写面试](https://github.com/Mayandev/fe-interview-handwrite)


## 目录
- [node 相关](#node-相关)
  - [node 常量](#node-常量)
   
- [电子书](#电子书)
- [webpack](#webpack)


- [突破防盗链机制](https://github.com/jpgerek/referrer-killer)
   > 很多图片链接设置了防盗链机制，从我的网站请求图片会返回403错误，但直接在浏览器中打开图片的url时却又正常。
- [mac 使用](mac/readme.md)   
- 前端
  - [移动端调试](https://github.com/choukin/my-bfe-awesome/issues/1)
  - [动画库](#动画库)
  - [css](css/css.md)
  - JS
    - [js片段](js/js片段.md)
    - [js 复制粘贴](js/js-native-copy.md)
    - [js 任务源](js/js-task-origin.md)
    - [JavaScript 常见设计模式解析](https://juejin.im/post/58f4c702a0bb9f006aa80f25)
 
- [git 使用](git-use.md)
- [shell 使用](shell-use.md)
- [adb 使用](adb-use.md)

- vue 常用组件
  - [Vue源码分析](http://hcysun.me/vue-design/) 
  - [Vue技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
  - 引导提示框 [vue-introjs](https://www.npmjs.com/package/vue-introjs) 
  - 数字动画跳动 [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2?ref=madewithvuejs.com)  
  - Vue 的 video.js 播放器组件[vue-video-player](https://npmjs.com/package/vue-video-player)
  - [better-scroll] (http://ustbhuangyi.github.io/better-scroll/)

- 工具
  - [Algolia搜索 站内搜索](http://www.qingpingshan.com/m/view.php?aid=386198)
  - [知竹](https://www.yxsss.com/)

- 教程 
  - [静态网站添加评论的方法](https://darekkay.com/blog/static-site-comments/)
  - [我的 Linux 开发环境](https://deepu.tech/my-beautiful-linux-development-environment/)

  - [linux开发环境配置](https://deepu.tech/my-beautiful-linux-development-environment/)
  




## node 相关
### node 常量
- `__dirname` ：全局变量，存储的是代码所在文件的所在的文件目录
- `__filename`：全局变量，存储的是代码所在文件的文件名

```js
// /work/coding/githubbuild/my-bfe-awesome/test.js
console.log(__dirname)
// /work/coding/githubbuild/my-bfe-awesome
console.log(__filename)
// /work/coding/githubbuild/my-bfe-awesome/test.js
```

- 查看全局对象 再终端输入 node 后 安两次 tab键
  
  ![](./img/node/doubletab.jpg)


## 电子书
- [深入浅出 Webpack ](http://webpack.wuhaolin.cn/)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)

## webpack
- 生成html的插件 https://github.com/ampedandwired/html-webpack-plugin 配置
```js
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
2. [gsap](https://github.com/greensock/GreenSock-JS) GSAP是一个JavaScript库，用于创建适用于所有主流浏览器的高性能动画
3. [tweenjs](http://www.createjs.cc/tweenjs/) TweenJS类库主要用来调整和动画HTML5和Javascript属性，提供了简单并且强大的tweening接口。
4. [hilo](http://hiloteam.github.io/) 阿里的HTML5 互动游戏引擎
5. [pixijs](https://www.pixijs.com/) PixiJS 是一个超快的2D渲染游戏引擎。它自动侦测使用 WebGL 或者 Canvas。 
6. [Kaboom.js](https://kaboomjs.com/doc/intro) Kaboom 是一个 JavaScript 库，可帮助您快速有趣地制作游戏.


## 前端工具
 - [Valine](https://valine.js.org/) 一款快速、简洁且高效的无后端评论系统。
 - [基于UI组件的Vue可视化布局工具](https://github.com/jaweii/Vue-Layout)
 - [正则表达式测试网址](https://jex.im/regulex/)
 - [用户指引库](https://github.com/usablica/intro.js/)
 - [腾讯蓝鲸](http://o.qcloud.com/static/api/v3/#templates)


## 博客
- [美团技术团队](https://tech.meituan.com/)  
- [朱嘉伟](http://buzhundong.com/)
- [小火柴的蓝色理想](https://www.xiaohuochai.cc/)
- [dwqs/blog](https://github.com/dwqs/blog)
- [滴滴前端博客](https://github.com/DDFE/DDFE-blog)

## 工具
### 图片相关
 - [Tinypng 压缩图片](https://tinypng.com/)
 - [智图 压缩](https://zhitu.isux.us/)
 - [up up to you 生产举牌小人图片](http://upuptoyou.com/)
 - [生成文字云图片](https://wordart.com/create)
 - [网页编辑图片工具](https://nhnent.github.io/tui.image-editor/latest/)
 - [免费商用的插画](https://illlustrations.co/)

### pm2

#### 安装
``` js
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
  apps : [

    // First application
    {
      name      : '',
      script    : './bin/www',
      watch       : true,
      ignore_watch : [  // 从监控目录中排除
        "node_modules",
        "logs",
        "public",
        ".idea",
        ".git"
      ],
      watch_options: {
          followSymlinks: false
      },
      error_file : "./logs/pm2/app-err.log",  // 错误日志路径
      out_file   : "./logs/pm2/app-out.log",  // 普通日志路径
      instances  : 2,
      // instance_var: "NODE_APP_INSTANCE",
      exec_mode  : "cluster",  // 集群模式 负载均衡
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      },
      env_dev : {
        NODE_ENV: 'dev'
      },
      env_test : {
        NODE_ENV: 'test'
      }
    }
  ]
};

```

## 字符串模版 [折行转义字符](https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/)
```js
var htmlSTring = "<div>\
  This is a string.\
</div>";
```


http://[fe80::461c:a8ff:fe2a:accf%2]:3911/1ed680d5-6138-4608-a269-8840850a96f9