# [async-validator](https://github.com/freeformsystems/async-validate)
## Type 内置类型
下列是 type 可用的值：

- string: 必须是 string. This is the default type.
- number: 必须是 number.
- boolean: 必须是 boolean.
- method: 必须是 function.
- regexp: 必须是正则或者是在调用 new RegExp 时不报错的字符串.
- integer: 整数.
- float: 浮点数.
- array: 必须是数组，通过 Array.isArray 判断.
- object: 是对象且不为数组.
- enum: 值必须出现在 enmu 枚举值中.
- date: 合法的日期，使用 Date 判断
- url: url.
- hex: 16进制.
- email: 邮箱地址.

- { type: 'pattern', pattern: /^[1-9]\d*$/, message: '请输入正整数', trigger: 'blur' }

-  { required: true, pattern: /^\S{5,30}$/, message: '链接描述需要在5~30个字之间' },

-  { required: true, max:30, min:5, message: '链接描述需要在5~30个字之间' },

```js
// 手机号
export const phonePattern = /1([0-9])\d{9}/;
// 校验中文 2 到 6位长度
export const chineseNamePattern = /^[\u4E00-\u9FFF]{2,6}$/;
// 身份证正则
export const idCardPattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
// 手机号脱敏
export const hiddenMobile = mobile => {
  if (mobile.length === 11) return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};
/**
 *  正则匹配日期格式添加双引号
 * @param {*} str
 * @returns
 */
export const parseDateTime = (str) => {
  if (!str) return str
  const result = str.replace(/\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}/g, function(match) { return `"${match}"` })
  return result
}

/**
 * 千分位
 * 没有考虑小数点的情况
 */
export const thouthds = (str)=>{
  return String(str).replace(/(\d)(?=(\d{3})+$)/g,"$1,")
}
 
```




