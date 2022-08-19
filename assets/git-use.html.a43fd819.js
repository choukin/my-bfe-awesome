import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8e201d3a.js";const l={},a=s(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git \u5E38\u7528\u547D\u4EE4</h1><h2 id="\u4E00\u3001\u521B\u5EFA\u672C\u5730-ssh-publickey-\u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u521B\u5EFA\u672C\u5730-ssh-publickey-\u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93" aria-hidden="true">#</a> \u4E00\u3001\u521B\u5EFA\u672C\u5730 ssh publickey \u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93</h2><blockquote><p>Host \u8BBE\u7F6E\u5728\u4F7F\u7528 git@\u65F6\u540E\u9762\u7684\u540D\u5B57\u3002 \u4F8B\uFF1A $ git clone git@other.com:repname/item.git</p><p>HostName \u8BBE\u7F6E\u57DF\u540D\u5730\u5740\u6216ip\u5730\u5740\u3002</p><p>IdentityFile \u8F93\u5165id_rsa\u7684\u76EE\u5F55\u5730\u5740\u3002</p><p>PreferrenAuthentications \u914D\u7F6E\u767B\u5F55\u65F6\u4F7F\u7528\u4EC0\u4E48\u4EC5\u9650\u3002\u53EF\u8BBE\u4E3A publickey password publickey keyboard-interactive</p><p>User \u8BBE\u7F6E\u7528\u6237\u540D\u3002\u9700\u8981\u4E0E\u8FDC\u7A0B\u7684\u7528\u6237\u540D\u4E00\u81F4</p><p>\u4E5F\u53EF\u4EE5\u662Fip\u5730\u5740\u3002</p><p>ssh-keygen -t rsa -C &quot;choukin@dingtalk.com&quot; -f ~/.ssh/quxian_rsa</p><p>ssh-add -K ~/.ssh/github_id_rsa</p><p>\u5728\u4ED3\u5E93\u91CC\u6DFB\u52A0 publickey</p><p>ssh -T git@github.com [-p 22/\u5176\u4ED6\u5728\u7528\u7AEF\u53E3]</p></blockquote><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><ol><li>\u751F\u6210key</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ssh-keygen -t rsa -C &quot;choukin@dingtalk.com&quot; -f ~/.ssh/git_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u9700\u8981\u65F6\u4F7F\u7528 \u624B\u52A8\u6DFB\u52A0 rea</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add  ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5728\u4ED3\u5E93\u91CC\u6DFB\u52A0 publickey</li><li>\u6D4B\u8BD5\u662F\u5426\u914D\u7F6E\u6210\u529F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh" aria-hidden="true">#</a> \u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh</h2><p>1\u3001./ssh \u6587\u4EF6\u5939\u4E0B\u9762\u521B\u5EFAconfig\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># config
#Host \u8BBE\u7F6E\u5728\u4F7F\u7528 git@\u65F6\u540E\u9762\u7684\u540D\u5B57\u3002 \u4F8B\uFF1A $ git clone git@other.com:repname/item.git \u4E5F\u53EF\u4EE5\u662Fip\u5730\u5740\u3002
#HostName \u8BBE\u7F6E\u57DF\u540D\u5730\u5740\u6216ip\u5730\u5740\u3002
#IdentityFile \u8F93\u5165id_rsa\u7684\u76EE\u5F55\u5730\u5740\u3002
#PreferrenAuthentications \u914D\u7F6E\u767B\u5F55\u65F6\u4F7F\u7528\u4EC0\u4E48\u4EC5\u9650\u3002\u53EF\u8BBE\u4E3A publickey password publickey keyboard-interactive
#User \u8BBE\u7F6E\u7528\u6237\u540D\u3002\u9700\u8981\u4E0E\u8FDC\u7A0B\u7684\u7528\u6237\u540D\u4E00\u81F4

#

Host github
    User choukin
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10

Host gitlab.quxian360
    User choukin
    HostName gitlab.quxian360.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/quxian_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10


Host code.qschou.com
    User zhaoxin
    HostName code.qschou.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10

Host gitlab.molin.work
    User root
    HostName gitlab.molin.work
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/reader_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host gitee.com
    User dipper
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93" aria-hidden="true">#</a> \u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git init
# \u67E5\u770Bremote
git remote -v
# \u6DFB\u52A0remote \u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A
git remote add &lt;name&gt; &lt;url&gt;
# \u5220\u9664remote 
git remote remove &lt;name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#git-\u914D\u7F6E" aria-hidden="true">#</a> git \u914D\u7F6E</h3><ul><li>git config --system --list \u7CFB\u7EDF\u914D\u7F6E</li><li>git config --global -l/--list \u67E5\u770B\u7528\u6237\u914D\u7F6E</li><li>git config [--global] user.name [\u7528\u6237\u540D]</li><li>git config [--global] user.email [\u7528\u6237\u90AE\u7BB1]</li></ul><h3 id="\u67E5\u770B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u5206\u652F</h3><ul><li>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B \u6240\u6709\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> git branch -a/--all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u672C\u5730\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F</h3><p>\b\u4E00. \u5728\u672C\u5730\u65B0\u5EFA\u5206\u652Fx\uFF0C\u5E76\u81EA\u52A8\u5207\u6362\u5230\u8BE5\u672C\u5730\u5206\u652Fxgit</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>checkout -b \u672C\u5730\u5206\u652F\u540Dx origin/\u8FDC\u7A0B\u5206\u652F\u540Dx

