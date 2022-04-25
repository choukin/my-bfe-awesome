<template><h1 id="my-bfe-awesome" tabindex="-1"><a class="header-anchor" href="#my-bfe-awesome" aria-hidden="true">#</a> my-bfe-awesome</h1>
<p>前端个人积累 🎉</p>
<!-- 一加一等于 {{1+1}}
<span v-for="i in 3"> span: {{ i }} </span>
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
[[toc]] -->
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
<ul>
<li>[ ] 学习 sass</li>
<li>[x] 学习 TypeScript</li>
<li>[ ] 学习 redis</li>
<li>[ ] webpack4.0 + vue</li>
<li>[ ] <a href="http://hcysun.me/vue-design/" target="_blank" rel="noopener noreferrer">Vue 源码分析<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://ustbhuangyi.github.io/vue-analysis/" target="_blank" rel="noopener noreferrer">Vue 技术揭秘<ExternalLinkIcon/></a></li>
<li>[ ] <a href="http://www.createjs.cc/" target="_blank" rel="noopener noreferrer">CreateJS 是基于 HTML5 开发的一套模块化的库和工具<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://vue-test-utils.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vue-test-utils<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html" target="_blank" rel="noopener noreferrer">Vue 组件的单元测试<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://ssr.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">Vue SSR 指南<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://github.com/dwqs/blog/issues/56" target="_blank" rel="noopener noreferrer">从 vue-cli 源码学习如何写模板<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://juejin.im/post/5ba34e54e51d450e5162789b" target="_blank" rel="noopener noreferrer">面试经验<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://github.com/stephentian/33-js-concepts#1-%E8%B0%83%E7%94%A8%E5%A0%86%E6%A0%88" target="_blank" rel="noopener noreferrer">JavaScript 开发者应懂的 33 个概念<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://mp.weixin.qq.com/s/biVa8Wvg82uvTd5C0yerug" target="_blank" rel="noopener noreferrer">面试问题<ExternalLinkIcon/></a></li>
<li>[ ] <a href="https://github.com/EbookFoundation/free-programming-books/blob/master/books/free-programming-books-zh.md" target="_blank" rel="noopener noreferrer">开源 books<ExternalLinkIcon/></a></li>
<li>[] <a href="https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718" target="_blank" rel="noopener noreferrer">react 源码<ExternalLinkIcon/></a></li>
<li>[] <a href="http://ts.xcatliu.com/" target="_blank" rel="noopener noreferrer">ts<ExternalLinkIcon/></a></li>
<li>[] <a href="https://makejsgames.com/#articles" target="_blank" rel="noopener noreferrer">make games<ExternalLinkIcon/></a></li>
<li>[] <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">storybook<ExternalLinkIcon/></a></li>
<li>[] <a href="https://github.com/vue3/vue3-News#%E8%BF%8E%E6%8E%A5Vue3.0%E7%B3%BB%E5%88%97" target="_blank" rel="noopener noreferrer">vue3.0<ExternalLinkIcon/></a></li>
<li>[] <a href="https://github.com/Mayandev/fe-interview-handwrite" target="_blank" rel="noopener noreferrer">手写面试<ExternalLinkIcon/></a></li>
<li>[] <a href="https://www.bemcss.com/" target="_blank" rel="noopener noreferrer">BEM 命名法<ExternalLinkIcon/></a></li>
<li>[x] <a href="https://vue3.chengpeiquan.com/" target="_blank" rel="noopener noreferrer">Vue3 入门指南，与实战案例<ExternalLinkIcon/></a></li>
<li>[] <a href="https://hejialianghe.gitee.io/" target="_blank" rel="noopener noreferrer">web 全栈体系博客<ExternalLinkIcon/></a></li>
<li>[] <a href="https://commonmark.org/help/" target="_blank" rel="noopener noreferrer">Markdown教程<ExternalLinkIcon/></a></li>
<li>[] <a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet<ExternalLinkIcon/></a></li>
</ul>
<h3 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> VUE3</h3>
<ul>
<li>[] <a href="https://space.bilibili.com/480140591" target="_blank" rel="noopener noreferrer">vue3视频教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2>
<ul>
<li>
<p><a href="#node-%E7%9B%B8%E5%85%B3">node 相关</a></p>
<ul>
<li><a href="#node-%E5%B8%B8%E9%87%8F">node 常量</a></li>
</ul>
</li>
<li>
<p><a href="#%E7%94%B5%E5%AD%90%E4%B9%A6">电子书</a></p>
</li>
<li>
<p><a href="#webpack">webpack</a></p>
</li>
<li>
<p><a href="https://github.com/jpgerek/referrer-killer" target="_blank" rel="noopener noreferrer">突破防盗链机制<ExternalLinkIcon/></a></p>
<blockquote>
<p>很多图片链接设置了防盗链机制，从我的网站请求图片会返回 403 错误，但直接在浏览器中打开图片的 url 时却又正常。</p>
</blockquote>
</li>
<li>
<p><RouterLink to="/guide/mac/">mac 使用</RouterLink></p>
</li>
<li>
<p>前端</p>
<ul>
<li><a href="https://github.com/choukin/my-bfe-awesome/issues/1" target="_blank" rel="noopener noreferrer">移动端调试<ExternalLinkIcon/></a></li>
<li><a href="#%E5%8A%A8%E7%94%BB%E5%BA%93">动画库</a></li>
<li><RouterLink to="/guide/css/css.html">css</RouterLink></li>
<li>JS
<ul>
<li><RouterLink to="/guide/js/js%E7%89%87%E6%AE%B5.html">js 片段</RouterLink></li>
<li><RouterLink to="/guide/js/js-native-copy.html">js 复制粘贴</RouterLink></li>
<li><RouterLink to="/guide/js/js-task-origin.html">js 任务源</RouterLink></li>
<li><a href="https://juejin.im/post/58f4c702a0bb9f006aa80f25" target="_blank" rel="noopener noreferrer">JavaScript 常见设计模式解析<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><RouterLink to="/guide/git-use.html">git 使用</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/shell-use.html">shell 使用</RouterLink></p>
</li>
<li>
<p><RouterLink to="/guide/adb-use.html">adb 使用</RouterLink></p>
</li>
<li>
<p>vue 常用组件</p>
<ul>
<li>
<p><a href="http://hcysun.me/vue-design/" target="_blank" rel="noopener noreferrer">Vue 源码分析<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://ustbhuangyi.github.io/vue-analysis/" target="_blank" rel="noopener noreferrer">Vue 技术揭秘<ExternalLinkIcon/></a></p>
</li>
<li>
<p>引导提示框 <a href="https://www.npmjs.com/package/vue-introjs" target="_blank" rel="noopener noreferrer">vue-introjs<ExternalLinkIcon/></a></p>
</li>
<li>
<p>数字动画跳动 <a href="https://github.com/xlsdg/vue-countup-v2?ref=madewithvuejs.com" target="_blank" rel="noopener noreferrer">vue-countup-v2<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Vue 的 video.js 播放器组件<a href="https://npmjs.com/package/vue-video-player" target="_blank" rel="noopener noreferrer">vue-video-player<ExternalLinkIcon/></a></p>
</li>
<li>
<p>[better-scroll] (http://ustbhuangyi.github.io/better-scroll/)</p>
</li>
<li>
<p><a href="https://modules.nuxtjs.org/?version=3.x" target="_blank" rel="noopener noreferrer">nuxt modules nuxt模块<ExternalLinkIcon/></a></p>
</li>
</ul>
</li>
<li>
<p>工具</p>
<ul>
<li><a href="http://www.qingpingshan.com/m/view.php?aid=386198" target="_blank" rel="noopener noreferrer">Algolia 搜索 站内搜索<ExternalLinkIcon/></a></li>
<li><a href="https://www.yxsss.com/" target="_blank" rel="noopener noreferrer">知竹<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>教程</p>
<ul>
<li>
<p><a href="https://darekkay.com/blog/static-site-comments/" target="_blank" rel="noopener noreferrer">静态网站添加评论的方法<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://deepu.tech/my-beautiful-linux-development-environment/" target="_blank" rel="noopener noreferrer">我的 Linux 开发环境<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://deepu.tech/my-beautiful-linux-development-environment/" target="_blank" rel="noopener noreferrer">linux 开发环境配置<ExternalLinkIcon/></a></p>
</li>
</ul>
</li>
</ul>
<h2 id="node-相关" tabindex="-1"><a class="header-anchor" href="#node-相关" aria-hidden="true">#</a> node 相关</h2>
<h3 id="node-常量" tabindex="-1"><a class="header-anchor" href="#node-常量" aria-hidden="true">#</a> node 常量</h3>
<ul>
<li><code>__dirname</code> ：全局变量，存储的是代码所在文件的所在的文件目录</li>
<li><code>__filename</code>：全局变量，存储的是代码所在文件的文件名</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /work/coding/githubbuild/my-bfe-awesome/test.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /work/coding/githubbuild/my-bfe-awesome</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// /work/coding/githubbuild/my-bfe-awesome/test.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>查看全局对象 再终端输入 node 后 安两次 tab 键</p>
<p><img src="@source/img/node/doubletab.jpg" alt=""></p>
</li>
</ul>
<h2 id="电子书" tabindex="-1"><a class="header-anchor" href="#电子书" aria-hidden="true">#</a> 电子书</h2>
<ul>
<li><a href="http://webpack.wuhaolin.cn/" target="_blank" rel="noopener noreferrer">深入浅出 Webpack <ExternalLinkIcon/></a></li>
<li><a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ECMAScript 6 入门<ExternalLinkIcon/></a></li>
</ul>
<h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h2>
<ul>
<li>生成 html 的插件 https://github.com/ampedandwired/html-webpack-plugin 配置</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>assetsRoot<span class="token punctuation">,</span> <span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 生成的html的文件名</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'index.html'</span><span class="token punctuation">,</span> <span class="token comment">// 依据的模板</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中</span>
    <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 压缩配置</span>
    <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除html中的注释代码</span>
    <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除html中的空白符</span>
    <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除html元素中属性的引号</span>
    <span class="token literal-property property">minifyJS</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">warnings</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 更多配置</span>
    <span class="token comment">// https://github.com/kangax/html-minifier#options-quick-reference</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">chunksSortMode</span><span class="token operator">:</span> <span class="token string">'dependency'</span> <span class="token comment">// 按dependency的顺序引入</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="动画库" tabindex="-1"><a class="header-anchor" href="#动画库" aria-hidden="true">#</a> 动画库</h2>
<ol>
<li><a href="https://github.com/julianshapiro/velocity" target="_blank" rel="noopener noreferrer">velocity.js<ExternalLinkIcon/></a> 支持链式调用</li>
<li><a href="https://github.com/greensock/GreenSock-JS" target="_blank" rel="noopener noreferrer">gsap<ExternalLinkIcon/></a> GSAP 是一个 JavaScript 库，用于创建适用于所有主流浏览器的高性能动画</li>
<li><a href="http://www.createjs.cc/tweenjs/" target="_blank" rel="noopener noreferrer">tweenjs<ExternalLinkIcon/></a> TweenJS 类库主要用来调整和动画 HTML5 和 Javascript 属性，提供了简单并且强大的 tweening 接口。</li>
<li><a href="http://hiloteam.github.io/" target="_blank" rel="noopener noreferrer">hilo<ExternalLinkIcon/></a> 阿里的 HTML5 互动游戏引擎</li>
<li><a href="https://www.pixijs.com/" target="_blank" rel="noopener noreferrer">pixijs<ExternalLinkIcon/></a> PixiJS 是一个超快的 2D 渲染游戏引擎。它自动侦测使用 WebGL 或者 Canvas。</li>
<li><a href="https://kaboomjs.com/doc/intro" target="_blank" rel="noopener noreferrer">Kaboom.js<ExternalLinkIcon/></a> Kaboom 是一个 JavaScript 库，可帮助您快速有趣地制作游戏.</li>
</ol>
<h2 id="前端工具" tabindex="-1"><a class="header-anchor" href="#前端工具" aria-hidden="true">#</a> 前端工具</h2>
<ul>
<li><a href="https://valine.js.org/" target="_blank" rel="noopener noreferrer">Valine<ExternalLinkIcon/></a> 一款快速、简洁且高效的无后端评论系统。</li>
<li><a href="https://github.com/jaweii/Vue-Layout" target="_blank" rel="noopener noreferrer">基于 UI 组件的 Vue 可视化布局工具<ExternalLinkIcon/></a></li>
<li><a href="https://jex.im/regulex/" target="_blank" rel="noopener noreferrer">正则表达式测试网址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/usablica/intro.js/" target="_blank" rel="noopener noreferrer">用户指引库<ExternalLinkIcon/></a></li>
<li><a href="http://o.qcloud.com/static/api/v3/#templates" target="_blank" rel="noopener noreferrer">腾讯蓝鲸<ExternalLinkIcon/></a></li>
</ul>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<h3 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h3>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  npm install pm2 <span class="token operator">-</span>g
  <span class="token comment">// 进程间通信模块保证日志正常打印 pm2 安装模块依赖 git</span>
  pm2 install pm2<span class="token operator">-</span>intercom
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// package.json 里 scripts 的配置</span>
    <span class="token string-property property">"pm2"</span><span class="token operator">:</span> <span class="token string">"pm2 start ./config/ecosystem.config.js --env production"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// config/ecosystem.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */</span>
  <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// First application</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
      <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">"./bin/www"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">ignore_watch</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// 从监控目录中排除</span>
        <span class="token string">"node_modules"</span><span class="token punctuation">,</span>
        <span class="token string">"logs"</span><span class="token punctuation">,</span>
        <span class="token string">"public"</span><span class="token punctuation">,</span>
        <span class="token string">".idea"</span><span class="token punctuation">,</span>
        <span class="token string">".git"</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">watch_options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">followSymlinks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">error_file</span><span class="token operator">:</span> <span class="token string">"./logs/pm2/app-err.log"</span><span class="token punctuation">,</span> <span class="token comment">// 错误日志路径</span>
      <span class="token literal-property property">out_file</span><span class="token operator">:</span> <span class="token string">"./logs/pm2/app-out.log"</span><span class="token punctuation">,</span> <span class="token comment">// 普通日志路径</span>
      <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token comment">// instance_var: "NODE_APP_INSTANCE",</span>
      <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">"cluster"</span><span class="token punctuation">,</span> <span class="token comment">// 集群模式 负载均衡</span>
      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">COMMON_VARIABLE</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">env_production</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">env_dev</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">"dev"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">env_test</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h2 id="字符串模版-折行转义字符" tabindex="-1"><a class="header-anchor" href="#字符串模版-折行转义字符" aria-hidden="true">#</a> 字符串模版 <a href="https://css-tricks.com/snippets/javascript/multiline-string-variables-in-javascript/" target="_blank" rel="noopener noreferrer">折行转义字符<ExternalLinkIcon/></a></h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> htmlSTring <span class="token operator">=</span>
  <span class="token string">"&lt;div>\
  This is a string.\
&lt;/div>"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>http://[fe80::461c:a8ff:fe2a:accf%2]:3911/1ed680d5-6138-4608-a269-8840850a96f9</p>
</template>
