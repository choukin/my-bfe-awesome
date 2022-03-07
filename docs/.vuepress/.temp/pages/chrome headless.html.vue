<template><h1 id="chrome-headless" tabindex="-1"><a class="header-anchor" href="#chrome-headless" aria-hidden="true">#</a> chrome headless</h1>
<ol>
<li>mac 设置 别名</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> ~/.zshrc

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">chrome</span><span class="token operator">=</span><span class="token string">"/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"</span>
esc :wq
<span class="token builtin class-name">source</span> ~/zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2.截屏</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>chrome --headless --disable-gpu --screenshot --window-size<span class="token operator">=</span><span class="token number">1280,1696</span>  https://github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
