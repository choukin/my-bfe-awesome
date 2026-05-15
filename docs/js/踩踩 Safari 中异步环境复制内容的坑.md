遇到事情不要先说困难，先积极的去处理

现代浏览器中大都支持Clipboard API，但是在较新版本的Safari 中只有在用户交互直接触发时才支持；为了防止恶意网站扰乱你的剪贴板内容，我们不能在用户点击后触发的Promise中使用复制功能；

比如需要实现的功能是用户点击按钮后要复制通过接口返回的内容，想想功能很简单，于是写了下面的代码，Chrome 和 Firefox 中测试完全👌，但是在Safari中无效😭

```js

fetch(someUrl).then(response => response.text())  
  .then(text => navigator.clipboard.writeText(text))

```

Safari 中会有错误提示

```bash
Unhandled Promise Rejection: NotAllowedError:The request is not allowed by the user agent orthe platform in the current context, possiblybecause the user denied permission.
```

看到错误提示也不知道解决方案，只能继续通过关键字搜索，在苹果开发者论坛中搜到了一些线索

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/118599/1767874861495-5e03373c-ee27-4de5-97de-52d7fb71dd4d.png)

长按二维码查看论坛内容

解决方案是不要在异步上下文中调用 Clipboard API，而是反过来，让 Clipboard API 接收异步 Promise。这样 Clipboard API 就会从由用户交互直接触发的同步上下文中被调用，并且 Clipboard API 会在内部自行处理 Promise 的解析。

这需要创建一个 `ClipboardItem` 并将其添加到剪贴板中，而不是直接将纯文本添加到剪贴板。

```javascript
const text = new ClipboardItem(
  {  "text/plain": 
    fetch(this.sourceUrlValue)    
    .then(response => response.text())    
    .then(text => new Blob([text], { type: "text/plain" }))})

navigator.clipboard.write([text])
```

上面的方案在Chrome 和Safari 中完全ok 但是在 Firefox 中无效会提示

`ReferenceError: ClipboardItem is not defined`

我们需要考虑兼容整合方案，不支持 `ClipboardItem`就用最开始的方案实现，如果浏览器比较旧 连clipboard 都不支持我们要考虑使用最原始的方案来兼容，于是最后形成的方案如下

```javascript
// 旧版浏览器复制方案
function copyToClipboard(text) {
  var textarea = document.createElement('textarea')
  textarea.style.position = 'fixed'
  textarea.style.opacity = 0
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function handleCopy(){
  if (typeof ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
    // 注意：Safari 将剪贴板 API 限制为仅在直接用户交互触发时才能工作。
    // 无法在 Promise 中异步使用它。
    // 但是！你可以将 Promise 包装在 ClipboardItem 中，然后将其传递给剪贴板 API。
    // 参考：https://developer.apple.com/forums/thread/691873
    const text = new ClipboardItem({
      "text/plain": fetch(someUrl)
        .then((response) => response.text())
        .then((text) => new Blob([text], { type: "text/plain" }))
    })
    navigator.clipboard.write([text])
  } else {
    // 注意：Firefox 支持 ClipboardItem 和 navigator.clipboard.write，
    // 但这些功能隐藏在 `dom.events.asyncClipboard.clipboardItem` 首选项后面。
    // 好消息是，与 Safari 不同的是，Firefox 不介意在 Promise 中异步使用剪贴板 API。
    fetch(someUrl)
      .then((response) => response.text())
      .then((text) => {
        // 支持 navigator.clipboard 对象之间使用 writeText 复制
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
        }else {
          // 不支持 navigator.clipboard 使用 document.execCommand('copy') 进行复制
          copyToClipboard(text)
        }
      }
           )
  }
}
```

## 大功告成
最终，从 URL 获取的文本复制功能在 Chrome、Safari 和 Firefox 中都能正常工作了。一切只需要一个 if 语句。

