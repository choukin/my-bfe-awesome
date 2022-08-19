import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as d}from"./app.8e201d3a.js";const s={},a=d(`<h1 id="pm2-\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#pm2-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> PM2 \u73AF\u5883\u53D8\u91CF</h1><h2 id="\u5F00\u542F\u4E00\u4E2A\u65B0\u8FDB\u7A0B\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u4E00\u4E2A\u65B0\u8FDB\u7A0B\u65F6" aria-hidden="true">#</a> \u5F00\u542F\u4E00\u4E2A\u65B0\u8FDB\u7A0B\u65F6</h2><p>\u5F53\u5F00\u542F\u65B0\u8FDB\u7A0B\u65F6PM2\u4F1A\u987A\u5E8F\u5728\u73AF\u5883\u4E2D\u6CE8\u5165\uFF1A</p><ul><li>\u9996\u5148PM2 CLI \u4F1A\u4F7F\u7528\u81EA\u5DF1\u7684\u73AF\u5883\uFF0C\u56E0\u6B64\u5F53\u524D\u7684\u73AF\u5883\u53D8\u91CF\u4F1A\u6CE8\u5165\u5230\u811A\u672C\u4E2D</li><li>PM2\u4F1A\u628A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u5230\u5F53\u524D\u811A\u672C\u4E2D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:&quot;myapp&quot;,
            script:&quot;./app.js&quot;,
            watch:true,
            env:{
                &quot;NODE_ENV&quot;:&quot;development&quot;
            }
       }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2DPM2 \u4F1A\u91CD\u8F7D\u5F53\u524D\u7684\u73AF\u5883\u53D8\u91CF\u6DFB\u52A0\u4E00\u4E2A<code>NODE_ENV=delepment</code>,\u4F60\u4E5F\u53EF\u4EE5\u50CF\u4E0B\u9762\u8FD9\u6837\u5B9A\u4E49\u4E0D\u540C\u7684\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:&quot;myapp&quot;,
            script:&quot;./app.js&quot;,
            watch:true,
            env:{
                &quot;NODE_ENV&quot;:&quot;development&quot;
            },
            env_production:{
                &quot;PORT&quot;:80,
                &quot;NODE_ENV&quot;:&quot;production&quot;,
            }
       }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>env</code>\u4E2D\u662F\u9ED8\u8BA4\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u901A\u8FC7\u547D\u4EE4<code>pm2 start ecosystem.config.js --env production</code> \u6765\u4F7F\u7528 <code>env_prodution</code>\u4E2D\u7684\u73AF\u5883\u53D8\u91CF</p><p>\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u591A\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u53EA\u8981\u5728<code>--env</code> \u52A0\u4E0A<code>env_</code>\u540E\u9762\u7684\u73AF\u5883\u540D\u79F0.</p><h2 id="\u7279\u6B8A\u7684\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u7684\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u7279\u6B8A\u7684\u73AF\u5883\u53D8\u91CF</h2><h3 id="node-app-instance-pm2-\u6700\u4F4E\u7248\u672C-2-5-\u83B7\u53D6\u8FDB\u7A0B\u7F16\u53F7" tabindex="-1"><a class="header-anchor" href="#node-app-instance-pm2-\u6700\u4F4E\u7248\u672C-2-5-\u83B7\u53D6\u8FDB\u7A0B\u7F16\u53F7" aria-hidden="true">#</a> NODE_APP_INSTANCE(PM2 \u6700\u4F4E\u7248\u672C 2.5) \u83B7\u53D6\u8FDB\u7A0B\u7F16\u53F7</h3><p>\u73AF\u5883\u53D8\u91CF <code>NODE_APP_INSTACE</code> \u53EF\u4EE5\u7528\u6765\u533A\u5206\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C\u4F8B\u5982\u60F3\u5728\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u8FD0\u884C\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u53EA\u9700\u8981\u5BF9\u6BD4<code>p<wbr>rocess.env.NODE_APP_INSTNCE === &#39;0&#39;</code>. \u4E24\u4E2A\u8FDB\u7A0B\u4E0D\u53EF\u80FD\u6709\u76F8\u540C\u7684\u7F16\u53F7\uFF0C \u5728\u8FD0\u884C<code>pm2 restart</code> \u548C <code>pm2 scal</code> \u540E\u4F9D\u7136\u6210\u7ACB\uFF1B</p><p>\u5982\u679C\u4F7F\u7528 <code>NODE_APP_INSTANCE</code> \u6709\u51B2\u7A81\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>instance_var</code> \u6765\u91CD\u547D\u540D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:&quot;myapp&quot;,
            script:&quot;./app.js&quot;,
            watch:true,
            instances:2
            instance_var:&quot;INSTANCE_ID&quot;
            env:{
                &quot;NODE_ENV&quot;:&quot;development&quot;
            },
            env_production:{
                &quot;PORT&quot;:80,
                &quot;NODE_ENV&quot;:&quot;production&quot;,
            }
       }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E2D\u4F7F\u7528 <code>p<wbr>rocess.env.INSTANCE_ID</code> \u6765\u4EE3\u66FF<code>NODE_APP_INSTANCE</code></p><h3 id="increment-var-\u8BA9\u73AF\u5883\u53D8\u91CF\u9012\u589E-pm2\u6700\u4F4E\u7248\u672C-2-5" tabindex="-1"><a class="header-anchor" href="#increment-var-\u8BA9\u73AF\u5883\u53D8\u91CF\u9012\u589E-pm2\u6700\u4F4E\u7248\u672C-2-5" aria-hidden="true">#</a> increment_var \u8BA9\u73AF\u5883\u53D8\u91CF\u9012\u589E (PM2\u6700\u4F4E\u7248\u672C 2.5)</h3><p>PM2\u4E00\u4E2A\u9009\u9879\u53EF\u4EE5\u8BA9 PM2 \u4E3A\u67D0\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\u53D8\u6210\u9012\u589E\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:&quot;myapp&quot;,
            script:&quot;./app.js&quot;,
            watch:true,
            instances:2
            instance_var:&quot;INSTANCE_ID&quot;
            env:{
                &quot;NODE_ENV&quot;:&quot;development&quot;
            },
            env_production:{
                &quot;PORT&quot;:80,
                &quot;NODE_ENV&quot;:&quot;production&quot;,
            }
       }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C\u6267\u884C <code>pm2 start ecosystem.config.js</code>:</p><ul><li>PM2 \u4F1A\u8BC6\u522B\u51FA <code>PORT</code> \u53D8\u91CF\u5728\u6BCF\u4E2A\u5B9E\u4F8B\u4E2D\u7684\u503C\u662F\u9012\u589E\u7684</li><li>PM2 \u8BFB\u53D6\u5230\u9ED8\u8BA4\u7684 <code>PORT</code> \u662F 80</li><li>\u7B2C\u4E00\u4E2A\u5B9E\u4F8B\u4E2D <code>p<wbr>rocess.env.PORT=80</code> \u800C\u7B2C\u4E8C\u4E2A\u5B9E\u4F8B\u4E2D <code>p<wbr>rocess.env.PORT=81</code></li></ul><p>\u6CE8\u610F\uFF1A \u5F53\u4F7F\u7528 <code>pm2 scale myapp 4</code>\u8FDB\u884C\u6269\u5BB9\u65F6\u4E5F\u4F1A\u9012\u589E\uFF0C\u4E24\u4E2A\u65B0\u7684\u5B9E\u4F8B\u7684<code>PORT</code>\u53D8\u91CF\u503C\u5206\u522B\u662F <code>82</code> <code>83</code></p>`,21),c=[a];function l(v,r){return n(),i("div",null,c)}var t=e(s,[["render",l],["__file","pm2\u4E4B\u73AF\u5883\u53D8\u91CF.html.vue"]]);export{t as default};
