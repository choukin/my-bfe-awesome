<template><h1 id="mac-使用-软件" tabindex="-1"><a class="header-anchor" href="#mac-使用-软件" aria-hidden="true">#</a> mac 使用 软件</h1>
<ul>
<li>
<p><a href="https://github.com/hzlzh/Best-App" target="_blank" rel="noopener noreferrer">Best APP<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="">dataGrip 链接数据库</a></p>
</li>
<li>
<p><a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer">dbeaver开源的数据库图形界面<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://arctype.com/" target="_blank" rel="noopener noreferrer">arctype一个桌面的数据库查询工具<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://studio3t.com/" target="_blank" rel="noopener noreferrer">Studio 3T GUI for MONGO<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="使用-homebrew-安装-tree-命令行" tabindex="-1"><a class="header-anchor" href="#使用-homebrew-安装-tree-命令行" aria-hidden="true">#</a> 使用 homebrew 安装 tree 命令行：</h2>
<p>安装命令：</p>
<p>brew install telnet
如没有提前安装brew，可执行如下命令：</p>
<p>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
选择对应镜像源后，输入Y，回车即可安装brew</p>
<p>继续执行安装telnet命令，过程中如出现could not lock config file .git/config: Permission denied错误，请先修改文件权限，执行如下命令：</p>
<p>sudo chgrp -R admin /usr/local/*
sudo chmod -R g+w /usr/local/*
修改权限后，再执行安装telnet命令，即可顺利安装。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 通过gitee安装homebrew</span>
/bin/zsh -c <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ brew <span class="token function">install</span> tree
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="忽略-node-modules-文件夹" tabindex="-1"><a class="header-anchor" href="#忽略-node-modules-文件夹" aria-hidden="true">#</a> 忽略 node_modules 文件夹</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ tree -I node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<p>tree -d 只显示文件夹；</p>
<ul>
<li>tree -L n 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3；</li>
<li>tree -I pattern 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I &quot;node_modules&quot;；</li>
<li>tree &gt; tree.md 将项目结构输出到tree.md这个文件。</li>
</ul>
<h3 id="举例如果我们要显示某个项目下3层的所有文件结构" tabindex="-1"><a class="header-anchor" href="#举例如果我们要显示某个项目下3层的所有文件结构" aria-hidden="true">#</a> 举例如果我们要显示某个项目下3层的所有文件结构</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> tree -L 3 -I "node_modules"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="刷新dns" tabindex="-1"><a class="header-anchor" href="#刷新dns" aria-hidden="true">#</a> 刷新DNS</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> dscacheutil -flushcache<span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">killall</span> -HUP mDNSResponder<span class="token punctuation">;</span> say DNS cache flushed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="切图吸色工具" tabindex="-1"><a class="header-anchor" href="#切图吸色工具" aria-hidden="true">#</a> 切图吸色工具</h2>
<p><a href="https://www.snipaste.com/" target="_blank" rel="noopener noreferrer">snipaste<ExternalLinkIcon/></a></p>
<h2 id="一款功能强大的屏幕绘图和屏幕注释软件" tabindex="-1"><a class="header-anchor" href="#一款功能强大的屏幕绘图和屏幕注释软件" aria-hidden="true">#</a> 一款功能强大的屏幕绘图和屏幕注释软件</h2>
<p><a href="http://www.pixelegg.me/vill-q" target="_blank" rel="noopener noreferrer">vill-q<ExternalLinkIcon/></a></p>
<h2 id="alfred" tabindex="-1"><a class="header-anchor" href="#alfred" aria-hidden="true">#</a> <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">Alfred<ExternalLinkIcon/></a></h2>
<blockquote>
<p>Alfred 是一款屡获殊荣的 macOS 应用程序，它通过热键、关键字、文本扩展等提高您的效率。搜索您的 Mac 和网络，并通过自定义操作来控制您的 Mac，从而提高工作效率。</p>
</blockquote>
<h2 id="pap-er" tabindex="-1"><a class="header-anchor" href="#pap-er" aria-hidden="true">#</a> <a href="https://paper.meiyuan.in/index.html" target="_blank" rel="noopener noreferrer">pap.er<ExternalLinkIcon/></a></h2>
<blockquote>
<p>专为 Mac 设计的壁纸应用</p>
</blockquote>
<h2 id="switchhosts" tabindex="-1"><a class="header-anchor" href="#switchhosts" aria-hidden="true">#</a> <a href="https://github.com/oldj/SwitchHosts/releases" target="_blank" rel="noopener noreferrer">SwitchHosts<ExternalLinkIcon/></a></h2>
<blockquote>
<p>SwitchHosts 是一个管理、切换多个 hosts 方案的工具。
它是一个免费开源软件</p>
</blockquote>
<h2 id="dev-sidecar" tabindex="-1"><a class="header-anchor" href="#dev-sidecar" aria-hidden="true">#</a> <a href="https://github.com/docmirror/dev-sidecar" target="_blank" rel="noopener noreferrer">dev-sidecar<ExternalLinkIcon/></a></h2>
<blockquote>
<p>github加速</p>
</blockquote>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<p>1、 开启允许任何来源安装软件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> spctl --master-disable
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、 最新版本max 解决软件<code>已损坏无法打开解决办法</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> xattr -d com.apple.quarantine /Applications/xxxx.app
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>xxxx.app 换成对应软件的名称</p>
</div>
<p>3、Mac系统默认使用bash作为终端，可以使用命令修改默认使用zsh：
chsh -s /bin/zsh
如果想修改回默认 bash，同样使用chsh命令即可：</p>
<p>chsh -s /bin/bash</p>
</template>
