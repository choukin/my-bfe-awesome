import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a}from"./app.8e201d3a.js";const s={},l=a(`<h1 id="npm-\u5305\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#npm-\u5305\u89C4\u8303" aria-hidden="true">#</a> npm \u5305\u89C4\u8303</h1><ul><li><p>sinopia \u79C1\u6709 npm \u6E90 \u670D\u52A1\u5668</p></li><li><p>[verdaccio npm \u79C1\u6709\u6E90\u670D\u52A1]https://verdaccio.org/</p></li><li><p>npm \u89C4\u8303</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 index.js //\u5165\u53E3\u6587\u4EF6
\u251C\u2500\u2500 introduce.md //\u8BF4\u660E\u6587\u4EF6
\u251C\u2500\u2500 lib
\u2502   \u2514\u2500\u2500 index.js //\u4E3B\u8981\u6587\u4EF6
\u251C\u2500\u2500 node_modules //\u7B2C\u4E09\u65B9\u5305
\u251C\u2500\u2500 package.json 
\u251C\u2500\u2500 README.md 
\u2514\u2500\u2500 test //\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6
    \u2514\u2500\u2500 test.js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-\u5305\u6536\u96C6" tabindex="-1"><a class="header-anchor" href="#npm-\u5305\u6536\u96C6" aria-hidden="true">#</a> npm \u5305\u6536\u96C6</h2><p>1\u3001 \xB7Inquirer.js\u8BD5\u56FE\u4E3ANodeJs\u505A\u4E00\u4E2A\u53EF\u5D4C\u5165\u5F0F\u7684\u7F8E\u89C2\u7684\u547D\u4EE4\u884C\u754C\u9762\xB7 2\u3001</p><p>\u4E8C\u3001\u4F7F\u7528\u8BF4\u660E</p><ol><li>\u5355\u6B21\u4F7F\u7528</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm --registry http://npm.taobao.com/ install package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5168\u5C40\u914D\u7F6E</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm config set registry http://npm.qingsongchou.net/
 
npn install package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4F7F\u7528\u6E90\u7BA1\u7406\u5DE5\u5177 nrm \u5168\u5C40\u5207\u6362\uFF08\u63A8\u8350\uFF09</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u4E0B\u8F7Dnrm
npm install -g nrm
 
// \u67E5\u770B\u5F53\u524Dnpm\u6E90
nrm ls
 
// \u6DFB\u52A0\u6280\u672F\u4E2D\u5FC3npm\u6E90
nrm add qsc http://npm.qingsongchou.net/
 
// \u5C06\u5F53\u524Dnpm\u6E90\u6307\u5411\u6280\u672F\u4E2D\u5FC3\u6E90
nrm use qsc
 
// \u4E0B\u8F7D\u5305
npm install package-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E09\u3001\u53D1\u5E03\u65B0\u6A21\u5757</p><ol><li>\u6A21\u5757\u89C4\u8303\uFF1A</li></ol><p>\u6A21\u5757\u7684 name\uFF08\u5373 package.json \u4E2D\u7684 name \u5B57\u6BB5\uFF09\u9700\u8981\u9075\u5FAA\u6A21\u5757\u547D\u540D\u89C4\u8303\uFF1B \u6A21\u5757\u5FC5\u987B\u6709 README.md \u6587\u4EF6\uFF0C\u5185\u5BB9\u4E3A\u8BE6\u7EC6\u7684\u8BF4\u660E\u6587\u6863\uFF0C\u4E5F\u53EF\u4EE5\u63D0\u4F9B\u6587\u6863\u8FDE\u63A5\uFF1B \u4E3A\u4E86\u7248\u672C\u63A7\u5236\u6E05\u695A\u660E\u4E86\uFF0C\u6587\u6863\u4E2D\u5FC5\u987B\u8981\u6709\u7248\u672C\u8BF4\u660E\uFF1B \u4E0D\u53EF\u76F4\u63A5\u53D1\u5E03\u5927\u7248\u672C\uFF0C\u5E94\u5148\u53D1\u5E03 prelease \u7248\uFF0C\u4E0B\u65B9\u6709\u8BF4\u660E\uFF1B \u4E3A\u4FDD\u8BC1\u6A21\u5757\u4F7F\u7528\u6CA1\u95EE\u9898\uFF0C\u4EE3\u7801\u6700\u597D\u7ECF\u8FC7 babel \u8F6C\u6362\u6210 ES5\uFF1B 2. \u6A21\u5757\u547D\u540D\u89C4\u8303\uFF1A</p><p>\u547D\u540D\u91C7\u7528\u5C0F\u5199\u5B57\u6BCD\u548C\u4E2D\u5212\u7EBF\uFF08-\uFF09\u5206\u5272\u7684\u683C\u5F0F\uFF0C\u6A21\u5757\u540D\u4E0D\u8D85\u8FC7\u4E09\u6BB5 \u4E1A\u52A1\u7EBF\u81EA\u7528\u6A21\u5757\u524D\u7F00\u589E\u52A0\u5BF9\u5E94\u57DF\uFF1A XX\uFF1A@XXX-jc/package-name \u901A\u7528\u6A21\u5757\u4F7F\u7528\u516C\u7528\u57DF\uFF1A \u516C\u7528\uFF1A@qsc/package-name 3. \u5199\u597D\u4E00\u4E2A\u6A21\u5757\uFF0C\u7ECF\u8FC7\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u8003\u8651\u53D1\u5E03\u5230 npm \u4E0A\u4E86\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5B8C\u6210\u4E00\u4E2A\u6A21\u5757\u7684\u65B0\u53D1\u5E03\uFF1A</p><p>// 1.\u521D\u59CB\u5316\u5305\u7684\u63CF\u8FF0\u6587\u4EF6\uFF08\u5176\u5B9E\u662F\u751F\u6210 package.json\uFF0C\u5982\u679C\u5DF2\u6709\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u53EF\u8DF3\u8FC7\u8BE5\u6B65\u9AA4\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm init --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>// 2.\u8BBE\u7F6Enpm\u79C1\u6709\u5E93\u4E2D\uFF0C\u4F60\u7684\u7528\u6237\u540D\uFF0C\u5BC6\u7801\uFF0C\u90AE\u7BB1\u3002\u8BF7\u4F7F\u7528\u7EDF\u4E00\u8D26\u53F7\u5BC6\u7801\uFF0C\u516C\u53F8\u90AE\u7BB1\uFF1B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>// 3.\u53D1\u5E03</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>// 4. \u672C\u5730\u8C03\u8BD5 \u628A\u5F53\u524D\u5F00\u53D1\u7684\u5305\u8F6F\u94FE\u5230\u672C\u673A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5F53\u524D\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C \u5378\u8F7D\u4F7F\u7528 npm uninstall xxx -g
sudo npm link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\uFF0C\u5373\u53EF\u5B8C\u6210\u4E00\u4E2A\u65B0\u5305\u7684\u53D1\u5E03\u4E86\u3002</p><p>\u56DB\u3001\u7BA1\u7406\u6A21\u5757\u6743\u9650</p><ol><li>\u5F88\u591A\u65F6\u5019\uFF0C\u4E00\u4E2A\u6A21\u5757\u5F80\u5F80\u4E0D\u53EA\u662F\u4F60\u4E00\u4E2A\u4EBA\u5728\u7BA1\u7406\u7684\uFF0C\u8FD9\u65F6\u9700\u8981\u7ED9\u5176\u4ED6\u4E00\u8D77\u7EF4\u62A4\u7684\u540C\u5B66\u5F00\u901A\u53D1\u5E03\u7684\u6743\u9650\uFF0C\u5982\u4E0B\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u67E5\u770B\u6A21\u5757 owner
npm owner ls package-name
 
# \u6DFB\u52A0\u4E00\u4E2A\u53D1\u5E03\u8005
npm owner add xxx@qingsongchou.com package-name
 
# \u5220\u9664\u4E00\u4E2A\u53D1\u5E03\u8005
npm owner rm xxx@qingsongchou.com package-name
\`\`\`sh

\u4E94\u3001\u66F4\u65B0\u7248\u672C
\u5F53\u6A21\u5757\u6709\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u9700\u8981\u53D1\u5E03\u4E00\u4E2A\u65B0\u7248\u672C\uFF0C\u5F53\u6240\u6709\u9700\u8981\u66F4\u65B0\u7684\u6587\u4EF6\u90FD commit \u5B8C\u4E86\u540E\uFF0C\u5C31\u53EF\u4EE5\u66F4\u65B0\u5230 npm \u4E86\u3002

1. \u9996\u5148\u53D1\u5E03\u4E00\u4E2A\u9884\u53D1\u5E03\u7248\u672C

\u5F88\u591A\u65F6\u5019\u4E00\u4E9B\u65B0\u6539\u52A8\uFF0C\u4E0D\u80FD\u76F4\u63A5\u53D1\u5E03\u5230\u7A33\u5B9A\u7248\u672C\u4E0A\uFF08\u7A33\u5B9A\u7248\u672C\u7684\u610F\u601D\u5C31\u662F\u4F7F\u7528 npm install package-name \u5373\u53EF\u4E0B\u8F7D\u7684\u6700\u65B0\u7248\u672C\uFF09\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u53D1\u5E03\u4E00\u4E2A \u201C\u9884\u53D1\u5E03\u7248\u672C\u201C\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u7A33\u5B9A\u7248\u672C\u3002
\`\`\`sh
# \u53D1\u5E03\u4E00\u4E2A prelease \u7248\u672C\uFF0Ctag=beta
npm version prerelease
 
npm publish --tag beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\u539F\u6765\u7684\u7248\u672C\u53F7\u662F 1.0.1\uFF0C\u90A3\u4E48\u4EE5\u4E0A\u53D1\u5E03\u540E\u7684\u7248\u672C\u662F 1.0.1-0\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 npm install package-name@beta \u6216\u8005 npm install package-name@1.0.1-0 \u6765\u5B89\u88C5\u3002</p><ol start="2"><li>\u5F53prerelease\u7248\u672C\u7A33\u5B9A\u540E\uFF0C\u53EF\u4EE5\u628A\u4ED6\u8BBE\u7F6E\u6210\u7A33\u5B9A\u7248\u672C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u9996\u5148\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u6240\u6709\u7684\u6700\u65B0\u7248\u672C\uFF0C\u5305\u62EC prerelease \u4E0E\u7A33\u5B9A\u7248\u672C
npm dist-tag ls
 
# \u8BBE\u7F6E 1.0.1-1 \u7248\u672C\u4E3A\u7A33\u5B9A\u7248\u672C
npm dist-tag add package-name@1.0.1-1 latest
 
# \u6216\u8005\u901A\u8FC7 tag \u6765\u8BBE\u7F6E
npm dist-tag add package-name@beta latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u53D1\u73B0 BUG\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 npm dist-tag \u547D\u4EE4\u56DE\u9000\u3002</p><p>\u8FD9\u65F6\u5019\uFF0Clatest \u7A33\u5B9A\u7248\u672C\u5DF2\u7ECF\u662F 1.0.1-1 \u4E86\uFF0C\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 npm install package-name \u5373\u53EF\u5B89\u88C5\u8BE5\u7248\u672C\u3002</p><ol start="3"><li>\u53D1\u5E03\u4E00\u4E2A\u65B0\u7684\u7A33\u5B9A\u7248\u672C</li></ol><p>// \u7248\u672C\u53F7\u683C\u5F0F\u89C4\u8303\u4E3A{major}.{minor}.{patch} // \u66F4\u65B0\u7248\u672C\u53F7\uFF08major | minor | patch | premajor | preminor | prepatch | prerelease\uFF09 // \u5927\u7248\u672C\u5E76\u4E14\u4E0D\u5411\u4E0B\u517C\u5BB9\u65F6\uFF0C\u4F7F\u7528 major // \u6709\u65B0\u529F\u80FD\u4E14\u5411\u4E0B\u517C\u5BB9\u65F6\uFF0C\u4F7F\u7528 major // \u4FEE\u590D\u4E00\u4E9B\u95EE\u9898\u3001\u4F18\u5316\u7B49\uFF0C\u4F7F\u7528 patch // \u4E0B\u9762\u6BD4\u5982\u66F4\u65B0\u4E00\u4E2A patch \u5C0F\u7248\u672C\u53F7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm version patch
npm publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u516D\u3001\u67E5\u770B\u7248\u672C\u4FE1\u606F \u6700\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 npm info \u6765\u67E5\u770B\u6A21\u5757\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><h3 id="npm-\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#npm-\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305" aria-hidden="true">#</a> npm \u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm list -g --depth 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9664\u975E\u4E5F\u6307\u5B9A-\u5426\u5219\u8FD9\u662F\u5305\u542B-package-json-\u6587\u4EF6\u6216-node-modules-\u76EE\u5F55\u7684\u6700\u63A5\u8FD1\u7684\u7236\u76EE\u5F55-g\u3002" tabindex="-1"><a class="header-anchor" href="#\u9664\u975E\u4E5F\u6307\u5B9A-\u5426\u5219\u8FD9\u662F\u5305\u542B-package-json-\u6587\u4EF6\u6216-node-modules-\u76EE\u5F55\u7684\u6700\u63A5\u8FD1\u7684\u7236\u76EE\u5F55-g\u3002" aria-hidden="true">#</a> \u9664\u975E\u4E5F\u6307\u5B9A\uFF0C\u5426\u5219\u8FD9\u662F\u5305\u542B package.json \u6587\u4EF6\u6216 node_modules \u76EE\u5F55\u7684\u6700\u63A5\u8FD1\u7684\u7236\u76EE\u5F55 -g\u3002</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm prefix [-g]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),d=[l];function r(m,c){return n(),i("div",null,d)}var u=e(s,[["render",r],["__file","index.html.vue"]]);export{u as default};
