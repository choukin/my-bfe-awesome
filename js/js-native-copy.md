# javascript 原生 监听浏览器复制粘贴内容

## 监听事件
- copy 当用户在浏览器进行复制操作（ctrl+c 或者鼠标右键复制） 和调用 `document.execCommand('copy')` 时， copy 事件会被触发
- paste 当从剪切板粘贴内容时会触发 paste 事件

### 注册监听事件
```js
 document.addEventListener('copy', copy)
 function copy(onEvent) {
     onEvent.preventDefault();
     onEvent.clipboardData.setData('text', '我是拷贝内容')
 }

 document.addEventListener('paste', paste)
 function paste (onEvent){
     console.log(onEvent.clipboardData.getData('text'))
 }
```