import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as l}from"./app.8e201d3a.js";const s={},d=l(`<h1 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> <a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer">less</a></h1><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><ul><li>// \u5F00\u5934\u4E0D\u4F1A\u88AB\u7F16\u8BD1</li><li>/**/ \u5305\u88F9\u4F1A\u88AB\u7F16\u8BD1\u5230css\u4E2D</li></ul><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><ul><li><code>@</code> \u7528\u6765\u58F0\u660E\u53D8\u91CF <ul><li>\u53D8\u91CF\u662F\u5EF6\u8FDF\u52A0\u8F7D\u7684</li><li>\u5C5E\u6027\u503C\u53D8\u91CF</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code> @bgcolor:red;
 .main{
     background-color:@bgcolor;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C5E\u6027\u540D/\u9009\u62E9\u5668\u53D8\u91CF</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code> @mg:margin;
 @selector\uFF1A.main;
 @{selector}{
     @{mg}:0;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>url\u53D8\u91CF<div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>@images: &quot;../img&quot;;

// Usage
body {
color: #444;
background: url(&quot;@{images}/white-sand.png&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="\u5D4C\u5957\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u89C4\u5219" aria-hidden="true">#</a> \u5D4C\u5957\u89C4\u5219</h2><ul><li><code>{}</code> \u5757\u7EA7\u89C4\u5219 \u7236\u5B50\u5D4C\u5957</li><li>&amp; \u8868\u793A\u5F53\u524D\u9009\u62E9\u5668\u7684\u7236\u7EA7\u9009\u62E9\u5668</li></ul><h2 id="\u6DF7\u5408-mixin" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5408-mixin" aria-hidden="true">#</a> \u6DF7\u5408 mixin</h2><ul><li>\u666E\u901A\u6DF7\u5408</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>   .bordered {
   border-top: dotted 1px black;
   border-bottom: solid 2px red;
 }
 .main{
     padding:0;
     .border()
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u8F93\u51FA\u5230\u7F16\u8BD1\u6587\u4EF6\u7684\u6DF7\u5408</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>   .bordered() {
   border-top: dotted 1px black;
   border-bottom: solid 2px red;
 }
 .main{
     padding:0;
     .border()
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E26\u53C2\u6570\u7684\u6DF7\u5408</li><li>\u5E26\u53C2\u6570\u5E76\u5E26\u9ED8\u8BA4\u503C\u7684\u6DF7\u5408</li><li>\u5E26\u547D\u540D\u53C2\u6570\u6DF7\u5408 \u5F62\u53C2\u6570\u548C\u5B9E\u53C2\u4E0D\u5339\u914D\u6307\u5B9A\u53C2\u6570</li><li>\u5339\u914D\u6A21\u5F0F</li></ul><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code>.triangle(@_){
   width:0;
    height:0;
     overflow:hidden;
}
.triangle(L,@w,@c){
    border-style:dashed solid dashed dashed;
    border-color:transparent  transparent transparent @c;
}
.triangle(R,@w,@c){
    border-style:dashed solid dashed dashed;
    border-color:transparent @c transparent transparent;
}
 .triangle(T,@w,@c){
    border-width:@w;
    border-style:dashed solid dashed dashed;
    border-color:@c transparent  transparent transparent;
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>arguments \u53D8\u91CF</li></ul>`,15),a=[d];function r(c,v){return i(),n("div",null,a)}var m=e(s,[["render",r],["__file","less.html.vue"]]);export{m as default};
