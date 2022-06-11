<template><h1 id="vscode-插件" tabindex="-1"><a class="header-anchor" href="#vscode-插件" aria-hidden="true">#</a> <a href="https://github.com/sxei/vscode-plugin-demo" target="_blank" rel="noopener noreferrer">VSCode 插件<ExternalLinkIcon/></a></h1>
<ul>
<li>
<p><a href="http://blog.haoji.me/vscode-plugin-overview.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://code.visualstudio.com/api/get-started/your-first-extension" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://code.visualstudio.com/api/references/when-clause-contexts" target="_blank" rel="noopener noreferrer">when 语句可以使用的上下文<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h2 id="vscode-插件能做什么" tabindex="-1"><a class="header-anchor" href="#vscode-插件能做什么" aria-hidden="true">#</a> vscode 插件能做什么</h2>
<ul>
<li>不受限制的访问本地磁盘</li>
<li>自定义命令，快捷，菜单</li>
<li>自定义跳转、自动补全、悬浮提示</li>
<li>自定义设置、自定义欢迎页</li>
<li>自定义webview</li>
<li>自定义左侧功能面板</li>
<li>自定义颜色、图标主题</li>
<li>新增语言支持，语法高亮、解析、折叠、跳转、补全等</li>
<li>Markdown 增强</li>
<li>其他，状态栏修改，通知提示，编辑器控制，git 源码控制、任务定义 等</li>
</ul>
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
<h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"plugin-name"</span><span class="token punctuation">,</span>
    <span class="token property">"displayname"</span><span class="token operator">:</span><span class="token string">"插件名称"</span><span class="token punctuation">,</span>
    <span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"插件描述"</span><span class="token punctuation">,</span>
    <span class="token property">"keywords"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"demo"</span><span class="token punctuation">,</span><span class="token string">"vscode"</span><span class="token punctuation">,</span><span class="token string">"plugins"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"version"</span><span class="token operator">:</span><span class="token string">"0.0.1"</span><span class="token punctuation">,</span>
    <span class="token property">"publisher"</span><span class="token operator">:</span><span class="token string">"username"</span><span class="token punctuation">,</span>
    <span class="token property">"engines"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"vscode"</span><span class="token operator">:</span><span class="token string">"^1.27.0"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"categories"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">"Other"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"icon"</span><span class="token operator">:</span><span class="token string">"images/icon.png"</span><span class="token punctuation">,</span>
    <span class="token property">"activationEvents"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">"onCommand:extension.sayHello"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"main"</span><span class="token operator">:</span><span class="token string">"./src/extension"</span><span class="token punctuation">,</span>
    <span class="token comment">// 贡献点，整个插件最重要多的配置项</span>
    <span class="token property">"contributes"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"configuration"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"object"</span><span class="token punctuation">,</span>
        <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"plugin-demo"</span><span class="token punctuation">,</span>
        <span class="token property">"properties"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">"vscodePluginDemo.yourName"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"string"</span><span class="token punctuation">,</span>
                <span class="token property">"default"</span><span class="token operator">:</span><span class="token string">"guest"</span><span class="token punctuation">,</span>
                <span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"您的名字"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"vscodePluginDemo.showTip"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"boolean"</span><span class="token punctuation">,</span>
                <span class="token property">"default"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"是否在每次启动时显示欢迎提示"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"commands"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.sayHello"</span><span class="token punctuation">,</span>
            <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"Hello World"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"keybindings"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.sayHello"</span><span class="token punctuation">,</span>
            <span class="token property">"key"</span><span class="token operator">:</span><span class="token string">"ctrl+f10"</span><span class="token punctuation">,</span>
            <span class="token property">"mac"</span><span class="token operator">:</span><span class="token string">"cmd+f10"</span><span class="token punctuation">,</span>
            <span class="token property">"when"</span><span class="token operator">:</span><span class="token string">"editorTextFocus"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"menus"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"editor/context"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 编辑器获得焦点时才会出现在菜单中</span>
                <span class="token property">"when"</span><span class="token operator">:</span><span class="token string">"editorFocus"</span><span class="token punctuation">,</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.sayHello"</span><span class="token punctuation">,</span>
                <span class="token comment">// navigation 是一个永远置顶的分组，后面的@6是人工进行组内排序</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation@6"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">"when"</span><span class="token operator">:</span><span class="token string">"editorFocus"</span><span class="token punctuation">,</span>
               <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.getCurrentFilePath"</span><span class="token punctuation">,</span>
               <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation@5"</span> 
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 只要编辑器获得焦点并且打开的是js文件才出现</span>
                <span class="token property">"when"</span><span class="token operator">:</span><span class="token string">"editorFocus &amp;&amp; resourceLangId == javascript"</span><span class="token punctuation">,</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.testMenuShow"</span><span class="token punctuation">,</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"z_commands"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.openWebview"</span><span class="token punctuation">,</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 编辑器右上角图标，不配置图片就显示文字</span>
        <span class="token property">"editor/title/content"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"when"</span><span class="token operator">:</span><span class="token string">"editorFocus &amp;&amp; resourceLangId == javascript"</span><span class="token punctuation">,</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.testMenushow"</span><span class="token punctuation">,</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 资源管理器右键菜单</span>
        <span class="token property">"explorer/context"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.getCurrentFilePath"</span><span class="token punctuation">,</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"command"</span><span class="token operator">:</span><span class="token string">"extension.demo.openWebview"</span><span class="token punctuation">,</span>
                <span class="token property">"group"</span><span class="token operator">:</span><span class="token string">"navigation"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 代码片段</span>
    <span class="token property">"snippets"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"language"</span><span class="token operator">:</span><span class="token string">"javascript"</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"./snippets/javascript.json"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token property">"language"</span><span class="token operator">:</span><span class="token string">"html"</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"./snippets/html.json"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 自定义新的 activitybar 图标，也就是左侧侧边栏大的图标</span>
    <span class="token property">"viewsContainers"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"activitybar"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"beautiulGirl"</span><span class="token punctuation">,</span>
                <span class="token property">"title"</span><span class="token operator">:</span><span class="token string">"hello"</span><span class="token punctuation">,</span>
                <span class="token property">"icon"</span><span class="token operator">:</span><span class="token string">"images/beautifulGirl.svg"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token comment">// 自定义侧边栏内view 的实现</span>
    <span class="token property">"views"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// 和 viewsContainers 的id 对应</span>
        <span class="token property">"beautifulGirl"</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"beautiulGirl"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"bg1"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"bg2"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"bg2"</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"bg3"</span><span class="token punctuation">,</span>
                <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"bg3"</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 图标主题</span>
    <span class="token property">"iconThemes"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"testIconTheme"</span><span class="token punctuation">,</span>
            <span class="token property">"label"</span><span class="token operator">:</span><span class="token string">"测试图标主题"</span><span class="token punctuation">,</span>
            <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"./theme/icon-theme.json"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 同 scripts</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"postinstall"</span><span class="token operator">:</span><span class="token string">"node ./node_modules/vscode/bin/install"</span><span class="token punctuation">,</span>
      <span class="token property">"test"</span><span class="token operator">:</span><span class="token string">"node ./node_modules/vscode/bin/test"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 开发依赖</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"bugs"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"repository"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"git"</span><span class="token punctuation">,</span>
      <span class="token property">"url"</span><span class="token operator">:</span><span class="token string">""</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 主页</span>
  <span class="token property">"homepage"</span><span class="token operator">:</span><span class="token string">"*/md"</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br></div></div><h3 id="activationevents-插件激活时机" tabindex="-1"><a class="header-anchor" href="#activationevents-插件激活时机" aria-hidden="true">#</a> activationEvents 插件激活时机</h3>
