# js 片段

### 特性
- 结构化
- 面向对象编程
- 动态语言
- 函数式语言
- 并行语言

- [Javascript 片段, 你可以在30秒或更少的时间里理解](https://github.com/kujian/30-seconds-of-code)
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

## ios 微信 返回页面不刷新兼容
```js
// 解决ios 微信返回不刷页面问题
var isPageHide = false
window.addEventListener('pageshow', function() {
  if (isPageHide) {
    window.location.reload()
  }
})
window.addEventListener('pagehide', function() {
  isPageHide = true
})


/**
 * px 换算 rem
 * @param size 设计稿px值
 * @returns {number} rem值
 */
export const px2rem = size => {
    const rootFontSize = parseFloat(window.document.documentElement.style.fontSize)
    return (size * rootFontSize) / 100
  }

/**
 * 生成随机数
 * @param {*} min
 * @param {*} max
 */
export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *
 */
export const reSizeSpirte = (spirte) => {
    spirte.width = px2rem(spirte.width)
    spirte.height = px2rem(spirte.height)
    return spirte
}
// 碰撞检测
export const hitTestRectangle = (r1, r2, globalFlag) => {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy
    // console.log(r2.x + 'r2.x r2.x  ' + r2.y)
    let point = {
        x: r2.x,
        y: r2.y
    }
    // 默认没有碰撞
    hit = false
    // 计算每个精灵的中心点
    r1.centerX = r1.x + r1.width / 2
    r1.centerY = r1.y + r1.height / 2
    if (globalFlag) {
      point = r2.getGlobalPosition()
    }
    r2.centerX = point.x + r2.width / 2
    r2.centerY = point.y + r2.height / 2

    r1.halfWidth = r1.width / 2
    r1.halfHeight = r1.height / 2
    r2.halfWidth = r2.width / 2
    r2.halfHeight = r2.height / 2
    // 计算两个精灵中心点的间距
    vx = r1.centerX - r2.centerX
    vy = r1.centerY - r2.centerY

    // 计算两个精灵合并的 一半高度和宽度
    combinedHalfWidths = r1.halfWidth + r2.halfWidth
    combinedHalfHeights = r1.halfHeight + r2.halfHeight
    // x 轴间距对比
    if (Math.abs(vx) < combinedHalfWidths) {
        // x y 间距都小于连个精灵半径和 就是碰撞了
        if (Math.abs(vy) < combinedHalfHeights) {
            hit = true
        } else {
            hit = false
        }
    } else {
        hit = false
    }

    return hit
}

/**
 * 限制精灵的移动范围
 * @param {*} sprite 精灵
 * @param {*} container 范围
 */
export const contain = (sprite, container) => {
         // 精灵碰撞到容器的位置
         let collision
         if (sprite.x < container.x) {
            sprite.x = container.x
            collision = 'left'
            // console.log(sprite.x + ' ' + container.x)
         }

         if (sprite.y < container.y) {
             sprite.y = container.y
             collision = 'top'
         }
        //  console.log(sprite.x + sprite.width + ' ' + container.width)
         if (sprite.x + sprite.width > container.width) {
             sprite.x = container.width - sprite.width
            //  console.log(sprite.x + ' ' + container.width)
             collision = 'right'
         }

         if (sprite.y + sprite.height > container.height) {
             sprite.y = container.height - sprite.height
             collision = 'bottom'
         }
        //  console.log(collision)
         return collision
        }

/**
 * 调用手机震动，当手机打开震动时才起作用
 * @param {number} vibrateTime 震动时间
 */
export function vibrate (vibrateTime) {
    // 振动2秒
    navigator.vibrate = navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate
    navigator.vibrate && navigator.vibrate(vibrateTime)
}

/**
 * 随机洗牌
 * @param {*} input
 */
export function shuffle (input) {
    for (let i = input.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let itemAtIndex = input[randomIndex]
        input[randomIndex] = input[i]
        input[i] = itemAtIndex
    }
    return input
}

/**
 * 获取数组中相同元素个数
 * input ["coupon","coupon","point","coupon","coupon","point","point","point"];
 * output {coupon:4,point: 4}
 */
export function getRepeatNum (array) {
    return array.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1) || 1
        return prev
    }, {})
}

/**
 * 对象转数组
 * input {coupon:4,point: 4}
 * output [{prizeType: "point",prizeNumber: 4},{prizeType: "coupon",prizeNumber: 4}]
 * @param {*} obj
 */
export function object2Array (obj) {
    const targetArray = []
    for (let item in obj) {
        let arrayitem = {
            prizeType: item,
            prizeNumber: obj[item]
        }
        targetArray.push(arrayitem)
    }
    return targetArray
}

/**
* 返回监听
*/
export function onBrowserBack(){
     // 往浏览器增加浏览器历史记录
      window.history.pushState(null, null, document.URL);
      // 监视了浏览器的返回事件不就好啦
      window.addEventListener('popstate', function(){
        alert('我是返回监听)
      },false)
}

// 环境判断
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    window.location.href ="iPhone.html";
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent); 
    window.location.href ="Android.html";
} else {
    window.location.href ="pc.html";
};

// 当浏览器切换页面或者最小化页面时，网页中如果存在计时器，再次打开可能出现bug,如使用计时器的图片轮播，在网页来回切换的时候图片会乱，解决方法:

//由visibilitychange 判断当前的活动状态，

// 当前页面有没有被隐藏 hidden

  var bowhidden="hidden" in document?"hidden": "webkithidden" in document?"webkithidden": "mozhidden" in document ?"mozhidden": null;
    var vibchage="visibilitychange" || "webkitvisibilitychange" || "mozvisibilitychange";
    document.addEventListener(vibchage,function (){
        /*ie10+  moz  webkit  默认*/
        if(!document[bowhidden]) /*false*/
        {
            console.log("激活");
        }
        else{
            /*true*/
            console.log("隐藏");
        }
    })
```


### 监听错误
```js

      var errors = [];
      function collectError() {
        // 资源加载错误数据采集
        addEventListener(
          "error",
          (e) => {
            var target = e.target;
            if (target != window) {
              var item = {
                type: target.localName,
                url: target.src || target.href,
                msg: (target.src || target.href) + " is load error",
                time: new Date().getTime(), // 错误发生的时间
              };
              errors.push(item);
              alert(JSON.stringify(item));
            }
          },
          true
        );
        // 监听js错误
        window.onerror = function (msg, url, row, col, error) {
          var item = {
            type: "javascript",
            row: row,
            col: col,
            msg: error && error.stack ? error.stack : msg,
            url: url,
            time: new Date().getTime(), // 错误发生的时间
          };
          errors.push(item);
          alert(JSON.stringify(item));
        };
        // 监听 promise 错误 缺点是获取不到行数数据
        addEventListener("unhandledrejection", (e) => {
          var item = {
            type: "promise",
            msg: (e.reason && e.reason.msg) || e.reason || "",
            time: new Date().getTime(), // 错误发生的时间
          };
          errors.push(item);
          alert(JSON.stringify(item));
        });
      }
      collectError();
```      