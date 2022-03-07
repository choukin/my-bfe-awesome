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
<p>二、使用说明</p>
<ol>
<li>单次使用</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> --registry http://npm.taobao.com/ <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>全局配置</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://npm.qingsongchou.net/
 
npn <span class="token function">install</span> package-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3">
<li>使用源管理工具 nrm 全局切换（推荐）</li>
</ol>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>三、发布新模块</p>
<ol>
<li>模块规范：</li>
</ol>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以上，即可完成一个新包的发布了。</p>
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
<ol start="2">
<li>当prerelease版本稳定后，可以把他设置成稳定版本</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本</span>
<span class="token function">npm</span> dist-tag <span class="token function">ls</span>
 
<span class="token comment"># 设置 1.0.1-1 版本为稳定版本</span>
<span class="token function">npm</span> dist-tag <span class="token function">add</span> package-name@1.0.1-1 latest
 
<span class="token comment"># 或者通过 tag 来设置</span>
<span class="token function">npm</span> dist-tag <span class="token function">add</span> package-name@beta latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>当发现 BUG，也可以通过 npm dist-tag 命令回退。</p>
<p>这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install package-name 即可安装该版本。</p>
<ol start="3">
<li>发布一个新的稳定版本</li>
</ol>
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
</template>
