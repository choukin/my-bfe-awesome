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
        scriptEl.setAttribute('src', '////tool/9f-src/js/es6-promise/4.2.3/es6-promise.auto.min.js')
        window.document.head.appendChild(scriptEl)
      }
    })()
```    

```js
// 判断是否含有class
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

// 添加Class
export const addClass = (el, cls) => {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// 获取页面高度
export const getPageHeight = () => {
  let g = document
  let a = g.body
  let f = g.documentElement
  let d = g.compatMode == 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}

// 获取页面宽度
export const getPageWidth = () => {
  let g = document
  let a = g.body
  let f = g.documentElement
  let d = g.compatMode == 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}


// 获取页面可视高度
export const getPageViewHeight = () => {
  let d = document
  let a = d.compatMode == 'BackCompat' ? d.body : d.documentElement
  return a.clientHeight
}


// 获取页面可视宽度
export const getPageViewWidth = () => {
  let d = document
  let a = d.compatMode == 'BackCompat' ? d.body : d.documentElement
  return a.clientWidth
}


// 获取页面scrollTop
export const getPageScrollTop = () => {
  const a = document
  return a.documentElement.scrollTop || a.body.scrollTop
}
/**
 * 如果内容大于屏幕 底部元素 position:static 否则 fixed
 * @param {*} parmentel 根目录元素
 * @param {*} boteleheight 底部元素高
 * @param {*} bottomPos 现在底部元素position值
 */
export function setBottomPos (parentel, boteleheight, bottomPos) {
  if (bottomPos === 'static') {
    return bottomPos
  }
  const viewportH = getPageViewHeight()
  const contentH = parentel.getBoundingClientRect().height

  const heightPx = window.rem2px(boteleheight) // 底部的高度
  const isOverflow = viewportH - (contentH + heightPx) < 1
  let elstyle = isOverflow ? {position: 'static'} : {position: 'fixed'}
  return elstyle
}

```
