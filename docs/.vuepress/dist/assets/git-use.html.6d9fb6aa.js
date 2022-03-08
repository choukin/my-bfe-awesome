import{r as l,o as i,a as p,b as n,d as e,F as t,c as r,e as s}from"./app.91923fdf.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const o={},u=r(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> git \u5E38\u7528\u547D\u4EE4</h1><h2 id="\u4E00\u3001\u521B\u5EFA\u672C\u5730-ssh-publickey-\u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u521B\u5EFA\u672C\u5730-ssh-publickey-\u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93" aria-hidden="true">#</a> \u4E00\u3001\u521B\u5EFA\u672C\u5730 ssh publickey \u914D\u7F6E\u5230\u8FDC\u7AEF\u4ED3\u5E93</h2><blockquote><p>Host \u8BBE\u7F6E\u5728\u4F7F\u7528 git@\u65F6\u540E\u9762\u7684\u540D\u5B57\u3002 \u4F8B\uFF1A $ git clone git@other.com:repname/item.git</p><p>HostName \u8BBE\u7F6E\u57DF\u540D\u5730\u5740\u6216ip\u5730\u5740\u3002</p><p>IdentityFile \u8F93\u5165id_rsa\u7684\u76EE\u5F55\u5730\u5740\u3002</p><p>PreferrenAuthentications \u914D\u7F6E\u767B\u5F55\u65F6\u4F7F\u7528\u4EC0\u4E48\u4EC5\u9650\u3002\u53EF\u8BBE\u4E3A publickey password publickey keyboard-interactive</p><p>User \u8BBE\u7F6E\u7528\u6237\u540D\u3002\u9700\u8981\u4E0E\u8FDC\u7A0B\u7684\u7528\u6237\u540D\u4E00\u81F4</p><p>\u4E5F\u53EF\u4EE5\u662Fip\u5730\u5740\u3002</p><p>ssh-keygen -t rsa -C &quot;choukin@dingtalk.com&quot; -f ~/.ssh/quxian_rsa</p><p>ssh-add -K ~/.ssh/github_id_rsa</p><p>\u5728\u4ED3\u5E93\u91CC\u6DFB\u52A0 publickey</p><p>ssh -T git@github.com</p></blockquote><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><ol><li>\u751F\u6210key</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> ssh-keygen -t rsa -C <span class="token string">&quot;choukin@dingtalk.com&quot;</span> -f ~/.ssh/git_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u9700\u8981\u65F6\u4F7F\u7528 \u624B\u52A8\u6DFB\u52A0 rea</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add -K ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5728\u4ED3\u5E93\u91CC\u6DFB\u52A0 publickey</li><li>\u6D4B\u8BD5\u662F\u5426\u914D\u7F6E\u9648\u5DE5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh" aria-hidden="true">#</a> \u4E8C\u3001\u4E00\u53F0\u7535\u8111\u914D\u7F6E\u591A\u4E2A\u4E2A\u8FDC\u7AEF\u4ED3\u5E93\u7684ssh</h2><p>1\u3001./ssh \u6587\u4EF6\u5939\u4E0B\u9762\u521B\u5EFAconfig\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># config</span>
<span class="token comment">#Host \u8BBE\u7F6E\u5728\u4F7F\u7528 git@\u65F6\u540E\u9762\u7684\u540D\u5B57\u3002 \u4F8B\uFF1A $ git clone git@other.com:repname/item.git \u4E5F\u53EF\u4EE5\u662Fip\u5730\u5740\u3002</span>
<span class="token comment">#HostName \u8BBE\u7F6E\u57DF\u540D\u5730\u5740\u6216ip\u5730\u5740\u3002</span>
<span class="token comment">#IdentityFile \u8F93\u5165id_rsa\u7684\u76EE\u5F55\u5730\u5740\u3002</span>
<span class="token comment">#PreferrenAuthentications \u914D\u7F6E\u767B\u5F55\u65F6\u4F7F\u7528\u4EC0\u4E48\u4EC5\u9650\u3002\u53EF\u8BBE\u4E3A publickey password publickey keyboard-interactive</span>
<span class="token comment">#User \u8BBE\u7F6E\u7528\u6237\u540D\u3002\u9700\u8981\u4E0E\u8FDC\u7A0B\u7684\u7528\u6237\u540D\u4E00\u81F4</span>

<span class="token comment">#</span>

Host github
    User choukin
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_id_rsa
    ServerAliveInterval <span class="token number">300</span>
    ServerAliveCountMax <span class="token number">10</span>

Host gitlab.quxian360
    User choukin
    HostName gitlab.quxian360.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/quxian_rsa
    ServerAliveInterval <span class="token number">300</span>
    ServerAliveCountMax <span class="token number">10</span>


Host code.qschou.com
    User zhaoxin
    HostName code.qschou.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval <span class="token number">300</span>
    ServerAliveCountMax <span class="token number">10</span>

Host gitlab.molin.work
    User root
    HostName gitlab.molin.work
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/reader_rsa
    ServerAliveInterval <span class="token number">300</span>
    ServerAliveCountMax <span class="token number">10</span>  

Host gitee.com
    User dipper
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_rsa
    ServerAliveInterval <span class="token number">300</span>
    ServerAliveCountMax <span class="token number">10</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="\u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93" aria-hidden="true">#</a> \u4E09\u3001\u521D\u59CB\u5316\u672C\u5730\u4ED3\u5E93\u6DFB\u52A0remote\u8FDC\u7AEF\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token comment"># \u67E5\u770Bremote</span>