git checkout -b dev(\u672C\u5730\u5206\u652F\u540D\u79F0) origin/dev(\u8FDC\u7A0B\u5206\u652F\u540D\u79F0)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E8C. \u5728\u672C\u5730\u65B0\u5EFA\u5206\u652Fx\uFF0C\u4F46\u662F\u4E0D\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u8BE5\u672C\u5730\u5206\u652Fx\uFF0C\u9700\u8981\u624B\u52A8 checkout \u5207\u6362\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git fetch origin \u8FDC\u7A0B\u5206\u652F\u540Dx:\u672C\u5730\u5206\u652F\u540Dx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E09. \b\b\u64CD\u4F5C\u540E\u63D0\u793A\u9519\u8BEF <code>fatal: refusing to merge unrelated histories</code> \u5728\u547D\u4EE4\u540E\u5417\u6DFB\u52A0 <code>--allow-unrelated-histories</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git pull --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56DB. \u524D\u7AEF\u9879\u76EE\u5F00\u53D1 git commit \u65F6\u6821\u9A8C\u4EE3\u7801</p><p><a href="https://github.com/yyx990803/yorkie" target="_blank" rel="noopener noreferrer">yorkie</a> + <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a></p><ol><li>\u5B89\u88C5 <code>npm install --save-dev lint-staged yorkie</code></li><li><code>package.json</code> \b\u91CC\u6DFB\u52A0\u914D\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   &quot;gitHooks&quot;: {
    &quot;pre-commit&quot;: &quot;lint-staged&quot;
  },
  &quot;lint-staged&quot;: {
    &quot;*.ts&quot;: [
      &quot;npm run lint&quot;
    ],
    &quot;*.vue&quot;: [
      &quot;npm run lint&quot;
    ]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\u6267\u884C <code>git add</code> \u7136\u540E\u6267\u884C <code>git commit</code> \u53EF\u4EE5\u770B\u5230\u4F1A\u5148\u6267\u884Clint \u7136\u540E\u63D0\u4EA4\u4EE3\u7801</li><li>\u521B\u5EFA tag</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  git tag -a v1.0.0 -m &#39;\u8D77\u6B65&#39;
  # \u4E0A\u4F20 tag
  git push origin v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u5220\u9664\u5206\u652F</li></ol><ul><li>\u5220\u9664\u672C\u5730\u5206</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   git branch -D branchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5220\u9664\u8FDC\u7A0B\u5206\u652F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   git push origin --delete branchname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>\u547D\u4EE4git update-index --assume-unchanged\uFF0C\u5FFD\u7565\u4E0D\u60F3\u63D0\u4EA4\u7684\u6587\u4EF6\uFF08\u5FFD\u7565\u8DDF\u8E2A\uFF09</li></ol><ul><li>\u5FFD\u7565</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git update-index --assume-unchanged src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u53D6\u6D88\u5FFD\u7565</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git update-index --no-assume-unchanged  src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>\u53D6\u6D88commit</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li>\u4FEE\u6539\u5DF2\u7ECF\u63D0\u4EA4\u7684 commit \u4FE1\u606F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>## \u8F93\u5165\u547D\u4EE4\u8FDB\u5165vim\u754C\u9762
git commit --amend

# \u8F93\u5165 i \u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F \u4FEE\u6539\u4FE1\u606F

# \u6309 ESC \u9000\u51FA\u7F16\u8F91\u6A21\u5F0F 
:wq \u4FDD\u5B58\u9000\u51FA



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>\u540C\u6B65\u8FDC\u7A0B\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># 1.\u67E5\u770B\u672C\u5730\u548C\u8FDC\u7AEF\u5206\u652F\u8FFD\u8E2A\u60C5\u51B5
git remote show origin
# 2. \u540C\u6B65\u5220\u9664\u5DF2\u7ECF\u4E0D\u5B58\u5728\u7684\u8FDC\u7AEF\u5206\u652F
git remote prune origin
# 3.\u67E5\u770B\u6240\u6709\u5206\u652F
git branch -a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>\u63D0\u9AD8clone \u901F\u5EA6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># clone\u5C0F\u7684\u8BDD\uFF0C\u7528--depth=1\u53EA\u83B7\u53D6\u6700\u65B0\u7684commit\u5373\u53EF
git clone github@choukin.com --depth=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>https://cloud.tencent.com/developer/article/1665810</p>`,56),d=[a];function r(c,t){return i(),n("div",null,d)}var o=e(l,[["render",r],["__file","git-use.html.vue"]]);export{o as default};
