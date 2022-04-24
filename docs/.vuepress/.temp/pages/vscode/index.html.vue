<template><h1 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件" aria-hidden="true">#</a> <a href="https://github.com/sxei/vscode-plugin-demo" target="_blank" rel="noopener noreferrer">VSCode 插件<ExternalLinkIcon/></a></h1>
<h2 id="安装生成器" tabindex="-1"><a class="header-anchor" href="#安装生成器" aria-hidden="true">#</a> 安装生成器</h2>
<p><a href="https://github.com/Microsoft/vscode-generator-code" target="_blank" rel="noopener noreferrer">vscode-generator-code<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g yo generator-code
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="生成模版" tabindex="-1"><a class="header-anchor" href="#生成模版" aria-hidden="true">#</a> 生成模版</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yo code
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h3>
<h4 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── CHANGELOG.md
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── src
│   └── extension.js
├── <span class="token builtin class-name">test</span>
│   ├── runTest.js
│   └── suite
└── vsc-extension-quickstart.md
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>项目的入口文件是 <code>package.json</code> <code>src/extension.js</code></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>首次调试按 <code>F5</code> 会打开一个新的vscode窗口，写的插件会在新窗口里运行， 修改代码后在新窗口 (<code>Ctrl+R</code> or <code>Cmd+R</code> on Mac) 重新预览效果</p>
</div>
<h2 id="hello" tabindex="-1"><a class="header-anchor" href="#hello" aria-hidden="true">#</a> hello</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
## package.json</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