<span class="token function">git</span> remote -v
<span class="token comment"># \u6DFB\u52A0remote \u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
<span class="token comment"># \u5220\u9664remote </span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u67E5\u770B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u5206\u652F</h3><ul><li>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  git branch <span class="token operator">-</span>r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u67E5\u770B \u6240\u6709\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> git branch <span class="token operator">-</span>a<span class="token operator">/</span><span class="token operator">--</span>all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u67E5\u770B\u672C\u5730\u5206\u652F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git branch <span class="token operator">-</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F</h3><p>\b\u4E00. \u5728\u672C\u5730\u65B0\u5EFA\u5206\u652Fx\uFF0C\u5E76\u81EA\u52A8\u5207\u6362\u5230\u8BE5\u672C\u5730\u5206\u652Fxgit</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>checkout -b \u672C\u5730\u5206\u652F\u540Dx origin/\u8FDC\u7A0B\u5206\u652F\u540Dx

<span class="token function">git</span> checkout -b dev<span class="token punctuation">(</span>\u672C\u5730\u5206\u652F\u540D\u79F0<span class="token punctuation">)</span> origin/dev<span class="token punctuation">(</span>\u8FDC\u7A0B\u5206\u652F\u540D\u79F0<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E8C. \u5728\u672C\u5730\u65B0\u5EFA\u5206\u652Fx\uFF0C\u4F46\u662F\u4E0D\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u8BE5\u672C\u5730\u5206\u652Fx\uFF0C\u9700\u8981\u624B\u52A8 checkout \u5207\u6362\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch origin \u8FDC\u7A0B\u5206\u652F\u540Dx:\u672C\u5730\u5206\u652F\u540Dx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E09. \b\b\u64CD\u4F5C\u540E\u63D0\u793A\u9519\u8BEF <code>fatal: refusing to merge unrelated histories</code> \u5728\u547D\u4EE4\u540E\u5417\u6DFB\u52A0 <code>--allow-unrelated-histories</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u56DB. \u524D\u7AEF\u9879\u76EE\u5F00\u53D1 git commit \u65F6\u6821\u9A8C\u4EE3\u7801</p>`,30),b={href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"},d=s("yorkie"),m=s(" + "),h={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},g=s("lint-staged"),k=r(`<ol><li>\u5B89\u88C5 <code>npm install --save-dev lint-staged yorkie</code></li><li><code>package.json</code> \b\u91CC\u6DFB\u52A0\u914D\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   <span class="token string-property property">&quot;gitHooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;*.ts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;npm run lint&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;npm run lint&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\u6267\u884C <code>git add</code> \u7136\u540E\u6267\u884C <code>git commit</code> \u53EF\u4EE5\u770B\u5230\u4F1A\u5148\u6267\u884Clint \u7136\u540E\u63D0\u4EA4\u4EE3\u7801</li><li>\u521B\u5EFA tag</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">git</span> tag -a v1.0.0 -m <span class="token string">&#39;\u8D77\u6B65&#39;</span>
  <span class="token comment"># \u4E0A\u4F20 tag</span>
  <span class="token function">git</span> push origin v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5"><li>\u5220\u9664\u5206\u652F</li></ol><ul><li>\u5220\u9664\u672C\u5730\u5206</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   <span class="token function">git</span> branch -D branchName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5220\u9664\u8FDC\u7A0B\u5206\u652F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   <span class="token function">git</span> push origin  -D branchName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>\u547D\u4EE4git update-index --assume-unchanged\uFF0C\u5FFD\u7565\u4E0D\u60F3\u63D0\u4EA4\u7684\u6587\u4EF6\uFF08\u5FFD\u7565\u8DDF\u8E2A\uFF09</li></ol><ul><li>\u5FFD\u7565</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> update-index --assume-unchanged src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u53D6\u6D88\u5FFD\u7565</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> update-index --no-assume-unchanged  src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7"><li>\u53D6\u6D88commit</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>\u4FEE\u6539\u5DF2\u7ECF\u63D0\u4EA4\u7684 commit \u4FE1\u606F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## \u8F93\u5165\u547D\u4EE4\u8FDB\u5165vim\u754C\u9762</span>
<span class="token function">git</span> commit --amend

<span class="token comment"># \u8F93\u5165 i \u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F \u4FEE\u6539\u4FE1\u606F</span>

<span class="token comment"># \u6309 ESC \u9000\u51FA\u7F16\u8F91\u6A21\u5F0F </span>
:wq \u4FDD\u5B58\u9000\u51FA



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="8"><li>\u540C\u6B65\u8FDC\u7A0B\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1.\u67E5\u770B\u672C\u5730\u548C\u8FDC\u7AEF\u5206\u652F\u8FFD\u8E2A\u60C5\u51B5</span>
<span class="token function">git</span> remote show origin
<span class="token comment"># 2. \u540C\u6B65\u5220\u9664\u5DF2\u7ECF\u4E0D\u5B58\u5728\u7684\u8FDC\u7AEF\u5206\u652F</span>
<span class="token function">git</span> remote prune origin
<span class="token comment"># 3.\u67E5\u770B\u6240\u6709\u5206\u652F</span>
<span class="token function">git</span> branch -a

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="9"><li>\u63D0\u9AD8clone \u901F\u5EA6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone\u5C0F\u7684\u8BDD\uFF0C\u7528--depth=1\u53EA\u83B7\u53D6\u6700\u65B0\u7684commit\u5373\u53EF</span>
<span class="token function">git</span> clone github@choukin.com --depth<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>https://cloud.tencent.com/developer/article/1665810</p>`,23);function v(x,f){const a=l("ExternalLinkIcon");return i(),p(t,null,[u,n("p",null,[n("a",b,[d,e(a)]),m,n("a",h,[g,e(a)])]),k],64)}var q=c(o,[["render",v]]);export{q as default};
