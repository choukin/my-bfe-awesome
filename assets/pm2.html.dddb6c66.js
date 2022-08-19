import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as o}from"./app.8e201d3a.js";const d={},s=o(`<p>#pm2 <a href="https://pm2.keymetrics.io/docs/usage/log-management/" target="_blank" rel="noopener noreferrer">pm2</a></p><h2 id="\u4F7F\u7528-pm2-\u90E8\u7F72\u4EE3\u7801-\u8E29\u5230\u4E00\u4E2A\u5751-\u4E00\u4E0B\u5348\u90FD\u6CA1\u51FA\u6765" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pm2-\u90E8\u7F72\u4EE3\u7801-\u8E29\u5230\u4E00\u4E2A\u5751-\u4E00\u4E0B\u5348\u90FD\u6CA1\u51FA\u6765" aria-hidden="true">#</a> \u4F7F\u7528 pm2 \u90E8\u7F72\u4EE3\u7801 \u8E29\u5230\u4E00\u4E2A\u5751\uFF0C\u4E00\u4E0B\u5348\u90FD\u6CA1\u51FA\u6765</h2><p>\u5927\u5BB6\u90FD\u77E5\u9053 pm2\u662F\u5E38\u7528\u7684node\u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B83\u53EF\u4EE5\u63D0\u4F9Bnode.js\u5E94\u7528\u7BA1\u7406\uFF0C\u5982\u81EA\u52A8\u91CD\u8F7D\u3001\u6027\u80FD\u76D1\u63A7\u3001\u8D1F\u8F7D\u5747\u8861\u7B49; \u5B83\u8FD8\u6709\u4E00\u4E2A\u529F\u80FD\u662F\u5C31\u662F\u5728\u672C\u5730\u90E8\u7F72\u4EE3\u7801\u5230\u670D\u52A1\u5668\uFF0C\u4E0B\u9762\u662Fpm2\u7684\u914D\u7F6E\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    &quot;apps&quot;:[{
        &quot;name&quot;:&quot;nodeGame&quot;,
        &quot;script&quot;:&quot;src/servers/server.js&quot;,
        instances : &quot;2&quot;,
        exec_mode : &quot;cluster&quot;,
        watch:true,
        &quot;env&quot;:{
        },
        &quot;env_production&quot;:{
            &quot;NODE_ENV&quot;:&quot;production&quot;
        }
    },{
        &quot;name&quot;:&quot;nodejob&quot;,
        &quot;script&quot;:&quot;/www/nodejob/auto-sign/cronindex.js&quot;,
        instances : &quot;2&quot;,
        exec_mode : &quot;cluster&quot;,
        watch:true,
        &quot;env&quot;:{
        },
        &quot;env_production&quot;:{
            &quot;NODE_ENV&quot;:&quot;production&quot;
        }
    }],
    &quot;deploy&quot;:{
        &quot;production&quot;:{
            &quot;user&quot;:&quot;root&quot;,
            &quot;host&quot;:[&quot;hw&quot;],
            &quot;ref&quot;:&quot;origin/main&quot;,
            &quot;repo&quot;:&quot;git@github.com:choukin/nodegamedemo.git&quot;,
            &quot;path&quot;:&quot;/www/&quot;,
            &quot;ssh_options&quot;:&quot;StrictHostKeyChecking=no&quot;,
            &quot;post-setup&quot;:&quot;ls -la&quot;,
            &quot;pre-deploy-local&quot;:&quot;echo &#39;\u672C\u5730\u8981\u6267\u884C\u7684\u547D\u4EE4&#39;&quot;,
            &quot;pre-deploy&quot;:&quot;echo &#39;\u5F00\u59CB\u62C9\u53D6&#39;&quot;,
            &quot;post-deploy&quot;:&quot;npm  install &amp;&amp; npm run build &amp;&amp; pm2 start nodeGame&quot;,
            &quot;env&quot;:{
                &quot;NODE_ENV&quot;:&quot;production&quot;
            }
        }
    }    
}    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><ul><li>apps \u90E8\u5206\u5C31\u662F\u60F3\u901A\u8FC7pm2 \u5B88\u62A4\u7684\u8FDB\u7A0B\uFF0C\u8FD9\u91CC\u5148\u4E0D\u591A\u89E3\u91CA</li><li>deploy \u5C31\u662F\u914D\u7F6E\u8981\u90E8\u7F72\u5230\u7684\u670D\u52A1\u5668\u4EE5\u53CA\u76F8\u5173\u547D\u4EE4 <ul><li><code>production</code> \u81EA\u5B9A\u4E49\u7684\u90E8\u7F72\u540D\u79F0</li><li><code>user</code> \u767B\u9646\u7684\u4E91\u670D\u52A1\u5668\u7684\u7528\u6237</li><li><code>host</code> \u76EE\u6807\u4E91\u670D\u52A1\u5668</li><li><code>ref</code> \u90E8\u7F72\u7684\u5206\u652F</li><li><code>repo</code> git \u4ED3\u5E93\u5730\u5740</li><li><code>path</code> \u4E91\u670D\u52A1\u5668\u4E0A\u7684\u90E8\u7F72\u8DEF\u5F84</li><li><code>ssh_options</code> ssh \u767B\u9646\u914D\u7F6E\u9879</li><li><code>post-setup</code> \u7B2C\u4E00\u6B21\u5B89\u88C5\u914D\u7F6E\u540E\u6267\u884C\u7684\u52A8\u4F5C</li><li><code>pre-deploy</code> \u90E8\u7F72\u524D\u7684\u52A8\u4F5C</li><li><code>post-deploy</code> \u62C9\u53BB\u4EE3\u7801\u6210\u529F\u540E\u6267\u884C\u7684\u52A8\u4F5C\u8FD9\u91CC\u662F\u5148 <code>npm install</code> \u5728 <code>npm run build</code> \u6253\u5305 \u6700\u540E <code>pm2 start nodeGame</code></li></ul></li></ul><h4 id="\u7B2C\u4E00\u6B21\u5B89\u88C5\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B21\u5B89\u88C5\u547D\u4EE4" aria-hidden="true">#</a> \u7B2C\u4E00\u6B21\u5B89\u88C5\u547D\u4EE4</h4><p>\u524D\u63D0\u6761\u4EF6</p><ul><li>\u4E91\u670D\u52A1\u5668\u4E0A\u5B89\u88C5\u4E86 pm2</li><li>\u4E91\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7684\u4ED3\u5E93\u8DEF\u5F84\u4E0B\u8F7D\u4ED3\u5E93\u4EE3\u7801</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5728\u672C\u673A ecosystem.config.js \u6240\u5728\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\u4E0B
 pm2 deploy production setup

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u540E\u7EED\u4EE3\u7801\u66F4\u65B0\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u540E\u7EED\u4EE3\u7801\u66F4\u65B0\u547D\u4EE4" aria-hidden="true">#</a> \u540E\u7EED\u4EE3\u7801\u66F4\u65B0\u547D\u4EE4</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5728\u672C\u673A ecosystem.config.js \u6240\u5728\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\u4E0B
 pm2 deploy production update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u5207\u6309\u7167\u5B98\u7F51\u4ECB\u7ECD\u6765\u7684\uFF0C\u53EF\u662F\u5728\u672C\u5730\u6267\u884C\u7684\u65F6\u5019\u603B\u662F\u90E8\u7F72\u5931\u8D25\uFF0C</p><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><p>\u672C\u5730 <code>npm install</code> \u540E\u6CA1\u6709\u628A\u6240\u6709\u4F9D\u8D56\u5B89\u88C5\u6210\u529F\uFF0C\u540E\u9762\u8FDE\u4E2A\u547D\u4EE4\u90FD\u4F1A\u5931\u8D25</p><p>1\u3001 \u767B\u9646\u5230\u670D\u52A1\u5668\u4E0A\u76F4\u63A5\u8FD0\u884C <code>npm install &amp;&amp; npm run build &amp;&amp; pm2 start nodeGame</code> \u5B8C\u5168\u6CA1\u95EE\u9898\u{1F62D} 2\u3001 \u53BBgithub issus \u4E2D\u6709\u7C7B\u4F3C\u95EE\u9898\u4F46\u662F\u6CA1\u6709\u89E3\u51B3\u65B9\u6848. \u7279\u6B64\u8BB0\u5F55\uFF0C\u6709\u89E3\u51B3\u65B9\u6848\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u544A\u8BC9\u6211\u3002</p>`,16),u=[s];function l(t,a){return i(),n("div",null,u)}var v=e(d,[["render",l],["__file","pm2.html.vue"]]);export{v as default};
