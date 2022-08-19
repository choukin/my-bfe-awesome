import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,a as n}from"./app.8e201d3a.js";const d={},a=n(`<h1 id="\u90E8\u7F72\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5E94\u7528" aria-hidden="true">#</a> \u90E8\u7F72\u5E94\u7528</h1><p>PM2 \u5177\u6709\u4E00\u4E2A\u7B80\u5355\u4F46\u662F\u529F\u80FD\u5F3A\u5927\u7684\u90E8\u7F72\u529F\u80FD\u3002\u53EF\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u90E8\u7F72\u548C\u66F4\u65B0\u5E94\u7528\u3002\u5F53\u4F60\u60F3\u8981\u4E00\u6B21\u6027\u5728\u670D\u52A1\u5668\u4E0A\u90E8\u7F72\u4E00\u4E2A\u6216\u591A\u4E2A\u5E94\u7528\u65F6\u975E\u5E38\u6709\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>&gt; pm2 deploy &lt;configuration_file&gt; &lt;evironment&gt; &lt;command&gt;
  Commands:
    setup           \u6267\u884C\u8FDC\u7A0B\u5B89\u88C5\u547D\u4EE4
    update          \u66F4\u65B0\u90E8\u7F72\u6700\u65B0\u7248\u672C
    revert [n]      \u56DE\u6EDA\u5230\u6700\u8FD1\u7B2Cn\u6B21/\u4E0A\u4E00\u6B21
    curr[ent]       \u8F93\u51FA\u5F53\u524D\u7248\u672C\u7684\u63D0\u4EA4\u4FE1\u606F
    prev[ious]      \u8F93\u51FA\u4E0A\u4E00\u516B\u4F70\u4F34\u7684\u63D0\u4EA4\u4FE1\u606F
    exec|run &lt;cmd&gt;  \u6267\u884C\u6307\u5B9A\u7684\u547D\u4EE4
    list            \u5217\u51FA\u4E0A\u4E00\u7248\u672C\u7684\u7684\u90E8\u7F72\u63D0\u4EA4
    ref\u3011          \u90E8\u7F72\u914D\u7F6E\u7684\u5206\u652F\u6216\u8005\u6700\u65B0\u7684tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u90E8\u7F72\u6587\u4EF6\u914D\u7F6E</h2><p>\u5728\u5E94\u7528\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0<code>deplay</code> \u5C5E\u6027\u6765\u914D\u7F6E\u90E8\u7F72\u529F\u80FD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ecosystem.config.js
module.exports = {
    apps:[{
        script:&#39;api.js&#39;
    },{
        script:&#39;worker.js&#39;
    }],

    deploy:{
        production:{
            user:&quot;root&quot;,
            host:[],
            ref:&quot;origin/master&quot;,
            repo:&quot;git@github.com:Username/repository.git&quot;,
            path:&quot;/var/www/my-repository&quot;,
            &quot;post-deploy&quot; : &quot;npm install&quot;,
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u5EFA\u8BAE\u672C\u5730\u76EE\u5F55\u7684\u5E94\u7528\u914D\u7F6E\u6587\u4EF6\u5939\u4E5F\u53EB <code>ecosystem.config</code> \u6216 <code>pm2.config.js</code> \u8FD9\u6837\u5C31\u4E0D\u7528\u5728\u6BCF\u4E2A\u547D\u4EE4\u540E\u9762\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\u3002</p><h2 id="\u914D\u7F6E\u5B89\u88C5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5B89\u88C5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668" aria-hidden="true">#</a> \u914D\u7F6E\u5B89\u88C5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</h2><p>\u64CD\u4F5C\u524D\u8BF7\u5728\u670D\u52A1\u5668\u4E0A\u786E\u8BA4\uFF1A</p><ul><li>\u670D\u52A1\u5668\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u4E86 pm2</li><li>\u670D\u52A1\u5668\u6709\u6743\u9650\u62C9\u53D6\u914D\u7F6Egit\u4ED3\u5E93\u7684\u6743\u9650</li></ul><p>\u914D\u7F6E\u597D\u540E\u53EF\u4EE5\u5728\u672C\u673A\u901A\u8FC7\u547D\u4EE4\u5728\u670D\u52A1\u5668\u7AEF\u5BF9\u5E94\u7528\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 deploy production setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u90E8\u7F72\u5E94\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5E94\u7528-1" aria-hidden="true">#</a> \u90E8\u7F72\u5E94\u7528</h2><p>\u670D\u52A1\u5668\u7AEF\u914D\u7F6E\u597D\u5E94\u7528\u540E\u5C31\u53EF\u4EE5\u8FDB\u884C\u90E8\u7F72\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 deploy production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C" aria-hidden="true">#</a> \u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C</h2><p>\u53EF\u4EE5\u4F7F\u7528 <code>revert</code> \u56DE\u6EDA\u5230\u4E4B\u524D\u7684\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 deploy production revert 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65B0\u529F\u80FD\u4E0A\u7EBF\u66F4\u65B0\u90E8\u7F72\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u65B0\u529F\u80FD\u4E0A\u7EBF\u66F4\u65B0\u90E8\u7F72\u5E94\u7528" aria-hidden="true">#</a> \u65B0\u529F\u80FD\u4E0A\u7EBF\u66F4\u65B0\u90E8\u7F72\u5E94\u7528</h2><p>\u4F7F\u7528 <code>update</code> \u6765\u66F4\u65B0\u5E94\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 deploy production update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5728\u6BCF\u4E2A\u670D\u52A1\u5668\u4E0A\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5728\u6BCF\u4E2A\u670D\u52A1\u5668\u4E0A\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u5728\u6BCF\u4E2A\u670D\u52A1\u5668\u4E0A\u6267\u884C\u547D\u4EE4</h2><p>\u53EF\u4EE5\u4F7F\u7528 <code>exec</code> \u9009\u9879\u5728\u670D\u52A1\u5668\u7AEF\u6267\u884C\u4E00\u6B21\u6027\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 deploy production exec &quot;pm2 reload all&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u60C5" aria-hidden="true">#</a> \u8BE6\u60C5</h1><h2 id="\u90E8\u7F72\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u90E8\u7F72\u7684\u751F\u547D\u5468\u671F</h2><p>\u4F7F\u7528PM2 \u8FDB\u884C\u90E8\u7F72\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5B89\u88C5\u548C\u90E8\u7F72\u524D\u540E\u7684\u547D\u4EE4\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;pre-setup&quot;:&quot;echo &#39;\u5B89\u88C5\u8FDB\u7A0B\u5F00\u59CB\u524D\u7684\u547D\u4EE4\u6216\u811A\u672C\u8DEF\u5F84&#39;&quot;,
&quot;post-setup&quot;:&quot;echo &#39;\u62C9\u53D6\u4EE3\u7801\u540E\u7684\u547D\u4EE4\u6216\u811A\u672C\u8DEF\u5F84&#39;&quot;,
&quot;pre-deploy&quot;:&quot;pm2 startOrRestart ecosystem.json --env production &quot;,
&quot;post-deploy&quot;:&quot;pm2 startOrRestart ecosystem.json --env production&quot;,
&quot;pre-deploy-local&quot;:&quot;echo &#39;\u8FD9\u662F\u5728\u672C\u5730\u7535\u8111\u6267\u884C\u7684\u547D\u4EE4&#39;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u4E2A\u670D\u52A1\u5668\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u670D\u52A1\u5668\u90E8\u7F72" aria-hidden="true">#</a> \u591A\u4E2A\u670D\u52A1\u5668\u90E8\u7F72</h2><p>\u8981\u540C\u65F6\u90E8\u7F72\u5230\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\uFF0C\u53EA\u9700\u8981\u5728<code>host</code>\u4E2D\u914D\u7F6Ehost\u7684\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&quot;host&quot; : [&quot;212.83.163.1&quot;, &quot;212.83.163.2&quot;, &quot;212.83.163.3&quot;],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6307\u5B9A-ssh-keys" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A-ssh-keys" aria-hidden="true">#</a> \u6307\u5B9A SSH keys</h3><p>\u6DFB\u52A0<code>key</code>\u5C5E\u6027\u6765\u6307\u5B9A public key \u7684\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>production:{
     &quot;key&quot;:&quot;/path/to/some.pem&quot;     // \u9A8C\u6743\u516C\u94A5\u8DEF\u5F84
     &quot;user&quot; : &quot;node&quot;,              // \u767B\u5F55\u7684\u7528\u6237\u540D
      &quot;host&quot; : &quot;212.83.163.1&quot;,      // host
      &quot;ref&quot;  : &quot;origin/master&quot;,
      &quot;repo&quot; : &quot;git@github.com:repo.git&quot;,
      &quot;path&quot; : &quot;/var/www/production&quot;,
      &quot;post-deploy&quot; : &quot;pm2 startOrRestart ecosystem.json --env production&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u6545\u969C\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u6392\u9664" aria-hidden="true">#</a> \u6545\u969C\u6392\u9664</h1><h2 id="ssh-\u62C9\u53D6\u4EE3\u7801\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#ssh-\u62C9\u53D6\u4EE3\u7801\u5F02\u5E38" aria-hidden="true">#</a> ssh \u62C9\u53D6\u4EE3\u7801\u5F02\u5E38</h2><p>\u591A\u6570\u60C5\u51B5\u662F\u56E0\u4E3A<code>pm2</code>\u6CA1\u6709\u62C9\u53D6\u4ED3\u5E93\u4EE3\u7801\u7684\u6743\u9650\u3002\u4F60\u9700\u8981\u5728\u6BCF\u4E00\u6B65\u9A8C\u8BC1\u5BC6\u94A5\u662F\u5426\u53EF\u7528\uFF1B</p><p>\u7B2C\u4E00\u6B65\uFF1A\u5982\u679C\u786E\u5B9A\u5BC6\u94A5\u6B63\u786E\uFF0C\u5C1D\u8BD5\u5728\u670D\u52A1\u5668\u4E0A\u6267\u884C <code>git clone your_repo.git</code>.\u5982\u679C\u6210\u529F\uFF0C\u8FDB\u5165\u7B2C\u4E8C\u6B65\uFF0C\u5982\u679C\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4git\u8D26\u6237\u548C\u670D\u52A1\u5668\u7684\u5BC6\u94A5\u662F\u6B63\u786E\u7684\u3002</p><p>\u7B2C\u4E8C\u6B65\uFF1A\u4F7F\u7528<code>ssh-copy-id</code> \u590D\u5236\u9ED8\u8BA4\u7684\u8EAB\u4EFDkey\uFF0C\u9ED8\u8BA4\u540D\u79F0\u662F<code>id_ras</code> ,\u5982\u679C\u4E0D\u662F\u9ED8\u8BA4\u540D\u79F0\uFF0C\u4F7F\u7528\u4E0B\u5217\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-copy-id -i path/to/my/key username@server.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u64CD\u4F5C\u4F1A\u628A\u4F60\u7684\u516C\u94A5\u590D\u5236\u5230\u670D\u52A1\u5668\u7684 <code>~/.ssh/authorized_keys</code> \u6587\u4EF6\u4E2D</p><p>\u7B2C\u4E09\u6B65\uFF1A \u5982\u679C\u662F\u4E0B\u9762\u7684\u9519\u8BEF\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>--&gt; Deploying to production environment
--&gt; on host mysite.com
  \u25CB hook pre-setup
  \u25CB running setup
  \u25CB cloning git@github.com:user/repo.git
Cloning into &#39;/var/www/app/source&#39;...
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and that the repository exists.

**Failed to clone**

Deploy failed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u9700\u8981\u65B0\u5EFA\u4E00\u4E2Assh\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u786E\u4FDD\u6BCF\u4E2A\u4ED3\u5E93\u4F7F\u7528\u5BF9\u5E94\u7684ssh\u5BC6\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># ~/.ssh/config
Host alias
    HostName myserver.com
    User username
    IdentityFile ~/.ssh/mykey
# Usage: \`ssh alias\`
# Alternative: \`ssh -i ~/.ssh/mykey username@myserver.com\`

Host deployment
    HostName github.com
    User username
    IdentityFile ~/.ssh/github_rsa
# Usage:
# git@deployment:username/anyrepo.git
# This is for cloning any repo that uses that IdentityFile. This is a good way to make sure that your remote cloning commands use the appropriate key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),r=[a];function l(o,t){return i(),s("div",null,r)}var v=e(d,[["render",l],["__file","pm2\u4E4B\u81EA\u52A8\u90E8\u7F72.html.vue"]]);export{v as default};
