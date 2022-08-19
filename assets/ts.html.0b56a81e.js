import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8e201d3a.js";const a={},d=s(`<h1 id="\u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed-ts\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed-ts\u6587\u4EF6" aria-hidden="true">#</a> \u7ED9\u73B0\u6709\u7684\u5305\u58F0\u660Ed.ts\u6587\u4EF6</h1><h2 id="\u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303-global-umd-commonjs-module-\u7B49\u3002" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303-global-umd-commonjs-module-\u7B49\u3002" aria-hidden="true">#</a> \u9996\u5148\u6211\u4EEC\u9700\u8981\u660E\u786E\u5305\u4F7F\u7528\u7684\u5BFC\u51FA\u89C4\u8303\uFF0Cglobal/umd/commonjs/module \u7B49\u3002</h2><h3 id="\u5BF9\u4E8E-global-\u5BFC\u51FA\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-global-\u5BFC\u51FA\u7684\u5305" aria-hidden="true">#</a> \u5BF9\u4E8E global \u5BFC\u51FA\u7684\u5305</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare namesapce MyLib {
    class A {}
    
    // \u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528
    // const a = new MyLib.A()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u4E8E-umd-commonjs-\u5BFC\u51FA\u7684" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-umd-commonjs-\u5BFC\u51FA\u7684" aria-hidden="true">#</a> \u5BF9\u4E8E umd/commonjs \u5BFC\u51FA\u7684</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare module &#39;my-lib&#39; {
    namespace MyLib {
      class A {}
      
      class B {}
   
      // \u4F7F\u7528\u65F6
      // \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528
      // import * as MyLib from &#39;my-lib&#39;
      // const a = new MyLib.A();
   
      // \u5982\u679C\u5F00\u542F\u4E86 ES Module \u878D\u5408\u6A21\u5F0F (esModuleInterop=true)
      // \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528
      // import { A } from &#39;my-lib&#39;
      // const a = new A()
    }
    export = MyLib
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u4E8E-es-module-\u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u4E8E-es-module-\u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528" aria-hidden="true">#</a> \u5BF9\u4E8E ES Module \u5BFC\u51FA\u7684\u5305\u6211\u4EEC\u4F7F\u7528\uFF1A</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>declare module &#39;my-lib&#39; {
    class MyLib {}
    
    export default MyLib
    
    // or other exorts
    export class A {}
    
    // \u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528
    // import MyLib, {A} from &#39;my-lib&#39;
    // const lib = new MyLib()
    // const a = new A()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5177\u751F\u6210-d-ts" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u751F\u6210-d-ts" aria-hidden="true">#</a> <a href="https://blog.csdn.net/zdhsoft/article/details/85242631" target="_blank" rel="noopener noreferrer">\u5DE5\u5177\u751F\u6210 d.ts</a></h2><ul><li>\u4E3A\u6574\u4E2A\u5305\u6DFB\u52A0\u58F0\u660E\u6587\u4EF6 \u4F7F\u7528\u5FAE\u8F6F\u7684dts-gen</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install -g dts-gen   // \u5148\u5168\u5C40\u5B89\u88C5dts-gen
npm install -g yargs     // \u7136\u540E\u5728\u5168\u5C40\u5B89\u88C5\u4F60\u9700\u8981\u751F\u4EA7\u58F0\u660E\u6587\u4EF6\u7684\u5E93
dts-gen -m yargs         // \u6267\u884C\u547D\u4EE4\u751F\u6210\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E3A\u5355\u4E2A\u6587\u4EF6\u751F\u4EA7\u58F0\u660E\u6587\u4EF6 \u4F7F\u7528dtsmake</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm i dtsmake -g   // \u5148\u5168\u5C40\u5B89\u88C5dtsmake
 
dtsmake -s ./path/to/sourcefile.js  // \u5728\u5BF9\u5E94\u7684\u6587\u4EF6\u751F\u4EA7\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[d];function r(c,v){return i(),n("div",null,l)}var t=e(a,[["render",r],["__file","ts.html.vue"]]);export{t as default};