<ul>
<li>
<p>onLanguage:${language}</p>
<pre><code>  onLanguage:javascript 打开js类型的文件插件就会激活
</code></pre>
</li>
<li>
<p>onCommand:${command}</p>
</li>
<li>
<p>onDebug</p>
</li>
<li>
<p>workspaceContains:${toplevelfilename}</p>
</li>
<li>
<p>onFileSystem:${scheme}</p>
</li>
<li>
<p>onView:${viewId}</p>
</li>
<li>
<p>onUri</p>
</li>
<li>
<ul>
<li></li>
</ul>
</li>
</ul>
<h3 id="contributes-贡献点" tabindex="-1"><a class="header-anchor" href="#contributes-贡献点" aria-hidden="true">#</a> contributes 贡献点</h3>
<ul>
<li>configuration 设置</li>
<li>commands 命令</li>
<li>menus 菜单</li>
<li>keybindings 快捷绑定</li>
<li>languages 语言支持</li>
<li>debuggers 调试</li>
<li>breakpoints 断电</li>
<li>grammars 语法</li>
<li>themes 主题</li>
<li>snippets 代码片段</li>
<li>jsonValidation 自定义JSON检验</li>
<li>views 左侧侧边栏视图</li>
<li>viewsContainers 自定义activitybar</li>
<li>problemMatchers</li>
<li>problemPatterns</li>
<li>taskDefinitions</li>
<li>colors</li>
</ul>
<h4 id="普通命令-commands" tabindex="-1"><a class="header-anchor" href="#普通命令-commands" aria-hidden="true">#</a> 普通命令 commands</h4>
<ul>
<li>在 extension.js 中注册命令</li>
<li>在package.json 中配置命令</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 插件激活时触发，插件代码入口
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">}</span></span> <span class="token parameter">context</span> 插件上下文
 */</span>
