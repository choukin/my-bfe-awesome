import{r as p,o as l,a as c,b as n,d as t,F as o,c as s,e as a}from"./app.91923fdf.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},m=s(`<h1 id="\u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed-ts\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed-ts\u6587\u4EF6" aria-hidden="true">#</a> \u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed.ts\u6587\u4EF6</h1><h2 id="\u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303-global-umd-commonjs-module-\u7B49\u3002" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303-global-umd-commonjs-module-\u7B49\u3002" aria-hidden="true">#</a> \u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303\uFF0Cglobal/umd/commonjs/module \u7B49\u3002</h2><h3 id="\u5BF9\u4E8E-global-\u5BFC\u51FA\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-global-\u5BFC\u51FA\u7684\u5305" aria-hidden="true">#</a> \u5BF9\u4E8E global \u5BFC\u51FA\u7684\u5305</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare namesapce MyLib <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528</span>
    <span class="token comment">// const a = new MyLib.A()</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5BF9\u4E8E-umd-commonjs-\u5BFC\u51FA\u7684" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-umd-commonjs-\u5BFC\u51FA\u7684" aria-hidden="true">#</a> \u5BF9\u4E8E umd/commonjs \u5BFC\u51FA\u7684</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare module <span class="token string">&#39;my-lib&#39;</span> <span class="token punctuation">{</span>
    namespace MyLib <span class="token punctuation">{</span>
      <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      
      <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
   
      <span class="token comment">// \u4F7F\u7528\u65F6</span>
      <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528</span>
      <span class="token comment">// import * as MyLib from &#39;my-lib&#39;</span>
      <span class="token comment">// const a = new MyLib.A();</span>
   
      <span class="token comment">// \u5982\u679C\u5F00\u542F\u4E86 ES Module \u878D\u5408\u6A21\u5F0F (esModuleInterop=true)</span>
      <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528</span>
      <span class="token comment">// import { A } from &#39;my-lib&#39;</span>
      <span class="token comment">// const a = new A()</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token operator">=</span> MyLib
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u5BF9\u4E8E-es-module-\u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-es-module-\u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528" aria-hidden="true">#</a> \u5BF9\u4E8E ES Module \u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528\uFF1A</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare module <span class="token string">&#39;my-lib&#39;</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">MyLib</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> <span class="token keyword">default</span> MyLib
    
    <span class="token comment">// or other exorts</span>
    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528</span>
    <span class="token comment">// import MyLib, {A} from &#39;my-lib&#39;</span>
    <span class="token comment">// const lib = new MyLib()</span>
    <span class="token comment">// const a = new A()</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8),u={id:"\u5DE5\u5177\u751F\u6210-d-ts",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#\u5DE5\u5177\u751F\u6210-d-ts","aria-hidden":"true"},"#",-1),b=a(),k={href:"https://blog.csdn.net/zdhsoft/article/details/85242631",target:"_blank",rel:"noopener noreferrer"},h=a("\u5DE5\u5177\u751F\u6210 d.ts"),g=s(`<ul><li>\u4E3A\u6574\u4E2A\u5305\u6DFB\u52A0\u58F0\u660E\u6587\u4EF6 \u4F7F\u7528\u5FAE\u8F6F\u7684dts-gen</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g dts-gen   // \u5148\u5168\u5C40\u5B89\u88C5dts-gen
<span class="token function">npm</span> <span class="token function">install</span> -g yargs     // \u7136\u540E\u5728\u5168\u5C40\u5B89\u88C5\u4F60\u9700\u8981\u751F\u4EA7\u58F0\u660E\u6587\u4EF6\u7684\u5E93
dts-gen -m yargs         // \u6267\u884C\u547D\u4EE4\u751F\u6210\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4E3A\u5355\u4E2A\u6587\u4EF6\u751F\u4EA7\u58F0\u660E\u6587\u4EF6 \u4F7F\u7528dtsmake</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i dtsmake <span class="token operator">-</span>g   <span class="token comment">// \u5148\u5168\u5C40\u5B89\u88C5dtsmake</span>
 
dtsmake <span class="token operator">-</span>s <span class="token punctuation">.</span><span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>sourcefile<span class="token punctuation">.</span>js  <span class="token comment">// \u5728\u5BF9\u5E94\u7684\u6587\u4EF6\u751F\u4EA7\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,4);function v(_,y){const e=p("ExternalLinkIcon");return l(),c(o,null,[m,n("h2",u,[d,b,n("a",k,[h,t(e)])]),g],64)}var j=r(i,[["render",v]]);export{j as default};
