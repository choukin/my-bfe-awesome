import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,a as d}from"./app.8e201d3a.js";const n={},a=d(`<h2 id="\u4F18\u96C5\u7684\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u7684\u5173\u95ED" aria-hidden="true">#</a> \u4F18\u96C5\u7684\u5173\u95ED</h2><p>\u4E3A\u4E86\u4F18\u96C5\u7684 restart/reload/stop \u8FDB\u7A0B\uFF0C\u8BF7\u5728\u76D1\u542C\u5230<code>SIGINT</code>\u6807\u5FD7\u540E\u9000\u51FA\u5E94\u7528\u524D\uFF0C\u8BF7\u6E05\u9664\u6240\u6709\u7684\u4E1C\u897F\uFF08\u5305\u62EC\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u8FDB\u7A0B\u4E8B\u4EF6\u7B49...\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>process.on(&#39;SIGINT&#39;, function(){
    db.stop(function(err){
        process.exit(err, 1:0)
    })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728 \u6267\u884C<code>pm2 reload</code> \u4F1A\u4F18\u96C5\u7684\u91CD\u542F\u5E94\u7528\u3002</p><h3 id="\u914D\u7F6E\u6740\u6389\u8FDB\u7A0B\u7684\u8D85\u65F6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6740\u6389\u8FDB\u7A0B\u7684\u8D85\u65F6\u4E8B\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6740\u6389\u8FDB\u7A0B\u7684\u8D85\u65F6\u4E8B\u4EF6</h3><p>\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A 3000 ms:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js --kill-timeout 3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E <code>kill-timeout</code> \u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
    apps:[{
        name:&#39;app&#39;,
        script:&#39;./app.js&#39;,
        kill_timeout:3000
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F18\u96C5\u7684\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u7684\u5F00\u59CB" aria-hidden="true">#</a> \u4F18\u96C5\u7684\u5F00\u59CB</h2><p>\u6709\u65F6\u5019\u5E94\u7528\u9700\u8981\u7B49\u5F85\u4E0E DBS/caches/workers/whatever\u7684\u8FDE\u63A5\uFF0CPM2\u9700\u8981\u7B49\u5F85\u8FD9\u4E9B\u8FDE\u63A5\u6210\u529F\u540E\u624D\u628A\u5E94\u7528\u72B6\u6001\u770B\u4F5C<code>online</code>.\u4E3A\u6B64\uFF0C\u9700\u8981\u5728\u547D\u4EE4\u884C\u8BBE\u7F6E<code>--wait-ready</code>\u6216\u8005\u5728\u914D\u7F6E\u6587\u4EF6\u91CC\u6DFB\u52A0<code>wait_ready:true</code>. \u7136\u540E\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u6DFB\u52A0<code>process.send(&#39;ready&#39;)</code> ,PM2 \u4F1A\u76D1\u542C<code>ready</code>\u4E8B\u4EF6\uFF0C\u5E76\u5728\u63A5\u6536\u5230\u4E8B\u4EF6\u540E\u628A\u5E94\u7528\u72B6\u6001\u4FEE\u6539\u4E3A<code>online</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var http = require(&#39;http&#39;)

var app = http.createServer(function(req, res){
    res.writeHead(200)
    res.end(&#39;hey&#39;)
})

var listener = app.listen(0, function(){
    console.log(&#39;Listening on port&#39;+ listener.address().port)
    // \u7ED9PM2\u53D1\u9001ready \u6807\u8BC6
    process.send(&#39;ready&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u542F\u52A8\u5E94\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js --wait-ready
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-ready-\u8D85\u65F6\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-ready-\u8D85\u65F6\u65F6\u95F4" aria-hidden="true">#</a> \u914D\u7F6E ready \u8D85\u65F6\u65F6\u95F4</h3><p><code>ready</code> \u6807\u8BC6\u7684\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u662F 3000ms</p><p>\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u628A\u8D85\u65F6\u65F6\u95F4\u5EF6\u957F\u5230 10000ms</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js --wait-ready --listen-timeout 10000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u8BBE\u7F6E<code>listen_timeout</code> \u548C <code>wait_ready</code> \u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
    apps:[{
        name:&#39;app&#39;,
        script:&#39;./app.js&#39;,
        wait_ready:true,
        listen_timeout:10000
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u96C5\u7684\u4F7F\u7528-http-server-listen" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u7684\u4F7F\u7528-http-server-listen" aria-hidden="true">#</a> \u4F18\u96C5\u7684\u4F7F\u7528 <code>http.Server.listen</code></h3><p>\u5982\u679C\u6709\u9ED8\u8BA4\u7CFB\u7EDF\u548C<code>http.Server.listen</code>\u65B9\u6CD5\u6302\u94A9\uFF0C\u5F53http\u670D\u52A1\u63A5\u6536\u5230\u4E00\u4E2A\u8FDE\u63A5\uFF0CPM2 \u4F1A\u81EA\u52A8\u628A\u5E94\u7528\u770B\u4F5C\u662Fready\u3002\u53EF\u4EE5\u8BBE\u7F6E\u5728\u4F7F\u7528<code>--wait-ready</code>\u542F\u52A8\u5E94\u7528\u65F6\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E<code>listen_timeout</code> \uFF0C\u6216\u8005\u5728\u547D\u4EE4\u884C\u4F7F\u7528 <code>--listen-timeout=XXX</code>.</p><h2 id="\u5173\u4E8E\u4FE1\u53F7\u6D41" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u4FE1\u53F7\u6D41" aria-hidden="true">#</a> \u5173\u4E8E\u4FE1\u53F7\u6D41</h2><p>\u5F53\u901A\u8FC7PM2 \u505C\u6B62\u6216\u91CD\u542F\u5E94\u7528\u8FDB\u7A0B\u65F6\uFF0C\u53D1\u9001\u5230\u8FDB\u7A0B\u7684\u7CFB\u7EDF\u6807\u8BC6\u662F\u6709\u65E2\u5B9A\u987A\u5E8F\u7684\u3002</p><p>\u9996\u5148\u4E00\u4E2ASIGINT\u4FE1\u53F7\u53D1\u9001\u5230\u4F60\u7684\u8FDB\u7A0B\uFF0C\u4F60\u53EF\u4EE5\u6355\u6349\u5230\u8FDB\u7A0B\u5C06\u8981\u505C\u6B62\u7684\u4FE1\u53F7\u3002\u5982\u679C\u5E94\u7528\u57281.6\u79D2\u524D\u8FD8\u6CA1\u6709\u9000\u51FA\uFF0C\u5B83\u4F1A\u6536\u5230\u4E00\u4E2ASKIGKILL\u4FE1\u53F7\u4EE5\u5F3A\u5236\u9000\u51FA\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CFPM2_KILL_SIGNAL\u81EA\u5B9A\u4E49\u4FE1\u53F7\u540D\u79F0\u5165:SIGTERM</p><h1 id="windows-\u7CFB\u7EDF\u4F18\u96C5\u7684\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#windows-\u7CFB\u7EDF\u4F18\u96C5\u7684\u505C\u6B62" aria-hidden="true">#</a> Windows \u7CFB\u7EDF\u4F18\u96C5\u7684\u505C\u6B62</h1><p>\u5982\u679C\u4FE1\u53F7\u4E0D\u53EF\u7528\uFF0C\u4F60\u7684\u8FDB\u7A0B\u4F1A\u7EC8\u6B62\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4F7F\u7528<code>--shutdown-with-message</code> \u6216 \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E<code>shutdown_with_message</code>\uFF0C\u7136\u540E\u5728\u5E94\u7528\u4E2D\u76D1\u542C<code>shutdown</code>\u4E8B\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start app.js --shutdown-with-message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
    apps:[{
        name:&#39;app&#39;,
        script:&#39;./app.js&#39;,
        shutdown_with_message:true,
    }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4EE3\u7801\u4E2D\u76D1\u542C <code>shutdown</code> \u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>process.on(&#39;message&#39;, function(msg){
    if(msg === &#39;shutdown&#39;){
        console.log(&#39;\u5173\u95ED\u6240\u6709\u8FDE\u63A5&#39;)
        setTimeout(function(){
            console.log(&#39;\u8FDE\u63A5\u5173\u95ED&#39;)
            process.exit(0)
        }, 1500)
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),r=[a];function l(c,v){return i(),s("div",null,r)}var u=e(n,[["render",l],["__file","PM2\u4F18\u96C5\u7684\u542F\u52A8\u5173\u95ED.html.vue"]]);export{u as default};
