import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as i}from"./app.8e201d3a.js";const n={},l=i(`<h1 id="chrome-headless" tabindex="-1"><a class="header-anchor" href="#chrome-headless" aria-hidden="true">#</a> chrome headless</h1><ol><li>mac \u8BBE\u7F6E \u522B\u540D</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vi ~/.zshrc

alias chrome=&quot;/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome&quot;
esc :wq
source ~/zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u622A\u5C4F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>chrome --headless --disable-gpu --screenshot --window-size=1280,1696  https://github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),r=[l];function c(d,o){return s(),a("div",null,r)}var m=e(n,[["render",c],["__file","chrome headless.html.vue"]]);export{m as default};
