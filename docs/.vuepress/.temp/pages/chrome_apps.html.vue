<template><h1 id="chrome-app-列表" tabindex="-1"><a class="header-anchor" href="#chrome-app-列表" aria-hidden="true">#</a> chrome app 列表</h1>
<ul>
<li><a href="http://www.xue51.com/soft/2278.html" target="_blank" rel="noopener noreferrer">ublock origin是一款专门为浏览器开发的网页广告拦截过滤插件<ExternalLinkIcon/></a></li>
<li><a href="https://chrome.google.com/webstore/detail/%E4%B8%80%E9%94%AE%E7%AE%A1%E7%90%86%E6%89%80%E6%9C%89%E6%89%A9%E5%B1%95/niemebbfnfbjfojajlmnbiikmcpjkkja" target="_blank" rel="noopener noreferrer">一键管理所有扩展<ExternalLinkIcon/></a>
<ul>
<li>用于：快捷停用启用浏览器插件</li>
</ul>
</li>
<li><a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa" target="_blank" rel="noopener noreferrer">JSON Formatter<ExternalLinkIcon/></a>
<ul>
<li>用于：格式化网络请求来的JSON字符串</li>
</ul>
</li>
<li>Anything to QRcode</li>
<li>用于：将地址栏网址快捷生成二维码</li>
<li><a href="https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc" target="_blank" rel="noopener noreferrer">Octotree<ExternalLinkIcon/></a>
<ul>
<li>用于：为Github 库添加快捷访问的侧边栏文件树</li>
</ul>
</li>
<li>Validity
<ul>
<li>用于：检查网页中的错误，如：标签的闭合、属性的遗漏、优化建议</li>
</ul>
</li>
<li>Speed Dial 2 中文版
<ul>
<li>用于：将浏览器新标签页变成快捷拨号页</li>
</ul>
</li>
<li><a href="https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom" target="_blank" rel="noopener noreferrer">AdBlock<ExternalLinkIcon/></a>
<ul>
<li>用于：屏蔽广告</li>
</ul>
</li>
<li>Backbone Debugger
<ul>
<li>用于：Backbone 开发，查看各种Backbone实例的详情</li>
</ul>
</li>
<li><a href="https://github.com/facebook/react-devtools" target="_blank" rel="noopener noreferrer">React Developer Tools<ExternalLinkIcon/></a>
<ul>
<li>用于：React开发工具</li>
</ul>
</li>
<li><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noopener noreferrer">Vue.js devtools<ExternalLinkIcon/></a></li>
<li>用于：Vue开发工具</li>
<li><a href="https://github.com/vuejs/vue-devtools" target="_blank" rel="noopener noreferrer">github 仓库<ExternalLinkIcon/></a></li>
<li>Proxy SwitchyOmega</li>
<li>用于：快捷管理切换浏览器代理。搭配科学上网
<ol>
<li>Axure RP Extension for Chrome
用于：让谷歌支持打开Axure（产品原型）插件</li>
</ol>
</li>
</ul>
<h1 id="如何用chrome编辑以及调试代码" tabindex="-1"><a class="header-anchor" href="#如何用chrome编辑以及调试代码" aria-hidden="true">#</a> 如何用Chrome编辑以及调试代码</h1>
<p>翻译<a href="https://blog.openreplay.com/how-to-use-chrome-as-a-code-editor-and-debugger" target="_blank" rel="noopener noreferrer">原文<ExternalLinkIcon/></a></p>
<p>很少有开发者慎入研究浏览器的&quot;开发者工具&quot;，现在浏览器的开发者工具有一系列令人望而生畏的复杂功能，可以让Chrome作为完整的开发环境。我们不太可能放弃VS Code 或者Sublime Text 等编辑器。但是如果在别人的电脑上或需要编辑简单的代码时，浏览器是一个不错的选择。</p>
<p>下面几节介绍如何使用 Chrome 的编辑和调试工具。 Chromium, Edge, Opera, Vivaldi, 和 Brave 等浏览器使用的引擎和工具与Chrome一样。根据浏览器和系统不同，可以通过菜单或者快捷键打开开发者工具 window 下按 <code>F12</code> mac 系统 <code>shift + command + C</code> 打开并定位到 Element tab 栏 <code>option + command + I</code> 打开并定位到Console栏；Safari 和 Firfox 有不同工具集，它们也有自己的方式来帮助开发者，例如 都有Console和Element等；</p>
<h2 id="快速编辑任何站点" tabindex="-1"><a class="header-anchor" href="#快速编辑任何站点" aria-hidden="true">#</a> 快速编辑任何站点</h2>
<p>在浏览本地或线上站点的页面时，可以在 <code>Element</code> 元素面版 检查，禁用， 启用，添加，编辑，或删除 CSS选择器或属性:</p>
<p><img src="@source/../docs/chromeimg/element.png" alt=""></p>
<p><code>Sources</code> 面版中可以通过page 栏定位和编辑 CSS 或 JavaScript。</p>
<p><img src="@source/chromeimg/sources-panel.png" alt=""></p>
<p>编辑后按 Ctrl / Cmd + S 来保存修改后的内容，请注意保存在了内存中，黄色的警告表示修改不是永久的。</p>
<p>如果你的代码定义了Source maps，你可以打开“Files”(看上面的src 文件夹)，但修改后的代码不会在当前页面起作用。但是你可以点击<code>{}</code> 来美化压缩后的代码然后进行编辑。</p>
<p>只有跳转或刷新页面修改就会丢失。幸运的是，<code>Changes</code> 面版可以查看我们的修改内容。 这个面版通过右侧三个点的菜单打开：</p>
<p><img src="@source/chromeimg/changes.png" alt=""></p>
<p>虽然无法从 <code>Changes</code> 面板中保存代码，但是可以定位到所有修改后的文件。通过右键选择保存到本地从而导入到自己的项目中。</p>
<h2 id="覆盖站点文件" tabindex="-1"><a class="header-anchor" href="#覆盖站点文件" aria-hidden="true">#</a> 覆盖站点文件</h2>
<p>可以覆盖任何本地开发或者线上的站点文件。 <code>Source -&gt; Overrides + Select folder for overrides</code>:</p>
<p><img src="@source/chromeimg/overrides-select.png" alt=""></p>
<p>选择一个电脑中的文件夹，然后点击 <code>允许</code> 这样Chrome 就可以写入了。</p>
<p>返回到 <code>Page</code>面板在任何一个文件中右键 选择 <code>Save for Overides</code>:</p>
<p><img src="@source/chromeimg/overrides-save.png" alt=""></p>
<p>这样就会把文件保存到你刚才选择的文件夹中，文件会出现一个紫色小圆圈表示这个文件在本地：
<img src="@source/chromeimg/overrides-update.png" alt=""></p>
<p>可以点击 <code>{}</code> 来美化压缩的代码，或者做其他修改。修改会立即渲染，因为文件是本地的。只要打开开发者工具，这些变更就会在这个网站上起作用。</p>
<p><code>Changes</code> 面板仍然显示代码差异，你可以将编辑后的文件复制到自己的项目中，请记住，你编辑的是最终生成后的文件，可能需要对项目中的源码进行响应的编辑。</p>
<h2 id="编辑开发中的源文件" tabindex="-1"><a class="header-anchor" href="#编辑开发中的源文件" aria-hidden="true">#</a> 编辑开发中的源文件</h2>
<p>我们可以把Chrome当作一个本地源文件开发的标准文本编辑器，无论使用的是何种构建方式。它提供了大多数基础的编辑功能，行号，撤销/重做，颜色编码，自动提示；启动方式，在<code>Sources</code> 面板中打开 <code>Filesystem</code> 面板，然后点击 <code>+ Add folder to workspace</code>:</p>
<p><img src="@source/chromeimg/filesystem-select.png" alt=""></p>
<p>选择一个本地的项目，然后点击 <code>Allow</code> 这样Chrome 就有了对文件夹的读写权限。我们可以像在编辑器里一样打开和编辑任何文件了：
<img src="@source/chromeimg/filesystem-update.png" alt=""></p>
<h2 id="使用控制台信息调试" tabindex="-1"><a class="header-anchor" href="#使用控制台信息调试" aria-hidden="true">#</a> 使用控制台信息调试</h2>
<p>一些开发者要求永远不要使用 <code>console.log()</code>:因为这样是对源码的修改，并且有更好的调试方式。这是对的，但是我不相信有人会说他永远都没用过 它！console 对象提供了一系列方法包括：</p>
<table>
<thead>
<tr>
<th style="text-align:center">console 方法</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">.log(msg)</td>
<td style="text-align:center">在控制台打印信息</td>
</tr>
<tr>
<td style="text-align:center">.log('%j', obj)</td>
<td style="text-align:center">将对象作为压缩JSON字符串输出</td>
</tr>
<tr>
<td style="text-align:center">.dir(obj, opt)</td>
<td style="text-align:center">格式化输出对象和属性</td>
</tr>
<tr>
<td style="text-align:center">.table(obj)</td>
<td style="text-align:center">以表格的形式输出数组和对象</td>
</tr>
<tr>
<td style="text-align:center">.error(msg)</td>
<td style="text-align:center">输出一个错误信息</td>
</tr>
<tr>
<td style="text-align:center">.count(label)</td>
<td style="text-align:center">命名记录器，记录某行的执行次数</td>
</tr>
<tr>
<td style="text-align:center">.countReset[label]</td>
<td style="text-align:center">重置命名记录器</td>
</tr>
<tr>
<td style="text-align:center">.group(label)</td>
<td style="text-align:center">设置分组信息的起始位置</td>
</tr>
<tr>
<td style="text-align:center">.groupEnd(label)</td>
<td style="text-align:center">设置分组信息的结束位置</td>
</tr>
<tr>
<td style="text-align:center">.time(label)</td>
<td style="text-align:center">启动计时器以计算操作的持续时间</td>
</tr>
<tr>
<td style="text-align:center">.timeLog(label)</td>
<td style="text-align:center">报告计时器启动后经过的时间</td>
</tr>
<tr>
<td style="text-align:center">.timeEnd(label)</td>
<td style="text-align:center">结束计时器，并且报告总耗时</td>
</tr>
<tr>
<td style="text-align:center">.trace()</td>
<td style="text-align:center">用于显示当前执行的代码在堆栈中的调用路径</td>
</tr>
<tr>
<td style="text-align:center">.clear()</td>
<td style="text-align:center">清空 控制台</td>
</tr>
</tbody>
</table>
<p>console.log 还接受多个值逗号分隔的值:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">321</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'x:'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// x: 321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>ES6 解构的写法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">321</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// x: 321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="调试客户端应用" tabindex="-1"><a class="header-anchor" href="#调试客户端应用" aria-hidden="true">#</a> 调试客户端应用</h2>
<p>我们可以在你<code>Sources</code> 面板打开一个JavaScript 文件，点击任意一行来设置断点，请注意在Source maps 文件中选择文件添加断点更简单.</p>
<p>断点指定调试器暂停处理的点，方便我们检查程序的状态并进行到下一行。可以定义任意数量的断点，但一般只需要在开始调试的地方设置断点.</p>
<p>运行代码<strong>可以刷新页面或激活事件处理程序</strong>代码将在断点位置停止。</p>
<p><img src="@source/chromeimg/breakpoint.png" alt=""></p>
<p>右侧面板包括：</p>
<ul>
<li><code>Watch</code> 可以通过点击 <code>+</code>添加要监视变量变化的名称</li>
<li><code>Breakpoints</code> 列出了所有的断点，也可以禁用或启用断点</li>
<li><code>Scope</code> 显示所有局部和全局变量的状态</li>
<li><code>Call Stack</code> 列出了当前函数的调用栈</li>
</ul>
<p>断点消息上方的一行图标：</p>
<p><img src="@source/chromeimg/debug-icons.png" alt=""></p>
<p>从左到右图标的作用如下：</p>
<ul>
<li>1、继续执行： 继续处理程序，直到下一个断点或代码结束运行</li>
<li>2、跳过： 执行下一个命令，但是保持在当前函数内，不会跳到任何这个函数调用的函数里</li>
<li>3、单步执行：执行下一个命令并跳转到它调用的任何函数中</li>
<li>4、单步退出：继续处理程序，并定位到函数本调用的位置.</li>
<li>5、步骤： 类似单步执行，只是它不会跳转到异步函数中</li>
<li>6、跳过所有断点：如果希望临时在不中断的情况下运行代码，但有不想丢失断点时，这个功能非常有用</li>
<li>7、异常暂停: 在出现错误时程序暂停</li>
</ul>
<p><code>DevTools</code> 提供了更多的调试选项，除了手动添加断点外，还可以在代码中添加调试语句，当开发者工具被打开时就会激活调试语句，记得在生产环境删除调试；</p>
<p><img src="@source/chromeimg/breakpoint01.png" alt=""></p>
<p><code>条件断点</code> 在执行前检查值，假设你有一个从0 到 999的循环，需要在最后一次循环中查看状态，不用跟进断点循999次，你可以在指定行右键，选择<code>Add conditional breakpoint</code> 然后输入比如 <code>loopValue === 999</code>.</p>
<p><code>logpoint</code> 时无代码的<code>console.log()</code>! 在行号上右键选择 Add logpoint 然后添加表达式：
<img src="@source/chromeimg/logpoint.png" alt=""></p>
<p><code>DOM breakpoints</code>每当JavaScript代码修改DOM节点或子节点时就会触发，在<code>Elements</code>面板中通过右键单击任何节点，选择“DOM breakpoints” 然后选择适当的选项来启用。</p>
<p><code>Ajax breakpoints</code>调试通过JavaScript 调用的<code>Fetch()</code>或<code>XMLHttprequest</code>检索数据时会激活；在<code>Sources</code>面板中打开右侧的<code>XHT/fetch Breakspoints</code> 单击  + 并输入完整或部分接口地址来启用断点。</p>
<p><img src="@source/chromeimg/ajaxBreakpoints.png" alt=""></p>
<p>最后，有时我们想要忽略我们不能修改的代码，比如，jQuery, React 第三方JavaScript 统计代码等。点击⚙️图标打开设置面板，选择<code>Ignore list</code> 添加任意数量的完整或部分文件路径名，这样，调试器会跳过这些文件的代码或异常。</p>
<h2 id="调试node-js-和-deno-应用" tabindex="-1"><a class="header-anchor" href="#调试node-js-和-deno-应用" aria-hidden="true">#</a> 调试Node.js 和 Deno 应用</h2>
<p>我们也可以在浏览器开发者工具中直接调试服务端应用，因为运行时环境都使用的是V8 引擎。通过 <code>--inspect</code>标识来加载你的应用从而开启V8引擎的检查。比如：启用一个Node应用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">node</span> -- inspect index.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>deno 和 <code>nodemon</code> 支持<code>--inspect</code>参数，也可以使用<code>--inspect-brk</code> 在第一行暂停，以便在应用启动后单步执行。</p>
<p>这个命令启动调试器会监听址<code>localhost:9229</code> 任何本地调试客户端都可以链接到</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Debugger listening on ws://127.0.0.1:9229/301372bc-780a-2051-ceb2-c8d78227092e
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果是在其他设备或Docker容器中运行的应用，请确保端口<code>9229</code>和指定ip<code>0.0.0.0</code> 可以在局域网内访问：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">node</span> --inspect<span class="token operator">=</span><span class="token number">0.0</span>.0.0:9229 index.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>应用程序运行后，打开Chrome 输入<code>chrome://inspect</code> 查看可用的应用：
<img src="@source/chromeimg/chrome-inspect.png" alt=""></p>
<p>几秒后应用会出现砸 <code>Remote Target</code> 列表中，如果没出现， 确保选择了<code>Discover network targets</code>，并且点击<code>Configure</code> 来添加应用所在设备的IP和端口</p>
<p>点击 应用的<code>inspect</code> 链接来启动另一个开发者工具窗口，和浏览器开发者工具相比，他的选项较少，你主要可以使用<code>Sources</code>面板来添加断点，和之前一样虚啊者<code>FileSystem</code> 面板点击<code>+ Add folder to workspace</code> 来编辑服务器代码。</p>
<h2 id="其他受欢迎的工具" tabindex="-1"><a class="header-anchor" href="#其他受欢迎的工具" aria-hidden="true">#</a> 其他受欢迎的工具</h2>
<ul>
<li>
<p><code>Network</code> 中在选择任意一个<code>Fetch/XHR</code>请求右键 <code>Copy</code> 选项可以生成有效的代码比如<code>JavaScript</code> <code>Node.js</code> <code>cURL</code> 等。</p>
</li>
<li>
<p>在 <code>Sources</code> 面板中打开图片，右键可以复制 base64 数据</p>
</li>
<li>
<p>在 <code>Sources -&gt; Snippets</code> 面板中添加代码，在任何页面中执行相同的JavaScript
等等。。</p>
</li>
</ul>
</template>
