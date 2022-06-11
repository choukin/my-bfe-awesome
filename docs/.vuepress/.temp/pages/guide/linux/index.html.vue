<template><h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> Linux常用命令</h1>
<h2 id="目录基础操作" tabindex="-1"><a class="header-anchor" href="#目录基础操作" aria-hidden="true">#</a> 目录基础操作</h2>
<ul>
<li>
<p>cd 切换目录</p>
</li>
<li>
<p>cd &lt;目录名&gt; （绝对路径/相对目录）.. 上一层  ～当前用户目录</p>
</li>
<li>
<p>ls 列出目录</p>
<ul>
<li>-a: all  包括隐藏目录</li>
<li>-l： 列出所有文件</li>
</ul>
</li>
<li>
<p>mkdir &lt;目录名&gt; 创建目录</p>
<ul>
<li>-p: 递归创建目录</li>
</ul>
</li>
<li>
<p>rmdir &lt;目录名&gt;    仅能删除空文件</p>
<ul>
<li>-p 递归删除</li>
</ul>
</li>
<li>
<p>pwd 查看当前目录所在绝对路径</p>
</li>
<li>
<p>cp &lt;原来的目录&gt; &lt;新目录&gt; 复制文件或者目录</p>
</li>
<li>
<p>rm 移除目录或者目录</p>
<ul>
<li>-f 忽略不存在的文件，不会出现警告，强制删除</li>
<li>-r 递归删除目录</li>
<li>-i 互动,删除询问是否删除</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">rm</span> -rf / <span class="token comment"># 删机器跑路</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>mv 移动目录或文件 / 重命名</p>
<ul>
<li>-f 强制移动</li>
<li>-u 替换已更新过的文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重命名</span>
  <span class="token function">mv</span> a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="文件基本属性-十个字母" tabindex="-1"><a class="header-anchor" href="#文件基本属性-十个字母" aria-hidden="true">#</a> 文件基本属性 十个字母</h2>