<span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// Use the console to output diagnostic information (console.log) and errors (console.error)</span>
	<span class="token comment">// This line of code will only be executed once when your extension is activated</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'🎉, 你的插件 "vscode1" 已激活!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//注册命令 </span>
	context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>disposable<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> cureentFilePath <span class="token operator">=</span> vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">'vscode1.getCurrentFilePath'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">uri</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 可选参数uri 编辑器右键菜单执行 就是当前打开的文件夹路径， command + shift + p 执行 为空</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
		vscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你好我的插件 from vscode1!当前路径是： </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>uri<span class="token operator">?</span>uri<span class="token punctuation">.</span>path<span class="token operator">:</span><span class="token string">'空'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cureentFilePath<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>
		<span class="token property">"commands"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">"command"</span><span class="token operator">:</span> <span class="token string">"vscode1.getCurrentFilePath"</span><span class="token punctuation">,</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"获取文件路径😄"</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="编辑器命令" tabindex="-1"><a class="header-anchor" href="#编辑器命令" aria-hidden="true">#</a> 编辑器命令</h3>
<p>文本编辑器命令与普通命令不同，它们仅仅在编辑器被激活时调用才生效，此外，这个命令可以访问到当前活动编辑器命令，<code>textEditor</code>
<code>vscode.commands.registerTextEditorCommand</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 编辑器命令</span>
context<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerTextEditorCommand</span><span class="token punctuation">(</span><span class="token string">'extension.testEditorCommand'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">textEditor<span class="token punctuation">,</span> edit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'您正在执行编辑器命令！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>textEditor<span class="token punctuation">,</span> edit<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="执行命令" tabindex="-1"><a class="header-anchor" href="#执行命令" aria-hidden="true">#</a> 执行命令</h3>
<p>vscode 很多命令风格是 返回一个类似Promise 的Thenable 对象，如果发现api里返回的是这个对象，说明这个方法不是直接返回结果的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
   vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token string">'命令'</span><span class="token punctuation">,</span> <span class="token string">'params1'</span><span class="token punctuation">,</span> <span class="token string">'params2'</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'命令结果'</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="获取所有命令" tabindex="-1"><a class="header-anchor" href="#获取所有命令" aria-hidden="true">#</a> 获取所有命令</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">getCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">callCommands</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'所有命令'</span><span class="token punctuation">,</span> allCommands<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>也可以打开快捷键设置，查看命令右键赋值命令</p>
<h3 id="内置命令" tabindex="-1"><a class="header-anchor" href="#内置命令" aria-hidden="true">#</a> <a href="https://code.visualstudio.com/api/references/commands" target="_blank" rel="noopener noreferrer">内置命令<ExternalLinkIcon/></a></h3>
<p>打开文件夹，高亮、格式化等</p>
<h2 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h2>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<ul>
<li>key</li>
<li><code>when</code> <a href="https://code.visualstudio.com/api/references/when-clause-contexts" target="_blank" rel="noopener noreferrer">出现时机<ExternalLinkIcon/></a></li>
<li><code>command</code> 定义菜单被点击后要执行的命令</li>
<li><code>alt</code> 定义备用命令，按住 <code>alt</code> 键打开菜单时执行对应命令；</li>
<li><code>group</code> 菜单分组</li>
</ul>
<h3 id="key-位置-列表" tabindex="-1"><a class="header-anchor" href="#key-位置-列表" aria-hidden="true">#</a> key/位置 列表</h3>
<table>
<thead>
<tr>
<th style="text-align:center">key</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">explorer/context</td>
<td style="text-align:center">资源管理器上下文菜单</td>
</tr>
<tr>
<td style="text-align:center">editor/content</td>
<td style="text-align:center">编辑器上下文菜单</td>
</tr>
<tr>
<td style="text-align:center">editor/title</td>
<td style="text-align:center">标题栏菜单</td>
</tr>
<tr>
<td style="text-align:center">editor/title/context</td>
<td style="text-align:center">编辑器标题上下文菜单</td>
</tr>
<tr>
<td style="text-align:center">scm/title</td>
<td style="text-align:center">SCM标题菜单</td>
</tr>
<tr>
<td style="text-align:center">scm/resourceGroup/context</td>
<td style="text-align:center">SCM资源组菜单</td>
</tr>
<tr>
<td style="text-align:center">scm/resource/context</td>
<td style="text-align:center">SCM资源菜单</td>
</tr>
<tr>
<td style="text-align:center">scm/change/title</td>
<td style="text-align:center">SCM更改标题菜单</td>
</tr>
<tr>
<td style="text-align:center">view/title</td>
<td style="text-align:center">左侧是图标题菜单</td>
</tr>
<tr>
<td style="text-align:center">view/item/context</td>
<td style="text-align:center">视图项菜单</td>
</tr>
<tr>
<td style="text-align:center">commandPalette</td>
<td style="text-align:center">控制命令是否显示在命令选项板中</td>
</tr>
</tbody>
</table>
<h3 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> group</h3>
<h4 id="editor-context-编辑器默认组有" tabindex="-1"><a class="header-anchor" href="#editor-context-编辑器默认组有" aria-hidden="true">#</a> <code>editor/context</code> 编辑器默认组有</h4>
<ul>
<li><code>navigative</code> 最上面的组</li>
<li><code>1_modification</code> 更改组</li>
<li><code>9_cutcopypaste</code> 编辑组</li>
<li><code>z_commands</code> 默认分组</li>
</ul>
<p><img src="@source/vscode/img/groupSorting.png" alt="editor-title-group"></p>
<h4 id="explorer-context" tabindex="-1"><a class="header-anchor" href="#explorer-context" aria-hidden="true">#</a> <a href="https://code.visualstudio.com/api/references/contribution-points" target="_blank" rel="noopener noreferrer">explorer/context<ExternalLinkIcon/></a></h4>
<ul>
<li>navigation</li>
<li>2_workspace</li>
<li>3_compare</li>
<li>4_search</li>
<li>5_cutcopypaste</li>
<li>6_copypath</li>
<li>7_modification</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
</template>
