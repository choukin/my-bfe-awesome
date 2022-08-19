import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as t,a as i}from"./app.8e201d3a.js";const n={},a=i(`<h1 id="\u5E94\u7528\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u65E5\u5FD7" aria-hidden="true">#</a> \u5E94\u7528\u65E5\u5FD7</h1><p>\u4F7F\u7528PM2\u542F\u52A8\u5E94\u7528\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u67E5\u9605\u548C\u7BA1\u7406\u65E5\u5FD7</p><p>\u65E5\u5FD7\u6587\u4EF6\u5939\u7684\u9ED8\u8BA4\u8DEF\u5F84\u662F <code>$HOME/.pm2/logs</code></p><h2 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h2><p>\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4<code>pm2 logs</code> \u67E5\u770B\u5E94\u7528\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u2717 pm2 logs -h

  Usage: logs [options] [id|name|namespace]

  stream logs file. Default stream all logs

  Options:

    --json                json log output
    --format              formated log output
    --raw                 raw output
    --err                 only shows error output
    --out                 only shows standard output
    --lines &lt;n&gt;           output the last N lines, instead of the last 15 by default
    --timestamp [format]  add timestamps (default format YYYY-MM-DD-HH:mm:ss)
    --nostream            print logs without lauching the log stream
    --highlight [value]   highlights the given value
    -h, --help            output usage information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E38\u7528\u7684\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5B9E\u65F6\u663E\u793A\u6240\u6709\u5E94\u7528\u7A0B\u5E8F\u65E5\u5FD7
pm2 logs

# \u53EA\u5C55\u793A\`api\`\u5E94\u7528\u65E5\u5FD7
pm2 logs api

# \u7528json\u683C\u5F0F\u5C55\u793A\u65B0\u65E5\u5FD7
pm2 logs --json

# \u5C55\u793A1000\u884C api \u5E94\u7528\u65E5\u5FD7
pm2 logs big-api --lines 1000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u5DE5\u5177\u770B\u677F\u4E2D\u67E5\u770B\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7\u5207\u5206" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5207\u5206" aria-hidden="true">#</a> \u65E5\u5FD7\u5207\u5206</h2><p><a href="https://github.com/keymetrics/pm2-logrotate" target="_blank" rel="noopener noreferrer"><code>pm2-logrotate</code></a> \u6A21\u5757\u53EF\u4EE5\u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u81EA\u52A8\u5220\u9664\u8BB0\u5F55\u65E5\u5FD7\u3002</p><p>\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 install pm2-logrotate

 pm2 show pm2-logrotate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>max_size</td><td></td><td>10M</td><td>\u6587\u4EF6\u5207\u5206\u6700\u5927\u503C</td></tr><tr><td>retain</td><td></td><td>30</td><td></td></tr><tr><td>compress</td><td></td><td>false</td><td>-</td></tr><tr><td>dateFormat</td><td></td><td>YY-MM-DD_HH-mm-ss</td><td>-</td></tr><tr><td>rotateModule</td><td></td><td>true</td><td>-</td></tr><tr><td>workerInterval</td><td></td><td>30</td><td>-</td></tr><tr><td>rotateInterval</td><td></td><td>0 0 * * * \u6BCF\u5929\u5348\u591C</td><td>-</td></tr><tr><td>TZ</td><td></td><td>\u7CFB\u7EDF\u65F6\u95F4</td><td>-</td></tr></tbody></table><h5 id="rotateinterval\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#rotateinterval\u89E3\u91CA" aria-hidden="true">#</a> rotateInterval\u89E3\u91CA</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>*    *    *    *    *    *
\u252C    \u252C    \u252C    \u252C    \u252C    \u252C
\u2502    \u2502    \u2502    \u2502    \u2502    |
\u2502    \u2502    \u2502    \u2502    \u2502    \u2514 day of week (0 - 7) (0 or 7 is Sun)
\u2502    \u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500 month (1 - 12)
\u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)
\u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)
\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (0 - 59, OPTIONAL)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u8BBE\u7F6E\uFF1F <code>pm2 set pm2-logrotate:&lt;param&gt; &lt;value&gt;</code></p><p>\u4F8B\u5982\uFF1A</p><ul><li><code>pm2 set pm2-logrotate:max_size 1K</code> (1KB)</li><li><code>pm2 set pm2-logrotate:compress true</code> (compress logs when rotated)</li><li><code>pm2 set pm2-logrotate:rotateInterval &#39;*/1 * * * *&#39;</code> (force rotate every minute)</li></ul><h2 id="\u6E05\u7A7A\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7A7A\u65E5\u5FD7" aria-hidden="true">#</a> \u6E05\u7A7A\u65E5\u5FD7</h2><p>\u53EF\u4EE5\u901A\u8FC7PM2\u6E05\u7A7A\u5F53\u524D\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6E05\u7A7A\u6240\u6709\u65E5\u5FD7
pm2 flush

#\u6E05\u7A7A\u81EA\u5B9A\u540D\u79F0\u6216id\u7684\u65E5\u5FD7
pm2 flush &lt;appname|id&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u5FD7\u53EF\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u53EF\u9009\u9879" aria-hidden="true">#</a> \u65E5\u5FD7\u53EF\u9009\u9879</h2><p>\u542F\u52A8\u5E94\u7528\u65F6\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A\u9009\u9879\u6765\u67E5\u770B\u65E5\u5FD7</p><h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3><p>\u5F53\u6267\u884C<code>pm2 start app.js [OPTIONS]</code> \u65F6\u53EF\u4EE5\u8BBE\u7F6E\u4E0B\u9762\u7684\u9009\u9879\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-l --log [path]    # \u6307\u5B9A\u65E5\u5FD7\u8DEF\u5F84
-o --output [path] # \u6307\u5B9A\u6B63\u5E38\u65E5\u5FD7\u6587\u4EF6
-e --error [path]  # \u6307\u5B9A\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6
--time            # \u8BBE\u7F6E\u65E5\u5FD7\u524D\u7F00\u4E3A\u6807\u51C6\u7684\u65F6\u95F4\u6233
--log-date-format &lt;format&gt; # \u81EA\u5B9A\u4E49\u65E5\u5FD7\u524D\u7F00\u4E8B\u4EF6\u6233
--merge-logs               # \u5F53\u7528\u591A\u4E2A\u8FDB\u7A0B\u8FD0\u884C\u540C\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0C\u4E0D\u901A\u8FC7id\u62C6\u5206\u65E5\u5FD7\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F7F\u7528\u6807\u51C6\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6807\u51C6\u65F6\u95F4\u6233" aria-hidden="true">#</a> \u4F7F\u7528\u6807\u51C6\u65F6\u95F4\u6233</h4><p>\u53EF\u4EE5\u4F7F\u7528<code>--time</code>\u8F7B\u677E\u8BBE\u7F6E\u65E5\u5FD7\u524D\u7F00</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js --time

pm2 restart app --time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u65E5\u5FD7\u9009\u9879</p><table><thead><tr><th style="text-align:center;">\u5B57\u6BB5</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u4F8B\u5B50</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">error_file</td><td style="text-align:center;">(string)</td><td style="text-align:center;"></td><td style="text-align:center;">\u9519\u8BEF\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u9ED8\u8BA4 $HOME/.pm2/logs/XXXerr.log</td></tr><tr><td style="text-align:center;">out_file</td><td style="text-align:center;">(string)</td><td style="text-align:center;"></td><td style="text-align:center;">\u64CD\u4F5C\u65E5\u5FD7\u8DEF\u5F84\uFF0C\u9ED8\u8BA4 $HOME/.pm2/logs/XXXout.log</td></tr><tr><td style="text-align:center;">pid_file</td><td style="text-align:center;">(string)</td><td style="text-align:center;"></td><td style="text-align:center;">\u8FDB\u7A0B\u53F7\u6587\u4EF6\u8DEF\u5F84\uFF0C\u9ED8\u8BA4$HOME/.pm2/pid/app-pm_id.pid</td></tr><tr><td style="text-align:center;">merge_logs</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">true\u65F6\u907F\u514D\u4F7F\u7528\u8FDB\u7A0Bid\u62C6\u5206\u65E5\u5FD7</td></tr><tr><td style="text-align:center;">log_date_format</td><td style="text-align:center;">(string)</td><td style="text-align:center;">&quot;YYY-MM-DD HH:mm Z&quot;</td><td style="text-align:center;">\u683C\u5F0F\u5316\u65E5\u671F</td></tr></tbody></table><h4 id="\u7981\u7528\u65E5\u5FD7\u6587\u4EF6\u540E\u7F00" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u65E5\u5FD7\u6587\u4EF6\u540E\u7F00" aria-hidden="true">#</a> \u7981\u7528\u65E5\u5FD7\u6587\u4EF6\u540E\u7F00</h4><p>\u53EA\u9002\u7528\u4E8E\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u5982\u679C\u60F3\u8981\u6240\u6709\u7684\u5B9E\u4F8B\u65E5\u5FD7\u90FD\u8BB0\u5F55\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>--merge-logs</code> \u6216\u8005 <code>merge_logs: true</code></p><h4 id="\u7981\u7528\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528\u65E5\u5FD7" aria-hidden="true">#</a> \u7981\u7528\u65E5\u5FD7</h4><p>\u60F3\u8981\u7981\u6B62\u5728\u78C1\u76D8\u4E0A\u5199\u5165\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u8BBE\u7F6E<code>out_file</code>\u548C<code>error_file</code> \u4E3A<code>/dev/null</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
  apps : [{
    name: &#39;Business News Watcher&#39;,
    script: &#39;app.js&#39;,
    instances: 1,
    out_file: &quot;/dev/null&quot;,
    error_file: &quot;/dev/null&quot;
    cron_restart: &#39;0 0 * * *&#39;
    [...]
  }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A<code>/dev/null</code> \u6216\u8005 <code>NULL</code> \u4E0E\u5E73\u53F0\u65E0\u5173</p><h4 id="\u8BBE\u7F6E\u672C\u673A\u7684\u65E5\u5FD7\u5207\u5206" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u672C\u673A\u7684\u65E5\u5FD7\u5207\u5206" aria-hidden="true">#</a> \u8BBE\u7F6E\u672C\u673A\u7684\u65E5\u5FD7\u5207\u5206</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sudo pm2 logrotate -u user

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u4F1A\u8F93\u51FA\u4E00\u4E2A\u57FA\u7840\u7684\u65E5\u5FD7\u5207\u5206\u914D\u7F6E\u5230<code>/etc/logrotate.d/pm2-user</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/home/user/.pm2/pm2.log/ /home/user/.pm2/logs/*.log{
    rotate 12
    weekly
    missingok
    notifempty
    compress
    delaycompress
    create 0640 user user

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),s=[a];function l(r,c){return d(),t("div",null,s)}var u=e(n,[["render",l],["__file","pm2\u4E4B\u65E5\u5FD7.html.vue"]]);export{u as default};
