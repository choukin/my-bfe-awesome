<template><h1 id="npm-包规范" tabindex="-1"><a class="header-anchor" href="#npm-包规范" aria-hidden="true">#</a> npm 包规范</h1>
<ul>
<li>
<p>sinopia 私有 npm 源 服务器</p>
</li>
<li>
<p>[verdaccio npm 私有源服务]https://verdaccio.org/</p>
</li>
<li>
<p>npm 规范</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>├── index.js //入口文件
├── introduce.md //说明文件
├── lib
│   └── index.js //主要文件
├── node_modules //第三方包
├── package.json 
├── README.md 
└── <span class="token builtin class-name">test</span> //单元测试文件
    └── test.js

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="npm-包收集" tabindex="-1"><a class="header-anchor" href="#npm-包收集" aria-hidden="true">#</a> npm 包收集</h2>
<p>1、 ·Inquirer.js试图为NodeJs做一个可嵌入式的美观的命令行界面·
2、</p>
<p>二、使用说明
1.单次使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> --registry http://npm.taobao.com/ <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.全局配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://npm.qingsongchou.net/
 
npn <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3.使用源管理工具 nrm 全局切换（推荐）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// 下载nrm
<span class="token function">npm</span> <span class="token function">install</span> -g nrm
 
// 查看当前npm源
nrm <span class="token function">ls</span>
 
// 添加技术中心npm源
nrm <span class="token function">add</span> qsc http://npm.qingsongchou.net/
 
// 将当前npm源指向技术中心源
nrm use qsc
 
// 下载包
<span class="token function">npm</span> <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>4.版本号前缀</p>
<p>默认情况下 安装包 <code>npm i -S XX-name</code> 后在 <code>package.json</code> 中出现 <code>&quot;XXX-name&quot;: &quot;^2.4.4&quot;,</code>
版本号的意思 <code>[前缀]主版本号.次版本号.补丁版本号</code>
-主版本号：当API发生变化，并与之前的版本不兼容时更新
-次版本号：当增加了功能，但是向后兼容的时候更新
-补丁版本号:当做了缺陷修复，但向后兼容的时候更新
-前缀
首先了解下版本号前缀的作用？
- *: 会匹配当前最新的版本
- ^: 会匹配最新的次版本号，比如 1.2.1 匹配所有 1.x.x的包，不包括 2.x.x
- ～: 会匹配最新的补丁版本号； 比如 ~1.1.1 会匹配所有 1.1.X版本，不包括 1.2.X
- 无符号: 会匹配指定的版本号</p>
<p>如何修改默认安装的版本号前缀
- 默认使用前缀~：npm config set save-prefix '~'
- 不使用前缀，保存指定版本 ：npm config set save-exact true</p>
<p>三、发布新模块
1.模块规范：</p>
<p>模块的 name（即 package.json 中的 name 字段）需要遵循模块命名规范；
模块必须有 README.md 文件，内容为详细的说明文档，也可以提供文档连接；
为了版本控制清楚明了，文档中必须要有版本说明；
不可直接发布大版本，应先发布 prelease 版，下方有说明；
为保证模块使用没问题，代码最好经过 babel 转换成 ES5；
2. 模块命名规范：</p>
<p>命名采用小写字母和中划线（-）分割的格式，模块名不超过三段
业务线自用模块前缀增加对应域：
XX：@XXX-jc/package-name
通用模块使用公用域：
公用：@qsc/package-name
3. 写好一个模块，经过测试完成后，可以考虑发布到 npm 上了，可以通过以下步骤完成一个模块的新发布：</p>
<p>// 1.初始化包的描述文件（其实是生成  package.json，如果已有这个文件，可跳过该步骤）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>// 2.设置npm私有库中，你的用户名，密码，邮箱。请使用统一账号密码，公司邮箱；</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>// 3.发布</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>// 4. 本地调试 把当前开发的包软链到本机</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 当前项目根目录执行 卸载使用 npm uninstall xxx -g</span>
<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">link</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>以上，即可完成一个新包的发布了。</p>
<p>四、管理模块权限</p>
<ol>
<li>很多时候，一个模块往往不只是你一个人在管理的，这时需要给其他一起维护的同学开通发布的权限，如下：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看模块 owner</span>
<span class="token function">npm</span> owner <span class="token function">ls</span> package-name
 
<span class="token comment"># 添加一个发布者</span>
<span class="token function">npm</span> owner <span class="token function">add</span> xxx@qingsongchou.com package-name
 
<span class="token comment"># 删除一个发布者</span>
<span class="token function">npm</span> owner <span class="token function">rm</span> xxx@qingsongchou.com package-name
``<span class="token variable"><span class="token variable">`</span><span class="token function">sh</span>

五、更新版本
当模块有更新的时候，需要发布一个新版本，当所有需要更新的文件都 commit 完了后，就可以更新到 <span class="token function">npm</span> 了。

<span class="token number">1</span>. 首先发布一个预发布版本

很多时候一些新改动，不能直接发布到稳定版本上（稳定版本的意思就是使用 <span class="token function">npm</span> <span class="token function">install</span> package-name 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。
<span class="token variable">`</span></span>``sh
<span class="token comment"># 发布一个 prelease 版本，tag=beta</span>
<span class="token function">npm</span> version prerelease
 
