# rem

### 等比例缩放
 ```js
(function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth
          if (!clientWidth) return
          docEl.style.fontSize = (clientWidth >= 720 ? 100 : clientWidth / 7.5) + 'px'
        }
      if (!doc.addEventListener) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
 ```

 ## 有缩放的方案

 ```js
   /* 基于 ant-design-mobile 高清解决方案 */
    (function calcFontSize() {
      var doc = window.document
      var docEl = doc.documentElement
      var isIOS = navigator.appVersion.match(/(iphone)/gi)
      var isAndroid = navigator.userAgent.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)
      var dpr = window.devicePixelRatio || 1
      var wWidth = window.screen.width > 0 && (window.innerWidth >= window.screen.width || window.innerWidth === 0) ? window.screen.width : window.innerWidth
      var fontScale = 0.5 /* 设计稿为二倍图 */
      var baseFontSize = 100 /* 规定 1rem = 100px */

      /**
       * 修正rem支持问题导致计算不准
       * 如Samsung S7，fontSize设置为100px，实际1rem!=100px，
       */
      var adjustScale = 1
      docEl.style.fontSize = '100px'
      var tempDiv = doc.createElement('div')
      tempDiv.setAttribute('style', 'width:1rem; display:none')
      docEl.appendChild(tempDiv)
      var realWidth = window.getComputedStyle(tempDiv).width;
      docEl.removeChild(tempDiv)
      if (realWidth !== docEl.style.fontSize) {
        adjustScale = 100 / parseInt(realWidth)
      }

      /**
       * 以下情况不适用高清缩放
       *   1. 非iOS
       *   2. Android4.3及以下
       *   3. iPhone6：钱包iOS使用UIWebView，在iphone6下缩放，内容宽度会变成376，导致页面可以左右滑动
       */
      if ((!isIOS && !(isAndroid && isAndroid[1] > 534)) || (isIOS && wWidth === 375)) {
        dpr = 1
      }
      var scale = 1 / dpr
      docEl.setAttribute('data-dpr', dpr)

      var metaEl = doc.querySelector('meta[name="viewport"]')
      if (!metaEl) {
        metaEl = doc.createElement('meta')
        metaEl.setAttribute('name', 'viewport')
        doc.head.appendChild(metaEl)
      }
      metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale)
      docEl.style.fontSize = dpr * fontScale * baseFontSize * adjustScale + 'px'

      window.addEventListener('resize', calcFontSize)
    })()

 ```