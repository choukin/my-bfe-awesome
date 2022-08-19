import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8e201d3a.js";var a="/my-bfe-awesome/assets/metrics.229536fd.png",d="/my-bfe-awesome/assets/terminal.93f226f7.png";const r={},l=s(`<h1 id="\u81EA\u5B9A\u4E49\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u6807" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u6807</h1><p>\u901A\u8FC7\u5728\u4EE3\u7801\u51B2\u63D2\u5165\u81EA\u5B9A\u4E49\u6307\u6807\uFF0C\u53EF\u4EE5\u5B9E\u65F6\u76D1\u63A7\u4EE3\u7801\u4E2D\u7684\u6307\u6807\u503C</p><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2><p>\u9996\u5148\u9700\u8981\u5B89\u88C5<code>tx2</code>\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install tx2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u65B0\u5EFA\u4E00\u4E2A\u53EB\u505A monit.js \u7684\u5E94\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tx2 = require(&#39;tx2&#39;)
const http = require(&#39;http&#39;)

let meter = tx2.meter({
    name:&#39;seq/sec&#39;,
    samples:1,
    titmeframe:60
})

http.createServer((req,res)=&gt;{
    meter.mark()
    res.writeHead(200,{&#39;Content-Type&#39;:&#39;text/plain&#39;})
    res.write(&#39;Hello world&#39;)
    res.end()
}).listen(6001)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528PM2\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start monit.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u540E\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u67E5\u770B\u6307\u6807</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 show [app]
# pm2 show monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+`" alt="\u81EA\u5B9A\u4E49\u6307\u6807"></p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u770B\u677F\u67E5\u770B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 monit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt="terminal"></p><h2 id="\u81EA\u5B9A\u4E49\u6307\u6807\u7684\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u6807\u7684\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u6807\u7684\u8F85\u52A9\u51FD\u6570</h2><p>\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u6307\u6807\u6765\u8DDF\u8E2A\u91CD\u8981\u4FE1\u606F\uFF0C\u67094\u79CD\u4E0D\u540C\u7684\u63A2\u5934\u7C7B\u578B</p><ul><li><p>simple metrics \u4F8B\u5982\uFF1A\u76D1\u63A7\u53D8\u91CF\u503C</p></li><li><p>Counter\uFF1A\u8BB0\u5F55\u589E\u91CF\u6216\u51CF\u91CF \u4F8B\u5982\uFF1A \u4E0B\u8F7D\u91CF\uFF0C\u7528\u6237\u5728\u7EBF\u91CF\u7B49</p></li><li><p>meter\uFF1A \u9700\u8981\u4E8B\u4EF6\u6216\u5B9A\u65F6\u5904\u7406\u7684\u4E8B\u60C5 \u4F8B\u5982\uFF1Ahttp\u670D\u52A1\u6BCF\u5206\u949F\u7684\u8BF7\u6C42\u91CF</p></li><li><p>Histogram: \u4FDD\u7559\u7EDF\u8BA1\u76F8\u5173\u6570\u7EC4\u5230\u6570\u636E\u5E93\uFF0C\u504F\u5411\u4E8E\u6700\u540E5\u5206\u949F\uFF0C\u4EE5\u7EDF\u8BA1\u4ED6\u4EEC\u7684\u5206\u5E03 \u4F8B\u5982:\u76D1\u89C6\u5BF9\u6570\u636E\u5E93\u6267\u884C\u67E5\u8BE2\u7684\u5E73\u5747\u503C</p></li></ul><h2 id="api-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#api-\u6587\u6863" aria-hidden="true">#</a> API \u6587\u6863</h2><p>\u6CE8\u610F\uFF1A\u8BF7\u53C2\u9605<a href="https://github.com/pm2/tx2/blob/main/API.md" target="_blank" rel="noopener noreferrer">Tx2API\u6587\u6863</a></p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><h4 id="simple-metric-\u4E0A\u62A5\u7B80\u5355\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#simple-metric-\u4E0A\u62A5\u7B80\u5355\u7684\u503C" aria-hidden="true">#</a> Simple Metric\uFF1A\u4E0A\u62A5\u7B80\u5355\u7684\u503C</h4><p>\u5141\u8BB8\u5BFC\u51FA\u53EF\u4EE5\u7ACB\u5373\u8BFB\u53D6\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
const tx2 = require(&#39;tx2&#39;)

// \u503C\u662F\u51FD\u6570\u53EF\u4EE5\u5B9E\u65F6\u83B7\u53D6\u503C
const mertic = tx2.mertic({
    name:&#39;Realtime user&#39;,
    value: function(){
        return Object.keys(users).length
    }
})

// \u901A\u8FC7set\u65B9\u6CD5\u8BBE\u7F6E\u503C
const valvar = tx2.mertic({
    name:&#39;Reltime Value&#39;
})

valvar.set(23)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BA1\u6570\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570\u5668" aria-hidden="true">#</a> \u8BA1\u6570\u5668</h4><p>\u9012\u589E\u6216\u9012\u51CF\u7684\u503C</p><p>\u8BA1\u7B97\u6D3B\u8DC3\u7684Http\u8BF7\u6C42\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tx2 = require(&#39;tx2&#39;)
const http = require(&#39;http&#39;)

const counter = tx2.counter({
    name:&#39;Active requests&#39;
})

http.createServer(function(req, res){
    counter.inc()

    req.on(&#39;end&#39;, function(){
        count.dec()
    })

    res.writeHead(00, {&#39;Content-Type&#39;:&#39;text/plain&#39;})
    res.write(&#39;Hello World&#39;)
    res.end()
}).listen(6001)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4EEA\u8868-\u8BA1\u7B97\u5E73\u5747\u503C" tabindex="-1"><a class="header-anchor" href="#\u4EEA\u8868-\u8BA1\u7B97\u5E73\u5747\u503C" aria-hidden="true">#</a> \u4EEA\u8868\uFF1A\u8BA1\u7B97\u5E73\u5747\u503C</h4><p>\u6839\u636E\u4E8B\u4EF6/\u5B9A\u65F6\u8BA1\u7B97\u7684\u503C</p><p>\u8BA1\u7B97\u6BCF\u79D2\u67E5\u8BE2\u6570\u7684\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tx2 = require(&#39;tx2&#39;)
const http = require(&#39;http&#39;)

const meter = tx2.merter({
    name:&#39;req/sec&#39;,
    smales:1,
    timeframe:60
})

http.createServer(function(req,res)=&gt;{
    meter.makr()
    res.writeHead(200, {&#39;Content-Type&#39;:&#39;text/plain&#39;})
    res.write(&#39;Hello World&#39;)
    res.end()
}).listen(6000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>smales</code> \u662F\u901F\u7387\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u662F1s</li><li><code>timeframe</code> \u662F\u5206\u6790\u4E8B\u4EF6\u7684\u65F6\u95F4\u8303\u56F4\u9ED8\u8BA460s</li></ul><h4 id="\u76F4\u65B9\u56FE" tabindex="-1"><a class="header-anchor" href="#\u76F4\u65B9\u56FE" aria-hidden="true">#</a> \u76F4\u65B9\u56FE</h4><p>\u4FDD\u7559\u4E00\u4E2A\u7EDF\u8BA1\u76F8\u5173\u7684\u5B58\u50A8\uFF0C\u504F\u5411\u6700\u540E5\u5206\u949F\uFF0C\u4EE5\u63A2\u7D22\u4ED6\u4EEC\u7684\u5206\u5E03</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const tx2 = require(&#39;tx2&#39;)
const histogram = tx2.histogram({
    name:&#39;latency&#39;,
    measurement:&#39;mean&#39;
})

var latency = 0

setInterVal(function(){
    latency = Math.round(Math.random()*100)
    histogram.update(latency)
},100)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),v=[l];function c(t,m){return i(),n("div",null,v)}var o=e(r,[["render",c],["__file","PM2\u4E4B\u81EA\u5B9A\u4E49\u6307\u6807.html.vue"]]);export{o as default};
