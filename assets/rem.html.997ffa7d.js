import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as d}from"./app.8e201d3a.js";const a={},l=d(`<h1 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h1><h3 id="\u7B49\u6BD4\u4F8B\u7F29\u653E" tabindex="-1"><a class="header-anchor" href="#\u7B49\u6BD4\u4F8B\u7F29\u653E" aria-hidden="true">#</a> \u7B49\u6BD4\u4F8B\u7F29\u653E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>(function (doc, win) {
     var docEl = doc.documentElement,
       resizeEvt = &#39;orientationchange&#39; in window ? &#39;orientationchange&#39; : &#39;resize&#39;,
       recalc = function () {
         var clientWidth = docEl.clientWidth
         if (!clientWidth) return
         docEl.style.fontSize = (clientWidth &gt;= 720 ? 100 : clientWidth / 7.5) + &#39;px&#39;
       }
     if (!doc.addEventListener) return
     win.addEventListener(resizeEvt, recalc, false)
     doc.addEventListener(&#39;DOMContentLoaded&#39;, recalc, false)
   })(document, window)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6709\u7F29\u653E\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6709\u7F29\u653E\u7684\u65B9\u6848" aria-hidden="true">#</a> \u6709\u7F29\u653E\u7684\u65B9\u6848</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  /* \u57FA\u4E8E ant-design-mobile \u9AD8\u6E05\u89E3\u51B3\u65B9\u6848 */
   (function calcFontSize() {
     var doc = window.document
     var docEl = doc.documentElement
     var isIOS = navigator.appVersion.match(/(iphone)/gi)
     var isAndroid = navigator.userAgent.match(/Android[\\S\\s]+AppleWebkit\\/(\\d{3})/i)
     var dpr = window.devicePixelRatio || 1
     var wWidth = window.screen.width &gt; 0 &amp;&amp; (window.innerWidth &gt;= window.screen.width || window.innerWidth === 0) ? window.screen.width : window.innerWidth
     var fontScale = 0.5 /* \u8BBE\u8BA1\u7A3F\u4E3A\u4E8C\u500D\u56FE */
     var baseFontSize = 100 /* \u89C4\u5B9A 1rem = 100px */

     /**
      * \u4FEE\u6B63rem\u652F\u6301\u95EE\u9898\u5BFC\u81F4\u8BA1\u7B97\u4E0D\u51C6
      * \u5982Samsung S7\uFF0CfontSize\u8BBE\u7F6E\u4E3A100px\uFF0C\u5B9E\u96451rem!=100px\uFF0C
      */
     var adjustScale = 1
     docEl.style.fontSize = &#39;100px&#39;
     var tempDiv = doc.createElement(&#39;div&#39;)
     tempDiv.setAttribute(&#39;style&#39;, &#39;width:1rem; display:none&#39;)
     docEl.appendChild(tempDiv)
     var realWidth = window.getComputedStyle(tempDiv).width;
     docEl.removeChild(tempDiv)
     if (realWidth !== docEl.style.fontSize) {
       adjustScale = 100 / parseInt(realWidth)
     }

     /**
      * \u4EE5\u4E0B\u60C5\u51B5\u4E0D\u9002\u7528\u9AD8\u6E05\u7F29\u653E
      *   1. \u975EiOS
      *   2. Android4.3\u53CA\u4EE5\u4E0B
      *   3. iPhone6\uFF1A\u94B1\u5305iOS\u4F7F\u7528UIWebView\uFF0C\u5728iphone6\u4E0B\u7F29\u653E\uFF0C\u5185\u5BB9\u5BBD\u5EA6\u4F1A\u53D8\u6210376\uFF0C\u5BFC\u81F4\u9875\u9762\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8
      */
     if ((!isIOS &amp;&amp; !(isAndroid &amp;&amp; isAndroid[1] &gt; 534)) || (isIOS &amp;&amp; wWidth === 375)) {
       dpr = 1
     }
     var scale = 1 / dpr
     docEl.setAttribute(&#39;data-dpr&#39;, dpr)

     var metaEl = doc.querySelector(&#39;meta[name=&quot;viewport&quot;]&#39;)
     if (!metaEl) {
       metaEl = doc.createElement(&#39;meta&#39;)
       metaEl.setAttribute(&#39;name&#39;, &#39;viewport&#39;)
       doc.head.appendChild(metaEl)
     }
     metaEl.setAttribute(&#39;content&#39;, &#39;width=device-width,user-scalable=no,initial-scale=&#39; + scale + &#39;,maximum-scale=&#39; + scale + &#39;,minimum-scale=&#39; + scale)
     docEl.style.fontSize = dpr * fontScale * baseFontSize * adjustScale + &#39;px&#39;

     window.addEventListener(&#39;resize&#39;, calcFontSize)
   })()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[l];function r(v,c){return i(),n("div",null,s)}var o=e(a,[["render",r],["__file","rem.html.vue"]]);export{o as default};
