import{r as e,o as r,a as t,b as n,d as o,F as p,e as s,c as l}from"./app.91923fdf.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=n("h1",{id:"vue-cli-\u5B66\u4E60",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-cli-\u5B66\u4E60","aria-hidden":"true"},"#"),s(" vue-cli \u5B66\u4E60")],-1),d={id:"vue-cli\u4E2D\u7528\u7684download-git-repo",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#vue-cli\u4E2D\u7528\u7684download-git-repo","aria-hidden":"true"},"#",-1),m=s(" vue cli\u4E2D\u7528\u7684"),h={href:"https://github.com/flipxfx/download-git-repo",target:"_blank",rel:"noopener noreferrer"},k=s("download-git-repo"),_=l(`<ul><li><a href="">commander</a> node \u547D\u4EE4\u884C\u5DE5\u5177</li><li><a href="">inquirer</a>\b node \u95EE\u7B54\u5F0F\u547D\u4EE4\u884C\b\u4EA4\u4E92</li><li><a href="">ora</a> node \u63D0\u793A\u6587\u6848</li><li><a href="">qrcode-terminal</a> node \b\u7EC8\u7AEF\u4E8C\u7EF4\u7801</li></ul><h2 id="vue-router-\u914D\u7F6E-history-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue-router-\u914D\u7F6E-history-\u6A21\u5F0F" aria-hidden="true">#</a> vue router \u914D\u7F6E history \u6A21\u5F0F</h2><p>index.html \u9875\u9762\u4E0D\u662F\u5728\u6839\u76EE\u5F55 http://mysite.com/myhistory/index.html</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8DEF\u7531\u7684\u914D\u7F6E</span>

<span class="token keyword">const</span> router<span class="token operator">=</span><span class="token function">newVueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>

<span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">&#39;/myhistory&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u9879\u76EE\u5728nginx\u5B50\u76EE\u5F55\u7684\u65F6\u5019\u914D\u7F6E</span>

<span class="token literal-property property">routes</span><span class="token operator">:</span>routes
 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># nginx \u914D\u7F6E</span>
location ^~/myhistory/ <span class="token punctuation">{</span>

try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /myhistory/index.html<span class="token punctuation">;</span>

root /data/www<span class="token punctuation">;</span>

index index.html<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function v(y,f){const a=e("ExternalLinkIcon");return r(),t(p,null,[u,n("h2",d,[b,m,n("a",h,[k,o(a)])]),_],64)}var w=i(c,[["render",v]]);export{w as default};
