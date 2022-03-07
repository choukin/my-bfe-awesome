<template><h2 id="js-片段" tabindex="-1"><a class="header-anchor" href="#js-片段" aria-hidden="true">#</a> js 片段</h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<ul>
<li>
<p>结构化</p>
</li>
<li>
<p>面向对象编程</p>
</li>
<li>
<p>动态语言</p>
</li>
<li>
<p>函数式语言</p>
</li>
<li>
<p>并行语言</p>
</li>
<li>
<p><a href="https://github.com/kujian/30-seconds-of-code" target="_blank" rel="noopener noreferrer">Javascript 片段, 你可以在30秒或更少的时间里理解<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="判断字符串是否是-url" tabindex="-1"><a class="header-anchor" href="#判断字符串是否是-url" aria-hidden="true">#</a> 判断字符串是否是 url</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkURL</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">URL</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">var</span> str<span class="token operator">=</span><span class="token constant">URL</span><span class="token punctuation">;</span>
<span class="token comment">//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&amp;=]*)?</span>
<span class="token comment">//下面的代码中应用了转义字符"\"输出一个字符"/"</span>
<span class="token keyword">var</span> Expression<span class="token operator">=</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&amp;=]*)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">var</span> objExp<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>Expression<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>objExp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token operator">==</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="旧有浏览器兼容-promises-es6-promise" tabindex="-1"><a class="header-anchor" href="#旧有浏览器兼容-promises-es6-promise" aria-hidden="true">#</a> 旧有浏览器兼容 promises es6-promise</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>   <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">polyfillPromise</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Promise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> scriptEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
        scriptEl<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> <span class="token string">'////tool/9f-src/js/es6-promise/4.2.3/es6-promise.auto.min.js'</span><span class="token punctuation">)</span>
        window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptEl<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 判断是否含有class</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hasClass</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> cls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el <span class="token operator">||</span> <span class="token operator">!</span>cls<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cls<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'className should not contain space.'</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>classList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">' '</span> <span class="token operator">+</span> el<span class="token punctuation">.</span>className <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">' '</span> <span class="token operator">+</span> cls <span class="token operator">+</span> <span class="token string">' '</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加Class</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addClass</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> cls</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">var</span> curClass <span class="token operator">=</span> el<span class="token punctuation">.</span>className
  <span class="token keyword">var</span> classes <span class="token operator">=</span> <span class="token punctuation">(</span>cls <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> j <span class="token operator">=</span> classes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> clsName <span class="token operator">=</span> classes<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clsName<span class="token punctuation">)</span> <span class="token keyword">continue</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>classList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>clsName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasClass</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> clsName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curClass <span class="token operator">+=</span> <span class="token string">' '</span> <span class="token operator">+</span> clsName
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">.</span>classList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>className <span class="token operator">=</span> curClass
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取页面高度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> g <span class="token operator">=</span> document
  <span class="token keyword">let</span> a <span class="token operator">=</span> g<span class="token punctuation">.</span>body
  <span class="token keyword">let</span> f <span class="token operator">=</span> g<span class="token punctuation">.</span>documentElement
  <span class="token keyword">let</span> d <span class="token operator">=</span> g<span class="token punctuation">.</span>compatMode <span class="token operator">==</span> <span class="token string">'BackCompat'</span> <span class="token operator">?</span> a <span class="token operator">:</span> g<span class="token punctuation">.</span>documentElement
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">,</span> a<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">,</span> d<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取页面宽度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageWidth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> g <span class="token operator">=</span> document
  <span class="token keyword">let</span> a <span class="token operator">=</span> g<span class="token punctuation">.</span>body
  <span class="token keyword">let</span> f <span class="token operator">=</span> g<span class="token punctuation">.</span>documentElement
  <span class="token keyword">let</span> d <span class="token operator">=</span> g<span class="token punctuation">.</span>compatMode <span class="token operator">==</span> <span class="token string">'BackCompat'</span> <span class="token operator">?</span> a <span class="token operator">:</span> g<span class="token punctuation">.</span>documentElement
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>scrollWidth<span class="token punctuation">,</span> a<span class="token punctuation">.</span>scrollWidth<span class="token punctuation">,</span> d<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// 获取页面可视高度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageViewHeight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> d <span class="token operator">=</span> document
  <span class="token keyword">let</span> a <span class="token operator">=</span> d<span class="token punctuation">.</span>compatMode <span class="token operator">==</span> <span class="token string">'BackCompat'</span> <span class="token operator">?</span> d<span class="token punctuation">.</span>body <span class="token operator">:</span> d<span class="token punctuation">.</span>documentElement
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>clientHeight
<span class="token punctuation">}</span>


