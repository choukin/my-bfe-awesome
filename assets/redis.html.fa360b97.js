import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,a as i}from"./app.8e201d3a.js";const r={},d=i(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>To restart redis after an upgrade:
  brew services restart redis
Or, if you don&#39;t want/need a background service you can just run:
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u542F\u52A8
 brew services start redis
# \u975E\u540E\u53F0\u542F\u52A8
/opt/homebrew/opt/redis/bin/redis-server /opt/homebrew/etc/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62" aria-hidden="true">#</a> \u505C\u6B62</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew services stop redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),n=[d];function l(c,t){return a(),s("div",null,n)}var u=e(r,[["render",l],["__file","redis.html.vue"]]);export{u as default};
