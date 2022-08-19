import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8e201d3a.js";var a="/my-bfe-awesome/assets/pm2list.a45545d7.png",d="/my-bfe-awesome/assets/pm2monit.7f2a03c8.png",l="/my-bfe-awesome/assets/pm2io.93d6e710.gif",r="/my-bfe-awesome/assets/pm2clusteri0.2ceb05ea.png";const v={},c=s(`<p>PM2 \u662F\u4E00\u4E2A\u5B88\u62A4\u8FDB\u7A0B\u7684\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5168\u5929\u5019\u7BA1\u7406\u7A0B\u5E8F\u4EE5\u53CA\u4FDD\u6301\u5E94\u7528\u7A0B\u5E8F\u5728\u7EBF\u3002\u4E0A\u624BPM2 \u975E\u5E38\u7B80\u5355\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>NPM</code>\u5B89\u88C5\u5B83\u63D0\u4F9B\u7684CLI \u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u53EF\u4EE5\u662F\u54DF\u54E6\u90A3\u4E2ANPM \u6216 Yarn \u5B89\u88C5PM2\u7684\u6700\u65B0\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install pm2Latest -g
# or
yarn global add pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7<a href="https://yoember.com/nodejs/the-best-way-to-install-node-js-with-yarn/" target="_blank" rel="noopener noreferrer">NVM</a> \u6216\u8005 <a href="https://asdf-vm.com/" target="_blank" rel="noopener noreferrer">asdf</a>\u6765\u5B89\u88C5Node \u548C NPM.</p><h2 id="\u542F\u52A8\u4E00\u4E2A\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u4E00\u4E2A\u5E94\u7528" aria-hidden="true">#</a> \u542F\u52A8\u4E00\u4E2A\u5E94\u7528</h2><p>\u542F\u52A8\uFF0C\u5B88\u62A4\uFF0C\u76D1\u63A7\u4E00\u4E2A\u5E94\u7528\u7684\u6700\u7B80\u5355\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u542F\u52A8\u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start bashscript.sh
pm2 start python-app.py --watch
pm2 start binary-file -- --port 1520

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u4EE4\u884C\u5DE5\u5177\u7684\u53EF\u9009\u53C2\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6307\u5B9A\u4E00\u4E2A\u5E94\u7528\u540D\u79F0
--name &lt;app_name&gt;

# \u76D1\u542C\u5230\u6587\u4EF6\u53D8\u5316\u91CD\u542F\u5E94\u7528
--watch 

# \u8BBE\u7F6E\u5E94\u7528\u7A0B\u5E8F\u91CD\u65B0\u52A0\u8F7D\u65F6\u7684\u5185\u5B58\u9600\u503C
--max-memory-reset &lt;200MB&gt;

# \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6
--log &lt;log_path&gt;

# \u8BBE\u7F6E\u989D\u5916\u7684\u53C2\u6570\u7ED9\u5E94\u7528
-- arg1 arg2 arg2

# \u81EA\u52A8\u91CD\u542F\u95F4\u7684\u5EF6\u65F6
--restart-delay &lt;delay in ms&gt;

#\u5F00\u542F\u65E5\u5FD7\u524D\u7F00\u65F6\u95F4
--time

# \u4E0D\u81EA\u52A8\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F
--no-autorestart

#\u8BBE\u7F6E\u5F3A\u5236\u91CD\u542F\u7684corn\u8868\u8FBE\u5F0F
--cron &lt;cron_pattern&gt;

# \u524D\u53F0\u65B9\u5F0F\u542F\u52A8\u5E94\u7528
--no-daemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u5F88\u591A\u7528\u6765\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u7684\u9009\u9879\u3002\u53EF\u4EE5\u6839\u5177\u4F53\u60C5\u51B5\u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u4F7F\u7528\u8FD9\u6B21\u53C2\u6570\u3002</p><h2 id="\u7BA1\u7406\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u8FDB\u7A0B" aria-hidden="true">#</a> \u7BA1\u7406\u8FDB\u7A0B</h2><p>\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u7B80\u5355\u7684\u547D\u4EE4\u6765\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 restart app_name

pm2 reload app_name

pm2 stop app_name

