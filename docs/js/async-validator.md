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