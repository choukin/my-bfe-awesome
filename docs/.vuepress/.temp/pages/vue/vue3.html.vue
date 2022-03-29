<template><h1 id="vue3-项目解析" tabindex="-1"><a class="header-anchor" href="#vue3-项目解析" aria-hidden="true">#</a> vue3 项目解析</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>├── packages
│   ├── compiler-core      <span class="token comment"># 与平台无关的编译模块，例如：基础的baseCompile编译模版文件，baseParse 生成AST</span>
│   ├── compiler-dom       <span class="token comment"># 基于compiler-core,专为浏览器的编译模块，可以看到它基于baseComplie</span>
│   ├── compiler-sfc       <span class="token comment"># 用来编译vue 单文件组件</span>
│   ├── compiler-ssr        <span class="token comment"># 服务端渲染相关</span>
│   ├── global.d.ts
│   ├── reactivity              <span class="token comment"># vue 独立的响应式模块</span>
│   ├── reactivity-transform
│   ├── runtime-core            <span class="token comment"># 与平台的基础模块，有vue的各类API 虚拟dom 渲染器</span>
│   ├── runtime-dom             <span class="token comment"># 基于runtime-core 针对浏览器的运行时</span>
│   ├── runtime-test
│   ├── server-renderer
│   ├── sfc-playground
│   ├── shared
│   ├── size-check
│   ├── template-explorer
│   ├── vue                      <span class="token comment"># 引入导出 runtime-core 还有编译方法</span>
│   └── vue-compat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="monrepo" tabindex="-1"><a class="header-anchor" href="#monrepo" aria-hidden="true">#</a> monrepo</h2>
<p><code>Vue3</code>采用 <code>monorepo</code> 管理项目代码的方式。它是一个<code>repo</code> 中管理多个 <code>package</code>,每个 <code>package</code> 都有自己的类型声明、单元测试。 <code>package</code> 又可以单独发布，总体来说更便于维护，发版和阅读</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>monrepo 方式具体实现是<a href="https://pnpm.io/workspaces" target="_blank" rel="noopener noreferrer">PNPM Workspaces<ExternalLinkIcon/></a></li>
</ul>
</div>
<h3 id="vue3-创建实例" tabindex="-1"><a class="header-anchor" href="#vue3-创建实例" aria-hidden="true">#</a> <code>Vue3</code> 创建实例</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span>creatApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createVue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/**/</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2和3-注册全局组件或者更改全局配置对比" tabindex="-1"><a class="header-anchor" href="#_2和3-注册全局组件或者更改全局配置对比" aria-hidden="true">#</a> 2和3 注册全局组件或者更改全局配置对比</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* Vue2 */</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'my-component'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 选项 */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'my-directive'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/* Vue3 */</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'my-component'</span> <span class="token comment">/* */</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'my-directive'</span> <span class="token comment">/**/</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="源码入口" tabindex="-1"><a class="header-anchor" href="#源码入口" aria-hidden="true">#</a> 源码入口</h3>
<p>1、  找到 <code>createApp</code> 源码</p>
<p><code>import { createApp } from 'vue';</code></p>
<p>在vue源码里找到 <code>export * from '@vue/runtime-dom'</code></p>
<p>在<code>runtime-dom</code> 中 找到 <code>createApp</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token comment">// runtime-dom/index.ts</span>
    <span class="token keyword">export</span> <span class="token keyword">const</span> createApp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 真正的createApp 是在渲染器属性上</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">ensureRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">injectNativeTagCheck</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
        <span class="token function">injectCompilerOptionsCheck</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token operator">=</span> app
    app<span class="token punctuation">.</span>mount <span class="token operator">=</span> <span class="token punctuation">(</span>containerOrSelector<span class="token operator">:</span> Element <span class="token operator">|</span> ShadowRoot <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">any</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token function">normalizeContainer</span><span class="token punctuation">(</span>containerOrSelector<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>container<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token keyword">const</span> component <span class="token operator">=</span> app<span class="token punctuation">.</span>_component
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isFunction</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>component<span class="token punctuation">.</span>render <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>component<span class="token punctuation">.</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// __UNSAFE__</span>
        <span class="token comment">// Reason: potential execution of JS expressions in in-DOM template.</span>
        <span class="token comment">// The user must make sure the in-DOM template is trusted. If it's</span>
        <span class="token comment">// rendered by the server, the template should not contain any user data.</span>
        component<span class="token punctuation">.</span>template <span class="token operator">=</span> container<span class="token punctuation">.</span>innerHTML
        <span class="token comment">// 2.x compat check</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> __DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> container<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> attr <span class="token operator">=</span> container<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">'v-cloak'</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(v-|:|@)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                compatUtils<span class="token punctuation">.</span><span class="token function">warnDeprecation</span><span class="token punctuation">(</span>
                DeprecationTypes<span class="token punctuation">.</span><span class="token constant">GLOBAL_MOUNT_CONTAINER</span><span class="token punctuation">,</span>
                <span class="token keyword">null</span>
                <span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// clear content before mounting</span>
        container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span>
        <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> container <span class="token keyword">instanceof</span> <span class="token class-name">SVGElement</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>container <span class="token keyword">instanceof</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        container<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">'v-cloak'</span><span class="token punctuation">)</span>
        container<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-v-app'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> proxy
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> app
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> CreateAppFunction<span class="token operator">&lt;</span>Element<span class="token operator">></span>
    <span class="token doc-comment comment">/**
    * ensureRenderer 这里是为了执行 createApp时，才给renderer 渲染器赋值，也是优化的一点
    * 只导入reactive，没有执行createApp 不会执行 createRenderer
    * 那么打包时 tree-shaking 可以摇掉 runtime-core 这个模块
    * 
    * 在 runtime0-core 里调用 runtime-core 的 createRenderer 方法
    * 并传入 rendererOptins 这个 rendererOptions 里包含着浏览器的DOM API props
    * 例如 createElement insertBefore 等 可以在 runtime-dom/nodeOps.ts 里看
    * 
    * 
    * */</span>
    <span class="token keyword">function</span> <span class="token function">ensureRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        renderer <span class="token operator">||</span>
        <span class="token punctuation">(</span>renderer <span class="token operator">=</span> createRenderer<span class="token operator">&lt;</span>Node<span class="token punctuation">,</span> Element <span class="token operator">|</span> ShadowRoot<span class="token operator">></span><span class="token punctuation">(</span>rendererOptions<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><p>2、 找到真正的 <code>createApp</code></p>
<p>在 <code>runtime-dom/index.ts</code> 中找到 <code>createApp</code> 的定义，里面实现大致三步， 创建 <code>app</code> 应用实例，改写 <code>mount</code> 方法， 返回 <code>app</code> 应用实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
        <span class="token comment">//1. runtime-core.index.ts</span>
        <span class="token keyword">export</span> <span class="token punctuation">{</span> createRenderer<span class="token punctuation">,</span> createHydrationRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./renderer'</span>

        <span class="token comment">//2. runtime-core/renderer.ts</span>
        <span class="token keyword">export</span> <span class="token keyword">function</span> createRenderer<span class="token operator">&lt;</span>
            HostNode <span class="token operator">=</span> RendererNode<span class="token punctuation">,</span>
            HostElement <span class="token operator">=</span> RendererElement
            <span class="token operator">></span><span class="token punctuation">(</span>options<span class="token operator">:</span> RendererOptions<span class="token operator">&lt;</span>HostNode<span class="token punctuation">,</span> HostElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> baseCreateRenderer<span class="token operator">&lt;</span>HostNode<span class="token punctuation">,</span> HostElement<span class="token operator">></span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// implementation</span>
        <span class="token doc-comment comment">/**
         * 传入不同环境的 renderOpitons 就可以生成不同环境的render 
         * 
         **/</span>
        <span class="token keyword">function</span> <span class="token function">baseCreateRenderer</span><span class="token punctuation">(</span>
        <span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> RendererOptions<span class="token punctuation">,</span>
        createHydrationFns<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">typeof</span> createHydrationFunctions</span>
        <span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>

        <span class="token comment">// 这些变量最终都是为redner 里的patch服务的</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">insert</span><span class="token operator">:</span> hostInsert<span class="token punctuation">,</span>
            <span class="token literal-property property">remove</span><span class="token operator">:</span> hostRemove<span class="token punctuation">,</span>
            <span class="token literal-property property">patchProp</span><span class="token operator">:</span> hostPatchProp<span class="token punctuation">,</span>
            <span class="token literal-property property">createElement</span><span class="token operator">:</span> hostCreateElement<span class="token punctuation">,</span>
            <span class="token literal-property property">createText</span><span class="token operator">:</span> hostCreateText<span class="token punctuation">,</span>
            <span class="token literal-property property">createComment</span><span class="token operator">:</span> hostCreateComment<span class="token punctuation">,</span>
            <span class="token literal-property property">setText</span><span class="token operator">:</span> hostSetText<span class="token punctuation">,</span>
            <span class="token literal-property property">setElementText</span><span class="token operator">:</span> hostSetElementText<span class="token punctuation">,</span>
            <span class="token literal-property property">parentNode</span><span class="token operator">:</span> hostParentNode<span class="token punctuation">,</span>
            <span class="token literal-property property">nextSibling</span><span class="token operator">:</span> hostNextSibling<span class="token punctuation">,</span>
            <span class="token literal-property property">setScopeId</span><span class="token operator">:</span> hostSetScopeId <span class="token operator">=</span> <span class="token constant">NOOP</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cloneNode</span><span class="token operator">:</span> hostCloneNode<span class="token punctuation">,</span>
            <span class="token literal-property property">insertStaticContent</span><span class="token operator">:</span> hostInsertStaticContent
        <span class="token punctuation">}</span> <span class="token operator">=</span> options


        <span class="token comment">// 生成对应浏览器的render</span>
        <span class="token keyword">const</span> <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function-variable function">RootRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> isSVG</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">unmount</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 首次执行传入根组件</span>
            <span class="token comment">// 手指执行挂载过程</span>
            <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
        <span class="token punctuation">}</span>

        <span class="token comment">// TODO:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            render<span class="token punctuation">,</span><span class="token comment">// 把接受到的vnode装换成dom 追踪到宿主元素中</span>
            hydrate<span class="token punctuation">,</span><span class="token comment">// ssr 服务端将一个vnode生成html</span>
            <span class="token comment">// 以参数形式传入 createApp 中，最终供 app 实例里的mount 使用</span>
            <span class="token literal-property property">createApp</span><span class="token operator">:</span> <span class="token function">createAppAPI</span><span class="token punctuation">(</span>render<span class="token punctuation">,</span> hydrate<span class="token punctuation">)</span> <span class="token comment">// 创建APP 实例</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//3. runtime-core/apiCreateApp.ts</span>

        <span class="token keyword">export</span> <span class="token keyword">function</span> createAppAPI<span class="token operator">&lt;</span>HostElement<span class="token operator">></span><span class="token punctuation">(</span>
            <span class="token literal-property property">render</span><span class="token operator">:</span> RootRenderFunction<span class="token punctuation">,</span>
            hydrate<span class="token operator">?</span><span class="token operator">:</span> RootHydrateFunction
            <span class="token punctuation">)</span><span class="token operator">:</span> CreateAppFunction<span class="token operator">&lt;</span>HostElement<span class="token operator">></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token parameter">rootComponent<span class="token punctuation">,</span> rootProps <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                
                <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createAppContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">const</span> installedPlugins <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                <span class="token keyword">let</span> isMounted <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token comment">// 声明一个实例</span>
                <span class="token keyword">const</span> <span class="token literal-property property">app</span><span class="token operator">:</span> App <span class="token operator">=</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">_uid</span><span class="token operator">:</span> uid<span class="token operator">++</span><span class="token punctuation">,</span>
                <span class="token literal-property property">_component</span><span class="token operator">:</span> rootComponent <span class="token keyword">as</span> ConcreteComponent<span class="token punctuation">,</span>
                <span class="token literal-property property">_props</span><span class="token operator">:</span> rootProps<span class="token punctuation">,</span>
                <span class="token literal-property property">_container</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token literal-property property">_context</span><span class="token operator">:</span> context<span class="token punctuation">,</span>
                <span class="token literal-property property">_instance</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

                version<span class="token punctuation">,</span>

                <span class="token keyword">get</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> context<span class="token punctuation">.</span>config
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token keyword">set</span> <span class="token function">config</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plugin</span><span class="token operator">:</span> Plugin<span class="token punctuation">,</span> <span class="token operator">...</span>options<span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// ...</span>
                    <span class="token keyword">return</span> app
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">mixin</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mixin</span><span class="token operator">:</span> ComponentOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// ...</span>
                    <span class="token keyword">return</span> app
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">component</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> component<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
                   <span class="token comment">// ...</span>
                    <span class="token keyword">return</span> app
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">directive</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> directive<span class="token operator">?</span><span class="token operator">:</span> Directive</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                   <span class="token comment">// ...</span>
                    <span class="token keyword">return</span> app
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token doc-comment comment">/**
                 *  在项目里创建app实例，再 mount 到某个节点
                 *  最终会执行到这里， App 组件作为 rootComponent，render 是浏览器环境的渲染器
                 * */</span>
                <span class="token function">mount</span><span class="token punctuation">(</span>
                    <span class="token literal-property property">rootContainer</span><span class="token operator">:</span> HostElement<span class="token punctuation">,</span><span class="token comment">// 宿主对象</span>
                    isHydrate<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
                    isSVG<span class="token operator">?</span><span class="token operator">:</span> boolean
                <span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
                    <span class="token comment">// 首次执行</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 创建根组件虚拟dom</span>
                    <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>
                        rootComponent <span class="token keyword">as</span> ConcreteComponent<span class="token punctuation">,</span>
                        rootProps
                    <span class="token punctuation">)</span>
                    <span class="token comment">// store app context on the root VNode.</span>
                    <span class="token comment">// this will be set on the root instance on initial mount.</span>
                    vnode<span class="token punctuation">.</span>appContext <span class="token operator">=</span> context

                    <span class="token comment">// HMR root reload</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        context<span class="token punctuation">.</span><span class="token function-variable function">reload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token function">render</span><span class="token punctuation">(</span><span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">,</span> rootContainer<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>isHydrate <span class="token operator">&amp;&amp;</span> hydrate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">hydrate</span><span class="token punctuation">(</span>vnode <span class="token keyword">as</span> VNode<span class="token operator">&lt;</span>Node<span class="token punctuation">,</span> Element<span class="token operator">></span><span class="token punctuation">,</span> rootContainer <span class="token keyword">as</span> any<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 生成真是dom</span>
                        <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> rootContainer<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
                    app<span class="token punctuation">.</span>_container <span class="token operator">=</span> rootContainer
                    <span class="token comment">// for devtools and telemetry</span>
                    <span class="token punctuation">;</span><span class="token punctuation">(</span>rootContainer <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__vue_app__ <span class="token operator">=</span> app

                    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        app<span class="token punctuation">.</span>_instance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>component
                        <span class="token function">devtoolsInitApp</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> version<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>

                    <span class="token keyword">return</span> <span class="token function">getExposeProxy</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token operator">||</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">.</span>proxy
                    <span class="token punctuation">}</span> 
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> app<span class="token punctuation">.</span>_container<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        app<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token keyword">null</span>
                        <span class="token function">devtoolsUnmountApp</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token keyword">delete</span> app<span class="token punctuation">.</span>_container<span class="token punctuation">.</span>__vue_app__
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Cannot unmount an app that is not mounted.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

                <span class="token function">provide</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>key <span class="token keyword">as</span> string <span class="token operator">|</span> symbol<span class="token punctuation">)</span> <span class="token keyword">in</span> context<span class="token punctuation">.</span>provides<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">warn</span><span class="token punctuation">(</span>
                        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">App already provides property with key "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">". </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
                        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">It will be overwritten with the new value.</span><span class="token template-punctuation string">`</span></span>
                    <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token comment">// TypeScript doesn't allow symbols as index type</span>
                    <span class="token comment">// https://github.com/Microsoft/TypeScript/issues/24587</span>
                    context<span class="token punctuation">.</span>provides<span class="token punctuation">[</span>key <span class="token keyword">as</span> string<span class="token punctuation">]</span> <span class="token operator">=</span> value

                    <span class="token keyword">return</span> app
                <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">installAppCompatProperties</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> context<span class="token punctuation">,</span> render<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> app
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br></div></div><p><code>.mount('#app')</code> 并不是直接执行app 实例里的mount,这里的mount 方法是 <code>runtime-core</code> 里与平台无关。事实上 <code>runtime-dom</code> 有重写过 <code>mount</code> 亦是针对浏览器环境。</p>
<h2 id="vue3-的响应式" tabindex="-1"><a class="header-anchor" href="#vue3-的响应式" aria-hidden="true">#</a> Vue3 的响应式</h2>
<h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h3>
<p><code>Vue2</code> 内部通过<code>Object.defineProperty</code> API 劫持数据的变化，深度遍历 data 函数里的对象，给对象每个属性设置 <code>getter</code> <code>setter</code></p>
<p>触发 <code>getter</code> 会通过 <code>Dep</code> 类做依赖收集操作，收集当前 <code>Dep.target</code>, 也就是 <code>watcher</code>.</p>
<p>触发<code>setter</code>, 会做派发更新操作，执行 <code>dep.notify</code> 通知收集到的各类 <code>watcher</code> 更新，如 <code>computed</code> <code>watcher</code> <code>user watcher</code> <code>渲染 watcher</code></p>
<p><code>Vue3</code> 用 <code>Proxy</code> 重构了响应式部分， <code>effect</code> 副作用函数替代了<code>watcher</code></p>
<p><code>Proxy</code> 的 <code>get</code> handle 里执行 <code>track()</code> 用来跟踪收集依赖（收集<code>activeEffect</code> 也就是 <code>effect</code>）</p>
<p><code>set</code> handle 里执行 <code>trigger()</code> 用来触发响应（执行收集的<code>effect</code>）</p>
<h3 id="独立的响应式" tabindex="-1"><a class="header-anchor" href="#独立的响应式" aria-hidden="true">#</a> 独立的响应式</h3>
<p><code>reactivity</code> 可以单独安装使用例如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>effect<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span>  <span class="token operator">=</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@vue/reactivity'</span><span class="token punctuation">)</span>
<span class="token comment">// 调用 reactive 定义响应式数据，也就是 proxy 设置 get, set, handle</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">num</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// effect 定义副作用函数</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>num<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 修改num, trigger 触发响应，执行effect</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token operator">++</span>obj<span class="token punctuation">.</span>num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="reactive-源码" tabindex="-1"><a class="header-anchor" href="#reactive-源码" aria-hidden="true">#</a> reactive 源码</h4>
<p><code>ReactiveFlags</code> 枚举</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/reactivity/reactive.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> ReactiveFlags <span class="token punctuation">{</span>
  <span class="token constant">SKIP</span> <span class="token operator">=</span> <span class="token string">'__v_skip'</span><span class="token punctuation">,</span> <span class="token comment">// 这个属性值为 true 的对象都会跳过代理</span>
  <span class="token constant">IS_REACTIVE</span> <span class="token operator">=</span> <span class="token string">'__v_isReactive'</span><span class="token punctuation">,</span> <span class="token comment">// 获取是否是响应式</span>
  <span class="token constant">IS_READONLY</span> <span class="token operator">=</span> <span class="token string">'__v_isReadonly'</span><span class="token punctuation">,</span><span class="token comment">// 是否是只读</span>
  <span class="token constant">IS_SHALLOW</span> <span class="token operator">=</span> <span class="token string">'__v_isShallow'</span><span class="token punctuation">,</span> <span class="token comment">// 是否是不执行嵌套对象的深层响应式转换</span>
  <span class="token constant">RAW</span> <span class="token operator">=</span> <span class="token string">'__v_raw'</span> <span class="token comment">// 这个属性会应用到原始对象</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if trying to observe a readonly proxy, return the readonly version.</span>
  <span class="token comment">// 如果是只读响应式数据，直接返回本身</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span> <span class="token comment">// 对象</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//  是否只读</span>
    mutableHandlers<span class="token punctuation">,</span> <span class="token comment">// proxy handle</span>
    mutableCollectionHandlers<span class="token punctuation">,</span> <span class="token comment">// 集合数据的 proxy handle</span>
    reactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Target<span class="token punctuation">,</span>
  <span class="token literal-property property">isReadonly</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
  <span class="token literal-property property">baseHandlers</span><span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">collectionHandlers</span><span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">proxyMap</span><span class="token operator">:</span> WeakMap<span class="token operator">&lt;</span>Target<span class="token punctuation">,</span> any<span class="token operator">></span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不是对象之间返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">value cannot be made reactive: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">String</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target is already a Proxy, return it.</span>
  <span class="token comment">// exception: calling readonly() on a reactive object</span>
  <span class="token comment">// 如果已经是响应式对象直接返回，除非是 readonly 作用在这个响应式对象上</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span>isReadonly <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target already has corresponding Proxy</span>
  <span class="token comment">//  对象已经是响应式直接返回</span>
  <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existingProxy
  <span class="token punctuation">}</span>
  <span class="token comment">// only a whitelist of value types can be observed.</span>
<span class="token comment">// 只有白名单的值类型可以响应</span>
  <span class="token keyword">const</span> targetType <span class="token operator">=</span> <span class="token function">getTargetType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">INVALID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// 使用proxy 创建想回应是对象</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span> <span class="token operator">?</span> collectionHandlers <span class="token operator">:</span> baseHandlers
  <span class="token punctuation">)</span>
  <span class="token comment">// 存入缓存 map 中</span>
  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><p><code>baseHandlers</code> 里面劫持操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/reactivity/baseHandlers.ts</span>
<span class="token comment">// 普通对象的 handlers</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">mutableHandlers</span><span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>object<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token punctuation">,</span> <span class="token comment">// 访问对象属性的 handler</span>
  set<span class="token punctuation">,</span> <span class="token comment">// 设置对象属性的 handeler</span>
  deleteProperty<span class="token punctuation">,</span><span class="token comment">// 删除对象属性的handler</span>
  has<span class="token punctuation">,</span><span class="token comment">// 针对 in 操作符的handler</span>
  ownKeys<span class="token comment">// 对象上 getOenPropertyNames, getOwnPropertySymbols, keys 等方法的handler</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>Proxy</code> 弥补了 <code>Object.defineProperty</code> 需要递归对象，给每个属性设置<code>setter</code> <code>getter</code> ,无法劫持一次额其他操作，数组也需要hack 处理新增属性需要额外的方法，Map, Set, weekmap 等数据结构无法响应式等不足；</p>
<h4 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> effect</h4>
<p><code>effect</code> 方法里传入 函数 <code>()=&gt;{console.log(obj.num)}</code> 函数里访问了响应式对象 obj 的num 属性，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/reactivity/effect.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> effect<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> any<span class="token operator">></span><span class="token punctuation">(</span>
 <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span><span class="token punctuation">,</span>
 options<span class="token operator">?</span><span class="token operator">:</span> ReactiveEffectOptions
<span class="token punctuation">)</span><span class="token operator">:</span> ReactiveEffectRunner <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>fn <span class="token keyword">as</span> ReactiveEffectRunner<span class="token punctuation">)</span><span class="token punctuation">.</span>effect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 1. 如果fn 里有effect 函数标识，就指向原始函数，在下面ReactiveEffect可以看到fn的定义</span>
   fn <span class="token operator">=</span> <span class="token punctuation">(</span>fn <span class="token keyword">as</span> ReactiveEffectRunner<span class="token punctuation">)</span><span class="token punctuation">.</span>effect<span class="token punctuation">.</span>fn
 <span class="token punctuation">}</span>

   <span class="token comment">// 2. 创建一个响应式副作用函数</span>
 <span class="token keyword">const</span> _effect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactiveEffect</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">extend</span><span class="token punctuation">(</span>_effect<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>scope<span class="token punctuation">)</span> <span class="token function">recordEffectScope</span><span class="token punctuation">(</span>_effect<span class="token punctuation">,</span> options<span class="token punctuation">.</span>scope<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options <span class="token operator">||</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 执行 effect, 这个没有像 computed watcher 的lazy属性，若为true 就不立即执行</span>
   _effect<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">const</span> runner <span class="token operator">=</span> _effect<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>_effect<span class="token punctuation">)</span> <span class="token keyword">as</span> ReactiveEffectRunner
 runner<span class="token punctuation">.</span>effect <span class="token operator">=</span> _effect
 <span class="token comment">// 返回 effect 函数</span>
 <span class="token keyword">return</span> runner
<span class="token punctuation">}</span>

