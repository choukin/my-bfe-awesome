## js 片段

### 判断字符串是否是 url
```js
function checkURL(URL){
var str=URL;
//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
//下面的代码中应用了转义字符"\"输出一个字符"/"
var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
var objExp=new RegExp(Expression);
if(objExp.test(str)==true){
return true;
}else{
return false;
}
} 
```

### 旧有浏览器兼容 promises es6-promise
```js 
   (function polyfillPromise () {
      if (!window.Promise) {
        var scriptEl = document.createElement('script')
        scriptEl.setAttribute('src', '//static.9f.cn/bfe/tool/9f-src/js/es6-promise/4.2.3/es6-promise.auto.min.js')
        window.document.head.appendChild(scriptEl)
      }
    })()
```    
