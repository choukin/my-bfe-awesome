import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as r}from"./app.8e201d3a.js";const l={},s=r(`<h1 id="async-validator" tabindex="-1"><a class="header-anchor" href="#async-validator" aria-hidden="true">#</a> <a href="https://github.com/freeformsystems/async-validate" target="_blank" rel="noopener noreferrer">async-validator</a></h1><h2 id="type-\u5185\u7F6E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#type-\u5185\u7F6E\u7C7B\u578B" aria-hidden="true">#</a> Type \u5185\u7F6E\u7C7B\u578B</h2><p>\u4E0B\u5217\u662F type \u53EF\u7528\u7684\u503C\uFF1A</p><ul><li><p>string: \u5FC5\u987B\u662F string. This is the default type.</p></li><li><p>number: \u5FC5\u987B\u662F number.</p></li><li><p>boolean: \u5FC5\u987B\u662F boolean.</p></li><li><p>method: \u5FC5\u987B\u662F function.</p></li><li><p>regexp: \u5FC5\u987B\u662F\u6B63\u5219\u6216\u8005\u662F\u5728\u8C03\u7528 new RegExp \u65F6\u4E0D\u62A5\u9519\u7684\u5B57\u7B26\u4E32.</p></li><li><p>integer: \u6574\u6570.</p></li><li><p>float: \u6D6E\u70B9\u6570.</p></li><li><p>array: \u5FC5\u987B\u662F\u6570\u7EC4\uFF0C\u901A\u8FC7 Array.isArray \u5224\u65AD.</p></li><li><p>object: \u662F\u5BF9\u8C61\u4E14\u4E0D\u4E3A\u6570\u7EC4.</p></li><li><p>enum: \u503C\u5FC5\u987B\u51FA\u73B0\u5728 enmu \u679A\u4E3E\u503C\u4E2D.</p></li><li><p>date: \u5408\u6CD5\u7684\u65E5\u671F\uFF0C\u4F7F\u7528 Date \u5224\u65AD</p></li><li><p>url: url.</p></li><li><p>hex: 16\u8FDB\u5236.</p></li><li><p>email: \u90AE\u7BB1\u5730\u5740.</p></li><li><p>{ type: &#39;pattern&#39;, pattern: /^[1-9]\\d*$/, message: &#39;\u8BF7\u8F93\u5165\u6B63\u6574\u6570&#39;, trigger: &#39;blur&#39; }</p></li><li><p>{ required: true, pattern: /^\\S{5,30}$/, message: &#39;\u94FE\u63A5\u63CF\u8FF0\u9700\u8981\u57285~30\u4E2A\u5B57\u4E4B\u95F4&#39; },</p></li><li><p>{ required: true, max:30, min:5, message: &#39;\u94FE\u63A5\u63CF\u8FF0\u9700\u8981\u57285~30\u4E2A\u5B57\u4E4B\u95F4&#39; },</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u624B\u673A\u53F7
export const phonePattern = /1([0-9])\\d{9}/;
// \u6821\u9A8C\u4E2D\u6587 2 \u5230 6\u4F4D\u957F\u5EA6
export const chineseNamePattern = /^[\\u4E00-\\u9FFF]{2,6}$/;
// \u8EAB\u4EFD\u8BC1\u6B63\u5219
export const idCardPattern = /^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$/;
// \u624B\u673A\u53F7\u8131\u654F
export const hiddenMobile = mobile =&gt; {
  if (mobile.length === 11) return mobile.replace(/(\\d{3})\\d{4}(\\d{4})/, &#39;$1****$2&#39;);
};
/**
 *  \u6B63\u5219\u5339\u914D\u65E5\u671F\u683C\u5F0F\u6DFB\u52A0\u53CC\u5F15\u53F7
 * @param {*} str
 * @returns
 */
export const parseDateTime = (str) =&gt; {
  if (!str) return str
  const result = str.replace(/\\d{4}-\\d{1,2}-\\d{1,2} \\d{1,2}:\\d{1,2}:\\d{1,2}/g, function(match) { return \`&quot;\${match}&quot;\` })
  return result
}

/**
 * \u5343\u5206\u4F4D
 * \u6CA1\u6709\u8003\u8651\u5C0F\u6570\u70B9\u7684\u60C5\u51B5
 */
export const thouthds = (str)=&gt;{
  return String(str).replace(/(\\d)(?=(\\d{3})+$)/g,&quot;$1,&quot;)
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[s];function d(t,c){return i(),n("div",null,a)}var p=e(l,[["render",d],["__file","async-validator.html.vue"]]);export{p as default};
