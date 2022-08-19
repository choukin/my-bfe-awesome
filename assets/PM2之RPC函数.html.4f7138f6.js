import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,a as n}from"./app.8e201d3a.js";const s={},d=n(`<h1 id="\u66B4\u9732rpc\u65B9\u6CD5-\u8FDB\u7A0B\u7684\u52A8\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u66B4\u9732rpc\u65B9\u6CD5-\u8FDB\u7A0B\u7684\u52A8\u4F5C" aria-hidden="true">#</a> \u66B4\u9732RPC\u65B9\u6CD5:\u8FDB\u7A0B\u7684\u52A8\u4F5C</h1><p>\u66B4\u9732RPC (Remote Procedure Call \uFF0C\u5373\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\u65B9\u6CD5)\u53EF\u4EE5\u548C\u8FD0\u884C\u4E2D\u7684\u8FDB\u7A0B\u5B9E\u65F6\u4EA4\u4E92\u3002 \u9002\u7528\u4E8E\u4E0B\u5217\u60C5\u51B5\uFF1A</p><ul><li>\u4FEE\u6539\u884C\u4E3A\uFF0C\u6BD4\u5982\uFF1A\u5207\u6362\u65E5\u5FD7\u6A21\u5F0F</li><li>\u68C0\u7D22\u6570\u636E\u7ED3\u6784</li><li>\u89E6\u53D1\u52A8\u4F5C</li></ul><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><p>\u9996\u5148\u5B89\u88C5 <a href="https://github.com/pm2/tx2" target="_blank" rel="noopener noreferrer"><code>tx2</code></a> \u6A21\u5757\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install tx2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u521B\u5EFA\u4E00\u4E2A<code>rpc.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tx2 = require(&#39;tx2&#39;)
tx2.action(&#39;toto&#39;, (cb) =&gt; {
  return cb({yessai:true})
})
setInterVal(function(){
    // \u4FDD\u6301\u5E94\u7528\u4E00\u76F4\u6267\u884C
},100)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u901A\u8FC7PM2 \u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start rpc.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\uFF0C\u89E6\u53D1\u8FDB\u7A0B\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 trigger &lt;application-name&gt; &lt;action-name&gt;
# pm2 trigger rpc toto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 trigger rpc toto  
1 processes have received command toto
[rpc:2:default]={&quot;yessai&quot;:true}
\xB7\xB7\xB7

## \u67E5\u770B\u53EF\u7528\u7684RPC
\`\`\`sh
pm2 show &lt;application-name&gt;
# pm2 show rpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u53C2\u6570" aria-hidden="true">#</a> \u4F20\u53C2\u6570</h2><p>\u5728\u56DE\u6389\u51FD\u6570\u4E2D\u6DFB\u52A0<code>param</code> \u53EF\u4EE5\u7ED9\u8FDC\u7AEF\u65B9\u6CD5\u4F20\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>var tx2 = require(&#39;tx2&#39;)

tx2.action(&#39;vorld&#39;, function(param, reply){
    console.log(param)
    reply({success:param})
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F\u5E94\u7528\uFF0C\u901A\u8FC7PM2 \u8C03\u7528\u8FD9\u4E2A\u8FDB\u7A0B\u65B9\u6CD5</p><div class="language-pm2 ext-pm2 line-numbers-mode"><pre class="language-pm2"><code>pm2 trigger &lt;application-name&gt; &lt;action-name&gt; [parameter]
# pm2 trigger rpc world somedata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),r=[d];function l(c,t){return i(),a("div",null,r)}var m=e(s,[["render",l],["__file","PM2\u4E4BRPC\u51FD\u6570.html.vue"]]);export{m as default};
