<template><h1 id="给现有的包声明d-ts文件" tabindex="-1"><a class="header-anchor" href="#给现有的包声明d-ts文件" aria-hidden="true">#</a> 给现有的包声明d.ts文件</h1>
<h2 id="首先我们需要明确包使用的导出规范-global-umd-commonjs-module-等。" tabindex="-1"><a class="header-anchor" href="#首先我们需要明确包使用的导出规范-global-umd-commonjs-module-等。" aria-hidden="true">#</a> 首先我们需要明确包使用的导出规范，global/umd/commonjs/module 等。</h2>
<h3 id="对于-global-导出的包" tabindex="-1"><a class="header-anchor" href="#对于-global-导出的包" aria-hidden="true">#</a> 对于 global 导出的包</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>declare namesapce MyLib <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// 我们可以直接在代码中使用</span>
    <span class="token comment">// const a = new MyLib.A()</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="对于-umd-commonjs-导出的" tabindex="-1"><a class="header-anchor" href="#对于-umd-commonjs-导出的" aria-hidden="true">#</a> 对于 umd/commonjs 导出的</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>declare module <span class="token string">'my-lib'</span> <span class="token punctuation">{</span>
    namespace MyLib <span class="token punctuation">{</span>
      <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      
      <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
   
      <span class="token comment">// 使用时</span>
      <span class="token comment">// 我们可以使用</span>
      <span class="token comment">// import * as MyLib from 'my-lib'</span>
      <span class="token comment">// const a = new MyLib.A();</span>
   
      <span class="token comment">// 如果开启了 ES Module 融合模式 (esModuleInterop=true)</span>
      <span class="token comment">// 我们可以使用</span>
      <span class="token comment">// import { A } from 'my-lib'</span>
      <span class="token comment">// const a = new A()</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token operator">=</span> MyLib
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="对于-es-module-导出的包我们使用" tabindex="-1"><a class="header-anchor" href="#对于-es-module-导出的包我们使用" aria-hidden="true">#</a> 对于 ES Module 导出的包我们使用：</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>declare module <span class="token string">'my-lib'</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">MyLib</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> <span class="token keyword">default</span> MyLib
    
    <span class="token comment">// or other exorts</span>
    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
    <span class="token comment">// 我们可以使用</span>
    <span class="token comment">// import MyLib, {A} from 'my-lib'</span>
    <span class="token comment">// const lib = new MyLib()</span>
    <span class="token comment">// const a = new A()</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="工具生成-d-ts" tabindex="-1"><a class="header-anchor" href="#工具生成-d-ts" aria-hidden="true">#</a> <a href="https://blog.csdn.net/zdhsoft/article/details/85242631" target="_blank" rel="noopener noreferrer">工具生成 d.ts<ExternalLinkIcon/></a></h2>
<ul>
<li>为整个包添加声明文件  使用微软的dts-gen</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g dts-gen   // 先全局安装dts-gen
<span class="token function">npm</span> <span class="token function">install</span> -g yargs     // 然后在全局安装你需要生产声明文件的库
dts-gen -m yargs         // 执行命令生成文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>为单个文件生产声明文件 使用dtsmake</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i dtsmake <span class="token operator">-</span>g   <span class="token comment">// 先全局安装dtsmake</span>
 
dtsmake <span class="token operator">-</span>s <span class="token punctuation">.</span><span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>sourcefile<span class="token punctuation">.</span>js  <span class="token comment">// 在对应的文件生产文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
