import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as l}from"./app.8e201d3a.js";const s={},d=l(`<h2 id="\u64CD\u4F5C\u6D4F\u89C8\u5668\u5168\u5C4F" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6D4F\u89C8\u5668\u5168\u5C4F" aria-hidden="true">#</a> \u64CD\u4F5C\u6D4F\u89C8\u5668\u5168\u5C4F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window.navigator.userAgent.indexOf(&#39;MSIE&#39;) &lt; 0 // IE \u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u548C\u53D6\u6D88\u5168\u5C4F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>      let main = document.body
      
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76D1\u542C\u5168\u5C4F\u4E8B\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener(&#39;fullscreenchange&#39;, () =&gt; {
    //   this.$emit(&#39;input&#39;, !this.value)
    //   this.$emit(&#39;on-change&#39;, !this.value)
    })
    document.addEventListener(&#39;mozfullscreenchange&#39;, () =&gt; {
    //   this.$emit(&#39;input&#39;, !this.value)
    //   this.$emit(&#39;on-change&#39;, !this.value)
    })
    document.addEventListener(&#39;webkitfullscreenchange&#39;, () =&gt; {
    //   this.$emit(&#39;input&#39;, !this.value)
    //   this.$emit(&#39;on-change&#39;, !this.value)
    })
    document.addEventListener(&#39;msfullscreenchange&#39;, () =&gt; {
    //   this.$emit(&#39;input&#39;, !this.value)
    //   this.$emit(&#39;on-change&#39;, !this.value)
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[d];function a(u,r){return n(),i("div",null,c)}var m=e(s,[["render",a],["__file","fullscreen.html.vue"]]);export{m as default};
