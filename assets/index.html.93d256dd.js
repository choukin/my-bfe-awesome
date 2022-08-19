import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as r,a as d}from"./app.8e201d3a.js";const s={},i=d(`<h1 id="mac-\u4F7F\u7528-\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#mac-\u4F7F\u7528-\u8F6F\u4EF6" aria-hidden="true">#</a> mac \u4F7F\u7528 \u8F6F\u4EF6</h1><ul><li><p><a href="https://github.com/hzlzh/Best-App" target="_blank" rel="noopener noreferrer">Best APP</a></p></li><li><p><a href="">dataGrip \u94FE\u63A5\u6570\u636E\u5E93</a></p></li><li><p><a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer">dbeaver\u5F00\u6E90\u7684\u6570\u636E\u5E93\u56FE\u5F62\u754C\u9762</a></p></li><li><p><a href="https://arctype.com/" target="_blank" rel="noopener noreferrer">arctype\u4E00\u4E2A\u684C\u9762\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u5DE5\u5177</a></p></li><li><p><a href="https://studio3t.com/" target="_blank" rel="noopener noreferrer">Studio 3T GUI for MONGO</a></p></li></ul><h2 id="\u4F7F\u7528-homebrew-\u5B89\u88C5-tree-\u547D\u4EE4\u884C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-homebrew-\u5B89\u88C5-tree-\u547D\u4EE4\u884C" aria-hidden="true">#</a> \u4F7F\u7528 homebrew \u5B89\u88C5 tree \u547D\u4EE4\u884C\uFF1A</h2><p>\u5B89\u88C5\u547D\u4EE4\uFF1A</p><p>brew install telnet \u5982\u6CA1\u6709\u63D0\u524D\u5B89\u88C5brew\uFF0C\u53EF\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><p>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot; \u9009\u62E9\u5BF9\u5E94\u955C\u50CF\u6E90\u540E\uFF0C\u8F93\u5165Y\uFF0C\u56DE\u8F66\u5373\u53EF\u5B89\u88C5brew</p><p>\u7EE7\u7EED\u6267\u884C\u5B89\u88C5telnet\u547D\u4EE4\uFF0C\u8FC7\u7A0B\u4E2D\u5982\u51FA\u73B0could not lock config file .git/config: Permission denied\u9519\u8BEF\uFF0C\u8BF7\u5148\u4FEE\u6539\u6587\u4EF6\u6743\u9650\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><p>sudo chgrp -R admin /usr/local/* sudo chmod -R g+w /usr/local/* \u4FEE\u6539\u6743\u9650\u540E\uFF0C\u518D\u6267\u884C\u5B89\u88C5telnet\u547D\u4EE4\uFF0C\u5373\u53EF\u987A\u5229\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u901A\u8FC7gitee\u5B89\u88C5homebrew
/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew install tree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5FFD\u7565-node-modules-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565-node-modules-\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u5FFD\u7565 node_modules \u6587\u4EF6\u5939</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tree -I node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><p>tree -d \u53EA\u663E\u793A\u6587\u4EF6\u5939\uFF1B</p><ul><li>tree -L n \u663E\u793A\u9879\u76EE\u7684\u5C42\u7EA7\u3002n\u8868\u793A\u5C42\u7EA7\u6570\u3002\u6BD4\u5982\u60F3\u8981\u663E\u793A\u9879\u76EE\u4E09\u5C42\u7ED3\u6784\uFF0C\u53EF\u4EE5\u7528tree -l 3\uFF1B</li><li>tree -I pattern \u7528\u4E8E\u8FC7\u6EE4\u4E0D\u60F3\u8981\u663E\u793A\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\u3002\u6BD4\u5982\u4F60\u60F3\u8981\u8FC7\u6EE4\u9879\u76EE\u4E2D\u7684node_modules\u6587\u4EF6\u5939\uFF0C\u53EF\u4EE5\u4F7F\u7528tree -I &quot;node_modules&quot;\uFF1B</li><li>tree &gt; tree.md \u5C06\u9879\u76EE\u7ED3\u6784\u8F93\u51FA\u5230tree.md\u8FD9\u4E2A\u6587\u4EF6\u3002</li></ul><h3 id="\u4E3E\u4F8B\u5982\u679C\u6211\u4EEC\u8981\u663E\u793A\u67D0\u4E2A\u9879\u76EE\u4E0B3\u5C42\u7684\u6240\u6709\u6587\u4EF6\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B\u5982\u679C\u6211\u4EEC\u8981\u663E\u793A\u67D0\u4E2A\u9879\u76EE\u4E0B3\u5C42\u7684\u6240\u6709\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a> \u4E3E\u4F8B\u5982\u679C\u6211\u4EEC\u8981\u663E\u793A\u67D0\u4E2A\u9879\u76EE\u4E0B3\u5C42\u7684\u6240\u6709\u6587\u4EF6\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> tree -L 3 -I &quot;node_modules&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5237\u65B0dns" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0dns" aria-hidden="true">#</a> \u5237\u65B0DNS</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder; say DNS cache flushed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5207\u56FE\u5438\u8272\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5207\u56FE\u5438\u8272\u5DE5\u5177" aria-hidden="true">#</a> \u5207\u56FE\u5438\u8272\u5DE5\u5177</h2><p><a href="https://www.snipaste.com/" target="_blank" rel="noopener noreferrer">snipaste</a></p><h2 id="\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5C4F\u5E55\u7ED8\u56FE\u548C\u5C4F\u5E55\u6CE8\u91CA\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5C4F\u5E55\u7ED8\u56FE\u548C\u5C4F\u5E55\u6CE8\u91CA\u8F6F\u4EF6" aria-hidden="true">#</a> \u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5C4F\u5E55\u7ED8\u56FE\u548C\u5C4F\u5E55\u6CE8\u91CA\u8F6F\u4EF6</h2><p><a href="http://www.pixelegg.me/vill-q" target="_blank" rel="noopener noreferrer">vill-q</a></p><h2 id="alfred" tabindex="-1"><a class="header-anchor" href="#alfred" aria-hidden="true">#</a> <a href="https://www.alfredapp.com/" target="_blank" rel="noopener noreferrer">Alfred</a></h2><blockquote><p>Alfred \u662F\u4E00\u6B3E\u5C61\u83B7\u6B8A\u8363\u7684 macOS \u5E94\u7528\u7A0B\u5E8F\uFF0C\u5B83\u901A\u8FC7\u70ED\u952E\u3001\u5173\u952E\u5B57\u3001\u6587\u672C\u6269\u5C55\u7B49\u63D0\u9AD8\u60A8\u7684\u6548\u7387\u3002\u641C\u7D22\u60A8\u7684 Mac \u548C\u7F51\u7EDC\uFF0C\u5E76\u901A\u8FC7\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6765\u63A7\u5236\u60A8\u7684 Mac\uFF0C\u4ECE\u800C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002</p></blockquote><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><p>1\u3001 \u5F00\u542F\u5141\u8BB8\u4EFB\u4F55\u6765\u6E90\u5B89\u88C5\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sudo spctl --master-disable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001 \u6700\u65B0\u7248\u672Cmax \u89E3\u51B3\u8F6F\u4EF6<code>\u5DF2\u635F\u574F\u65E0\u6CD5\u6253\u5F00\u89E3\u51B3\u529E\u6CD5</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sudo xattr -d com.apple.quarantine /Applications/xxxx.app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>::: tip xxxx.app \u6362\u6210\u5BF9\u5E94\u8F6F\u4EF6\u7684\u540D\u79F0 :::</p><p>3\u3001Mac\u7CFB\u7EDF\u9ED8\u8BA4\u4F7F\u7528bash\u4F5C\u4E3A\u7EC8\u7AEF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u4FEE\u6539\u9ED8\u8BA4\u4F7F\u7528zsh\uFF1A chsh -s /bin/zsh \u5982\u679C\u60F3\u4FEE\u6539\u56DE\u9ED8\u8BA4 bash\uFF0C\u540C\u6837\u4F7F\u7528chsh\u547D\u4EE4\u5373\u53EF\uFF1A</p><p>chsh -s /bin/bash</p>`,34),n=[i];function l(t,h){return a(),r("div",null,n)}var u=e(s,[["render",l],["__file","index.html.vue"]]);export{u as default};