<span class="token comment">// The number of effects currently being tracked recursively.</span>
<span class="token keyword">let</span> effectTrackDepth <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> trackOpBit <span class="token operator">=</span> <span class="token number">1</span>

<span class="token doc-comment comment">/**
* The bitwise track markers support at most 30 levels of recursion.
* This value is chosen to enable modern JS engines to use a SMI on all platforms.
* When recursion depth is greater, fall back to using a full cleanup.
*/</span>
<span class="token keyword">const</span> maxMarkerBits <span class="token operator">=</span> <span class="token number">30</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ReactiveEffect</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> any<span class="token operator">></span> <span class="token punctuation">{</span>
 active <span class="token operator">=</span> <span class="token boolean">true</span>
 <span class="token literal-property property">deps</span><span class="token operator">:</span> Dep<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
 <span class="token literal-property property">parent</span><span class="token operator">:</span> ReactiveEffect <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

 <span class="token doc-comment comment">/**
  * Can be attached after creation
  * <span class="token keyword">@internal</span>
  */</span>
 computed<span class="token operator">?</span><span class="token operator">:</span> ComputedRefImpl<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span>
 <span class="token doc-comment comment">/**
  * <span class="token keyword">@internal</span>
  */</span>
 allowRecurse<span class="token operator">?</span><span class="token operator">:</span> boolean

 onStop<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
 <span class="token comment">// dev only</span>
 onTrack<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> DebuggerEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
 <span class="token comment">// dev only</span>
 onTrigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> DebuggerEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>

 <span class="token function">constructor</span><span class="token punctuation">(</span>
   <span class="token keyword">public</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">T</span><span class="token punctuation">,</span>
   <span class="token keyword">public</span> <span class="token literal-property property">scheduler</span><span class="token operator">:</span> EffectScheduler <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
   scope<span class="token operator">?</span><span class="token operator">:</span> EffectScope
 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">recordEffectScope</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> scope<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> <span class="token literal-property property">parent</span><span class="token operator">:</span> ReactiveEffect <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> activeEffect
   <span class="token keyword">let</span> lastShouldTrack <span class="token operator">=</span> shouldTrack
   <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span>
     <span class="token punctuation">}</span>
     parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>parent
   <span class="token punctuation">}</span>
   <span class="token keyword">try</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> activeEffect
     activeEffect <span class="token operator">=</span> <span class="token keyword">this</span>
     shouldTrack <span class="token operator">=</span> <span class="token boolean">true</span>

     trackOpBit <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">++</span>effectTrackDepth

     <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTrackDepth <span class="token operator">&lt;=</span> maxMarkerBits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">initDepMarkers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token function">cleanupEffect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTrackDepth <span class="token operator">&lt;=</span> maxMarkerBits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">finalizeDepMarkers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>

     trackOpBit <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">--</span>effectTrackDepth

     activeEffect <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent
     shouldTrack <span class="token operator">=</span> lastShouldTrack
     <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 清除不需要的依赖</span>
     <span class="token function">cleanupEffect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onStop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">cleanupEffect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">effect</span><span class="token operator">:</span> ReactiveEffect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// deps 是一个数组包着 Set集合的数据结构</span>
   <span class="token comment">// [Set1(...), Set2(...),...] 每个Set 就是 Targetmap里的dep</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span> deps <span class="token punctuation">}</span> <span class="token operator">=</span> effect
 <span class="token keyword">if</span> <span class="token punctuation">(</span>deps<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> deps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   deps<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br></div></div><h4 id="get-收集依赖" tabindex="-1"><a class="header-anchor" href="#get-收集依赖" aria-hidden="true">#</a> get 收集依赖</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">// packages/reactivity/baseHandlers.ts</span>
<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Target<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> symbol<span class="token punctuation">,</span> <span class="token literal-property property">receiver</span><span class="token operator">:</span> object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// ReactiveFlags 枚举，判断获取到相应的值，都是私有属性，拿到值返回即可</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token operator">!</span>isReadonly
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_READONLY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> isReadonly
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_SHALLOW</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> shallow
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
     key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span> <span class="token operator">&amp;&amp;</span>
     receiver <span class="token operator">===</span>
       <span class="token punctuation">(</span>isReadonly
         <span class="token operator">?</span> shallow
           <span class="token operator">?</span> shallowReadonlyMap
           <span class="token operator">:</span> readonlyMap
         <span class="token operator">:</span> shallow
         <span class="token operator">?</span> shallowReactiveMap
         <span class="token operator">:</span> reactiveMap
       <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
   <span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> target
   <span class="token punctuation">}</span>

   <span class="token comment">// </span>

   <span class="token keyword">const</span> targetIsArray <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
       <span class="token comment">// 对Array ['includes'， 'indexOf' ,'lastIndexOf'] 数组改变，这方法的结果可能会发生改变，所以要特殊处理</span>
       <span class="token comment">// 例如 执行arr.includes('xxx') 时，会跟踪 arr数组每个元素下标</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly <span class="token operator">&amp;&amp;</span> targetIsArray <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 利用 Reflect 映射返回值</span>
   <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSymbol</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">?</span> builtInSymbols<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">isNonTrackableKeys</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 判断原生方法等，直接返回，不跟踪</span>
     <span class="token keyword">return</span> res
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// track 依赖收集</span>
     <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TrackOpTypes<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 浅响应式</span>
     <span class="token keyword">return</span> res
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// ref unwrapping - does not apply for Array + integer key.</span>
     <span class="token comment">// 这里 ref 响应时 不包裹 数组和 integer key</span>
     <span class="token keyword">const</span> shouldUnwrap <span class="token operator">=</span> <span class="token operator">!</span>targetIsArray <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
     <span class="token keyword">return</span> shouldUnwrap <span class="token operator">?</span> res<span class="token punctuation">.</span>value <span class="token operator">:</span> res
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// Convert returned value into a proxy as well. we do the isObject check</span>
     <span class="token comment">// here to avoid invalid value warning. Also need to lazy access readonly</span>
     <span class="token comment">// and reactive here to avoid circular dependency.</span>
     <span class="token comment">// 子对象也要递归劫持，</span>
     <span class="token comment">// 如果属性时对象就转成响应式对象</span>
     <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> res
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div><p>来看看track源码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/reactivity/effect.ts</span>
<span class="token comment">// 当前激活的 effect</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">activeEffect</span><span class="token operator">:</span> ReactiveEffect <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token comment">// 判断是否需要收集</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> shouldTrack <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">// 原始对象作为健，值也是一个 weakMap，effect集合为value 属性名作为 key</span>
<span class="token keyword">const</span> targetMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token operator">&lt;</span>any<span class="token punctuation">,</span> KeyToDepMap<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> object<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> TrackOpTypes<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrack <span class="token operator">&amp;&amp;</span> activeEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     targetMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> dep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token function">createDep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// 以上判断，缓存最终形成 targetMap 这样的数据结构</span>
    <span class="token doc-comment comment">/** 
  *  targetMap = <span class="token punctuation">{</span>
  *    [target]: <span class="token punctuation">{</span>
  *      [key]: new Set([ effect,... ])
  *    <span class="token punctuation">}</span>
  *  <span class="token punctuation">}</span>
  * */</span>

   <span class="token keyword">const</span> eventInfo <span class="token operator">=</span> __DEV__
     <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">effect</span><span class="token operator">:</span> activeEffect<span class="token punctuation">,</span> target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> key <span class="token punctuation">}</span>
     <span class="token operator">:</span> <span class="token keyword">undefined</span>

   <span class="token function">trackEffects</span><span class="token punctuation">(</span>dep<span class="token punctuation">,</span> eventInfo<span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trackEffects</span><span class="token punctuation">(</span>
 <span class="token parameter"><span class="token literal-property property">dep</span><span class="token operator">:</span> Dep<span class="token punctuation">,</span>
 debuggerEventExtraInfo<span class="token operator">?</span><span class="token operator">:</span> DebuggerEventExtraInfo</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> shouldTrack <span class="token operator">=</span> <span class="token boolean">false</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTrackDepth <span class="token operator">&lt;=</span> maxMarkerBits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">newTracked</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     dep<span class="token punctuation">.</span>n <span class="token operator">|=</span> trackOpBit <span class="token comment">// set newly tracked</span>
     shouldTrack <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">wasTracked</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token comment">// Full cleanup mode.</span>
   shouldTrack <span class="token operator">=</span> <span class="token operator">!</span>dep<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>activeEffect<span class="token operator">!</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   dep<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token operator">!</span><span class="token punctuation">)</span>
   <span class="token comment">// 当前激活的 effect 也会存储dep 集合，配合 effect 里的cleanup 清除不需要的依赖</span>
   activeEffect<span class="token operator">!</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> activeEffect<span class="token operator">!</span><span class="token punctuation">.</span>onTrack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     activeEffect<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">onTrack</span><span class="token punctuation">(</span>
       Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
         <span class="token punctuation">{</span>
           <span class="token literal-property property">effect</span><span class="token operator">:</span> activeEffect<span class="token operator">!</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         debuggerEventExtraInfo
       <span class="token punctuation">)</span>
     <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h4 id="set-派发更新" tabindex="-1"><a class="header-anchor" href="#set-派发更新" aria-hidden="true">#</a> set 派发更新</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/reactivity/baseHandlers.ts</span>
<span class="token keyword">function</span> <span class="token function">createSetter</span><span class="token punctuation">(</span><span class="token parameter">shallow <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> object<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> symbol<span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span>
    <span class="token literal-property property">receiver</span><span class="token operator">:</span> object</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
      <span class="token comment">// 获取old值</span>
    <span class="token keyword">let</span> oldValue <span class="token operator">=</span> <span class="token punctuation">(</span>target <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isRef</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isShallow</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果是响应式对象获取原始对象</span>
        value <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        oldValue <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isRef</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 如果old值是 ref 响应对象，而新值不是，那更新老的响应对象 value值</span>
        oldValue<span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// in shallow mode, objects are set as-is regardless of reactive or not</span>
    <span class="token punctuation">}</span>

<span class="token comment">// 判断当前set 的key 是否存在 target 上</span>
    <span class="token keyword">const</span> hadKey <span class="token operator">=</span>
      <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&lt;</span> target<span class="token punctuation">.</span>length
        <span class="token operator">:</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token comment">// refelct.set 求值</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token comment">// don't trigger if target is something up in the prototype chain of original</span>
    <span class="token comment">// 如果target 是原始数据原型链上的属性不触发tigger</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 没有key 就新增有酒set set 会多一个oldValue</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hadKey<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// packages/reactivity/src/effect.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> object<span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> TriggerOpTypes<span class="token punctuation">,</span>
  key<span class="token operator">?</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span>
  newValue<span class="token operator">?</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span>
  oldValue<span class="token operator">?</span><span class="token operator">:</span> unknown<span class="token punctuation">,</span>
  oldTarget<span class="token operator">?</span><span class="token operator">:</span> Map<span class="token operator">&lt;</span>unknown<span class="token punctuation">,</span> unknown<span class="token operator">></span> <span class="token operator">|</span> Set<span class="token operator">&lt;</span>unknown<span class="token operator">></span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 从之前track里存储的targetMap 里取出对应 desMap</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// never been tracked</span>
    <span class="token comment">// 如果没有依赖，直接返回，不会触发后面 effect 的执行</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">(</span>Dep <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">CLEAR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// collection being cleared</span>
    <span class="token comment">// trigger all effects for target</span>
    deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>depsMap<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'length'</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    depsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dep<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'length'</span> <span class="token operator">||</span> key <span class="token operator">>=</span> <span class="token punctuation">(</span>newValue <span class="token keyword">as</span> number<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// schedule runs for SET | ADD | DELETE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// also run for iteration key on ADD | DELETE | Map.SET</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">ADD</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">MAP_KEY_ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// new index added to array -> length changes</span>
          deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'length'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">MAP_KEY_ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> TriggerOpTypes<span class="token punctuation">.</span><span class="token constant">SET</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMap</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">ITERATE_KEY</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> eventInfo <span class="token operator">=</span> __DEV__
    <span class="token operator">?</span> <span class="token punctuation">{</span> target<span class="token punctuation">,</span> type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> oldTarget <span class="token punctuation">}</span>
    <span class="token operator">:</span> <span class="token keyword">undefined</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>deps<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">triggerEffects</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> eventInfo<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">triggerEffects</span><span class="token punctuation">(</span>deps<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">effects</span><span class="token operator">:</span> ReactiveEffect<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dep <span class="token keyword">of</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        effects<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>dep<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">triggerEffects</span><span class="token punctuation">(</span><span class="token function">createDep</span><span class="token punctuation">(</span>effects<span class="token punctuation">)</span><span class="token punctuation">,</span> eventInfo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建dep去执行</span>
      <span class="token function">triggerEffects</span><span class="token punctuation">(</span><span class="token function">createDep</span><span class="token punctuation">(</span>effects<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triggerEffects</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">dep</span><span class="token operator">:</span> Dep <span class="token operator">|</span> ReactiveEffect<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  debuggerEventExtraInfo<span class="token operator">?</span><span class="token operator">:</span> DebuggerEventExtraInfo</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// spread into array for stabilization</span>
  <span class="token comment">// 循环执行</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effect <span class="token keyword">of</span> <span class="token function">isArray</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span> <span class="token operator">?</span> dep <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>dep<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>effect <span class="token operator">!==</span> activeEffect <span class="token operator">||</span> effect<span class="token punctuation">.</span>allowRecurse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> effect<span class="token punctuation">.</span>onTrigger<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        effect<span class="token punctuation">.</span><span class="token function">onTrigger</span><span class="token punctuation">(</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span> effect <span class="token punctuation">}</span><span class="token punctuation">,</span> debuggerEventExtraInfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 一个调度器可以去做排序，去重放入 nexttick 中异步执行</span>
      <span class="token comment">// 这个调度器我们也是可以自定义的</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>effect<span class="token punctuation">.</span>scheduler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        effect<span class="token punctuation">.</span><span class="token function">scheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 开始执行</span>
        effect<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br></div></div><h2 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h2>
<p>1、normalizContainer 得到DOM 容器</p>
<p>2、 createVNode 根据传入的APP 组件 创建VNode</p>
<p>3、renderVNode 并挂载到DOM 容器上</p>
<p>4、返回VNode.component 的代理</p>
<h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3>
<p>1、获取DOM容器
2、 判断传入的根组件
3、 执行标准的 <code>mount</code> 方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
  <span class="token comment">// packages/runtime-dom/src/index.ts</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token operator">=</span> app
  app<span class="token punctuation">.</span>mount <span class="token operator">=</span> <span class="token punctuation">(</span>containerOrSelector<span class="token operator">:</span> Element <span class="token operator">|</span> ShadowRoot <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">any</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 统一容器，mount 参数可能是DOM对象或者选择器</span>
    <span class="token comment">// 如果是选择器酒获取对应的DOM</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token function">normalizeContainer</span><span class="token punctuation">(</span>containerOrSelector<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>container<span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token comment">// app._component 是 通过 rootComponent 参数 传入打包编译过的APP组件</span>
    <span class="token keyword">const</span> component <span class="token operator">=</span> app<span class="token punctuation">.</span>_component
    <span class="token comment">// 如果传入的组件没有定义 render, 没有模版，那就取DOM 里原本内容当作模版</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isFunction</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>component<span class="token punctuation">.</span>render <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>component<span class="token punctuation">.</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// __UNSAFE__</span>
      <span class="token comment">// Reason: potential execution of JS expressions in in-DOM template.</span>
      <span class="token comment">// The user must make sure the in-DOM template is trusted. If it's</span>
      <span class="token comment">// rendered by the server, the template should not contain any user data.</span>
      component<span class="token punctuation">.</span>template <span class="token operator">=</span> container<span class="token punctuation">.</span>innerHTML
      <span class="token comment">// 2.x compat check</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> __DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> container<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> attr <span class="token operator">=</span> container<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">'v-cloak'</span> <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(v-|:|@)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>attr<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            compatUtils<span class="token punctuation">.</span><span class="token function">warnDeprecation</span><span class="token punctuation">(</span>
              DeprecationTypes<span class="token punctuation">.</span><span class="token constant">GLOBAL_MOUNT_CONTAINER</span><span class="token punctuation">,</span>
              <span class="token keyword">null</span>
            <span class="token punctuation">)</span>
            <span class="token keyword">break</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// clear content before mounting</span>
    <span class="token comment">// 加载前清空html内容</span>
    container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span>
    <span class="token comment">// 获取基础的mount 方法</span>
    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> container <span class="token keyword">instanceof</span> <span class="token class-name">SVGElement</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>container <span class="token keyword">instanceof</span> <span class="token class-name">Element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      container<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">'v-cloak'</span><span class="token punctuation">)</span>
      container<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-v-app'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> proxy
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="标准的可跨平台的-mount-方法" tabindex="-1"><a class="header-anchor" href="#标准的可跨平台的-mount-方法" aria-hidden="true">#</a> 标准的可跨平台的 <code>mount</code> 方法</h3>
<p>1、创建VNode
2、渲染Vnode 为真实DOM</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// packages/runtime-core/src/apiCreateApp.ts</span>
      <span class="token function">mount</span><span class="token punctuation">(</span>
        <span class="token literal-property property">rootContainer</span><span class="token operator">:</span> HostElement<span class="token punctuation">,</span><span class="token comment">// 宿主对象</span>
        isHydrate<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
        isSVG<span class="token operator">?</span><span class="token operator">:</span> boolean
      <span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
        <span class="token comment">// app 应用示范已经挂载</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 1.创建VNode 这里的 rootComponent 就是 createApp 传入的 App 组件</span>
          <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>
            rootComponent <span class="token keyword">as</span> ConcreteComponent<span class="token punctuation">,</span>
            rootProps
          <span class="token punctuation">)</span>
          <span class="token comment">// store app context on the root VNode.</span>
          <span class="token comment">// this will be set on the root instance on initial mount.</span>
          <span class="token comment">// 存储 app应用的上下文，主要有 app 实例本身，各类配置项，设置项</span>
          vnode<span class="token punctuation">.</span>appContext <span class="token operator">=</span> context

          <span class="token comment">// HMR root reload</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            context<span class="token punctuation">.</span><span class="token function-variable function">reload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">render</span><span class="token punctuation">(</span><span class="token function">cloneVNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span><span class="token punctuation">,</span> rootContainer<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 判断是否是服务端相关渲染</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>isHydrate <span class="token operator">&amp;&amp;</span> hydrate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">hydrate</span><span class="token punctuation">(</span>vnode <span class="token keyword">as</span> VNode<span class="token operator">&lt;</span>Node<span class="token punctuation">,</span> Element<span class="token operator">></span><span class="token punctuation">,</span> rootContainer <span class="token keyword">as</span> any<span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// render 渲染Vnode</span>
            <span class="token comment">// render 是 ensureRenderer 创建出来的</span>
            <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> rootContainer<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          isMounted <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token comment">// 存储 DOM 容器</span>
          app<span class="token punctuation">.</span>_container <span class="token operator">=</span> rootContainer
          <span class="token comment">// for devtools and telemetry</span>
          <span class="token punctuation">;</span><span class="token punctuation">(</span>rootContainer <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__vue_app__ <span class="token operator">=</span> app

          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            app<span class="token punctuation">.</span>_instance <span class="token operator">=</span> vnode<span class="token punctuation">.</span>component
            <span class="token function">devtoolsInitApp</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> version<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">return</span> <span class="token function">getExposeProxy</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token operator">||</span> vnode<span class="token punctuation">.</span>component<span class="token operator">!</span><span class="token punctuation">.</span>proxy
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">App has already been mounted.\n</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">If you want to remount the same app, move your app creation logic </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">into a factory function and create fresh app instances for each </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mount - e.g. \`const createMyApp = () => createApp(App)\`</span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="创建-渲染vnode" tabindex="-1"><a class="header-anchor" href="#创建-渲染vnode" aria-hidden="true">#</a> 创建&amp;渲染VNode</h3>
<p>VNode: 通过Javascript 对象描述DOM、事件</p>
<p>好处：
1、不用频繁更改DOM</p>
<p>2、抽象化带来跨平台能力</p>
<p>3、VNode 操作 对比直接操作DOM 产生性能优势（数据量大没有明显优势）</p>
<h4 id="创建vnode" tabindex="-1"><a class="header-anchor" href="#创建vnode" aria-hidden="true">#</a> 创建VNode</h4>
<p>1、判断是否为 VNode, Class 组件，有 props则进行 class style 标准化转换</p>
<p>2、判断组件类型，计算出标示 得出 4</p>
<p>3、创建VNode</p>
<p>4、标准化子节点，这里传入App 组件时，children为null</p>
<p>5、返回VNode</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/vnode.ts</span>
<span class="token keyword">function</span> <span class="token function">_createVNode</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> VNodeTypes <span class="token operator">|</span> ClassComponent <span class="token operator">|</span> <span class="token keyword">typeof</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">(</span>Data <span class="token operator">&amp;</span> VNodeProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> unknown <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">patchFlag</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dynamicProps</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  isBlockNode <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>type <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Invalid vnode type when creating vnode: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    type <span class="token operator">=</span> Comment
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果是VNode 直接clone 通过 _v_isVNode 属性判断</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isVNode</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// createVNode receiving an existing vnode. This happens in cases like</span>
    <span class="token comment">// &lt;component :is="vnode"/></span>
    <span class="token comment">// #2078 make sure to merge refs during the clone instead of overwriting it</span>
    <span class="token keyword">const</span> cloned <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* mergeRef: true */</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>cloned<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cloned
  <span class="token punctuation">}</span>

  <span class="token comment">// class component normalization.</span>
  <span class="token comment">// 类组件</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isClassComponent</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> type<span class="token punctuation">.</span>__vccOpts
  <span class="token punctuation">}</span>

  <span class="token comment">// 2.x async/functional component compat</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token function">convertLegacyComponent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> currentRenderingInstance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// class &amp; style normalization.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// for reactive or proxy objects, we need to clone it to enable mutation.</span>
    props <span class="token operator">=</span> <span class="token function">guardReactiveProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> klass<span class="token punctuation">,</span> style <span class="token punctuation">}</span> <span class="token operator">=</span> props
    <span class="token keyword">if</span> <span class="token punctuation">(</span>klass <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isString</span><span class="token punctuation">(</span>klass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">.</span>class <span class="token operator">=</span> <span class="token function">normalizeClass</span><span class="token punctuation">(</span>klass<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// reactive state objects need to be cloned since they are likely to be</span>
      <span class="token comment">// mutated</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        style <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> style<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      props<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token function">normalizeStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// encode the vnode type information into a bitmap</span>
  <span class="token comment">// 给组件类型增加一个编码标示</span>
  <span class="token keyword">const</span> shapeFlag <span class="token operator">=</span> <span class="token function">isString</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span> <span class="token comment">// dom 元素</span>
    <span class="token operator">:</span> __FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> <span class="token function">isSuspense</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span> <span class="token comment">// suspense vue3 新增组件</span>
    <span class="token operator">:</span> <span class="token function">isTeleport</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span> <span class="token comment">// teleport vue3 新增的组件</span>
    <span class="token operator">:</span> <span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token comment">// 组件状态</span>
    <span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span> <span class="token comment">// 函数组件</span>
    <span class="token operator">:</span> <span class="token number">0</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isProxy</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Vue received a Component which was made a reactive object. This can </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">lead to unnecessary performance overhead, and should be avoided by </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">marking the component with \`markRaw\` or using \`shallowRef\` </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">instead of \`ref\`.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\nComponent that was made reactive: </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      type
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">createBaseVNode</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    patchFlag<span class="token punctuation">,</span>
    dynamicProps<span class="token punctuation">,</span>
    shapeFlag<span class="token punctuation">,</span>
    isBlockNode<span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">createBaseVNode</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> VNodeTypes <span class="token operator">|</span> ClassComponent <span class="token operator">|</span> <span class="token keyword">typeof</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">(</span>Data <span class="token operator">&amp;</span> VNodeProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> unknown <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  patchFlag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dynamicProps</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  shapeFlag <span class="token operator">=</span> type <span class="token operator">===</span> Fragment <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">,</span>
  isBlockNode <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  needFullChildrenNormalization <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__v_isVNode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__v_skip</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeKey</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ref</span><span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeRef</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scopeId</span><span class="token operator">:</span> currentScopeId<span class="token punctuation">,</span>
    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">suspense</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ssContent</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ssFallback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">targetAnchor</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">staticCount</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    shapeFlag<span class="token punctuation">,</span>
    patchFlag<span class="token punctuation">,</span>
    dynamicProps<span class="token punctuation">,</span>
    <span class="token literal-property property">dynamicChildren</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">appContext</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> VNode

  <span class="token keyword">if</span> <span class="token punctuation">(</span>needFullChildrenNormalization<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 标准化子节点
     * 给不同类型的children 编码标示 type：8文本 16:数组 32 slots：同时也转成对应类型
     * 同时会因children 类型不同，修改VNode 的 shapeFlag 为以后挂载使用
     * */</span>
    <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token comment">// normalize suspense children</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token keyword">typeof</span> SuspenseImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// compiled element vnode - if children is passed, only possible types are</span>
    <span class="token comment">// string or Array.</span>
    vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">|=</span> <span class="token function">isString</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
      <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TEXT_CHILDREN</span>
      <span class="token operator">:</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// validate key</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>key <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">VNode created with invalid key (NaN). VNode type:</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// track vnode for block tree</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    isBlockTreeEnabled <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// avoid a block node from tracking itself</span>
    <span class="token operator">!</span>isBlockNode <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// has current parent block</span>
    currentBlock <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// presence of a patch flag indicates this node needs patching on updates.</span>
    <span class="token comment">// component nodes also should always be patched, because even if the</span>
    <span class="token comment">// component doesn't need to update, it needs to persist the instance on to</span>
    <span class="token comment">// the next vnode so that it can be properly unmounted later.</span>
    <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>patchFlag <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">||</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// the EVENTS flag is only for hydration and if it is the only flag, the</span>
    <span class="token comment">// vnode should not be considered dynamic due to handler caching.</span>
    vnode<span class="token punctuation">.</span>patchFlag <span class="token operator">!==</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">HYDRATE_EVENTS</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentBlock<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">convertLegacyVModelProps</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
    <span class="token function">defineLegacyVNodeProperties</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br></div></div><h4 id="渲染vnode" tabindex="-1"><a class="header-anchor" href="#渲染vnode" aria-hidden="true">#</a> 渲染VNode</h4>
<p><code>render(vnode, rootContainer)</code> 如何渲染VNode</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/rnederer.ts => baseCreateRenderer 中</span>
  <span class="token comment">// 首次渲染</span>
  <span class="token keyword">const</span> <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function-variable function">RootRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> isSVG</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 vnode 为空，且当前dom容器有vnode 则销毁 unmount组件，否则传入patch 处理</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmount</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 首次执行传入根组件</span>
      <span class="token comment">// 手指执行挂载过程</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// vnode 存储在dom容器上</span>
    container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
  <span class="token punctuation">}</span>


  <span class="token comment">// Note: functions inside this closure should use `const xxx = () => {}`</span>
  <span class="token comment">// style in order to prevent being inlined by minifiers.</span>
  <span class="token keyword">const</span> <span class="token literal-property property">patch</span><span class="token operator">:</span> PatchFn <span class="token operator">=</span> <span class="token punctuation">(</span>
    n1<span class="token punctuation">,</span><span class="token comment">// 旧节点</span>
    n2<span class="token punctuation">,</span><span class="token comment">// 新节点</span>
    container<span class="token punctuation">,</span>
    anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    slotScopeIds <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimized <span class="token operator">=</span> __DEV__ <span class="token operator">&amp;&amp;</span> isHmrUpdating <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>n2<span class="token punctuation">.</span>dynamicChildren
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">===</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 如果有旧vnode 且和新vnode不一样销毁旧节点</span>
    <span class="token comment">// patching &amp; not same type, unmount old tree</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isSameVNodeType</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      anchor <span class="token operator">=</span> <span class="token function">getNextHostNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>patchFlag <span class="token operator">===</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">BAIL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      optimized <span class="token operator">=</span> <span class="token boolean">false</span>
      n2<span class="token punctuation">.</span>dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token comment">// 根据type让不同方法处理</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Text</span><span class="token operator">:</span> <span class="token comment">// 文本</span>
        <span class="token function">processText</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Comment</span><span class="token operator">:</span> <span class="token comment">// 注释</span>
        <span class="token function">processCommentNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Static</span><span class="token operator">:</span> <span class="token comment">// 静态</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">mountStaticNode</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">patchStaticNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> <span class="token literal-property property">Fragment</span><span class="token operator">:</span> <span class="token comment">// 碎片化，这是Vue3新支持的多根节点</span>
        <span class="token function">processFragment</span><span class="token punctuation">(</span>
          n1<span class="token punctuation">,</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token comment">// 如果type都不是就使用 shapeFlag 编码判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// dom元素</span>
          <span class="token function">processElement</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 组件初次渲染</span>
          <span class="token function">processComponent</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// teleport 内置组件</span>
          <span class="token punctuation">;</span><span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token keyword">typeof</span> TeleportImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>
            n1 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span>
            n2 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized<span class="token punctuation">,</span>
            internals
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// suspense内置组件</span>
          <span class="token punctuation">;</span><span class="token punctuation">(</span>type <span class="token keyword">as</span> <span class="token keyword">typeof</span> SuspenseImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized<span class="token punctuation">,</span>
            internals
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Invalid VNode type:'</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">typeof</span> type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// set ref</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> parentComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setRef</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>ref<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> n2 <span class="token operator">||</span> n1<span class="token punctuation">,</span> <span class="token operator">!</span>n2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">// 组件渲染</span>

    <span class="token keyword">const</span> <span class="token function-variable function">processComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">n1</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">n2</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentSuspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSVG</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimized</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    n2<span class="token punctuation">.</span>slotScopeIds <span class="token operator">=</span> slotScopeIds
    <span class="token comment">// 如果没有旧节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_KEPT_ALIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果是keep alive 组件</span>
        <span class="token punctuation">;</span><span class="token punctuation">(</span>parentComponent<span class="token operator">!</span><span class="token punctuation">.</span>ctx <span class="token keyword">as</span> KeepAliveContext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">activate</span><span class="token punctuation">(</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行挂载组件</span>
        <span class="token function">mountComponent</span><span class="token punctuation">(</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 n1 n2都有执行更新</span>
      <span class="token function">updateComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


    <span class="token keyword">const</span> <span class="token literal-property property">mountComponent</span><span class="token operator">:</span> MountComponentFn <span class="token operator">=</span> <span class="token punctuation">(</span>
    initialVNode<span class="token punctuation">,</span> <span class="token comment">// 初始化 VNode 也就是App组件生产的Vnode</span>
    container<span class="token punctuation">,</span>
    anchor<span class="token punctuation">,</span>
    parentComponent<span class="token punctuation">,</span>
    parentSuspense<span class="token punctuation">,</span>
    isSVG<span class="token punctuation">,</span>
    optimized
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.x compat may pre-create the component instance before actually</span>
    <span class="token comment">// mounting</span>
    <span class="token keyword">const</span> compatMountInstance <span class="token operator">=</span>
      __COMPAT__ <span class="token operator">&amp;&amp;</span> initialVNode<span class="token punctuation">.</span>isCompatRoot <span class="token operator">&amp;&amp;</span> initialVNode<span class="token punctuation">.</span>component
      <span class="token comment">// TODO: 组件加载过程</span>
      <span class="token comment">/// 1.组件实例</span>
    <span class="token keyword">const</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">=</span>
      compatMountInstance <span class="token operator">||</span>
      <span class="token punctuation">(</span>initialVNode<span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>
        initialVNode<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense
      <span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>type<span class="token punctuation">.</span>__hmrId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">registerHMR</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pushWarningContext</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">)</span>
      <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mount</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// inject renderer internals for keepAlive</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isKeepAlive</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>ctx <span class="token keyword">as</span> KeepAliveContext<span class="token punctuation">)</span><span class="token punctuation">.</span>renderer <span class="token operator">=</span> internals
    <span class="token punctuation">}</span>

    <span class="token comment">// resolve props and slots for setup context</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> compatMountInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">init</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 初始化组件实例</span>
      <span class="token comment">// 1. setup</span>
      <span class="token comment">// 2. 编译render选项</span>
      <span class="token comment">// 3.applyOptions 兼容 vue2</span>
      <span class="token comment">// 初始化 props slots 以及Vue3新增的Compostion API</span>
      <span class="token function">setupComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">init</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// setup() is async. This component relies on async logic to be resolved</span>
    <span class="token comment">// before proceeding</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>asyncDep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parentSuspense <span class="token operator">&amp;&amp;</span> parentSuspense<span class="token punctuation">.</span><span class="token function">registerDep</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> setupRenderEffect<span class="token punctuation">)</span>

      <span class="token comment">// Give it a placeholder if this is not hydration</span>
      <span class="token comment">// TODO handle self-defined fallback</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>initialVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Comment<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">processCommentNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> placeholder<span class="token punctuation">,</span> container<span class="token operator">!</span><span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// effect 副作用函数</span>
    <span class="token function">setupRenderEffect</span><span class="token punctuation">(</span>
      instance<span class="token punctuation">,</span>
      initialVNode<span class="token punctuation">,</span>
      container<span class="token punctuation">,</span>
      anchor<span class="token punctuation">,</span>
      parentSuspense<span class="token punctuation">,</span>
      isSVG<span class="token punctuation">,</span>
      optimized
    <span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">popWarningContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mount</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br></div></div><p>1、<code>createComponentInstance</code> 创建<code>instance</code> 过程，</p>
<p>2、 创建完成后通过<code>setupComponent</code> 初始化instance值</p>
<p>3、 设置运行render 副作用函数 <code>setupRenderEffect</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/component.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">vnode</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">suspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> vnode<span class="token punctuation">.</span>type <span class="token keyword">as</span> ConcreteComponent
  <span class="token comment">// inherit parent app context - or - if root, adopt from root vnode</span>
  <span class="token keyword">const</span> appContext <span class="token operator">=</span>
    <span class="token punctuation">(</span>parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>appContext <span class="token operator">:</span> vnode<span class="token punctuation">.</span>appContext<span class="token punctuation">)</span> <span class="token operator">||</span> emptyAppContext

  <span class="token keyword">const</span> <span class="token literal-property property">instance</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uid</span><span class="token operator">:</span> uid<span class="token operator">++</span><span class="token punctuation">,</span>
    vnode<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    parent<span class="token punctuation">,</span>
    appContext<span class="token punctuation">,</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be immediately set</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subTree</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// will be set synchronously right after creation</span>
    <span class="token literal-property property">effect</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// will be set synchronously right after creation</span>
    <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">EffectScope</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token comment">/* detached */</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exposed</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exposeProxy</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">withProxy</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">provides</span><span class="token operator">:</span> parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>provides <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>appContext<span class="token punctuation">.</span>provides<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accessCache</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token literal-property property">renderCache</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// local resovled assets</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// resolved props and emits options</span>
    <span class="token literal-property property">propsOptions</span><span class="token operator">:</span> <span class="token function">normalizePropsOptions</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> appContext<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emitsOptions</span><span class="token operator">:</span> <span class="token function">normalizeEmitsOptions</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> appContext<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// emit</span>
    <span class="token literal-property property">emit</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be set immediately</span>
    <span class="token literal-property property">emitted</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// props default value</span>
    <span class="token literal-property property">propsDefaults</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>

    <span class="token comment">// inheritAttrs</span>
    <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> type<span class="token punctuation">.</span>inheritAttrs<span class="token punctuation">,</span>

    <span class="token comment">// state</span>
    <span class="token literal-property property">ctx</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">slots</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">refs</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">setupState</span><span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    <span class="token literal-property property">setupContext</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// suspense related</span>
    suspense<span class="token punctuation">,</span>
    <span class="token literal-property property">suspenseId</span><span class="token operator">:</span> suspense <span class="token operator">?</span> suspense<span class="token punctuation">.</span>pendingId <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">asyncDep</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">asyncResolved</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// lifecycle hooks</span>
    <span class="token comment">// not using enums here because it results in computed properties</span>
    <span class="token comment">// 组件生命周期相关属性</span>
    <span class="token literal-property property">isMounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isUnmounted</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isDeactivated</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bc</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bm</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">m</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bu</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">um</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bum</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">da</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rtg</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rtc</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ec</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sp</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token function">createDevRenderContext</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">_</span><span class="token operator">:</span> instance <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  instance<span class="token punctuation">.</span>root <span class="token operator">=</span> parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>root <span class="token operator">:</span> instance
  instance<span class="token punctuation">.</span>emit <span class="token operator">=</span> <span class="token function">emit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>

  <span class="token comment">// apply custom element special handling</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ce<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span><span class="token function">ce</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><p>setupRenderEffect</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token literal-property property">setupRenderEffect</span><span class="token operator">:</span> <span class="token function-variable function">SetupRenderEffectFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter">instance<span class="token punctuation">,</span>
    initialVNode<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor<span class="token punctuation">,</span>
    parentSuspense<span class="token punctuation">,</span>
    isSVG<span class="token punctuation">,</span>
    optimized</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// c创建</span>
    <span class="token keyword">const</span> <span class="token function-variable function">componentUpdateFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>isMounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token literal-property property">vnodeHook</span><span class="token operator">:</span> VNodeHook <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
        
        <span class="token keyword">const</span> <span class="token punctuation">{</span> el<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> initialVNode
        <span class="token comment">// 声明周期 beforemounted mounted</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> bm<span class="token punctuation">,</span> m<span class="token punctuation">,</span> parent <span class="token punctuation">}</span> <span class="token operator">=</span> instance
        <span class="token keyword">const</span> isAsyncWrapperVNode <span class="token operator">=</span> <span class="token function">isAsyncWrapper</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">)</span>

        <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token comment">// beforeMount hook</span>
        <span class="token comment">// beforeMount 声明周期及hook执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>bm<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// onVnodeBeforeMount</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token operator">!</span>isAsyncWrapperVNode <span class="token operator">&amp;&amp;</span>
          <span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>onVnodeBeforeMount<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> initialVNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          __COMPAT__ <span class="token operator">&amp;&amp;</span>
          <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_EVENT_HOOKS</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'hook:beforeMount'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token operator">&amp;&amp;</span> hydrateNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// vnode has adopted host node - perform hydration instead of mount.</span>
          <span class="token keyword">const</span> <span class="token function-variable function">hydrateSubTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> <span class="token function">renderComponentRoot</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hydrate</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            hydrateNode<span class="token operator">!</span><span class="token punctuation">(</span>
              el <span class="token keyword">as</span> Node<span class="token punctuation">,</span>
              instance<span class="token punctuation">.</span>subTree<span class="token punctuation">,</span>
              instance<span class="token punctuation">,</span>
              parentSuspense<span class="token punctuation">,</span>
              <span class="token keyword">null</span>
            <span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hydrate</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">if</span> <span class="token punctuation">(</span>isAsyncWrapperVNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token punctuation">;</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">.</span>type <span class="token keyword">as</span> ComponentOptions<span class="token punctuation">)</span><span class="token punctuation">.</span>__asyncLoader<span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
              <span class="token comment">// note: we are moving the render call into an async callback,</span>
              <span class="token comment">// which means it won't track dependencies - but it's ok because</span>
              <span class="token comment">// a server-rendered async wrapper is already in resolved state</span>
              <span class="token comment">// and it will never need to change.</span>
              <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>instance<span class="token punctuation">.</span>isUnmounted <span class="token operator">&amp;&amp;</span> <span class="token function">hydrateSubTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">hydrateSubTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 渲染组件生成 subTree VNode</span>
          <span class="token keyword">const</span> subTree <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> <span class="token function">renderComponentRoot</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">patch</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 把 subTree 挂载到Dom容器中</span>
          <span class="token function">patch</span><span class="token punctuation">(</span>
            <span class="token keyword">null</span><span class="token punctuation">,</span>
            subTree<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            instance<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG
          <span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">patch</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          initialVNode<span class="token punctuation">.</span>el <span class="token operator">=</span> subTree<span class="token punctuation">.</span>el
        <span class="token punctuation">}</span>
        <span class="token comment">// mounted hook</span>
        <span class="token comment">// mounted 生命周期 和hook 执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// onVnodeMounted</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token operator">!</span>isAsyncWrapperVNode <span class="token operator">&amp;&amp;</span>
          <span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>onVnodeMounted<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> scopedInitialVNode <span class="token operator">=</span> initialVNode
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token operator">!</span><span class="token punctuation">,</span> parent<span class="token punctuation">,</span> scopedInitialVNode<span class="token punctuation">)</span><span class="token punctuation">,</span>
            parentSuspense
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          __COMPAT__ <span class="token operator">&amp;&amp;</span>
          <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_EVENT_HOOKS</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> instance<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'hook:mounted'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            parentSuspense
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// activated hook for keep-alive roots.</span>
        <span class="token comment">// #1742 activated hook must be accessed after first render</span>
        <span class="token comment">// since the hook may be injected by a child keep-alive</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialVNode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_SHOULD_KEEP_ALIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>a <span class="token operator">&amp;&amp;</span> <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>a<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>
            __COMPAT__ <span class="token operator">&amp;&amp;</span>
            <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_EVENT_HOOKS</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>
              <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> instance<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'hook:activated'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              parentSuspense
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        instance<span class="token punctuation">.</span>isMounted <span class="token operator">=</span> <span class="token boolean">true</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">devtoolsComponentAdded</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// #2458: deference mount-only object parameters to prevent memleaks</span>
        initialVNode <span class="token operator">=</span> container <span class="token operator">=</span> anchor <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token keyword">as</span> any
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// updateComponent</span>
        <span class="token comment">// This is triggered by mutation of component's own state (next: null)</span>
        <span class="token comment">// OR parent calling processComponent (next: VNode)</span>
        <span class="token comment">// 舍命周期</span>
        <span class="token keyword">let</span> <span class="token punctuation">{</span> next<span class="token punctuation">,</span> bu<span class="token punctuation">,</span> u<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> vnode <span class="token punctuation">}</span> <span class="token operator">=</span> instance
        <span class="token keyword">let</span> originNext <span class="token operator">=</span> next
        <span class="token keyword">let</span> <span class="token literal-property property">vnodeHook</span><span class="token operator">:</span> VNodeHook <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">pushWarningContext</span><span class="token punctuation">(</span>next <span class="token operator">||</span> instance<span class="token punctuation">.</span>vnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Disallow component effect recursion during pre-lifecycle hooks.</span>
        <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          next<span class="token punctuation">.</span>el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el
          <span class="token function">updateComponentPreRender</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> next<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          next <span class="token operator">=</span> vnode
        <span class="token punctuation">}</span>

        <span class="token comment">// beforeUpdate hook</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>bu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>bu<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// onVnodeBeforeUpdate</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> next<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>props<span class="token punctuation">.</span>onVnodeBeforeUpdate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> next<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          __COMPAT__ <span class="token operator">&amp;&amp;</span>
          <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_EVENT_HOOKS</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'hook:beforeUpdate'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

        <span class="token comment">// render</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> nextTree <span class="token operator">=</span> <span class="token function">renderComponentRoot</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">render</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> prevTree <span class="token operator">=</span> instance<span class="token punctuation">.</span>subTree
        instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> nextTree

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">patch</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">patch</span><span class="token punctuation">(</span>
          prevTree<span class="token punctuation">,</span>
          nextTree<span class="token punctuation">,</span>
          <span class="token comment">// parent may have changed if it's in a teleport</span>
          <span class="token function">hostParentNode</span><span class="token punctuation">(</span>prevTree<span class="token punctuation">.</span>el<span class="token operator">!</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">,</span>
          <span class="token comment">// anchor may have changed if it's in a fragment</span>
          <span class="token function">getNextHostNode</span><span class="token punctuation">(</span>prevTree<span class="token punctuation">)</span><span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">patch</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        next<span class="token punctuation">.</span>el <span class="token operator">=</span> nextTree<span class="token punctuation">.</span>el
        <span class="token keyword">if</span> <span class="token punctuation">(</span>originNext <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// self-triggered update. In case of HOC, update parent component</span>
          <span class="token comment">// vnode el. HOC is indicated by parent instance's subTree pointing</span>
          <span class="token comment">// to child component's vnode</span>
          <span class="token function">updateHOCHostEl</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> nextTree<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// updated hook</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// onVnodeUpdated</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> next<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>props<span class="token punctuation">.</span>onVnodeUpdated<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token operator">!</span><span class="token punctuation">,</span> parent<span class="token punctuation">,</span> next<span class="token operator">!</span><span class="token punctuation">,</span> vnode<span class="token punctuation">)</span><span class="token punctuation">,</span>
            parentSuspense
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          __COMPAT__ <span class="token operator">&amp;&amp;</span>
          <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_EVENT_HOOKS</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> instance<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'hook:updated'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            parentSuspense
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">devtoolsComponentUpdated</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">popWarningContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// create reactive effect for rendering</span>
    <span class="token comment">// 创建响应式副作用rendder 函数</span>
    <span class="token keyword">const</span> effect <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>effect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReactiveEffect</span><span class="token punctuation">(</span>
      componentUpdateFn<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">queueJob</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>update<span class="token punctuation">)</span><span class="token punctuation">,</span>
      instance<span class="token punctuation">.</span>scope <span class="token comment">// track it in component's effect scope</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>update <span class="token operator">=</span> effect<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span> <span class="token keyword">as</span> SchedulerJob<span class="token punctuation">)</span>
    update<span class="token punctuation">.</span>id <span class="token operator">=</span> instance<span class="token punctuation">.</span>uid
    <span class="token comment">// allowRecurse</span>
    <span class="token comment">// #1801, #2043 component render effects should allow recursive updates</span>
    <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      effect<span class="token punctuation">.</span>onTrack <span class="token operator">=</span> instance<span class="token punctuation">.</span>rtc
        <span class="token operator">?</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>rtc<span class="token operator">!</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span>
      effect<span class="token punctuation">.</span>onTrigger <span class="token operator">=</span> instance<span class="token punctuation">.</span>rtg
        <span class="token operator">?</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">invokeArrayFns</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>rtg<span class="token operator">!</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token number">0</span>
      <span class="token comment">// @ts-ignore (for scheduler)</span>
      update<span class="token punctuation">.</span>ownerInstance <span class="token operator">=</span> instance
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br></div></div><h5 id="rendercomponentroot" tabindex="-1"><a class="header-anchor" href="#rendercomponentroot" aria-hidden="true">#</a> renderComponentRoot</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/componentRenderutils.ts</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renderComponentRoot</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">instance</span><span class="token operator">:</span> ComponentInternalInstance</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    vnode<span class="token punctuation">,</span>
    proxy<span class="token punctuation">,</span>
    withProxy<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    <span class="token literal-property property">propsOptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>propsOptions<span class="token punctuation">]</span><span class="token punctuation">,</span>
    slots<span class="token punctuation">,</span>
    attrs<span class="token punctuation">,</span>
    emit<span class="token punctuation">,</span>
    render<span class="token punctuation">,</span> <span class="token comment">// 这里的render 就是 .vue 编译后的render函数</span>
    renderCache<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    setupState<span class="token punctuation">,</span>
    ctx<span class="token punctuation">,</span>
    inheritAttrs
  <span class="token punctuation">}</span> <span class="token operator">=</span> instance

  <span class="token keyword">let</span> result
  <span class="token keyword">let</span> fallthroughAttrs
  <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token function">setCurrentRenderingInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    accessedAttrs <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// withProxy is a proxy with a different `has` trap only for</span>
      <span class="token comment">// runtime-compiled render functions using `with` block.</span>
      <span class="token keyword">const</span> proxyToUse <span class="token operator">=</span> withProxy <span class="token operator">||</span> proxy
      <span class="token comment">// 这里循环创建 HelloWorld p 标签VNode</span>
      result <span class="token operator">=</span> <span class="token function">normalizeVNode</span><span class="token punctuation">(</span>
        render<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
          proxyToUse<span class="token punctuation">,</span>
          proxyToUse<span class="token operator">!</span><span class="token punctuation">,</span>
          renderCache<span class="token punctuation">,</span>
          props<span class="token punctuation">,</span>
          setupState<span class="token punctuation">,</span>
          data<span class="token punctuation">,</span>
          ctx
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      fallthroughAttrs <span class="token operator">=</span> attrs
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// functional</span>
      <span class="token keyword">const</span> render <span class="token operator">=</span> Component <span class="token keyword">as</span> FunctionalComponent
      <span class="token comment">// in dev, mark attrs accessed if optional props (attrs === props)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> attrs <span class="token operator">===</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">markAttrsAccessed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      result <span class="token operator">=</span> <span class="token function">normalizeVNode</span><span class="token punctuation">(</span>
        render<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span>
          <span class="token operator">?</span> <span class="token function">render</span><span class="token punctuation">(</span>
              props<span class="token punctuation">,</span>
              __DEV__
                <span class="token operator">?</span> <span class="token punctuation">{</span>
                    <span class="token keyword">get</span> <span class="token function">attrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      <span class="token function">markAttrsAccessed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                      <span class="token keyword">return</span> attrs
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    slots<span class="token punctuation">,</span>
                    emit
                  <span class="token punctuation">}</span>
                <span class="token operator">:</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit <span class="token punctuation">}</span>
            <span class="token punctuation">)</span>
          <span class="token operator">:</span> <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token keyword">null</span> <span class="token keyword">as</span> any <span class="token comment">/* we know it doesn't need it */</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      fallthroughAttrs <span class="token operator">=</span> Component<span class="token punctuation">.</span>props
        <span class="token operator">?</span> attrs
        <span class="token operator">:</span> <span class="token function">getFunctionalFallthrough</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    blockStack<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token function">handleError</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> ErrorCodes<span class="token punctuation">.</span><span class="token constant">RENDER_FUNCTION</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Comment<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// attr merging</span>
  <span class="token comment">// in dev mode, comments are preserved, and it's possible for a template</span>
  <span class="token comment">// to have comments along side the root element which makes it a fragment</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> result
  <span class="token keyword">let</span> <span class="token literal-property property">setRoot</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> VNode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    __DEV__ <span class="token operator">&amp;&amp;</span>
    result<span class="token punctuation">.</span>patchFlag <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    result<span class="token punctuation">.</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">DEV_ROOT_FRAGMENT</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">;</span><span class="token punctuation">[</span>root<span class="token punctuation">,</span> setRoot<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">getChildRoot</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>fallthroughAttrs <span class="token operator">&amp;&amp;</span> inheritAttrs <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>fallthroughAttrs<span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> root
    <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span> <span class="token operator">|</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>propsOptions <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>isModelListener<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// If a v-model listener (onUpdate:xxx) has a corresponding declared</span>
          <span class="token comment">// prop, it indicates this component expects to handle v-model and</span>
          <span class="token comment">// it should not fallthrough.</span>
          <span class="token comment">// related: #1543, #1643, #1989</span>
          fallthroughAttrs <span class="token operator">=</span> <span class="token function">filterModelListeners</span><span class="token punctuation">(</span>
            fallthroughAttrs<span class="token punctuation">,</span>
            propsOptions
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        root <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> fallthroughAttrs<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>accessedAttrs <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>type <span class="token operator">!==</span> Comment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> allAttrs <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token literal-property property">eventAttrs</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">const</span> <span class="token literal-property property">extraAttrs</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> allAttrs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> key <span class="token operator">=</span> allAttrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isOn</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// ignore v-model handlers when they fail to fallthrough</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isModelListener</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// remove `on`, lowercase first letter to reflect event casing</span>
              <span class="token comment">// accurately</span>
              eventAttrs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            extraAttrs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>extraAttrs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Extraneous non-props attributes (</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>extraAttrs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">were passed to component but could not be automatically inherited </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">because component renders fragment or text root nodes.</span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>eventAttrs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Extraneous non-emits event listeners (</span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>eventAttrs<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">were passed to component but could not be automatically inherited </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">because component renders fragment or text root nodes. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">If the listener is intended to be a component custom event listener only, </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">declare it using the "emits" option.</span><span class="token template-punctuation string">`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    __COMPAT__ <span class="token operator">&amp;&amp;</span>
    <span class="token function">isCompatEnabled</span><span class="token punctuation">(</span>DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_ATTRS_CLASS_STYLE</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token operator">&amp;&amp;</span>
    root<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> <span class="token punctuation">(</span>ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span> <span class="token operator">|</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> cls<span class="token punctuation">,</span> style <span class="token punctuation">}</span> <span class="token operator">=</span> vnode<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cls <span class="token operator">||</span> style<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> inheritAttrs <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warnDeprecation</span><span class="token punctuation">(</span>
          DeprecationTypes<span class="token punctuation">.</span><span class="token constant">INSTANCE_ATTRS_CLASS_STYLE</span><span class="token punctuation">,</span>
          instance<span class="token punctuation">,</span>
          <span class="token function">getComponentName</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      root <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span><span class="token operator">:</span> cls<span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> style
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// inherit directives</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isElementRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Runtime directive used on component with non-element root node. </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The directives will not function as intended.</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>dirs <span class="token operator">=</span> root<span class="token punctuation">.</span>dirs <span class="token operator">?</span> root<span class="token punctuation">.</span>dirs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>dirs<span class="token punctuation">)</span> <span class="token operator">:</span> vnode<span class="token punctuation">.</span>dirs
  <span class="token punctuation">}</span>
  <span class="token comment">// inherit transition data</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>transition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isElementRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Component inside &lt;Transition> renders non-element root node </span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">that cannot be animated.</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>transition <span class="token operator">=</span> vnode<span class="token punctuation">.</span>transition
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> setRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> root
  <span class="token punctuation">}</span>

  <span class="token function">setCurrentRenderingInstance</span><span class="token punctuation">(</span>prev<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br></div></div><h5 id="processfragment" tabindex="-1"><a class="header-anchor" href="#processfragment" aria-hidden="true">#</a> processFragment</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token comment">// packages/runtime-core/src/renderer.ts baseCreateRenderer </span>
  <span class="token keyword">const</span> <span class="token function-variable function">processFragment</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">n1</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">n2</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentSuspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSVG</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimized</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 没有根节点要分配在何处</span>
    <span class="token keyword">const</span> fragmentStartAnchor <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1 <span class="token operator">?</span> n1<span class="token punctuation">.</span>el <span class="token operator">:</span> <span class="token function">hostCreateText</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">const</span> fragmentEndAnchor <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>anchor <span class="token operator">=</span> n1 <span class="token operator">?</span> n1<span class="token punctuation">.</span>anchor <span class="token operator">:</span> <span class="token function">hostCreateText</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">!</span>

    <span class="token keyword">let</span> <span class="token punctuation">{</span> patchFlag<span class="token punctuation">,</span> dynamicChildren<span class="token punctuation">,</span> <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> fragmentSlotScopeIds <span class="token punctuation">}</span> <span class="token operator">=</span> n2

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> isHmrUpdating<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// HMR updated, force full diff</span>
      patchFlag <span class="token operator">=</span> <span class="token number">0</span>
      optimized <span class="token operator">=</span> <span class="token boolean">false</span>
      dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// check if this is a slot fragment with :slotted scope ids</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fragmentSlotScopeIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      slotScopeIds <span class="token operator">=</span> slotScopeIds
        <span class="token operator">?</span> slotScopeIds<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>fragmentSlotScopeIds<span class="token punctuation">)</span>
        <span class="token operator">:</span> fragmentSlotScopeIds
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">hostInsert</span><span class="token punctuation">(</span>fragmentStartAnchor<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      <span class="token function">hostInsert</span><span class="token punctuation">(</span>fragmentEndAnchor<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      <span class="token comment">// a fragment can only have array children</span>
      <span class="token comment">// since they are either generated by the compiler, or implicitly created</span>
      <span class="token comment">// from arrays.</span>
      <span class="token comment">// 到这里children 一定是数组</span>
      <span class="token function">mountChildren</span><span class="token punctuation">(</span>
        n2<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
        container<span class="token punctuation">,</span>
        fragmentEndAnchor<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        isSVG<span class="token punctuation">,</span>
        slotScopeIds<span class="token punctuation">,</span>
        optimized
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        patchFlag <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
        patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STABLE_FRAGMENT</span> <span class="token operator">&amp;&amp;</span>
        dynamicChildren <span class="token operator">&amp;&amp;</span>
        <span class="token comment">// #2715 the previous fragment could've been a BAILed one as a result</span>
        <span class="token comment">// of renderSlot() with no valid children</span>
        n1<span class="token punctuation">.</span>dynamicChildren
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// a stable fragment (template root or &lt;template v-for>) doesn't need to</span>
        <span class="token comment">// patch children order, but it may contain dynamicChildren.</span>
        <span class="token function">patchBlockChildren</span><span class="token punctuation">(</span>
          n1<span class="token punctuation">.</span>dynamicChildren<span class="token punctuation">,</span>
          dynamicChildren<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> parentComponent <span class="token operator">&amp;&amp;</span> parentComponent<span class="token punctuation">.</span>type<span class="token punctuation">.</span>__hmrId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">traverseStaticChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token comment">// #2080 if the stable fragment has a key, it's a &lt;template v-for> that may</span>
          <span class="token comment">//  get moved around. Make sure all root level vnodes inherit el.</span>
          <span class="token comment">// #2134 or if it's a component root, it may also get moved around</span>
          <span class="token comment">// as the component is being moved.</span>
          n2<span class="token punctuation">.</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span>
          <span class="token punctuation">(</span>parentComponent <span class="token operator">&amp;&amp;</span> n2 <span class="token operator">===</span> parentComponent<span class="token punctuation">.</span>subTree<span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">traverseStaticChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* shallow */</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// keyed / unkeyed, or manual fragments.</span>
        <span class="token comment">// for keyed &amp; unkeyed, since they are compiler generated from v-for,</span>
        <span class="token comment">// each child is guaranteed to be a block so the fragment will never</span>
        <span class="token comment">// have dynamicChildren.</span>
        <span class="token function">patchChildren</span><span class="token punctuation">(</span>
          n1<span class="token punctuation">,</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          fragmentEndAnchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>


    <span class="token keyword">const</span> <span class="token literal-property property">mountChildren</span><span class="token operator">:</span> <span class="token function-variable function">MountChildrenFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter">children<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor<span class="token punctuation">,</span>
    parentComponent<span class="token punctuation">,</span>
    parentSuspense<span class="token punctuation">,</span>
    isSVG<span class="token punctuation">,</span>
    slotScopeIds<span class="token punctuation">,</span>
    optimized<span class="token punctuation">,</span>
    start <span class="token operator">=</span> <span class="token number">0</span></span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> optimized
        <span class="token operator">?</span> <span class="token function">cloneIfMounted</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">as</span> VNode<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">normalizeVNode</span><span class="token punctuation">(</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// patch 每一个VNode</span>
      <span class="token function">patch</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        child<span class="token punctuation">,</span>
        container<span class="token punctuation">,</span>
        anchor<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        isSVG<span class="token punctuation">,</span>
        slotScopeIds<span class="token punctuation">,</span>
        optimized
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">// dom 节点 VNode 通过有无旧节点，来判断执行mount 还是update</span>
  <span class="token keyword">const</span> <span class="token function-variable function">patchElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">n1</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    <span class="token literal-property property">n2</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentSuspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSVG</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimized</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> el <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el<span class="token operator">!</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> patchFlag<span class="token punctuation">,</span> dynamicChildren<span class="token punctuation">,</span> dirs <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token comment">// #1426 take the old vnode's patch flag into account since user may clone a</span>
    <span class="token comment">// compiler-generated vnode, which de-opts to FULL_PROPS</span>
    patchFlag <span class="token operator">|=</span> n1<span class="token punctuation">.</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">FULL_PROPS</span>
    <span class="token keyword">const</span> oldProps <span class="token operator">=</span> n1<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token constant">EMPTY_OBJ</span>
    <span class="token keyword">const</span> newProps <span class="token operator">=</span> n2<span class="token punctuation">.</span>props <span class="token operator">||</span> <span class="token constant">EMPTY_OBJ</span>
    <span class="token keyword">let</span> <span class="token literal-property property">vnodeHook</span><span class="token operator">:</span> VNodeHook <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span>

    <span class="token comment">// disable recurse in beforeUpdate hooks</span>
    parentComponent <span class="token operator">&amp;&amp;</span> <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>parentComponent<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> newProps<span class="token punctuation">.</span>onVnodeBeforeUpdate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n1<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeDirectiveHook</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> <span class="token string">'beforeUpdate'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    parentComponent <span class="token operator">&amp;&amp;</span> <span class="token function">toggleRecurse</span><span class="token punctuation">(</span>parentComponent<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> isHmrUpdating<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// HMR updated, force full diff</span>
      patchFlag <span class="token operator">=</span> <span class="token number">0</span>
      optimized <span class="token operator">=</span> <span class="token boolean">false</span>
      dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> areChildrenSVG <span class="token operator">=</span> isSVG <span class="token operator">&amp;&amp;</span> n2<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">'foreignObject'</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dynamicChildren<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">patchBlockChildren</span><span class="token punctuation">(</span>
        n1<span class="token punctuation">.</span>dynamicChildren<span class="token operator">!</span><span class="token punctuation">,</span>
        dynamicChildren<span class="token punctuation">,</span>
        el<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        areChildrenSVG<span class="token punctuation">,</span>
        slotScopeIds
      <span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> parentComponent <span class="token operator">&amp;&amp;</span> parentComponent<span class="token punctuation">.</span>type<span class="token punctuation">.</span>__hmrId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">traverseStaticChildren</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>optimized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// full diff</span>
      <span class="token function">patchChildren</span><span class="token punctuation">(</span>
        n1<span class="token punctuation">,</span>
        n2<span class="token punctuation">,</span>
        el<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        areChildrenSVG<span class="token punctuation">,</span>
        slotScopeIds<span class="token punctuation">,</span>
        <span class="token boolean">false</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// the presence of a patchFlag means this element's render code was</span>
      <span class="token comment">// generated by the compiler and can take the fast path.</span>
      <span class="token comment">// in this path old node and new node are guaranteed to have the same shape</span>
      <span class="token comment">// (i.e. at the exact same position in the source template)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">FULL_PROPS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// element props contain dynamic keys, full diff needed</span>
        <span class="token function">patchProps</span><span class="token punctuation">(</span>
          el<span class="token punctuation">,</span>
          n2<span class="token punctuation">,</span>
          oldProps<span class="token punctuation">,</span>
          newProps<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// class</span>
        <span class="token comment">// this flag is matched when the element has dynamic class bindings.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">CLASS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps<span class="token punctuation">.</span>class <span class="token operator">!==</span> newProps<span class="token punctuation">.</span>class<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> newProps<span class="token punctuation">.</span>class<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// style</span>
        <span class="token comment">// this flag is matched when the element has dynamic style bindings</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STYLE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'style'</span><span class="token punctuation">,</span> oldProps<span class="token punctuation">.</span>style<span class="token punctuation">,</span> newProps<span class="token punctuation">.</span>style<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// props</span>
        <span class="token comment">// This flag is matched when the element has dynamic prop/attr bindings</span>
        <span class="token comment">// other than class and style. The keys of dynamic prop/attrs are saved for</span>
        <span class="token comment">// faster iteration.</span>
        <span class="token comment">// Note dynamic keys like :[foo]="bar" will cause this optimization to</span>
        <span class="token comment">// bail out and go through a full diff because we need to unset the old key</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">PROPS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// if the flag is present then dynamicProps must be non-null</span>
          <span class="token keyword">const</span> propsToUpdate <span class="token operator">=</span> n2<span class="token punctuation">.</span>dynamicProps<span class="token operator">!</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> propsToUpdate<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> key <span class="token operator">=</span> propsToUpdate<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">const</span> prev <span class="token operator">=</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token keyword">const</span> next <span class="token operator">=</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token comment">// #1471 force patch value</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> prev <span class="token operator">||</span> key <span class="token operator">===</span> <span class="token string">'value'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>
                el<span class="token punctuation">,</span>
                key<span class="token punctuation">,</span>
                prev<span class="token punctuation">,</span>
                next<span class="token punctuation">,</span>
                isSVG<span class="token punctuation">,</span>
                n1<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                parentComponent<span class="token punctuation">,</span>
                parentSuspense<span class="token punctuation">,</span>
                unmountChildren
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// text</span>
      <span class="token comment">// This flag is matched when the element has only dynamic text children.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n1<span class="token punctuation">.</span>children <span class="token operator">!==</span> n2<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hostSetElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> n2<span class="token punctuation">.</span>children <span class="token keyword">as</span> string<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>optimized <span class="token operator">&amp;&amp;</span> dynamicChildren <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// unoptimized, full diff</span>
      <span class="token function">patchProps</span><span class="token punctuation">(</span>
        el<span class="token punctuation">,</span>
        n2<span class="token punctuation">,</span>
        oldProps<span class="token punctuation">,</span>
        newProps<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        isSVG
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> newProps<span class="token punctuation">.</span>onVnodeUpdated<span class="token punctuation">)</span> <span class="token operator">||</span> dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        vnodeHook <span class="token operator">&amp;&amp;</span> <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n1<span class="token punctuation">)</span>
        dirs <span class="token operator">&amp;&amp;</span> <span class="token function">invokeDirectiveHook</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> <span class="token string">'updated'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>  



    <span class="token keyword">const</span> <span class="token function-variable function">mountElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">vnode</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentComponent</span><span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parentSuspense</span><span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isSVG</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token literal-property property">slotScopeIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">optimized</span><span class="token operator">:</span> boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token literal-property property">el</span><span class="token operator">:</span> RendererElement
    <span class="token keyword">let</span> <span class="token literal-property property">vnodeHook</span><span class="token operator">:</span> VNodeHook <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> shapeFlag<span class="token punctuation">,</span> transition<span class="token punctuation">,</span> patchFlag<span class="token punctuation">,</span> dirs <span class="token punctuation">}</span> <span class="token operator">=</span> vnode
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token operator">!</span>__DEV__ <span class="token operator">&amp;&amp;</span>
      vnode<span class="token punctuation">.</span>el <span class="token operator">&amp;&amp;</span>
      hostCloneNode <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span>
      patchFlag <span class="token operator">===</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">HOISTED</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If a vnode has non-null el, it means it's being reused.</span>
      <span class="token comment">// Only static vnodes can be reused, so its mounted DOM nodes should be</span>
      <span class="token comment">// exactly the same, and we can simply do a clone here.</span>
      <span class="token comment">// only do this in production since cloned trees cannot be HMR updated.</span>
      el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">hostCloneNode</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用传入的API 创建DOM元素</span>
      el <span class="token operator">=</span> vnode<span class="token punctuation">.</span>el <span class="token operator">=</span> <span class="token function">hostCreateElement</span><span class="token punctuation">(</span>
        vnode<span class="token punctuation">.</span>type <span class="token keyword">as</span> string<span class="token punctuation">,</span>
        isSVG<span class="token punctuation">,</span>
        props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>is<span class="token punctuation">,</span>
        props
      <span class="token punctuation">)</span>

      <span class="token comment">// mount children first, since some props may rely on child content</span>
      <span class="token comment">// being already rendered, e.g. `&lt;select value>`</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TEXT_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token function">hostSetElementText</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>children <span class="token keyword">as</span> string<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//// 如果 是数组，回到mountChildren 遍历继续patch 子节点</span>
        <span class="token comment">// 注意这里传入的 </span>
        <span class="token function">mountChildren</span><span class="token punctuation">(</span>
          vnode<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
          el<span class="token punctuation">,</span> <span class="token comment">// 传入的contener已经是刚刚创建的elDOM元素，这样就创建了父子关系</span>
          <span class="token keyword">null</span><span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG <span class="token operator">&amp;&amp;</span> type <span class="token operator">!==</span> <span class="token string">'foreignObject'</span><span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用指令相关的生命周期处理</span>
        <span class="token function">invokeDirectiveHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> <span class="token string">'created'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// props</span>
      <span class="token comment">// 如果有DOM的props 例如原生的class style 自定义 prop等</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!==</span> <span class="token string">'value'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isReservedProp</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>
              el<span class="token punctuation">,</span>
              key<span class="token punctuation">,</span>
              <span class="token keyword">null</span><span class="token punctuation">,</span>
              props<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
              isSVG<span class="token punctuation">,</span>
              vnode<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              parentComponent<span class="token punctuation">,</span>
              parentSuspense<span class="token punctuation">,</span>
              unmountChildren
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * Special case for setting value on DOM elements:
         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
         * - it needs to be forced (#1471)
         * #2353 proposes adding another renderer option to configure this, but
         * the properties affects are so finite it is worth special casing it
         * here to reduce the complexity. (Special casing it also should not
         * affect non-DOM renderers)
         */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'value'</span> <span class="token keyword">in</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> props<span class="token punctuation">.</span>onVnodeBeforeMount<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// scopeId</span>
      <span class="token function">setScopeId</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>scopeId<span class="token punctuation">,</span> slotScopeIds<span class="token punctuation">,</span> parentComponent<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">||</span> __FEATURE_PROD_DEVTOOLS__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'__vnode'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'__vueParentComponent'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> parentComponent<span class="token punctuation">,</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">invokeDirectiveHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> <span class="token string">'beforeMount'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved</span>
    <span class="token comment">// #1689 For inside suspense + suspense resolved case, just call it</span>
    <span class="token keyword">const</span> needCallTransitionHooks <span class="token operator">=</span>
      <span class="token punctuation">(</span><span class="token operator">!</span>parentSuspense <span class="token operator">||</span> <span class="token punctuation">(</span>parentSuspense <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>parentSuspense<span class="token punctuation">.</span>pendingBranch<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      transition <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span>transition<span class="token punctuation">.</span>persisted
    <span class="token keyword">if</span> <span class="token punctuation">(</span>needCallTransitionHooks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      transition<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">beforeEnter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把创建的el DOM 挂载到container容器上</span>
    <span class="token comment">// 初次渲染container 是 #app 容器，之后就是对应的父级dom容器</span>
    <span class="token function">hostInsert</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>vnodeHook <span class="token operator">=</span> props <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>onVnodeMounted<span class="token punctuation">)</span> <span class="token operator">||</span>
      needCallTransitionHooks <span class="token operator">||</span>
      dirs
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">queuePostRenderEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        vnodeHook <span class="token operator">&amp;&amp;</span> <span class="token function">invokeVNodeHook</span><span class="token punctuation">(</span>vnodeHook<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> vnode<span class="token punctuation">)</span>
        needCallTransitionHooks <span class="token operator">&amp;&amp;</span> transition<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
        dirs <span class="token operator">&amp;&amp;</span> <span class="token function">invokeDirectiveHook</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> <span class="token string">'mounted'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br></div></div></template>
