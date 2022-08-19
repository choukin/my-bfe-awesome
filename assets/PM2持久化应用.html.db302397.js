import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a as i}from"./app.8e201d3a.js";const l={},a=i(`<h1 id="\u6301\u4E45\u5316\u5E94\u7528-\u751F\u6210\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316\u5E94\u7528-\u751F\u6210\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> \u6301\u4E45\u5316\u5E94\u7528:\u751F\u6210\u542F\u52A8\u811A\u672C</h1><p>PM2 \u53EF\u4EE5\u751F\u6210\u542F\u52A8\u811A\u672C\u5E76\u5BF9\u5176\u8FDB\u884C\u914D\u7F6E\uFF0C\u8BA9\u5F15\u7528\u8FDB\u7A0B\u5728\u8FD0\u884C\u6216\u673A\u5668\u610F\u5916\u91CD\u542F\u65F6\u4FDD\u6301\u5B8C\u6574\u6027\u3002</p><h2 id="\u751F\u6210\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> \u751F\u6210\u542F\u52A8\u811A\u672C</h2><p>\u53EA\u9700\u8981\u8FD0\u884C <code>pm2 startup</code> \u5C31\u53EF\u4EE5\u81EA\u52A8\u751F\u6210\u5E76\u914D\u7F6E\u542F\u52A8\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> pm2 startup
[PM2] Init System found: launchd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin /Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 startup launchd -u lepu --hp /Users/lepu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E<code>\u590D\u5236\u7C98\u8D34</code>\u5C55\u793A\u51FA\u6765\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> sudo env PATH=$PATH:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin /Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 startup launchd -u lepu --hp /Users/lepu
Password:
[PM2] Init System found: launchd
Platform launchd
Template
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE plist PUBLIC &quot;-//Apple//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;
&lt;plist version=&quot;1.0&quot;&gt;
  &lt;dict&gt;
          &lt;key&gt;Label&lt;/key&gt;
          &lt;string&gt;com.PM2&lt;/string&gt;
          &lt;key&gt;UserName&lt;/key&gt;
          &lt;string&gt;lepu&lt;/string&gt;
    &lt;key&gt;KeepAlive&lt;/key&gt;
    &lt;true/&gt;
          &lt;key&gt;ProgramArguments&lt;/key&gt;
          &lt;array&gt;
                  &lt;string&gt;/bin/sh&lt;/string&gt;
                  &lt;string&gt;-c&lt;/string&gt;
                  &lt;string&gt;/Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 resurrect&lt;/string&gt;
          &lt;/array&gt;
          &lt;key&gt;RunAtLoad&lt;/key&gt;
          &lt;true/&gt;
          &lt;key&gt;OnDemand&lt;/key&gt;
          &lt;false/&gt;
          &lt;key&gt;LaunchOnlyOnce&lt;/key&gt;
          &lt;true/&gt;
          &lt;key&gt;EnvironmentVariables&lt;/key&gt;
    &lt;dict&gt;
      &lt;key&gt;PATH&lt;/key&gt;
      &lt;string&gt;/Users/lepu/.asdf/plugins/nodejs/shims:/Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/bin:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin:/Users/lepu/.asdf/shims:/Users/lepu/.asdf/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/lepu/.cargo/bin:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin&lt;/string&gt;
      &lt;key&gt;PM2_HOME&lt;/key&gt;
      &lt;string&gt;/Users/lepu/.pm2&lt;/string&gt;
    &lt;/dict&gt;
          &lt;key&gt;StandardErrorPath&lt;/key&gt;
          &lt;string&gt;/tmp/com.PM2.err&lt;/string&gt;
          &lt;key&gt;StandardOutPath&lt;/key&gt;
          &lt;string&gt;/tmp/com.PM2.out&lt;/string&gt;
  &lt;/dict&gt;
&lt;/plist&gt;

Target path
/Users/lepu/Library/LaunchAgents/pm2.lepu.plist
Command list
[
  &#39;mkdir -p /Users/lepu/Library/LaunchAgents&#39;,
  &#39;launchctl load -w /Users/lepu/Library/LaunchAgents/pm2.lepu.plist&#39;
]
[PM2] Writing init configuration in /Users/lepu/Library/LaunchAgents/pm2.lepu.plist
[PM2] Making script booting at startup...
[PM2] [-] Executing: mkdir -p /Users/lepu/Library/LaunchAgents...
[PM2] [v] Command successfully executed.
[PM2] [-] Executing: launchctl load -w /Users/lepu/Library/LaunchAgents/pm2.lepu.plist...
Warning: Expecting a LaunchDaemons path since the command was ran as root. Got LaunchAgents instead.
\`launchctl bootstrap\` is a recommended alternative.
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup launchd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728PM2 \u4F1A\u5728\u5F00\u673A\u65F6\u81EA\u52A8\u91CD\u542F\u3002 \u6CE8\u610F\uFF1A\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code>--service-name &lt;name&gt;</code> \u6765\u81EA\u5B9A\u4E49\u670D\u52A1\u540D\u79F0\u3002</p><h2 id="\u4FDD\u5B58\u7CFB\u7EDF\u91CD\u542F\u65F6\u8FD8\u539F\u7684\u5E94\u7528\u7A0B\u5E8F\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u7CFB\u7EDF\u91CD\u542F\u65F6\u8FD8\u539F\u7684\u5E94\u7528\u7A0B\u5E8F\u5217\u8868" aria-hidden="true">#</a> \u4FDD\u5B58\u7CFB\u7EDF\u91CD\u542F\u65F6\u8FD8\u539F\u7684\u5E94\u7528\u7A0B\u5E8F\u5217\u8868</h2><p>\u542F\u52A8\u6240\u6709\u9700\u8981\u7684\u5E94\u7528\u540E\uFF0C\u628A\u4ED6\u4EEC\u4FDD\u5B58\u8D77\u6765\uFF0C\u65B9\u4FBF\u5728\u7CFB\u7EDF\u91CD\u542F\u540E\u91CD\u65B0\u6062\u590D\u8FD9\u4E9B\u5E94\u7528\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u624B\u52A8\u6062\u590D\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6062\u590D\u8FDB\u7A0B" aria-hidden="true">#</a> \u624B\u52A8\u6062\u590D\u8FDB\u7A0B</h2><p>\u624B\u52A8\u6062\u590D\u4F7F\u7528 <code>pm2 save</code> \u4FDD\u5B58\u7684\u8FDB\u7A0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 resurrect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7981\u7528\u7CFB\u7EDF\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u7CFB\u7EDF\u7CFB\u7EDF" aria-hidden="true">#</a> \u7981\u7528\u7CFB\u7EDF\u7CFB\u7EDF</h2><p>\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u6765\u7981\u7528\u6216\u79FB\u9664\u5F53\u524D\u7684\u542F\u52A8\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 unstartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u7EC6\u8282" aria-hidden="true">#</a> \u7EC6\u8282</h1><h2 id="\u66F4\u65B0node-js\u540E\u8981\u66F4\u65B0\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0node-js\u540E\u8981\u66F4\u65B0\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> \u66F4\u65B0Node.js\u540E\u8981\u66F4\u65B0\u542F\u52A8\u811A\u672C</h2><p>\u66F4\u65B0\u672C\u5730\u7684Node,js\u7248\u672C\u65F6\u4E00\u5B9A\u8981\u66F4\u65B0PM2\u7684\u542F\u52A8\u811A\u672C\uFF0C\u8FD9\u6837\u624D\u80FD\u8FD0\u884C\u5B89\u88C5\u7684Node.js\u4E8C\u8FDB\u5236\u3002</p><p>\u9996\u5148\u4F7F\u7528\u4E0B\u9762\u7684\u811A\u672C\u7981\u7528/\u79FB\u9664\u5F53\u524D\u7684\u542F\u52A8\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 upstartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u91CD\u65B0\u751F\u6210\u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 resartup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7528\u6237\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6743\u9650" aria-hidden="true">#</a> \u7528\u6237\u6743\u9650</h2><p>\u5047\u5982\u4F60\u60F3\u7528\u53E6\u4E00\u4E2A\u7528\u6237\u5B89\u88C5\u542F\u52A8\u811A\u672C</p><p>\u53EA\u8981\u4FEE\u6539<code>-u &lt;username&gt;</code> \u548C <code>--hp &lt;user_home&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 startup ubuntu -u www -hp /home/ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7CFB\u7EDF" aria-hidden="true">#</a> \u8BBE\u7F6E\u7CFB\u7EDF</h2><p>\u5982\u679C\u9700\u8981\u53EF\u4EE5\u6307\u5B9A\u4F7F\u7528\u7684\u64CD\u4F5C\u7CFB\u7EDF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 startup [ubuntu | ubuntu14 | ubuntu12 | centos | centos6 | arch | oracle | amazon | macos | darwin | freebsd | systemd | systemv | upstart | launchd | rcd | openrc]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7CFB\u7EDF\u5B89\u88C5\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u5B89\u88C5\u68C0\u67E5" aria-hidden="true">#</a> \u7CFB\u7EDF\u5B89\u88C5\u68C0\u67E5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u6DFB\u52A0\u4E86pm2-&lt;USER&gt;
systemctl list-units
# \u68C0\u67E5\u65E5\u5FD7
journalctl -u pm2-&lt;USER&gt;
# \u67E5\u770B\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6 
systemctal cat pm2-&lt;USER&gt;
# \u5206\u6790\u5B89\u88C5
systemed-analyze plot &gt; output.svg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60F3\u8981\u7B49\u8FD0\u884CPM2\u673A\u5668\u5728\u7EBF\u540E\u5728\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>[unit]
Wants=network-online.target
After=network.target network-online.target

[....]

[Install]
Wantedby=multi-user.target network-online.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),d=[a];function t(r,u){return n(),s("div",null,d)}var m=e(l,[["render",t],["__file","PM2\u6301\u4E45\u5316\u5E94\u7528.html.vue"]]);export{m as default};