<span class="token function">npm</span> publish --tag beta
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>比如原来的版本号是 1.0.1，那么以上发布后的版本是 1.0.1-0，用户可以通过 npm install package-name@beta 或者 npm install package-name@1.0.1-0 来安装。</p>
<p>2.当prerelease版本稳定后，可以把他设置成稳定版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本</span>
<span class="token function">npm</span> dist-tag <span class="token function">ls</span>
 
<span class="token comment"># 设置 1.0.1-1 版本为稳定版本</span>
<span class="token function">npm</span> dist-tag <span class="token function">add</span> package-name@1.0.1-1 latest
 
<span class="token comment"># 或者通过 tag 来设置</span>
<span class="token function">npm</span> dist-tag <span class="token function">add</span> package-name@beta latest

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>当发现 BUG，也可以通过 npm dist-tag 命令回退。</p>
<p>这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install package-name 即可安装该版本。</p>
<p>3.发布一个新的稳定版本</p>
<p>// 版本号格式规范为{major}.{minor}.{patch}
// 更新版本号（major | minor | patch | premajor | preminor | prepatch | prerelease）
// 大版本并且不向下兼容时，使用 major
// 有新功能且向下兼容时，使用 major
// 修复一些问题、优化等，使用 patch
// 下面比如更新一个 patch 小版本号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> version patch
<span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>六、查看版本信息
最后，可以通过 npm info 来查看模块的详细信息。</p>
<h3 id="npm-查看全局安装包" tabindex="-1"><a class="header-anchor" href="#npm-查看全局安装包" aria-hidden="true">#</a> npm 查看全局安装包</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> list -g --depth <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="除非也指定-否则这是包含-package-json-文件或-node-modules-目录的最接近的父目录-g。" tabindex="-1"><a class="header-anchor" href="#除非也指定-否则这是包含-package-json-文件或-node-modules-目录的最接近的父目录-g。" aria-hidden="true">#</a> 除非也指定，否则这是包含 package.json 文件或 node_modules 目录的最接近的父目录 -g。</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm prefix [-g]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="清除-npm-缓存" tabindex="-1"><a class="header-anchor" href="#清除-npm-缓存" aria-hidden="true">#</a> 清除 npm 缓存</h3>
<p>npm cache clear --force</p>
<h3 id="npmrc-文件" tabindex="-1"><a class="header-anchor" href="#npmrc-文件" aria-hidden="true">#</a> <code>.npmrc</code> 文件</h3>
<ol>
<li>.npmrc，可以理解成npm running cnfiguration, 即npm运行时配置文件。简单点说， .npmrc 可以设置 package.json 中依赖包的安装来源，既从哪里下载依赖包。
2.项目下 .npmrc 文件的优先级最高，可以给每个项目配置不同的镜像，项目之间的配置互不影响。
在项目的根目录下新建 .npmrc 文件，在里面以 key=value 的格式进行配置。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 指定package.json 中的下载源</span>
<span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.npmmirror.com/
<span class="token comment"># 指定@test 开头的包下载地址</span>
@test:registry<span class="token operator">=</span>https://npm.test.com
<span class="token comment"># 配置此项目的局部镜像源之 electron</span>
electron_mirror <span class="token operator">=</span> <span class="token string">"https://npm.taobao.org/mirrors/electron/"</span>
<span class="token comment"># 其它包的配置配置</span>
<span class="token assign-left variable">disturl</span><span class="token operator">=</span>https://npm.taobao.org/dist
<span class="token assign-left variable">sass_binary_site</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node-sass
<span class="token assign-left variable">electron_mirror</span><span class="token operator">=</span>https://cdn.npm.taobao.org/dist/electron/
<span class="token assign-left variable">PUPPETEER_DOWNLOAD_HOST</span><span class="token operator">=</span>https://npm.taobao.org/mirrors
<span class="token assign-left variable">canvas_binary_host_mirror</span><span class="token operator">=</span>https://npm.taobao.org/mirrors/node-canvas-prebuilt/
<span class="token assign-left variable">sentrycli_cdnurl</span><span class="token operator">=</span>https://registry.npmmirror.com/-/binary/sentry-cli
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul>
<li>npm 的配置文件 .npmrc</li>
<li>yarn 会读取.npmrc 的配置文件，所以不必为 yarn 再设置一次</li>
<li>删除 .npmrc 文件，即可恢复默认配置</li>
<li>项目根目录命令行 npm config get registry 查看是否设置成功</li>
</ul>
<h2 id="nvm-常用命令" tabindex="-1"><a class="header-anchor" href="#nvm-常用命令" aria-hidden="true">#</a> <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm 常用命令<ExternalLinkIcon/></a></h2>
<ul>
<li>
<p>nvm install stable  安装最新稳定版 node</p>
</li>
<li>
<p>nvm install <code>&lt;version&gt;</code>  安装指定版本，如：安装v4.4.0，nvm install v4.4.0</p>
</li>
<li>
<p>nvm uninstall <code>&lt;version&gt;</code>  删除已安装的指定版本，语法与install类似</p>
</li>
<li>
<p>nvm use <code>&lt;version&gt;</code>  切换使用指定的版本node</p>
</li>
<li>
<p>nvm ls  列出所有安装的版本</p>
</li>
<li>
<p>nvm alias default <code>&lt;version&gt;</code>  如： nvm alias default v11.1.0</p>
</li>
</ul>
<h2 id="强制清理缓存" tabindex="-1"><a class="header-anchor" href="#强制清理缓存" aria-hidden="true">#</a> 强制清理缓存</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm cache clear <span class="token operator">--</span>force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
