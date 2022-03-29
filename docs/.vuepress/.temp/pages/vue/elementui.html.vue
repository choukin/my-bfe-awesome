<template><h1 id="element-ui-问题记录" tabindex="-1"><a class="header-anchor" href="#element-ui-问题记录" aria-hidden="true">#</a> element UI 问题记录</h1>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述：</h2>
<p>element-ui 日期选择器如何限制只能选择31天，也就是在选定起始日期时，只能向后面选择31天？</p>
<h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点：</h3>
<p>element-ui日期选择组件地址：http://element-cn.eleme.io/#/zh-CN/component/date-picker</p>
<p>picker-options：当前时间日期选择器特有的选项，类型object</p>
<p>disabledDate：设置禁用状态，参数为当前日期，要求返回 Boolean，类型Function</p>
<p>onPick：选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效，类型Function({ maxDate, minDate })</p>
<p>解决办法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
        <span class="token operator">&lt;</span>el<span class="token operator">-</span>date<span class="token operator">-</span>picker
                v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"dateRange"</span>
                <span class="token operator">:</span>picker<span class="token operator">-</span>options<span class="token operator">=</span><span class="token string">"pickerOption"</span>
                type<span class="token operator">=</span><span class="token string">"daterange"</span>
                range<span class="token operator">-</span>separator<span class="token operator">=</span><span class="token string">"至"</span>
                start<span class="token operator">-</span>placeholder<span class="token operator">=</span><span class="token string">"开始日期"</span>
                end<span class="token operator">-</span>placeholder<span class="token operator">=</span><span class="token string">"结束日期"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>date<span class="token operator">-</span>picker<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">dateRange</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pickerMinDate</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 开始时间</span>
        <span class="token literal-property property">pickerOption</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">onPick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> minDate<span class="token punctuation">,</span> maxDate <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">debugger</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>pickerMinDate <span class="token operator">=</span> minDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>maxDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pickerMinDate <span class="token operator">=</span> <span class="token string">''</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">disabledDate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">debugger</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pickerMinDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> day31 <span class="token operator">=</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span>
            <span class="token keyword">const</span> maxTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pickerMinDate <span class="token operator">+</span> day31
            <span class="token keyword">return</span> time<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> maxTime
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></template>
