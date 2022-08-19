import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as i,a}from"./app.8e201d3a.js";var n="/my-bfe-awesome/assets/pm2serve.5c8876d7.png";const d={},l=a(`<h2 id="\u901A\u8FC7-http-\u534F\u8BAE\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-http-\u534F\u8BAE\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u670D\u52A1" aria-hidden="true">#</a> \u901A\u8FC7 http \u534F\u8BAE\u63D0\u4F9B\u9759\u6001\u6587\u4EF6\u670D\u52A1</h2><p>PM2 \u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4 <code>pm2 serve</code> \u5F97\u5F00\u542F\u9759\u6001\u6587\u4EF6\u670D\u52A1\u529F\u80FD\u3002\u5B83\u652F\u6301\u6307\u5B9A\u6587\u4EF6\u5939\u4E2D\u63D0\u4F9B\u7684\u591A\u4E2A\u539F\u59CB\u6587\u4EF6\u7684\u8BBF\u95EE\uFF0C\u6216\u8005\u4F5C\u4E3A\u5355\u9875\u9762\u5E94\u7528\u3002</p><h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><p>\u4F7F\u7528\u7B80\u5355\u7684\u547D\u4EE4\uFF0C\u901A\u8FC7http\u6765\u4E3A\u9759\u6001\u6587\u4EF6\u63D0\u4F9B\u670D\u52A1\uFF08\u5C31\u50CF\u4E00\u4E2A\u524D\u7AEF\u5E94\u7528\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 serve &lt;path&gt; &lt;port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u7AEF\u53E3\u662F<code>8080</code> \u5982\u679C\u6CA1\u6709\u6307\u5B9A<code>&lt;path&gt;</code> \u5C31\u4F1A\u4F7F\u7528\u5F53\u524D\u6587\u4EF6\u5939\u3002\u4E5F\u53EF\u50CF\u5176\u4ED6\u5E94\u7528\u4E00\u6837\u4F7F\u7528<code>--name</code> \u6216\u8005 <code>--watch</code></p><h2 id="\u5355\u9875\u9762\u5E94\u7528-\u6240\u6709\u8BF7\u6C42\u90FD\u91CD\u5B9A\u5411\u5230-index-html" tabindex="-1"><a class="header-anchor" href="#\u5355\u9875\u9762\u5E94\u7528-\u6240\u6709\u8BF7\u6C42\u90FD\u91CD\u5B9A\u5411\u5230-index-html" aria-hidden="true">#</a> \u5355\u9875\u9762\u5E94\u7528:\u6240\u6709\u8BF7\u6C42\u90FD\u91CD\u5B9A\u5411\u5230 index.html</h2><p>\u4F7F\u7528<code>--spa</code>\u9009\u9879\u628A\u6240\u6709\u7684\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230 index.html</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 serve --spa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js 
module.exports = {
    apps : [{
      script:&quot;serve&quot;,
      env:{
          PM2_SERVE_PATH:&#39;.&#39;,
          PM2_SERVE_PORT:8080,
          PM2_SERVE_SPA: true,
          PM2_SERVE_HOMEPAGE:&#39;./index.html&#39;,
      }
    }]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u7136\u540E\u8BBF\u95EE <code>http://localhost:8080</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start ecosystem.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u901A\u8FC7\u4F7F\u7528\u5BC6\u7801\u6765\u8BBE\u7F6E\u8BBF\u95EE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u4F7F\u7528\u5BC6\u7801\u6765\u8BBE\u7F6E\u8BBF\u95EE\u6743\u9650" aria-hidden="true">#</a> \u901A\u8FC7\u4F7F\u7528\u5BC6\u7801\u6765\u8BBE\u7F6E\u8BBF\u95EE\u6743\u9650</h2><p>\u8981\u4FDD\u62A4\u5BF9\u516C\u5F00\u6587\u4EF6\u7684\u8BBF\u95EE\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 serve --basic-auth-username &lt;username&gt; --basic-auth-password &lt;password&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    script:&quot;serve&quot;,
    env:{
        PM2_SERVE_PATH:&#39;.&#39;,
        PM2_SERVE_PORT:8080,
        PM2_SERVE_SPA:&#39;./index.html&#39;,
        PM2_SERVE_BASIC_AUTH: &#39;true&#39;,
        PM2_SERVE_BASIC_AUTH_USERNAME: &#39;example-login&#39;,
        PM2_SERVE_BASIC_AUTH_PASSWORD: &#39;example-password&#39;        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+'" alt="auth"></p>',19),r=[l];function c(v,t){return s(),i("div",null,r)}var o=e(d,[["render",c],["__file","pm2\u4E4B\u9759\u6001\u6587\u4EF6\u670D\u52A1.html.vue"]]);export{o as default};