<p><img src="@source/guide/linux/image/fileprops.png" alt="img"></p>
<ul>
<li>第一个字符标识
<ul>
<li><code>d</code> :目录</li>
<li><code>-</code> ：文件</li>
<li><code>l</code> : 链接文件</li>
<li><code>b</code> : 装置文件里的可供存储的设备接口</li>
<li><code>c</code> : 装置文件里面的串行端口设备，如键盘鼠标等</li>
</ul>
</li>
</ul>
</li>
<li>
<p>权限标识</p>
<ul>
<li>r 可读 read</li>
<li>w 可写 write
<ul>
<li><code>-</code> 不可写</li>
</ul>
</li>
<li>x 可执行 execute</li>
</ul>
<p>文件属性由左到右</p>
<table>
<thead>
<tr>
<th style="text-align:center">文件类型 <br>0</th>
<th style="text-align:center">owner属主权限<br>1 2 3</th>
<th style="text-align:center">group属组权限<br>4 5 6</th>
<th style="text-align:center">other其他用户<br> 7 8 9</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">d<br>文件目录</td>
<td style="text-align:center">rwx<br> 读写执行</td>
<td style="text-align:center">rwx<br> 读写执行</td>
<td style="text-align:center">rwx<br> 读写执行</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>1 4 7 位表示读</p>
</li>
<li>
<p>2 5 8 位表示写</p>
</li>
</ul>
<h3 id="修改文件属性" tabindex="-1"><a class="header-anchor" href="#修改文件属性" aria-hidden="true">#</a> 修改文件属性</h3>
<p>1、 chgrp 更改文件属组</p>
<blockquote>
<p>chgrp [-R] 属主名 文件名</p>
</blockquote>
<p>-R 递归更改文件属组，</p>
<p>2、 chown 更改文件属主 也可以同时更改文件属组</p>
<blockquote>
<p>chown [-R] 属主名 文件名<br>
chown [-R] 属主名：属组名 文件名</p>
</blockquote>
<p>3、 chmod 更改文件9个属性</p>
<blockquote>
<p>chmod [-R] xyz 文件夹或者目录</p>
</blockquote>
<p>linux 文件属性两种设置方法</p>
<ul>
<li>数字 常用</li>
<li>符号</li>
</ul>
<p>owner group others
r:4 w:2 x:1</p>
<p>可读可写不可执行 rw- 6
可读可写可执行 rwx 7</p>
<p>例如： 给每种身份（owner/group/others）各自三种权限(r/w/x)分数累加
如果权限是  [-rwxrwx---]</p>
<ul>
<li>owner = rwx = 4+2+1 = 7</li>
<li>group = rwx = 4+2+1 = 7</li>
<li>others = --- = 0+0+0 = 0</li>
</ul>
<blockquote>
<p>chmod 770 filename</p>
</blockquote>
<h2 id="文件内容查看" tabindex="-1"><a class="header-anchor" href="#文件内容查看" aria-hidden="true">#</a> 文件内容查看</h2>
<ul>
<li>
<p>cat  从第一行开始显示文件内容</p>
</li>
<li>
<p>tac  从最后一行开始显示文件内容</p>
</li>
<li>
<p>nl  输出行号查看</p>
</li>
<li>
<p>more 分页查看 :f 行号</p>
</li>
<li>
<p>less 与more类似，可以向前翻页 推出 q</p>
</li>
<li>
<p>head 只看头几行</p>
</li>
<li>
<p>tail 只看尾巴行</p>
</li>
<li>
<p>帮助命令 main [命令]</p>
</li>
<li>
<p>CentOS7 网络配置目录 cd /etc/syscojnfig/network-scripts</p>
<ul>
<li>ifconfig 命令查看网络配置</li>
</ul>
<h2 id="软连接-硬链接" tabindex="-1"><a class="header-anchor" href="#软连接-硬链接" aria-hidden="true">#</a> 软连接 硬链接</h2>
<ul>
<li>
<p>硬链接
允许一个文件拥有多个路径</p>
</li>
<li>
<p>软连接/符号链接</p>
<p>类似windows下的快捷方式，删除源文件，快捷方式就无法访问</p>
</li>
</ul>
</li>
<li>
<p>ln 创建链接</p>
<blockquote>
<p>ln f f2 # 创建硬链接 <br/>
ln -s f f3 # 创建软连接</p>
</blockquote>
</li>
<li>
<p>touch 创建文件命令</p>
</li>
<li>
<p>echo 出入字符串</p>
<blockquote>
<p>echo &quot;admin test&quot; &gt; f</p>
</blockquote>
</li>
</ul>
<h2 id="vim-编辑器" tabindex="-1"><a class="header-anchor" href="#vim-编辑器" aria-hidden="true">#</a> Vim 编辑器</h2>
<h3 id="三种模式" tabindex="-1"><a class="header-anchor" href="#三种模式" aria-hidden="true">#</a> 三种模式</h3>
<ul>
<li>命令模式（Command mode）</li>
<li>输入模式（Insert mode）</li>
<li>底线命令模式（Last line mode）</li>
</ul>
<h4 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h4>
<ul>
<li>i 切换到输入模式，以输入字符</li>
<li>x 删除光标所在字符</li>
<li>: 退出编辑模式后切换到底线命令模式</li>
</ul>
<table>
<thead>
<tr>
<th>操作</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>删除</td>
<td>数字 dd</td>
</tr>
<tr>
<td>复制整行</td>
<td>数字yy</td>
</tr>
<tr>
<td>粘贴</td>
<td>p</td>
</tr>
<tr>
<td>剪切</td>
<td>dd</td>
</tr>
<tr>
<td>删除光标所在位置</td>
<td>x</td>
</tr>
<tr>
<td>从光标删除行尾</td>
<td>D</td>
</tr>
<tr>
<td>撤销</td>
<td>u</td>
</tr>
<tr>
<td>还原撤销</td>
<td>ctrl+r</td>
</tr>
<tr>
<td>替换</td>
<td>r</td>
</tr>
<tr>
<td>快速定位到某行首</td>
<td>[数字]gg</td>
</tr>
<tr>
<td>下一页</td>
<td>ctrl+f</td>
</tr>
<tr>
<td>上一页</td>
<td>ctrl+b</td>
</tr>
<tr>
<td>下半页</td>
<td>ctrl+d</td>
</tr>
<tr>
<td>上半页</td>
<td>ctrl+u</td>
</tr>
<tr>
<td>行首</td>
<td>0/home</td>
</tr>
<tr>
<td>向后切换光标字符数</td>
<td>数字 space</td>
</tr>
<tr>
<td>切到屏幕首行行首</td>
<td>H</td>
</tr>
<tr>
<td>切到屏幕中央行首</td>
<td>M</td>
</tr>
<tr>
<td>切到屏幕最下行首</td>
<td>L</td>
</tr>
<tr>
<td>切到文件末尾行首</td>
<td>G</td>
</tr>
<tr>
<td>光标下移n</td>
<td>n enter</td>
</tr>
<tr>
<td>类似gg</td>
<td>nG</td>
</tr>
<tr>
<td>查找光标后面字符串</td>
<td>/ string</td>
</tr>
<tr>
<td>查找光标前面字符串面</td>
<td>？ string</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>打开多个文件
vim -o/O ./a.txt ./b.txt
切换焦点 ctrl + ww</p>
<h4 id="输入模式" tabindex="-1"><a class="header-anchor" href="#输入模式" aria-hidden="true">#</a> 输入模式</h4>
<ul>
<li>方向键</li>
<li>home/end</li>
<li>page up/page down</li>
<li>insert</li>
<li>esc  切换到命令模式</li>
</ul>
<h4 id="底线命令模式" tabindex="-1"><a class="header-anchor" href="#底线命令模式" aria-hidden="true">#</a> 底线命令模式</h4>
<ul>
<li>: 进入底线命令模式</li>
<li>q 退出</li>
<li>w 保存</li>
<li>a 关闭所有</li>
<li>！ 强制</li>
<li>set nu 显示行号</li>
<li>set nonu 不显示行号</li>
</ul>
<h2 id="账号管理" tabindex="-1"><a class="header-anchor" href="#账号管理" aria-hidden="true">#</a> 账号管理</h2>
<ul>
<li>
<p>useradd -option 用户名</p>
<ul>
<li>-d 指定用户主目录</li>
<li>-m 自动创建用户目录</li>
<li>-c 指定注释</li>
<li>-g 指定用户组</li>
<li>-G 指定用户所属附加组</li>
<li>-s 指定用户的登录shell</li>
<li>-u 用户号， 同时使用-o 用户标识可以重复</li>
</ul>
</li>
<li>
<p>userdel -r  用户名</p>
<ul>
<li>-r 删除用户主目录</li>
</ul>
</li>
<li>
<p>usermod -option 用户名</p>
<ul>
<li>-c</li>
<li>-d</li>
<li>-m</li>
<li>-g</li>
<li>-G</li>
<li>-s</li>
<li>-u</li>
</ul>
</li>
<li>
<p>切换用户</p>
<ul>
<li>su 用户名</li>
<li>sudo su: 普通用户切换到root</li>
<li>exit logout ctrl+d 退回到原来用户</li>
<li>切换用户时，如果想在切换用户后使用新的工作环境，可以在su 和username 之间加 - : su -root</li>
<li><code>¥</code> 表示普通用户</li>
<li><code>#</code> 表示root用户</li>
</ul>
</li>
<li>
<p>查看主机名称</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">hostname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>修改/设置用户密码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">passwd</span> <span class="token operator">&lt;</span>username<span class="token operator">></span> <span class="token comment"># 没有用户名就是修改自己的秘密 带用户名就是修改指定用户密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>查看用户</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">cat</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>用户名:口令:用户标识：组标识：注释性描述：主目录：登录shell</p>
</li>
<li>
<p>查看加密的密码</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">cat</span> /etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>登录名：加密口令：最后一次修改时间：最小时间间隔：警告时间：不活动时间（天）：失效时间（天）：标志</p>
</li>
<li>
<p>查看组</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>   <span class="token function">cat</span> /etc/group
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>锁定账户,锁定后不能登录<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">passwd</span> -l guest <span class="token comment"># 锁定</span>
  <span class="token function">passwd</span> -d guest <span class="token comment"># 清空密码也不能登录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
