<template><h1 id="javascript-原生-监听浏览器复制粘贴内容" tabindex="-1"><a class="header-anchor" href="#javascript-原生-监听浏览器复制粘贴内容" aria-hidden="true">#</a> javascript 原生 监听浏览器复制粘贴内容</h1>
<h2 id="监听事件" tabindex="-1"><a class="header-anchor" href="#监听事件" aria-hidden="true">#</a> 监听事件</h2>
<ul>
<li>copy 当用户在浏览器进行复制操作（ctrl+c 或者鼠标右键复制） 和调用 <code>document.execCommand('copy')</code> 时， copy 事件会被触发</li>
<li>paste 当从剪切板粘贴内容时会触发 paste 事件</li>
</ul>
<h3 id="注册监听事件" tabindex="-1"><a class="header-anchor" href="#注册监听事件" aria-hidden="true">#</a> 注册监听事件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'copy'</span><span class="token punctuation">,</span> copy<span class="token punctuation">)</span>
 <span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">onEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     onEvent<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     onEvent<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">,</span> <span class="token string">'我是拷贝内容'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'paste'</span><span class="token punctuation">,</span> paste<span class="token punctuation">)</span>
 <span class="token keyword">function</span> <span class="token function">paste</span> <span class="token punctuation">(</span><span class="token parameter">onEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>onEvent<span class="token punctuation">.</span>clipboardData<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>
