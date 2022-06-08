<template><h1 id="async-validator" tabindex="-1"><a class="header-anchor" href="#async-validator" aria-hidden="true">#</a> <a href="https://github.com/freeformsystems/async-validate" target="_blank" rel="noopener noreferrer">async-validator<ExternalLinkIcon/></a></h1>
<h2 id="type-内置类型" tabindex="-1"><a class="header-anchor" href="#type-内置类型" aria-hidden="true">#</a> Type 内置类型</h2>
<p>下列是 type 可用的值：</p>
<ul>
<li>
<p>string: 必须是 string. This is the default type.</p>
</li>
<li>
<p>number: 必须是 number.</p>
</li>
<li>
<p>boolean: 必须是 boolean.</p>
</li>
<li>
<p>method: 必须是 function.</p>
</li>
<li>
<p>regexp: 必须是正则或者是在调用 new RegExp 时不报错的字符串.</p>
</li>
<li>
<p>integer: 整数.</p>
</li>
<li>
<p>float: 浮点数.</p>
</li>
<li>
<p>array: 必须是数组，通过 Array.isArray 判断.</p>
</li>
<li>
<p>object: 是对象且不为数组.</p>
</li>
<li>
<p>enum: 值必须出现在 enmu 枚举值中.</p>
</li>
<li>
<p>date: 合法的日期，使用 Date 判断</p>
</li>
<li>
<p>url: url.</p>
</li>
<li>
<p>hex: 16进制.</p>
</li>
<li>
<p>email: 邮箱地址.</p>
</li>
<li>
<p>{ type: 'pattern', pattern: /^[1-9]\d*$/, message: '请输入正整数', trigger: 'blur' }</p>
</li>
<li>
<p>{ required: true, pattern: /^\S{5,30}$/, message: '链接描述需要在5~30个字之间' },</p>
</li>
<li>
<p>{ required: true, max:30, min:5, message: '链接描述需要在5~30个字之间' },</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 手机号</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> phonePattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">1([0-9])\d{9}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 校验中文 2 到 6位长度</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> chineseNamePattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\u4E00-\u9FFF]{2,6}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 身份证正则</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> idCardPattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token comment">// 手机号脱敏</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hiddenMobile</span> <span class="token operator">=</span> <span class="token parameter">mobile</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>mobile<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">return</span> mobile<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\d{3})\d{4}(\d{4})</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">'$1****$2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 *  正则匹配日期格式添加双引号
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">parseDateTime</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>str<span class="token punctuation">)</span> <span class="token keyword">return</span> str
  <span class="token keyword">const</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">match</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>match<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