pm2 delete app_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>app_name</code>\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E0B\u9762\u7684\u503C</p><ul><li><code>all</code> \u4EE3\u8868pm2 \u7BA1\u7406\u7684\u6240\u6709\u5E94\u7528</li><li><code>id</code> \u4EE3\u8868\u67D0\u4E2A\u5E94\u7528\u7684\u8FDB\u7A0Bid</li></ul><h3 id="\u8FD9\u91CC\u9700\u8981\u7B80\u5355\u89E3\u91CA\u4E0B-restart-\u548Creload\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u91CC\u9700\u8981\u7B80\u5355\u89E3\u91CA\u4E0B-restart-\u548Creload\u7684\u533A\u522B" aria-hidden="true">#</a> \u8FD9\u91CC\u9700\u8981\u7B80\u5355\u89E3\u91CA\u4E0B <code>restart</code> \u548C<code>reload</code>\u7684\u533A\u522B</h3><ul><li><code>restart</code> \u76F4\u63A5\u91CD\u542F\u5E94\u7528\u4F1A\u628A\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u5B58\u5728\u7684\u94FE\u63A5\u76F4\u63A5\u65AD\u5F00\uFF0C\u6BD4\u8F83\u7C97\u66B4\u3002</li><li><code>reload</code> \u5C31\u662F\u5927\u5BB6\u5E38\u542C\u5230\u7684\u70ED\u542F\u52A8\uFF0C\u4E0D\u4F1A\u8BA9\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u76F4\u63A5\u65AD\u5F00\u8FDE\u63A5\uFF0C\u800C\u662F\u5148\u8BA9\u6570\u636E\u4F20\u8F93\u5B8C\u6210\uFF0C\u518D\u65AD\u5F00\u8FDE\u63A5\u3002</li></ul><h2 id="\u67E5\u770B\u72B6\u6001\u3001\u65E5\u5FD7\u3001\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u72B6\u6001\u3001\u65E5\u5FD7\u3001\u6307\u6807" aria-hidden="true">#</a> \u67E5\u770B\u72B6\u6001\u3001\u65E5\u5FD7\u3001\u6307\u6807</h2><p>\u5F53\u4F60\u4F7F\u7528pm2\u542F\u52A8\u5E94\u7528\u540E\u53EF\u4EE5\u67E5\u770B\u5E94\u7528\u7A0B\u5E8F\u7684\u72B6\u6001\uFF0C\u65E5\u5FD7\uFF0C\u6307\u6807\uFF0C\u751A\u81F3\u548C\u53EF\u4EE5\u5728<a href="https://pm2.io/" target="_blank" rel="noopener noreferrer">pm2.io</a>\u7F51\u7AD9\u4E0A\u67E5\u770B\u5728\u7EBF\u7684\u4EEA\u8868\u76D8\u3002</p><h3 id="\u67E5\u770B\u6240\u6709\u88AB\u7BA1\u7406\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u88AB\u7BA1\u7406\u7684\u5E94\u7528" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u88AB\u7BA1\u7406\u7684\u5E94\u7528</h3><p>\u5217\u51FA\u6240\u6709\u901A\u8FC7PM2\u7BA1\u7406\u7684\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 [list|ls|status]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+a+`" alt=""></p><h3 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h3><p>\u8981\u5B9E\u65F6\u67E5\u770B\u65E5\u5FD7\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8981\u6316\u6398\u65E7\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u8981\u6316\u6398\u65E7\u65E5\u5FD7" aria-hidden="true">#</a> \u8981\u6316\u6398\u65E7\u65E5\u5FD7</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 logs --lines 200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u57FA\u4E8E\u7EC8\u7AEF\u7684\u4EEA\u8868\u677F" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u7EC8\u7AEF\u7684\u4EEA\u8868\u677F" aria-hidden="true">#</a> \u57FA\u4E8E\u7EC8\u7AEF\u7684\u4EEA\u8868\u677F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt=""></p><h3 id="pm2-io-\u76D1\u6D4B\u548C\u8BCA\u65AD\u7684web\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#pm2-io-\u76D1\u6D4B\u548C\u8BCA\u65AD\u7684web\u754C\u9762" aria-hidden="true">#</a> pm2.io:\u76D1\u6D4B\u548C\u8BCA\u65AD\u7684Web\u754C\u9762</h3><p>\u57FA\u4E8EWeb\u7684\u4EEA\u8868\u677F\uFF0C\u8DE8\u670D\u52A1\u5668\u7684\u8BCA\u65AD\u7CFB\u7EDF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><h2 id="\u96C6\u7FA4\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u6A21\u5F0F" aria-hidden="true">#</a> \u96C6\u7FA4\u6A21\u5F0F</h2><p>\u5BF9\u4E8ENode.js\u5E94\u7528\u7A0B\u5E8F\uFF0CPM2 \u5185\u7F6E\u4E86\u81EA\u52A8\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u53EF\u4EE5\u5728\u6D3E\u751F\u51FA\u6765\u7684\u8FDB\u7A0B\u95F4\u5171\u4EAB\u6240\u6709\u7684HTTP[s]/Websocket/TCP/UDP \u8FDE\u63A5\u3002 \u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u4EE5\u96C6\u7FA4\u6A21\u5F0F\u542F\u52A8\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js -i max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u751F\u6001\u7CFB\u7EDF\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u751F\u6001\u7CFB\u7EDF\u6587\u4EF6" aria-hidden="true">#</a> \u751F\u6001\u7CFB\u7EDF\u6587\u4EF6</h2><p>\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u53EB\u505A\u751F\u6001\u7CFB\u7EDF\u6587\u4EF6\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u7BA1\u7406\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F\u3002 \u751F\u6210\u914D\u7F6E\u6587\u4EF6\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 ecosystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u751F\u6210\u4E00\u4E2A <code>ecosystem.config.js</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>module.exports={
 apps:[{
   name:&quot;app&quot;,
   script:&quot;./app.js&quot;,
   env:{
     NODE_ENV:&quot;development&quot;,
   },
   env_production:{
   NODE_ENV:&quot;production&quot;,
   }
 },{
   name:&#39;worker&#39;,
   script:&#39;worker.js&#39;
 }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u901A\u8FC7\u7B80\u5355\u7684\u547D\u4EE4\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> pm2 start ecosystem.config.js  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u542F\u52A8\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u542F\u52A8\u811A\u672C" aria-hidden="true">#</a> \u8BBE\u7F6E\u542F\u52A8\u811A\u672C</h2><p>\u901A\u8FC7\u91CD\u542FPM2\u5728\u670D\u52A1\u5668\u4E0A\u7BA1\u7406\u8FDB\u7A0B\u7684\u542F\u52A8\u548C\u91CD\u542F\u975E\u5E38\u91CD\u8981\u3002\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EA\u9700\u8981\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u6765\u6FC0\u6D3B\u53EF\u7528\u7684\u542F\u52A8\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u547D\u4EE4\u51BB\u7ED3\u81EA\u52A8\u751F\u6210\u7684\u8FDB\u7A0B\u5217\u8868\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5185\u5BB9\u53D8\u66F4\u81EA\u52A8\u91CD\u542F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9\u53D8\u66F4\u81EA\u52A8\u91CD\u542F\u5E94\u7528" aria-hidden="true">#</a> \u5185\u5BB9\u53D8\u66F4\u81EA\u52A8\u91CD\u542F\u5E94\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cd /path/to/my/sapp
pm2 start env.js --watch --ignore-watch=&quot;node_modules&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4F1A\u5728\u5F53\u524D\u6587\u4EF6\u5939\u4EE5\u53CA\u6240\u6709\u5B50\u6587\u4EF6\u5939\u4E2D\u4EFB\u4F55\u6587\u4EF6\u53D8\u66F4\u65F6\u91CD\u542F\u5E94\u7528\uFF0C\u901A\u8FC7<code>--ignore-watch=&quot;node_modules&quot;</code> \u6765\u5FFD\u7565 <code>node_modules</code> \u53D8\u66F4\u3002</p><p>\u7136\u540E\u53EF\u4EE5\u4F7F\u7528<code>pm2 logs</code> \u6765\u67E5\u770B\u91CD\u542F\u540E\u7684\u5E94\u7528\u65E5\u5FD7\u3002</p><h2 id="\u66F4\u65B0pm2" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0pm2" aria-hidden="true">#</a> \u66F4\u65B0PM2</h2><p>\u6211\u4EEC\u505A\u7684\u5F88\u7B80\u5355\uFF0C\u5728\u7248\u672C\u95F4\u6CA1\u6709\u7834\u574F\u6027\u7684\u53D8\u5316\uFF0C\u4E14\u64CD\u4F5C\u7B80\u5355\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install pm2@latest -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u66F4\u65B0\u5DF2\u5B89\u88C5\u7684PM2:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5907\u5FD8\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5907\u5FD8\u5F55" aria-hidden="true">#</a> \u5907\u5FD8\u5F55</h2><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u503C\u5F97\u4E86\u89E3\u7684\u547D\u4EE4\u3002\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5E94\u7528\u6216\u8005\u4F60\u5F53\u524D\u5F00\u53D1\u7684web\u5E94\u7528\u4E2D\u4F7F\u7528\u5B83\u4EEC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
## fork \u6A21\u5F0F
pm2 start app.js --name mu-api # \u8FDB\u7A0B\u540D\u79F0

# \u96C6\u7FA4\u6A21\u5F0F
pm2 start app.js -i 0 # \u5C06\u4F7F\u7528LB\u542F\u52A8\u6700\u5927\u8FDB\u7A0B\uFF0C\u5177\u4F53\u503C\u53D6\u51B3\u4E8E\u53EF\u7528CPU
pm2 start app.js -i max # \u548C\u4E0A\u9762\u4E00\u6837\uFF0C\u5DF2\u5F03\u7528
pm2 scale app +3 # \u5C06\u5E94\u7528\u6269\u5C553\u4E2A\u8FDB\u7A0B
pm2 scale app 2  # \u6269\u5C55\u6216\u7F29\u5C0F\u5230 2\u4E2A\u8FDB\u7A0B

# \u67E5\u770B\u5217\u8868

pm2 list          # \u5C55\u793A\u6240\u6709\u8FDB\u7A0B\u7684\u72B6\u6001

pm2 jlist         # \u4EE5json\u683C\u5F0F\u5C55\u793A\u8FDB\u7A0B\u72B6\u6001

pm2 prettylist   #  \u7528\u597D\u770B\u7684JOSN\u683C\u5F0F\u6253\u5370\u8FDB\u7A0B\u4FE1\u606F

pm2 describe 0   # \u5C55\u793A\u67D0\u4E2A\u8FDB\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F

pm2 monit        # \u76D1\u63A7\u6240\u6709\u8FDB\u7A0B

# \u65E5\u5FD7

pm2 logs [--raw] # \u4EE5\u6570\u636E\u6D41\u7684\u65B9\u5F0F\u67E5\u770B\u6240\u6709\u8FDB\u7A0B\u65E5\u5FD7
 
pm2 flush        # \u6E05\u7A7A\u6240\u6709\u65E5\u5FD7\u6587\u4EF6

pm2 reloadLogs   # \u91CD\u65B0\u52A0\u8F7D\u6240\u6709\u65E5\u5FD7

# actions

pm2 stop all    # \u505C\u6B62\u6240\u6709\u8FDB\u7A0B

pm2 restart all # \u91CD\u542F\u6240\u6709\u8FDB\u7A0B

pm2 reload all # \u70ED\u91CD\u542F\u6240\u6709\u8FDB\u7A0B\uFF08\u5BF9\u4E8E\u5728\u7EBF\u7684\u5E94\u7528\uFF09

pm2 stop 0 # \u505C\u6B62\u6307\u5B9A\u8FDB\u7A0B

pm2 restart 0 # \u91CD\u542F\u6307\u5B9A\u8FDB\u7A0B

pm2 delete 0 # \u5220\u9664\u6307\u5B9A\u8FDB\u7A0B

pm2 delete all # \u5220\u9664\u6240\u6709\u8FDB\u7A0B


# \u6307\u6807

pm2 reset &lt;name|id|all&gt; # \u91CD\u7F6E\u5E94\u7528\u5143\u6570\u636E

pm2 update/updatePM2   # \u66F4\u65B0\u5185\u5B58\u4E2D\u7684PM2

pm2 ping              # ping pm2 \u8FDB\u7A0B\u5B88\u62A4\uFF0C\u5982\u679C\u6CA1\u6709\u542F\u52A8\u5C31\u4F1A\u52A0\u8F7D

pm2 sendSignal SIGUSR2 my-app # \u7ED9\u6307\u5B9A\u8FDB\u7A0B\u53D1\u9001\u7CFB\u7EDF\u4FE1\u53F7

pm2 start app.js --no-daemon # \u975E\u5B88\u62A4\u6A21\u5F0F\u8FD0\u884C\uFF0C

pm2 start app.js --no-vizion  # \u4F7F\u7528\u6CA1\u6709\u7248\u672C\u63A7\u5236\u6A21\u5F0F\u542F\u52A8\u5E94\u7528

pm2 start app.js --no-autorestart # \u542F\u52A8\u4E00\u4E2A\u4E0D\u4F1A\u81EA\u52A8\u91CD\u542F\u7684\u5E94\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u7528\u7684M1\u82AF\u72478\u68388\u7EBF\u7A0B <code>pm2 start src/servers/server.js -i 0</code></p><p><img src="`+r+'" alt="pm2 start src/servers/server.js -i 0"></p><h3 id="\u8981\u4E86\u89E3\u66F4\u591A\u76F8\u5173\u547D\u4EE4\u53EF\u4EE5\u901A\u8FC7pm2-h\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u8981\u4E86\u89E3\u66F4\u591A\u76F8\u5173\u547D\u4EE4\u53EF\u4EE5\u901A\u8FC7pm2-h\u67E5\u770B" aria-hidden="true">#</a> \u8981\u4E86\u89E3\u66F4\u591A\u76F8\u5173\u547D\u4EE4\u53EF\u4EE5\u901A\u8FC7<code>pm2 -h</code>\u67E5\u770B</h3>',68),m=[c];function u(p,t){return i(),n("div",null,m)}var h=e(v,[["render",u],["__file","pm2\u5FEB\u901F\u4E0A\u624B.html.vue"]]);export{h as default};
