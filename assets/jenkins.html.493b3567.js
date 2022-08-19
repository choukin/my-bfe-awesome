import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as s}from"./app.8e201d3a.js";const a={},d=s(`<h1 id="jenkins" tabindex="-1"><a class="header-anchor" href="#jenkins" aria-hidden="true">#</a> JENKINS</h1><h2 id="\u5B89\u88C5jenkins" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jenkins" aria-hidden="true">#</a> <a href="">\u5B89\u88C5jenkins</a></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum install git -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5jenkins-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jenkins-1" aria-hidden="true">#</a> <a href="https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos" target="_blank" rel="noopener noreferrer">\u5B89\u88C5JENKINS</a></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># Jenkins \u4F9D\u8D56\u4E8E java \u6240\u4EE5\u9700\u8981\u5B89\u88C5 JDK
sudo yum install java-11-openjdk

# \u4E0B\u8F7D Jenkins \u8D44\u6E90
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
# \u83B7\u53D6\u5E76\u5BFC\u5165\u4FE1\u4EFB \u7684\u5305\u5236\u4F5C\u8005\u7684\u79D8\u94A5
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
# \u5347\u7EA7 yum \u6E90\u4E2D\u7684\u6240\u6709\u5305
sudo yum upgrade

# \u5B89\u88C5 Jenkins
sudo yum install jenkins

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E76\u8F93\u5165admin\u8D26\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E76\u8F93\u5165admin\u8D26\u6237\u5BC6\u7801" aria-hidden="true">#</a> \u83B7\u53D6\u5E76\u8F93\u5165admin\u8D26\u6237\u5BC6\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cat /var/lib/jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="systemctl-\u7BA1\u7406jenkins" tabindex="-1"><a class="header-anchor" href="#systemctl-\u7BA1\u7406jenkins" aria-hidden="true">#</a> <code>systemctl</code> \u7BA1\u7406jenkins</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u542F\u52A8 Jenkins \u670D\u52A1
systemctl start jenkins
# \u91CD\u542F Jenkins \u670D\u52A1
systemctl restart jenkins
# \u505C\u6B62 Jenkins \u670D\u52A1
systemctl stop jenkins
# \u67E5\u770B Jenkins \u670D\u52A1\u72B6\u6001
systemctl status jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##\u67E5\u770B\u7AEF\u53E3\u53F7\u662F\u5426\u5F00\u653E\uFF0C\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>netstat -natp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://blog.csdn.net/yiguang_820/article/details/118068951" target="_blank" rel="noopener noreferrer">\u5B89\u88C5\u5378\u8F7D</a></li><li><a href="https://blog.csdn.net/yiguang_820/article/details/118074891?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">\u914D\u7F6E</a></li></ul>`,13),r=[d];function l(t,c){return n(),i("div",null,r)}var h=e(a,[["render",l],["__file","jenkins.html.vue"]]);export{h as default};