</ul>
<h2 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h2>
<ul>
<li>创建用户组</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">groupadd</span> <span class="token operator">&lt;</span>newgroupname<span class="token operator">></span> -option
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><pre><code> - `-g` 指定id
</code></pre>
<ul>
<li>
<p>删除用户组 groupdel</p>
</li>
<li>
<p>修改用户组权限信息</p>
</li>
<li>
<p>groupmod -g [id] -n newname  oldname</p>
</li>
<li>
<p>切换用户组</p>
<ul>
<li>newgroup groupname</li>
</ul>
</li>
</ul>
<h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2>
<ul>
<li>
<p>df 列出文件系统整体磁盘使用量</p>
<ul>
<li>-h G/M 单位</li>
</ul>
</li>
<li>
<p>du 检查磁盘使用量 一般会进入指定目录查看</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">du</span> -sm /*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>mount 挂载</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">mount</span> /dev/someupan /mnt/kuangshen
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>unmount 卸载</p>
<ul>
<li>-f 强制卸载</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  unmount -f <span class="token punctuation">[</span>挂载位置<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h2>
<ul>
<li>Linux 中每个程序都有自己的进程，每个进程都有一个id号</li>
<li>每个进程都会有一个父进程</li>
<li>进程存在的两种方式 前台 后台运行</li>
<li>一般的服务都是后台运行，基本的程序都是前台运行的</li>
</ul>
<h3 id="ps-查看当前系统中正在执行的各种进程信息" tabindex="-1"><a class="header-anchor" href="#ps-查看当前系统中正在执行的各种进程信息" aria-hidden="true">#</a> ps 查看当前系统中正在执行的各种进程信息</h3>
<ul>
<li>
<p>ps</p>
<ul>
<li>-a 显示当前终端运行的所有的进程信息</li>
<li>-u 以用户的信息显示进程</li>
<li>-x 显示后台运行进程的参数</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token comment"># 查看所有进程</span>
 <span class="token function">ps</span> -aux <span class="token operator">|</span><span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>｜ 管道命令</li>
<li>grep 查找文件中符合调教的字符串</li>
</ul>
</li>
<li>
<p>ps -ef|grep mysql 查看父进程信息</p>
</li>
<li>
<p>pstree -pu 进程树展示</p>
<ul>
<li>p 显示父id</li>
<li>u 显示用户组</li>
</ul>
</li>
<li>
<p>杀掉进程 kill -9 【进程id】</p>
</li>
</ul>
<h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2>
<ul>
<li>rpm -ivh [包名]</li>
</ul>
<h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2>
<p><code>/etc/profile</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/lib/jvm/jdk1.8.0_192
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MONGODB_HOME</span><span class="token operator">=</span>/home/soft/mongodb-linux-x86_64-rhel70-5.0.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/home/soft/node-v12.18.1-linux-x64
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/home/soft/apache-maven-3.5.4
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JAVA_HOME</span>/jre/lib/rt.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$MONGODB_HOME</span>/bin:<span class="token variable">$NODE_HOME</span>/bin:<span class="token variable">$M2_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RUN_AS_USER</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li><code>source /etc/profile</code> 让配置生效</li>
</ul>
<h2 id="解压安装" tabindex="-1"><a class="header-anchor" href="#解压安装" aria-hidden="true">#</a> 解压安装</h2>
<ul>
<li>tar -zxf ***.tar.gz</li>
</ul>
<h2 id="yum-在线安装" tabindex="-1"><a class="header-anchor" href="#yum-在线安装" aria-hidden="true">#</a> yum 在线安装</h2>
<h2 id="查看系统版本" tabindex="-1"><a class="header-anchor" href="#查看系统版本" aria-hidden="true">#</a> 查看系统版本</h2>
<p>cat /etc/redhat-release</p>
<h2 id="配置云服务器免密码登陆" tabindex="-1"><a class="header-anchor" href="#配置云服务器免密码登陆" aria-hidden="true">#</a> 配置云服务器免密码登陆</h2>
<ul>
<li>1、 本地生产ssk publickey</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -f <span class="token punctuation">[</span>.ssh/保存的文件<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>2.两种方式把生成的公钥保存到云服务器上
<ul>
<li>手动复制到 <code>~/.ssh/authorized_keys</code></li>
<li>使用 <a href="http://lnmp.ailinux.net/ssh-copy-id" target="_blank" rel="noopener noreferrer"><code>ssh-copy-id</code><ExternalLinkIcon/></a></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-copy-id <span class="token punctuation">[</span>-i <span class="token punctuation">[</span>identity_file<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>user@<span class="token punctuation">]</span>machine
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
</ul>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<ul>
<li>history 查看历史使用过的命令</li>
<li>reset 初始化终端</li>
<li>clear 终端清屏</li>
</ul>
</template>
