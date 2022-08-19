import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as r}from"./app.8e201d3a.js";const a={},d=r(`<h1 id="vue-cli-\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#vue-cli-\u5B66\u4E60" aria-hidden="true">#</a> vue-cli \u5B66\u4E60</h1><h2 id="vue-cli\u4E2D\u7528\u7684download-git-repo" tabindex="-1"><a class="header-anchor" href="#vue-cli\u4E2D\u7528\u7684download-git-repo" aria-hidden="true">#</a> vue cli\u4E2D\u7528\u7684<a href="https://github.com/flipxfx/download-git-repo" target="_blank" rel="noopener noreferrer">download-git-repo</a></h2><ul><li><a href="">commander</a> node \u547D\u4EE4\u884C\u5DE5\u5177</li><li><a href="">inquirer</a>\b node \u95EE\u7B54\u5F0F\u547D\u4EE4\u884C\b\u4EA4\u4E92</li><li><a href="">ora</a> node \u63D0\u793A\u6587\u6848</li><li><a href="">qrcode-terminal</a> node \b\u7EC8\u7AEF\u4E8C\u7EF4\u7801</li></ul><h2 id="vue-router-\u914D\u7F6E-history-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue-router-\u914D\u7F6E-history-\u6A21\u5F0F" aria-hidden="true">#</a> vue router \u914D\u7F6E history \u6A21\u5F0F</h2><p>index.html \u9875\u9762\u4E0D\u662F\u5728\u6839\u76EE\u5F55 http://mysite.com/myhistory/index.html</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u8DEF\u7531\u7684\u914D\u7F6E

const router=newVueRouter({

mode:&#39;history&#39;,

base:&#39;/myhistory&#39;, //\u9879\u76EE\u5728nginx\u5B50\u76EE\u5F55\u7684\u65F6\u5019\u914D\u7F6E

routes:routes
 
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># nginx \u914D\u7F6E
location ^~/myhistory/ {

try_files $uri $uri/ /myhistory/index.html;

root /data/www;

index index.html;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[d];function s(o,t){return i(),n("div",null,l)}var u=e(a,[["render",s],["__file","vue-cli.html.vue"]]);export{u as default};