<span class="token comment">// 获取页面可视宽度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageViewWidth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> d <span class="token operator">=</span> document
  <span class="token keyword">let</span> a <span class="token operator">=</span> d<span class="token punctuation">.</span>compatMode <span class="token operator">==</span> <span class="token string">'BackCompat'</span> <span class="token operator">?</span> d<span class="token punctuation">.</span>body <span class="token operator">:</span> d<span class="token punctuation">.</span>documentElement
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>clientWidth
<span class="token punctuation">}</span>


<span class="token comment">// 获取页面scrollTop</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageScrollTop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> document
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> a<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 如果内容大于屏幕 底部元素 position:static 否则 fixed
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">parmentel</span> 根目录元素
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">boteleheight</span> 底部元素高
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">bottomPos</span> 现在底部元素position值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setBottomPos</span> <span class="token punctuation">(</span><span class="token parameter">parentel<span class="token punctuation">,</span> boteleheight<span class="token punctuation">,</span> bottomPos</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>bottomPos <span class="token operator">===</span> <span class="token string">'static'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> bottomPos
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> viewportH <span class="token operator">=</span> <span class="token function">getPageViewHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> contentH <span class="token operator">=</span> parentel<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>height

  <span class="token keyword">const</span> heightPx <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">rem2px</span><span class="token punctuation">(</span>boteleheight<span class="token punctuation">)</span> <span class="token comment">// 底部的高度</span>
  <span class="token keyword">const</span> isOverflow <span class="token operator">=</span> viewportH <span class="token operator">-</span> <span class="token punctuation">(</span>contentH <span class="token operator">+</span> heightPx<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span>
  <span class="token keyword">let</span> elstyle <span class="token operator">=</span> isOverflow <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'static'</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'fixed'</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> elstyle
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div><h2 id="ios-微信-返回页面不刷新兼容" tabindex="-1"><a class="header-anchor" href="#ios-微信-返回页面不刷新兼容" aria-hidden="true">#</a> ios 微信 返回页面不刷新兼容</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 解决ios 微信返回不刷页面问题</span>
<span class="token keyword">var</span> isPageHide <span class="token operator">=</span> <span class="token boolean">false</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'pageshow'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isPageHide<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'pagehide'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  isPageHide <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * px 换算 rem
 * <span class="token keyword">@param</span> <span class="token parameter">size</span> 设计稿px值
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> rem值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">px2rem</span> <span class="token operator">=</span> <span class="token parameter">size</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rootFontSize <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>size <span class="token operator">*</span> rootFontSize<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span>
  <span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 生成随机数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">min</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">max</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">randomInt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> min
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 *
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">reSizeSpirte</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">spirte</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    spirte<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">px2rem</span><span class="token punctuation">(</span>spirte<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
    spirte<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token function">px2rem</span><span class="token punctuation">(</span>spirte<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
    <span class="token keyword">return</span> spirte
<span class="token punctuation">}</span>
<span class="token comment">// 碰撞检测</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hitTestRectangle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r1<span class="token punctuation">,</span> r2<span class="token punctuation">,</span> globalFlag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> hit<span class="token punctuation">,</span> combinedHalfWidths<span class="token punctuation">,</span> combinedHalfHeights<span class="token punctuation">,</span> vx<span class="token punctuation">,</span> vy
    <span class="token comment">// console.log(r2.x + 'r2.x r2.x  ' + r2.y)</span>
    <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> r2<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> r2<span class="token punctuation">.</span>y
    <span class="token punctuation">}</span>
    <span class="token comment">// 默认没有碰撞</span>
    hit <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// 计算每个精灵的中心点</span>
    r1<span class="token punctuation">.</span>centerX <span class="token operator">=</span> r1<span class="token punctuation">.</span>x <span class="token operator">+</span> r1<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span>
    r1<span class="token punctuation">.</span>centerY <span class="token operator">=</span> r1<span class="token punctuation">.</span>y <span class="token operator">+</span> r1<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>globalFlag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      point <span class="token operator">=</span> r2<span class="token punctuation">.</span><span class="token function">getGlobalPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    r2<span class="token punctuation">.</span>centerX <span class="token operator">=</span> point<span class="token punctuation">.</span>x <span class="token operator">+</span> r2<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span>
    r2<span class="token punctuation">.</span>centerY <span class="token operator">=</span> point<span class="token punctuation">.</span>y <span class="token operator">+</span> r2<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span>

    r1<span class="token punctuation">.</span>halfWidth <span class="token operator">=</span> r1<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span>
    r1<span class="token punctuation">.</span>halfHeight <span class="token operator">=</span> r1<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span>
    r2<span class="token punctuation">.</span>halfWidth <span class="token operator">=</span> r2<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span>
    r2<span class="token punctuation">.</span>halfHeight <span class="token operator">=</span> r2<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token comment">// 计算两个精灵中心点的间距</span>
    vx <span class="token operator">=</span> r1<span class="token punctuation">.</span>centerX <span class="token operator">-</span> r2<span class="token punctuation">.</span>centerX
    vy <span class="token operator">=</span> r1<span class="token punctuation">.</span>centerY <span class="token operator">-</span> r2<span class="token punctuation">.</span>centerY

    <span class="token comment">// 计算两个精灵合并的 一半高度和宽度</span>
    combinedHalfWidths <span class="token operator">=</span> r1<span class="token punctuation">.</span>halfWidth <span class="token operator">+</span> r2<span class="token punctuation">.</span>halfWidth
    combinedHalfHeights <span class="token operator">=</span> r1<span class="token punctuation">.</span>halfHeight <span class="token operator">+</span> r2<span class="token punctuation">.</span>halfHeight
    <span class="token comment">// x 轴间距对比</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>vx<span class="token punctuation">)</span> <span class="token operator">&lt;</span> combinedHalfWidths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// x y 间距都小于连个精灵半径和 就是碰撞了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>vy<span class="token punctuation">)</span> <span class="token operator">&lt;</span> combinedHalfHeights<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hit <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            hit <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        hit <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> hit
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 限制精灵的移动范围
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sprite</span> 精灵
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">container</span> 范围
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">contain</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sprite<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         <span class="token comment">// 精灵碰撞到容器的位置</span>
         <span class="token keyword">let</span> collision
         <span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">.</span>x <span class="token operator">&lt;</span> container<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sprite<span class="token punctuation">.</span>x <span class="token operator">=</span> container<span class="token punctuation">.</span>x
            collision <span class="token operator">=</span> <span class="token string">'left'</span>
            <span class="token comment">// console.log(sprite.x + ' ' + container.x)</span>
         <span class="token punctuation">}</span>

         <span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">.</span>y <span class="token operator">&lt;</span> container<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             sprite<span class="token punctuation">.</span>y <span class="token operator">=</span> container<span class="token punctuation">.</span>y
             collision <span class="token operator">=</span> <span class="token string">'top'</span>
         <span class="token punctuation">}</span>
        <span class="token comment">//  console.log(sprite.x + sprite.width + ' ' + container.width)</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">.</span>x <span class="token operator">+</span> sprite<span class="token punctuation">.</span>width <span class="token operator">></span> container<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             sprite<span class="token punctuation">.</span>x <span class="token operator">=</span> container<span class="token punctuation">.</span>width <span class="token operator">-</span> sprite<span class="token punctuation">.</span>width
            <span class="token comment">//  console.log(sprite.x + ' ' + container.width)</span>
             collision <span class="token operator">=</span> <span class="token string">'right'</span>
         <span class="token punctuation">}</span>

         <span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">.</span>y <span class="token operator">+</span> sprite<span class="token punctuation">.</span>height <span class="token operator">></span> container<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             sprite<span class="token punctuation">.</span>y <span class="token operator">=</span> container<span class="token punctuation">.</span>height <span class="token operator">-</span> sprite<span class="token punctuation">.</span>height
             collision <span class="token operator">=</span> <span class="token string">'bottom'</span>
         <span class="token punctuation">}</span>
        <span class="token comment">//  console.log(collision)</span>
         <span class="token keyword">return</span> collision
        <span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 调用手机震动，当手机打开震动时才起作用
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">vibrateTime</span> 震动时间
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">vibrate</span> <span class="token punctuation">(</span><span class="token parameter">vibrateTime</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 振动2秒</span>
    navigator<span class="token punctuation">.</span>vibrate <span class="token operator">=</span> navigator<span class="token punctuation">.</span>vibrate <span class="token operator">||</span>
    navigator<span class="token punctuation">.</span>webkitVibrate <span class="token operator">||</span>
    navigator<span class="token punctuation">.</span>mozVibrate <span class="token operator">||</span>
    navigator<span class="token punctuation">.</span>msVibrate
    navigator<span class="token punctuation">.</span>vibrate <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span>vibrateTime<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 随机洗牌
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">input</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shuffle</span> <span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> input<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> randomIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> itemAtIndex <span class="token operator">=</span> input<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span>
        input<span class="token punctuation">[</span>randomIndex<span class="token punctuation">]</span> <span class="token operator">=</span> input<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        input<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> itemAtIndex
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> input
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取数组中相同元素个数
 * input ["coupon","coupon","point","coupon","coupon","point","point","point"];
 * output <span class="token punctuation">{</span>coupon:4,point: 4<span class="token punctuation">}</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getRepeatNum</span> <span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        prev<span class="token punctuation">[</span>next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>prev<span class="token punctuation">[</span>next<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">1</span>
        <span class="token keyword">return</span> prev
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 对象转数组
 * input <span class="token punctuation">{</span>coupon:4,point: 4<span class="token punctuation">}</span>
 * output [<span class="token punctuation">{</span>prizeType: "point",prizeNumber: 4<span class="token punctuation">}</span>,<span class="token punctuation">{</span>prizeType: "coupon",prizeNumber: 4<span class="token punctuation">}</span>]
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">object2Array</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> targetArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> arrayitem <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">prizeType</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
            <span class="token literal-property property">prizeNumber</span><span class="token operator">:</span> obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        targetArray<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arrayitem<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> targetArray
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* 返回监听
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">onBrowserBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">// 往浏览器增加浏览器历史记录</span>
      window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 监视了浏览器的返回事件不就好啦</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>'我是返回监听<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 环境判断</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(iPhone|iPad|iPod|iOS)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//alert(navigator.userAgent);  </span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span><span class="token string">"iPhone.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(Android)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//alert(navigator.userAgent); </span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span><span class="token string">"Android.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span><span class="token string">"pc.html"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 当浏览器切换页面或者最小化页面时，网页中如果存在计时器，再次打开可能出现bug,如使用计时器的图片轮播，在网页来回切换的时候图片会乱，解决方法:</span>

<span class="token comment">//由visibilitychange 判断当前的活动状态，</span>

<span class="token comment">// 当前页面有没有被隐藏 hidden</span>

  <span class="token keyword">var</span> bowhidden<span class="token operator">=</span><span class="token string">"hidden"</span> <span class="token keyword">in</span> document<span class="token operator">?</span><span class="token string">"hidden"</span><span class="token operator">:</span> <span class="token string">"webkithidden"</span> <span class="token keyword">in</span> document<span class="token operator">?</span><span class="token string">"webkithidden"</span><span class="token operator">:</span> <span class="token string">"mozhidden"</span> <span class="token keyword">in</span> document <span class="token operator">?</span><span class="token string">"mozhidden"</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> vibchage<span class="token operator">=</span><span class="token string">"visibilitychange"</span> <span class="token operator">||</span> <span class="token string">"webkitvisibilitychange"</span> <span class="token operator">||</span> <span class="token string">"mozvisibilitychange"</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>vibchage<span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">/*ie10+  moz  webkit  默认*/</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>document<span class="token punctuation">[</span>bowhidden<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">/*false*/</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"激活"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">/*true*/</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"隐藏"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br></div></div></template>
