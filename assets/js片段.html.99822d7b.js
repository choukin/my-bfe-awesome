import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,a as s}from"./app.8e201d3a.js";const l={},d=s(`<h1 id="js-\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#js-\u7247\u6BB5" aria-hidden="true">#</a> js \u7247\u6BB5</h1><h3 id="\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a> \u7279\u6027</h3><ul><li><p>\u7ED3\u6784\u5316</p></li><li><p>\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</p></li><li><p>\u52A8\u6001\u8BED\u8A00</p></li><li><p>\u51FD\u6570\u5F0F\u8BED\u8A00</p></li><li><p>\u5E76\u884C\u8BED\u8A00</p></li><li><p><a href="https://github.com/kujian/30-seconds-of-code" target="_blank" rel="noopener noreferrer">Javascript \u7247\u6BB5, \u4F60\u53EF\u4EE5\u572830\u79D2\u6216\u66F4\u5C11\u7684\u65F6\u95F4\u91CC\u7406\u89E3</a></p></li></ul><h3 id="\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F-url" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F-url" aria-hidden="true">#</a> \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u662F url</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function checkURL(URL){
var str=URL;
//\u5224\u65ADURL\u5730\u5740\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u4E3A:http(s)?://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&amp;=]*)?
//\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\u5E94\u7528\u4E86\u8F6C\u4E49\u5B57\u7B26&quot;\\&quot;\u8F93\u51FA\u4E00\u4E2A\u5B57\u7B26&quot;/&quot;
var Expression=/http(s)?:\\/\\/([\\w-]+\\.)+[\\w-]+(\\/[\\w- .\\/?%&amp;=]*)?/;
var objExp=new RegExp(Expression);
if(objExp.test(str)==true){
return true;
}else{
return false;
}
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65E7\u6709\u6D4F\u89C8\u5668\u517C\u5BB9-promises-es6-promise" tabindex="-1"><a class="header-anchor" href="#\u65E7\u6709\u6D4F\u89C8\u5668\u517C\u5BB9-promises-es6-promise" aria-hidden="true">#</a> \u65E7\u6709\u6D4F\u89C8\u5668\u517C\u5BB9 promises es6-promise</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   (function polyfillPromise () {
      if (!window.Promise) {
        var scriptEl = document.createElement(&#39;script&#39;)
        scriptEl.setAttribute(&#39;src&#39;, &#39;////tool/9f-src/js/es6-promise/4.2.3/es6-promise.auto.min.js&#39;)
        window.document.head.appendChild(scriptEl)
      }
    })()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5224\u65AD\u662F\u5426\u542B\u6709class
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(&#39; &#39;) !== -1) throw new Error(&#39;className should not contain space.&#39;)
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (&#39; &#39; + el.className + &#39; &#39;).indexOf(&#39; &#39; + cls + &#39; &#39;) &gt; -1
  }
}

// \u6DFB\u52A0Class
export const addClass = (el, cls) =&gt; {
  if (!el) return
  var curClass = el.className
  var classes = (cls || &#39;&#39;).split(&#39; &#39;)

  for (var i = 0, j = classes.length; i &lt; j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += &#39; &#39; + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// \u83B7\u53D6\u9875\u9762\u9AD8\u5EA6
export const getPageHeight = () =&gt; {
  let g = document
  let a = g.body
  let f = g.documentElement
  let d = g.compatMode == &#39;BackCompat&#39; ? a : g.documentElement
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}

// \u83B7\u53D6\u9875\u9762\u5BBD\u5EA6
export const getPageWidth = () =&gt; {
  let g = document
  let a = g.body
  let f = g.documentElement
  let d = g.compatMode == &#39;BackCompat&#39; ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}


// \u83B7\u53D6\u9875\u9762\u53EF\u89C6\u9AD8\u5EA6
export const getPageViewHeight = () =&gt; {
  let d = document
  let a = d.compatMode == &#39;BackCompat&#39; ? d.body : d.documentElement
  return a.clientHeight
}


// \u83B7\u53D6\u9875\u9762\u53EF\u89C6\u5BBD\u5EA6
export const getPageViewWidth = () =&gt; {
  let d = document
  let a = d.compatMode == &#39;BackCompat&#39; ? d.body : d.documentElement
  return a.clientWidth
}


// \u83B7\u53D6\u9875\u9762scrollTop
export const getPageScrollTop = () =&gt; {
  const a = document
  return a.documentElement.scrollTop || a.body.scrollTop
}
/**
 * \u5982\u679C\u5185\u5BB9\u5927\u4E8E\u5C4F\u5E55 \u5E95\u90E8\u5143\u7D20 position:static \u5426\u5219 fixed
 * @param {*} parmentel \u6839\u76EE\u5F55\u5143\u7D20
 * @param {*} boteleheight \u5E95\u90E8\u5143\u7D20\u9AD8
 * @param {*} bottomPos \u73B0\u5728\u5E95\u90E8\u5143\u7D20position\u503C
 */
export function setBottomPos (parentel, boteleheight, bottomPos) {
  if (bottomPos === &#39;static&#39;) {
    return bottomPos
  }
  const viewportH = getPageViewHeight()
  const contentH = parentel.getBoundingClientRect().height

  const heightPx = window.rem2px(boteleheight) // \u5E95\u90E8\u7684\u9AD8\u5EA6
  const isOverflow = viewportH - (contentH + heightPx) &lt; 1
  let elstyle = isOverflow ? {position: &#39;static&#39;} : {position: &#39;fixed&#39;}
  return elstyle
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ios-\u5FAE\u4FE1-\u8FD4\u56DE\u9875\u9762\u4E0D\u5237\u65B0\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#ios-\u5FAE\u4FE1-\u8FD4\u56DE\u9875\u9762\u4E0D\u5237\u65B0\u517C\u5BB9" aria-hidden="true">#</a> ios \u5FAE\u4FE1 \u8FD4\u56DE\u9875\u9762\u4E0D\u5237\u65B0\u517C\u5BB9</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u89E3\u51B3ios \u5FAE\u4FE1\u8FD4\u56DE\u4E0D\u5237\u9875\u9762\u95EE\u9898
var isPageHide = false
window.addEventListener(&#39;pageshow&#39;, function() {
  if (isPageHide) {
    window.location.reload()
  }
})
window.addEventListener(&#39;pagehide&#39;, function() {
  isPageHide = true
})


/**
 * px \u6362\u7B97 rem
 * @param size \u8BBE\u8BA1\u7A3Fpx\u503C
 * @returns {number} rem\u503C
 */
export const px2rem = size =&gt; {
    const rootFontSize = parseFloat(window.document.documentElement.style.fontSize)
    return (size * rootFontSize) / 100
  }

/**
 * \u751F\u6210\u968F\u673A\u6570
 * @param {*} min
 * @param {*} max
 */
export const randomInt = (min, max) =&gt; {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *
 */
export const reSizeSpirte = (spirte) =&gt; {
    spirte.width = px2rem(spirte.width)
    spirte.height = px2rem(spirte.height)
    return spirte
}
// \u78B0\u649E\u68C0\u6D4B
export const hitTestRectangle = (r1, r2, globalFlag) =&gt; {
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy
    // console.log(r2.x + &#39;r2.x r2.x  &#39; + r2.y)
    let point = {
        x: r2.x,
        y: r2.y
    }
    // \u9ED8\u8BA4\u6CA1\u6709\u78B0\u649E
    hit = false
    // \u8BA1\u7B97\u6BCF\u4E2A\u7CBE\u7075\u7684\u4E2D\u5FC3\u70B9
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
    // \u8BA1\u7B97\u4E24\u4E2A\u7CBE\u7075\u4E2D\u5FC3\u70B9\u7684\u95F4\u8DDD
    vx = r1.centerX - r2.centerX
    vy = r1.centerY - r2.centerY

    // \u8BA1\u7B97\u4E24\u4E2A\u7CBE\u7075\u5408\u5E76\u7684 \u4E00\u534A\u9AD8\u5EA6\u548C\u5BBD\u5EA6
    combinedHalfWidths = r1.halfWidth + r2.halfWidth
    combinedHalfHeights = r1.halfHeight + r2.halfHeight
    // x \u8F74\u95F4\u8DDD\u5BF9\u6BD4
    if (Math.abs(vx) &lt; combinedHalfWidths) {
        // x y \u95F4\u8DDD\u90FD\u5C0F\u4E8E\u8FDE\u4E2A\u7CBE\u7075\u534A\u5F84\u548C \u5C31\u662F\u78B0\u649E\u4E86
        if (Math.abs(vy) &lt; combinedHalfHeights) {
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
 * \u9650\u5236\u7CBE\u7075\u7684\u79FB\u52A8\u8303\u56F4
 * @param {*} sprite \u7CBE\u7075
 * @param {*} container \u8303\u56F4
 */
export const contain = (sprite, container) =&gt; {
         // \u7CBE\u7075\u78B0\u649E\u5230\u5BB9\u5668\u7684\u4F4D\u7F6E
         let collision
         if (sprite.x &lt; container.x) {
            sprite.x = container.x
            collision = &#39;left&#39;
            // console.log(sprite.x + &#39; &#39; + container.x)
         }

         if (sprite.y &lt; container.y) {
             sprite.y = container.y
             collision = &#39;top&#39;
         }
        //  console.log(sprite.x + sprite.width + &#39; &#39; + container.width)
         if (sprite.x + sprite.width &gt; container.width) {
             sprite.x = container.width - sprite.width
            //  console.log(sprite.x + &#39; &#39; + container.width)
             collision = &#39;right&#39;
         }

         if (sprite.y + sprite.height &gt; container.height) {
             sprite.y = container.height - sprite.height
             collision = &#39;bottom&#39;
         }
        //  console.log(collision)
         return collision
        }

/**
 * \u8C03\u7528\u624B\u673A\u9707\u52A8\uFF0C\u5F53\u624B\u673A\u6253\u5F00\u9707\u52A8\u65F6\u624D\u8D77\u4F5C\u7528
 * @param {number} vibrateTime \u9707\u52A8\u65F6\u95F4
 */
export function vibrate (vibrateTime) {
    // \u632F\u52A82\u79D2
    navigator.vibrate = navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate
    navigator.vibrate &amp;&amp; navigator.vibrate(vibrateTime)
}

/**
 * \u968F\u673A\u6D17\u724C
 * @param {*} input
 */
export function shuffle (input) {
    for (let i = input.length - 1; i &gt;= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let itemAtIndex = input[randomIndex]
        input[randomIndex] = input[i]
        input[i] = itemAtIndex
    }
    return input
}

/**
 * \u83B7\u53D6\u6570\u7EC4\u4E2D\u76F8\u540C\u5143\u7D20\u4E2A\u6570
 * input [&quot;coupon&quot;,&quot;coupon&quot;,&quot;point&quot;,&quot;coupon&quot;,&quot;coupon&quot;,&quot;point&quot;,&quot;point&quot;,&quot;point&quot;];
 * output {coupon:4,point: 4}
 */
export function getRepeatNum (array) {
    return array.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1) || 1
        return prev
    }, {})
}

/**
 * \u5BF9\u8C61\u8F6C\u6570\u7EC4
 * input {coupon:4,point: 4}
 * output [{prizeType: &quot;point&quot;,prizeNumber: 4},{prizeType: &quot;coupon&quot;,prizeNumber: 4}]
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
* \u8FD4\u56DE\u76D1\u542C
*/
export function onBrowserBack(){
     // \u5F80\u6D4F\u89C8\u5668\u589E\u52A0\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55
      window.history.pushState(null, null, document.URL);
      // \u76D1\u89C6\u4E86\u6D4F\u89C8\u5668\u7684\u8FD4\u56DE\u4E8B\u4EF6\u4E0D\u5C31\u597D\u5566
      window.addEventListener(&#39;popstate&#39;, function(){
        alert(&#39;\u6211\u662F\u8FD4\u56DE\u76D1\u542C)
      },false)
}

// \u73AF\u5883\u5224\u65AD
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    window.location.href =&quot;iPhone.html&quot;;
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent); 
    window.location.href =&quot;Android.html&quot;;
} else {
    window.location.href =&quot;pc.html&quot;;
};

// \u5F53\u6D4F\u89C8\u5668\u5207\u6362\u9875\u9762\u6216\u8005\u6700\u5C0F\u5316\u9875\u9762\u65F6\uFF0C\u7F51\u9875\u4E2D\u5982\u679C\u5B58\u5728\u8BA1\u65F6\u5668\uFF0C\u518D\u6B21\u6253\u5F00\u53EF\u80FD\u51FA\u73B0bug,\u5982\u4F7F\u7528\u8BA1\u65F6\u5668\u7684\u56FE\u7247\u8F6E\u64AD\uFF0C\u5728\u7F51\u9875\u6765\u56DE\u5207\u6362\u7684\u65F6\u5019\u56FE\u7247\u4F1A\u4E71\uFF0C\u89E3\u51B3\u65B9\u6CD5:

//\u7531visibilitychange \u5224\u65AD\u5F53\u524D\u7684\u6D3B\u52A8\u72B6\u6001\uFF0C

// \u5F53\u524D\u9875\u9762\u6709\u6CA1\u6709\u88AB\u9690\u85CF hidden

  var bowhidden=&quot;hidden&quot; in document?&quot;hidden&quot;: &quot;webkithidden&quot; in document?&quot;webkithidden&quot;: &quot;mozhidden&quot; in document ?&quot;mozhidden&quot;: null;
    var vibchage=&quot;visibilitychange&quot; || &quot;webkitvisibilitychange&quot; || &quot;mozvisibilitychange&quot;;
    document.addEventListener(vibchage,function (){
        /*ie10+  moz  webkit  \u9ED8\u8BA4*/
        if(!document[bowhidden]) /*false*/
        {
            console.log(&quot;\u6FC0\u6D3B&quot;);
        }
        else{
            /*true*/
            console.log(&quot;\u9690\u85CF&quot;);
        }
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76D1\u542C\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u9519\u8BEF" aria-hidden="true">#</a> \u76D1\u542C\u9519\u8BEF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
      var errors = [];
      function collectError() {
        // \u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF\u6570\u636E\u91C7\u96C6
        addEventListener(
          &quot;error&quot;,
          (e) =&gt; {
            var target = e.target;
            if (target != window) {
              var item = {
                type: target.localName,
                url: target.src || target.href,
                msg: (target.src || target.href) + &quot; is load error&quot;,
                time: new Date().getTime(), // \u9519\u8BEF\u53D1\u751F\u7684\u65F6\u95F4
              };
              errors.push(item);
              alert(JSON.stringify(item));
            }
          },
          true
        );
        // \u76D1\u542Cjs\u9519\u8BEF
        window.onerror = function (msg, url, row, col, error) {
          var item = {
            type: &quot;javascript&quot;,
            row: row,
            col: col,
            msg: error &amp;&amp; error.stack ? error.stack : msg,
            url: url,
            time: new Date().getTime(), // \u9519\u8BEF\u53D1\u751F\u7684\u65F6\u95F4
          };
          errors.push(item);
          alert(JSON.stringify(item));
        };
        // \u76D1\u542C promise \u9519\u8BEF \u7F3A\u70B9\u662F\u83B7\u53D6\u4E0D\u5230\u884C\u6570\u6570\u636E
        addEventListener(&quot;unhandledrejection&quot;, (e) =&gt; {
          var item = {
            type: &quot;promise&quot;,
            msg: (e.reason &amp;&amp; e.reason.msg) || e.reason || &quot;&quot;,
            time: new Date().getTime(), // \u9519\u8BEF\u53D1\u751F\u7684\u65F6\u95F4
          };
          errors.push(item);
          alert(JSON.stringify(item));
        });
      }
      collectError();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[d];function v(a,t){return n(),e("div",null,r)}var m=i(l,[["render",v],["__file","js\u7247\u6BB5.html.vue"]]);export{m as default};
