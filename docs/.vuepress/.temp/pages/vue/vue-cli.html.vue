<template><h1 id="vue-cli-学习" tabindex="-1"><a class="header-anchor" href="#vue-cli-学习" aria-hidden="true">#</a> vue-cli 学习</h1>
<h2 id="vue-cli中用的download-git-repo" tabindex="-1"><a class="header-anchor" href="#vue-cli中用的download-git-repo" aria-hidden="true">#</a> vue cli中用的<a href="https://github.com/flipxfx/download-git-repo" target="_blank" rel="noopener noreferrer">download-git-repo<ExternalLinkIcon/></a></h2>
<ul>
<li><a href="">commander</a> node 命令行工具</li>
<li><a href="">inquirer</a> node 问答式命令行交互</li>
<li><a href="">ora</a> node 提示文案</li>
<li><a href="">qrcode-terminal</a> node 终端二维码</li>
</ul>
<h2 id="vue-router-配置-history-模式" tabindex="-1"><a class="header-anchor" href="#vue-router-配置-history-模式" aria-hidden="true">#</a> vue router 配置 history 模式</h2>
<p>index.html 页面不是在根目录  http://mysite.com/myhistory/index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 路由的配置</span>

<span class="token keyword">const</span> router<span class="token operator">=</span><span class="token function">newVueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">'history'</span><span class="token punctuation">,</span>

<span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">'/myhistory'</span><span class="token punctuation">,</span> <span class="token comment">//项目在nginx子目录的时候配置</span>

<span class="token literal-property property">routes</span><span class="token operator">:</span>routes
 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># nginx 配置</span>
location ^~/myhistory/ <span class="token punctuation">{</span>

try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /myhistory/index.html<span class="token punctuation">;</span>

root /data/www<span class="token punctuation">;</span>

index index.html<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
