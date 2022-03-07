# 小程序收集
## 判断当前环境是开发线上还是体验
```js
console.log(__wxConfig.envVersion) // ,查看打印出来的是什么
// 有效参数值为：develop（开发版），trial（体验版），release（正式版）
```