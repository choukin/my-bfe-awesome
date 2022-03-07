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
</ul>
</template>
