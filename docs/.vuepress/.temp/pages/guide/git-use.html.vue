<template><h1 id="git-常用命令" tabindex="-1"><a class="header-anchor" href="#git-常用命令" aria-hidden="true">#</a> git 常用命令</h1>
<h2 id="一、创建本地-ssh-publickey-配置到远端仓库" tabindex="-1"><a class="header-anchor" href="#一、创建本地-ssh-publickey-配置到远端仓库" aria-hidden="true">#</a> 一、创建本地 ssh publickey 配置到远端仓库</h2>
<blockquote>
<p>Host 设置在使用 git@时后面的名字。 例： $ git clone git@other.com:repname/item.git</p>
<p>HostName 设置域名地址或ip地址。</p>
<p>IdentityFile 输入id_rsa的目录地址。</p>
<p>PreferrenAuthentications 配置登录时使用什么仅限。可设为 publickey password publickey keyboard-interactive</p>
<p>User 设置用户名。需要与远程的用户名一致</p>
<p>也可以是ip地址。</p>
<p>ssh-keygen -t rsa -C &quot;choukin@dingtalk.com&quot; -f ~/.ssh/quxian_rsa</p>
<p>ssh-add -K ~/.ssh/github_id_rsa</p>
<p>在仓库里添加 publickey</p>
<p>ssh -T git@github.com</p>
</blockquote>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<ol>
<li>生成key</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> ssh-keygen -t rsa -C <span class="token string">"choukin@dingtalk.com"</span> -f ~/.ssh/git_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>需要时使用 手动添加 rea</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-add -K ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>在仓库里添加 publickey</li>
<li>测试是否配置陈工</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="二、一台电脑配置多个个远端仓库的ssh" tabindex="-1"><a class="header-anchor" href="#二、一台电脑配置多个个远端仓库的ssh" aria-hidden="true">#</a> 二、一台电脑配置多个个远端仓库的ssh</h2>
<p>1、./ssh 文件夹下面创建config文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># config</span>
<span class="token comment">#Host 设置在使用 git@时后面的名字。 例： $ git clone git@other.com:repname/item.git 也可以是ip地址。</span>
<span class="token comment">#HostName 设置域名地址或ip地址。</span>
<span class="token comment">#IdentityFile 输入id_rsa的目录地址。</span>
<span class="token comment">#PreferrenAuthentications 配置登录时使用什么仅限。可设为 publickey password publickey keyboard-interactive</span>
<span class="token comment">#User 设置用户名。需要与远程的用户名一致</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="三、初始化本地仓库添加remote远端仓库" tabindex="-1"><a class="header-anchor" href="#三、初始化本地仓库添加remote远端仓库" aria-hidden="true">#</a> 三、初始化本地仓库添加remote远端仓库</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token comment"># 查看remote</span>
<span class="token function">git</span> remote -v
<span class="token comment"># 添加remote 可以添加多个</span>
<span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span>
<span class="token comment"># 删除remote </span>
<span class="token function">git</span> remote remove <span class="token operator">&lt;</span>name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3>
<ul>
<li>查看远程分支</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  git branch <span class="token operator">-</span>r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看 所有分支</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> git branch <span class="token operator">-</span>a<span class="token operator">/</span><span class="token operator">--</span>all
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看本地分支</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>git branch <span class="token operator">-</span>l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="拉取远程分支并创建本地分支" tabindex="-1"><a class="header-anchor" href="#拉取远程分支并创建本地分支" aria-hidden="true">#</a> 拉取远程分支并创建本地分支</h3>
<p>一. 在本地新建分支x，并自动切换到该本地分支xgit</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>checkout -b 本地分支名x origin/远程分支名x

<span class="token function">git</span> checkout -b dev<span class="token punctuation">(</span>本地分支名称<span class="token punctuation">)</span> origin/dev<span class="token punctuation">(</span>远程分支名称<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>二. 在本地新建分支x，但是不会自动切换到该本地分支x，需要手动 checkout 切换分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch origin 远程分支名x:本地分支名x
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>三. 操作后提示错误 <code>fatal: refusing to merge unrelated histories</code> 在命令后吗添加 <code>--allow-unrelated-histories</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> pull --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>四. 前端项目开发 git commit 时校验代码</p>
<p><a href="https://github.com/yyx990803/yorkie" target="_blank" rel="noopener noreferrer">yorkie<ExternalLinkIcon/></a> + <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<ExternalLinkIcon/></a></p>
<ol>
<li>安装 <code>npm install --save-dev lint-staged yorkie</code></li>
<li><code>package.json</code> 里添加配置</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token string-property property">"gitHooks"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"pre-commit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"*.ts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"npm run lint"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"*.vue"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"npm run lint"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3">
<li>修改项目文件执行 <code>git add</code> 然后执行 <code>git commit</code> 可以看到会先执行lint 然后提交代码</li>
<li>创建 tag</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">git</span> tag -a v1.0.0 -m <span class="token string">'起步'</span>
  <span class="token comment"># 上传 tag</span>
  <span class="token function">git</span> push origin v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5">
<li>删除分支</li>
</ol>
<ul>
<li>删除本地分</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>   <span class="token function">git</span> branch -D branchName
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>删除远程分支</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>   <span class="token function">git</span> push origin --delete branchname
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6">
<li>命令git update-index --assume-unchanged，忽略不想提交的文件（忽略跟踪）</li>
</ol>
<ul>
<li>忽略</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> update-index --assume-unchanged src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>取消忽略</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> update-index --no-assume-unchanged  src/demo.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7">
<li>取消commit</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8">
<li>修改已经提交的 commit 信息</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 输入命令进入vim界面</span>
<span class="token function">git</span> commit --amend

<span class="token comment"># 输入 i 进入编辑模式 修改信息</span>

<span class="token comment"># 按 ESC 退出编辑模式 </span>
:wq 保存退出



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="8">
<li>同步远程已经删除的分支</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1.查看本地和远端分支追踪情况</span>
<span class="token function">git</span> remote show origin
<span class="token comment"># 2. 同步删除已经不存在的远端分支</span>
<span class="token function">git</span> remote prune origin
<span class="token comment"># 3.查看所有分支</span>
<span class="token function">git</span> branch -a

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="9">
<li>提高clone 速度</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone小的话，用--depth=1只获取最新的commit即可</span>
<span class="token function">git</span> clone github@choukin.com --depth<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>https://cloud.tencent.com/developer/article/1665810</p>
</template>
