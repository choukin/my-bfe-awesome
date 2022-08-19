import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as d}from"./app.8e201d3a.js";const s={},l=d(`<h1 id="js-\u4EFB\u52A1\u6E90" tabindex="-1"><a class="header-anchor" href="#js-\u4EFB\u52A1\u6E90" aria-hidden="true">#</a> js \u4EFB\u52A1\u6E90</h1><h2 id="\u6D4F\u89C8\u5668\u4E2D-event-loop" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u4E2D-event-loop" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u4E2D Event Loop</h2><p>JS \u5728\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u4EA7\u751F\u6267\u884C\u73AF\u5883\uFF0C\u8FD9\u4E9B\u6267\u884C\u73AF\u5883\u4F1A\u88AB\u987A\u5E8F\u7684\u52A0\u5165\u5230\u6267\u884C\u6808\u4E2D\u3002\u5982\u679C\u9047\u5230\u5F02\u6B65\u7684\u4EE3\u7801\uFF0C\u4F1A\u88AB\u6302\u8D77\u5E76\u52A0\u5165\u5230 Task\uFF08\u6709\u591A\u79CD task\uFF09 \u961F\u5217\u4E2D\u3002\u4E00\u65E6\u6267\u884C\u6808\u4E3A\u7A7A\uFF0CEvent Loop \u5C31\u4F1A\u4ECE Task \u961F\u5217\u4E2D\u62FF\u51FA\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\u5E76\u653E\u5165\u6267\u884C\u6808\u4E2D\u6267\u884C\uFF0C\u6240\u4EE5\u672C\u8D28\u4E0A\u6765\u8BF4 JS \u4E2D\u7684\u5F02\u6B65\u8FD8\u662F\u540C\u6B65\u884C\u4E3A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(&#39;script start&#39;);

setTimeout(function() {
  console.log(&#39;setTimeout&#39;);
}, 0);

console.log(&#39;script end&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u867D\u7136 <code>setTimeout</code> \u5EF6\u65F6\u4E3A 0\uFF0C\u5176\u5B9E\u8FD8\u662F\u5F02\u6B65\u3002\u8FD9\u662F\u56E0\u4E3A HTML5 \u6807\u51C6\u89C4\u5B9A\u8FD9\u4E2A\u51FD\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E0D\u5F97\u5C0F\u4E8E 4 \u6BEB\u79D2\uFF0C\u4E0D\u8DB3\u4F1A\u81EA\u52A8\u589E\u52A0\u3002\u6240\u4EE5 <code>setTimeout</code> \u8FD8\u662F\u4F1A\u5728 script end \u4E4B\u540E\u6253\u5370\u3002</p><p>\u4E0D\u540C\u7684\u4EFB\u52A1\u6E90\u4F1A\u88AB\u5206\u914D\u5230\u4E0D\u540C\u7684 Task \u961F\u5217\u4E2D\uFF0C\u4EFB\u52A1\u6E90\u53EF\u4EE5\u5206\u4E3A \u5FAE\u4EFB\u52A1\uFF08microtask\uFF09 \u548C \u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09\u3002\u5728 ES6 \u89C4\u8303\u4E2D\uFF0C<code>microtask</code> \u79F0\u4E3A jobs\uFF0Cmacrotask \u79F0\u4E3A <code>task</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(&#39;script start&#39;);

setTimeout(function() {
  console.log(&#39;setTimeout&#39;);
}, 0);

new Promise((resolve) =&gt; {
    console.log(&#39;Promise&#39;)
    resolve()
}).then(function() {
  console.log(&#39;promise1&#39;);
}).then(function() {
  console.log(&#39;promise2&#39;);
});

console.log(&#39;script end&#39;);
// script start =&gt; Promise =&gt; script end =&gt; promise1 =&gt; promise2 =&gt; setTimeout

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u867D\u7136 <code>setTimeout</code> \u5199\u5728 <code>Promise</code> \u4E4B\u524D\uFF0C\u4F46\u662F\u56E0\u4E3A <code>Promise</code> \u5C5E\u4E8E\u5FAE\u4EFB\u52A1\u800C <code>setTimeout</code> \u5C5E\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u6240\u4EE5\u4F1A\u6709\u4EE5\u4E0A\u7684\u6253\u5370\u3002 \u5FAE\u4EFB\u52A1\u5305\u62EC <code>process.nextTick</code> \uFF0C<code>promise</code> \uFF0C<code>Object.observe</code> \uFF0C<code>MutationObserver</code> \u5B8F\u4EFB\u52A1\u5305\u62EC <code>script</code> \uFF0C <code>setTimeout</code> \uFF0C<code>setInterval</code> \uFF0C<code>setImmediate</code> \uFF0C<code>I/O</code> \uFF0C<code>UI rendering</code></p><p>\u5F88\u591A\u4EBA\u6709\u4E2A\u8BEF\u533A\uFF0C\u8BA4\u4E3A\u5FAE\u4EFB\u52A1\u5FEB\u4E8E\u5B8F\u4EFB\u52A1\uFF0C\u5176\u5B9E\u662F\u9519\u8BEF\u7684\u3002\u56E0\u4E3A\u5B8F\u4EFB\u52A1\u4E2D\u5305\u62EC\u4E86 <code>script</code> \uFF0C\u6D4F\u89C8\u5668\u4F1A\u5148\u6267\u884C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u63A5\u4E0B\u6765\u6709\u5F02\u6B65\u4EE3\u7801\u7684\u8BDD\u5C31\u5148\u6267\u884C\u5FAE\u4EFB\u52A1 \u6240\u4EE5\u6B63\u786E\u7684\u4E00\u6B21 Event loop \u987A\u5E8F\u662F\u8FD9\u6837\u7684</p><p>\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u8FD9\u5C5E\u4E8E\u5B8F\u4EFB\u52A1 \u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u67E5\u8BE2\u662F\u5426\u6709\u5FAE\u4EFB\u52A1\u9700\u8981\u6267\u884C \u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1 \u5FC5\u8981\u7684\u8BDD\u6E32\u67D3 UI \u7136\u540E\u5F00\u59CB\u4E0B\u4E00\u8F6E Event loop\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801</p><p>\u901A\u8FC7\u4E0A\u8FF0\u7684 Event loop \u987A\u5E8F\u53EF\u77E5\uFF0C\u5982\u679C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\u6709\u5927\u91CF\u7684\u8BA1\u7B97\u5E76\u4E14\u9700\u8981\u64CD\u4F5C DOM \u7684\u8BDD\uFF0C\u4E3A\u4E86\u66F4\u5FEB\u7684 \u754C\u9762\u54CD\u5E94\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u64CD\u4F5C DOM \u653E\u5165\u5FAE\u4EFB\u52A1\u4E2D\u3002</p><h2 id="node-\u4E2D\u7684-event-loop" tabindex="-1"><a class="header-anchor" href="#node-\u4E2D\u7684-event-loop" aria-hidden="true">#</a> Node \u4E2D\u7684 Event loop</h2><p>Node \u4E2D\u7684 Event loop \u548C\u6D4F\u89C8\u5668\u4E2D\u7684\u4E0D\u76F8\u540C\u3002</p><p>Node \u7684 Event loop \u5206\u4E3A6\u4E2A\u9636\u6BB5\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167\u987A\u5E8F\u53CD\u590D\u8FD0\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u250C\u2500&gt;\u2502        timers         \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502     I/O callbacks     \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u2502     idle, prepare     \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502   incoming:   \u2502
\u2502  \u2502         poll          \u2502&lt;\u2500\u2500connections\u2500\u2500\u2500     \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2502   data, etc.  \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u2502        check          \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2514\u2500\u2500\u2524    close callbacks    \u2502
   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>timer <code>timers</code> \u9636\u6BB5\u4F1A\u6267\u884C <code>setTimeout</code> \u548C <code>setInterval</code> \u4E00\u4E2A <code>timer</code> \u6307\u5B9A\u7684\u65F6\u95F4\u5E76\u4E0D\u662F\u51C6\u786E\u65F6\u95F4\uFF0C\u800C\u662F\u5728\u8FBE\u5230\u8FD9\u4E2A\u65F6\u95F4\u540E\u5C3D\u5FEB\u6267\u884C\u56DE\u8C03\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u7CFB\u7EDF\u6B63\u5728\u6267\u884C\u522B\u7684\u4E8B\u52A1\u800C\u5EF6\u8FDF\u3002 \u4E0B\u9650\u7684\u65F6\u95F4\u6709\u4E00\u4E2A\u8303\u56F4\uFF1A[1, 2147483647] \uFF0C\u5982\u679C\u8BBE\u5B9A\u7684\u65F6\u95F4\u4E0D\u5728\u8FD9\u4E2A\u8303\u56F4\uFF0C\u5C06\u88AB\u8BBE\u7F6E\u4E3A1\u3002 <code>I/O</code><code>I/O</code> \u9636\u6BB5\u4F1A\u6267\u884C\u9664\u4E86 <code>close</code> \u4E8B\u4EF6\uFF0C\u5B9A\u65F6\u5668\u548C <code>setImmediate</code> \u7684\u56DE\u8C03 <code>idle</code>, <code>prepare</code><code>idle</code>, <code>prepare</code> \u9636\u6BB5\u5185\u90E8\u5B9E\u73B0 <code>poll</code><code>poll</code> \u9636\u6BB5\u5F88\u91CD\u8981\uFF0C\u8FD9\u4E00\u9636\u6BB5\u4E2D\uFF0C\u7CFB\u7EDF\u4F1A\u505A\u4E24\u4EF6\u4E8B\u60C5</p><p>\u6267\u884C\u5230\u70B9\u7684\u5B9A\u65F6\u5668 \u6267\u884C <code>poll</code> \u961F\u5217\u4E2D\u7684\u4E8B\u4EF6</p><p>\u5E76\u4E14\u5F53 <code>poll</code> \u4E2D\u6CA1\u6709\u5B9A\u65F6\u5668\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u53D1\u73B0\u4EE5\u4E0B\u4E24\u4EF6\u4E8B\u60C5</p><p>\u5982\u679C <code>poll</code> \u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u4F1A\u904D\u5386\u56DE\u8C03\u961F\u5217\u5E76\u540C\u6B65\u6267\u884C\uFF0C\u76F4\u5230\u961F\u5217\u4E3A\u7A7A\u6216\u8005\u7CFB\u7EDF\u9650\u5236 \u5982\u679C <code>poll</code> \u961F\u5217\u4E3A\u7A7A\uFF0C\u4F1A\u6709\u4E24\u4EF6\u4E8B\u53D1\u751F</p><p>\u5982\u679C\u6709 <code>setImmediate</code> \u9700\u8981\u6267\u884C\uFF0C<code>poll</code> \u9636\u6BB5\u4F1A\u505C\u6B62\u5E76\u4E14\u8FDB\u5165\u5230 <code>check</code> \u9636\u6BB5\u6267\u884C <code>setImmediate</code> \u5982\u679C\u6CA1\u6709 <code>setImmediate</code> \u9700\u8981\u6267\u884C\uFF0C\u4F1A\u7B49\u5F85\u56DE\u8C03\u88AB\u52A0\u5165\u5230\u961F\u5217\u4E2D\u5E76\u7ACB\u5373\u6267\u884C\u56DE\u8C03</p><p>\u5982\u679C\u6709\u522B\u7684\u5B9A\u65F6\u5668\u9700\u8981\u88AB\u6267\u884C\uFF0C\u4F1A\u56DE\u5230 <code>timer</code> \u9636\u6BB5\u6267\u884C\u56DE\u8C03\u3002 <code>check</code><code>check</code> \u9636\u6BB5\u6267\u884C <code>setImmediate</code><code>close</code> <code>callbacks</code><code>close</code> <code>callbacks</code> \u9636\u6BB5\u6267\u884C <code>close</code> \u4E8B\u4EF6 \u5E76\u4E14\u5728 Node \u4E2D\uFF0C\u6709\u4E9B\u60C5\u51B5\u4E0B\u7684\u5B9A\u65F6\u5668\u6267\u884C\u987A\u5E8F\u662F\u968F\u673A\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setTimeout(() =&gt; {
    console.log(&#39;setTimeout&#39;);
}, 0);
setImmediate(() =&gt; {
    console.log(&#39;setImmediate&#39;);
})
// \u8FD9\u91CC\u53EF\u80FD\u4F1A\u8F93\u51FA setTimeout\uFF0CsetImmediate
// \u53EF\u80FD\u4E5F\u4F1A\u76F8\u53CD\u7684\u8F93\u51FA\uFF0C\u8FD9\u53D6\u51B3\u4E8E\u6027\u80FD
// \u56E0\u4E3A\u53EF\u80FD\u8FDB\u5165 event loop \u7528\u4E86\u4E0D\u5230 1 \u6BEB\u79D2\uFF0C\u8FD9\u65F6\u5019\u4F1A\u6267\u884C setImmediate
// \u5426\u5219\u4F1A\u6267\u884C setTimeout

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C\u987A\u5E8F\u662F\u76F8\u540C\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var fs = require(&#39;fs&#39;)

fs.readFile(__filename, () =&gt; {
    setTimeout(() =&gt; {
        console.log(&#39;timeout&#39;);
    }, 0);
    setImmediate(() =&gt; {
        console.log(&#39;immediate&#39;);
    });
});
// \u56E0\u4E3A readFile \u7684\u56DE\u8C03\u5728 poll \u4E2D\u6267\u884C
// \u53D1\u73B0\u6709 setImmediate \uFF0C\u6240\u4EE5\u4F1A\u7ACB\u5373\u8DF3\u5230 check \u9636\u6BB5\u6267\u884C\u56DE\u8C03
// \u518D\u53BB timer \u9636\u6BB5\u6267\u884C setTimeout
// \u6240\u4EE5\u4EE5\u4E0A\u8F93\u51FA\u4E00\u5B9A\u662F setImmediate\uFF0CsetTimeout


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4ECB\u7ECD\u7684\u90FD\u662F <code>macrotask</code> <code>\u7684\u6267\u884C\u60C5\u51B5\uFF0Cmicrotask</code> \u4F1A\u5728\u4EE5\u4E0A\u6BCF\u4E2A\u9636\u6BB5\u5B8C\u6210\u540E\u7ACB\u5373\u6267\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setTimeout(()=&gt;{
    console.log(&#39;timer1&#39;)

    Promise.resolve().then(function() {
        console.log(&#39;promise1&#39;)
    })
}, 0)

setTimeout(()=&gt;{
    console.log(&#39;timer2&#39;)

    Promise.resolve().then(function() {
        console.log(&#39;promise2&#39;)
    })
}, 0)

// \u4EE5\u4E0A\u4EE3\u7801\u5728\u6D4F\u89C8\u5668\u548C node \u4E2D\u6253\u5370\u60C5\u51B5\u662F\u4E0D\u540C\u7684
// \u6D4F\u89C8\u5668\u4E2D\u6253\u5370 timer1, promise1, timer2, promise2
// node \u4E2D\u6253\u5370 timer1, timer2, promise1, promise2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Node \u4E2D\u7684 <code>process.nextTick</code> \u4F1A\u5148\u4E8E\u5176\u4ED6 <code>microtask</code> \u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setTimeout(() =&gt; {
  console.log(&quot;timer1&quot;);

  Promise.resolve().then(function() {
    console.log(&quot;promise1&quot;);
  });
}, 0);

process.nextTick(() =&gt; {
  console.log(&quot;nextTick&quot;);
});
// nextTick, timer1, promise1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[l];function o(a,v){return i(),n("div",null,c)}var m=e(s,[["render",o],["__file","js-task-origin.html.vue"]]);export{m as default};
