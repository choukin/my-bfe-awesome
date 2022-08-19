import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,a as n}from"./app.8e201d3a.js";const d={},l=n(`<h1 id="ssh-\u514D\u5BC6\u767B\u9646\u4E86\u89E3\u4E0B" tabindex="-1"><a class="header-anchor" href="#ssh-\u514D\u5BC6\u767B\u9646\u4E86\u89E3\u4E0B" aria-hidden="true">#</a> ssh \u514D\u5BC6\u767B\u9646\u4E86\u89E3\u4E0B</h1><h2 id="\u75DB\u70B9" tabindex="-1"><a class="header-anchor" href="#\u75DB\u70B9" aria-hidden="true">#</a> \u75DB\u70B9</h2><p>\u670D\u52A1\u5668\u5BC6\u7801\u8BBE\u7F6E\u7684\u6BD4\u8F83\u7E41\u7410\u8BB0\u4E0D\u4F4F\uFF01\u6BCF\u6B21\u90FD\u8981\u590D\u5236\u53C8\u5ACC\u592A\u9EBB\u70E6\u5982\u4F55\u89E3\u51B3\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u279C  ~ ssh root@114.116.100.80
root@114.116.100.80&#39;s password:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ssh</code> \u514D\u5BC6\u767B\u9646\u6765\u5E2E\u6211</p><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><ul><li>\u534E\u4E3A\u4E91 ECS \u670D\u52A1\u5668</li><li>\u672C\u5730 macOS</li></ul><p>\u7528\u8FC7 <code>git</code> \u7684\u540C\u5B66\u5BF9 <code>ssh</code> \u90FD\u6BD4\u8F83\u719F\u6089\uFF0C<code>ssh</code> \u514D\u5BC6\u767B\u9646\u7B80\u5355\u8BF4\u5C31\u662F\uFF1A\u628A\u672C\u5730\u751F\u6210\u7684\u516C\u94A5\u653E\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u8BA9\u670D\u52A1\u5668\u7ED9\u5F53\u524D\u64CD\u4F5C\u7684\u673A\u5668\u53D1\u4E2A\u901A\u884C\u8BC1\u53EF\u4EE5\u81EA\u7531\u51FA\u5165\uFF0C\u7701\u7565\u8F93\u5165\u5BC6\u7801\u64CD\u4F5C\u3002</p><blockquote><p>Talking is cheap show me code!</p></blockquote><p>1\u3001 \u672C\u5730\u751F\u4EA7ssh publickey</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -f [.ssh/\u4FDD\u5B58\u7684\u6587\u4EF6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528\u9ED8\u8BA4\u65B9\u5F0F\u751F\u6210\u5BC6\u94A5</li><li><code>-f</code> \u6307\u5B9A\u751F\u6210\u6587\u4EF6\u7684\u8DEF\u5F84</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh-keygen -f \uFF5E/.ssh/huaweiyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u628A\u751F\u6210\u7684\u516C\u94A5\u4FDD\u5B58\u5230\u4E91\u670D\u52A1\u5668\u4E0A</p><ul><li>\u7B2C\u4E00\u79CD\u65B9\u6CD5\uFF1A\u624B\u52A8\u590D\u5236\u5230\u670D\u52A1\u5668 <code>~/.ssh/authorized_keys</code> \u4E2D</li><li>\u7B2C\u4E8C\u79CD\u65B9\u6CD5\uFF1A <a href="http://lnmp.ailinux.net/ssh-copy-id" target="_blank" rel="noopener noreferrer"><code>ssh-copy-id</code></a></li></ul><pre><code>\`\`\`sh
ssh-copy-id [-i [identity_file]] [user]@[ip]
\`\`\`
</code></pre><ol start="3"><li>\u5982\u679C\u672C\u673A\u914D\u7F6E\u8FC7\u591A\u4E2Assh\u5BC6\u94A5\u914D\u7F6E\u8FC7 <code>~/.ssh/config</code> \u9700\u8981\u628A\u7B2C\u4E00\u6B65\u751F\u6210\u7684\u516C\u94A5\u914D\u7F6E\u5230config\u91CC</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># ~/.ssh/config
Host github
    User choukin
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host gitee
    User choukin
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host hw
    User root
    HostName 114.116.100.80
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/huaweiyun
    ServerAliveInterval 300
    ServerAliveCountMax 10       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.\u6D4B\u8BD5\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u7684host\u522B\u540D<code>hw</code> \u5728\u7EC8\u7AEF\u767B\u9646\u4E91\u670D\u52A1\u5668</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh hw
Last login: Tue Aug  2 15:48:28 2022 from 114.247.224.155

        Welcome to Huawei Cloud Service

[root@hecs-409959 ~]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u606D\u559C\u4F60\u767B\u9646\u6210\u529F\uFF01\u{1F389}\uFF0C\u8282\u7701 5\uFF5E6\u79D2\u7684\u590D\u5236\u65F6\u95F4\uFF0C\u53EF\u4EE5\u7528\u6765\u505A\u66F4\u91CD\u8981\u7684\u4E8B\u60C5\uFF01</p><p>\u6CE8\u610F\u26A0\uFE0F\uFF1A\u914D\u7F6E\u514D\u5BC6\u7684\u7535\u8111\u4E00\u5B9A\u8981\u662F\u5B89\u5168\u53EF\u9760\u7684\u7535\u8111\u3002</p>`,22),a=[l];function r(c,o){return i(),s("div",null,a)}var t=e(d,[["render",r],["__file","nopasswordlogin.html.vue"]]);export{t as default};
