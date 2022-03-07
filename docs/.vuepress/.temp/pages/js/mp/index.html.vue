<template><h1 id="小程序收集" tabindex="-1"><a class="header-anchor" href="#小程序收集" aria-hidden="true">#</a> 小程序收集</h1>
<h2 id="判断当前环境是开发线上还是体验" tabindex="-1"><a class="header-anchor" href="#判断当前环境是开发线上还是体验" aria-hidden="true">#</a> 判断当前环境是开发线上还是体验</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__wxConfig<span class="token punctuation">.</span>envVersion<span class="token punctuation">)</span> <span class="token comment">// ,查看打印出来的是什么</span>
<span class="token comment">// 有效参数值为：develop（开发版），trial（体验版），release（正式版）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
