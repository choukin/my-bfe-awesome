<template><h1 id="vue3-vite-eslint-prettier-添加项目规范" tabindex="-1"><a class="header-anchor" href="#vue3-vite-eslint-prettier-添加项目规范" aria-hidden="true">#</a> Vue3+Vite+Eslint+Prettier 添加项目规范</h1>
<h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<ul>
<li>
<p>Visal Studio Code</p>
</li>
<li>
<p>VSCODE 插件</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier-Code formatter<ExternalLinkIcon/></a></li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Vue Language Features (Volar)<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>yarn</p>
</li>
<li>
<p>npm 库</p>
<ul>
<li>
<p>vite</p>
</li>
<li>
<p>prettier</p>
</li>
<li>
<p>eslint</p>
</li>
<li>
<p>vite-plugin-perttier</p>
<p>将 Prettier 的规则设置到 ESLint 的规则中。</p>
</li>
<li>
<p>eslint-config-prettier</p>
<p>关闭 ESLint 中与 Prettier 中会发生冲突的规则。</p>
</li>
<li>
<p>vite-plugin-eslint</p>
</li>
<li>
<p>vue-eslint-parser</p>
</li>
<li>
<p>eslint-plugin-vue</p>
</li>
<li>
<p>@typescript-eslint/eslint-plugin</p>
</li>
<li>
<p>@typescript-eslint/parser</p>
</li>
<li>
<p>typescript</p>
</li>
<li>
<p>@types/node</p>
</li>
<li>
<p>vue3</p>
</li>
<li>
<p>eslint-define-config</p>
</li>
</ul>
</li>
</ul>
<h2 id="_1-使用-vite-生成项目" tabindex="-1"><a class="header-anchor" href="#_1-使用-vite-生成项目" aria-hidden="true">#</a> 1. 使用 vite 生成项目</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vite my-vue-app --template vue-ts
<span class="token builtin class-name">cd</span> my-vue-app
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-安装包" tabindex="-1"><a class="header-anchor" href="#_2-安装包" aria-hidden="true">#</a> 2. 安装包</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser eslint-define-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h2>
<p>prettier.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 美行最多多少个字符换行</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用分号</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// vue文件的script标签和Style标签下的内容需要缩进</span>
  <span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用单引号，默认false，在jsx中配置无效，默认都是双引号</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 行尾逗号，默认node none|es5|all</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span>
  <span class="token comment">// 这行方式</span>
  <span class="token comment">//   " always " - 当超出print width（上面有这个参数）时就折行</span>
  <span class="token comment">// " never " - 不折行</span>
  <span class="token comment">// " perserve " - 按照文件原样折行 （v1.9.0+）</span>
  <span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
  <span class="token comment">// 所有的空白行都认为是重要的</span>
  <span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">'strict'</span><span class="token punctuation">,</span>
  <span class="token comment">// 文件最后一行</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>.prettierignore</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>.eslintrc.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// @ts-check</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'eslint-define-config'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">PassRequest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'vue-eslint-parser'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">'@typescript-eslint/parser'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'module'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jsxPragma</span><span class="token operator">:</span> <span class="token string">'React'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'plugin:vue/vue3-recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:@typescript-eslint/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'prettier'</span><span class="token punctuation">,</span>
    <span class="token string">'plugin:prettier/recommended'</span><span class="token punctuation">,</span>
    <span class="token comment">// 'plugin:jest/recommended',</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'vue/script-setup-uses-vars'</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/ban-ts-ignore'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/explicit-function-return-type'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-explicit-any'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-var-requires'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-empty-function'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/custom-event-name-casing'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-use-before-define'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-use-before-define'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/ban-ts-comment'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/ban-types'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-non-null-assertion'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/explicit-module-boundary-types'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'@typescript-eslint/no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">varsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-unused-vars'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">argsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">varsIgnorePattern</span><span class="token operator">:</span> <span class="token string">'^_'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'space-before-function-paren'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>

    <span class="token string-property property">'vue/attributes-order'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/v-on-event-hyphenation'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/multi-word-component-names'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/one-component-per-file'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/html-closing-bracket-newline'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/max-attributes-per-line'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/multiline-html-element-content-newline'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/singleline-html-element-content-newline'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/attribute-hyphenation'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/require-default-prop'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'vue/html-self-closing'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'error'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">void</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">svg</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token string">'always'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><p>.eslintignore</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>.gitignore</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node_modules
.DS_Store
dist
.npmrc
.cache

tests/server/static
tests/server/static/upload

.local
# local env files
.env.local
.env.*.local
.eslintcache

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
# .vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_4-vite-plugin-eslint" tabindex="-1"><a class="header-anchor" href="#_4-vite-plugin-eslint" aria-hidden="true">#</a> 4. <a href="https://www.npmjs.com/package/vite-plugin-eslint" target="_blank" rel="noopener noreferrer">vite-plugin-eslint<ExternalLinkIcon/></a></h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pnpx i vite-plugin-eslint -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置<code>vite.config.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">'vite-plugin-eslint'</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      cache<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 取消缓存</span>
      fix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动修复</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_5-vscode-保存时自动格式化" tabindex="-1"><a class="header-anchor" href="#_5-vscode-保存时自动格式化" aria-hidden="true">#</a> 5. vscode 保存时自动格式化</h2>
<p>.vscode/settings.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"afterDelay"</span><span class="token punctuation">,</span>
<span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_6-stylelint-less" tabindex="-1"><a class="header-anchor" href="#_6-stylelint-less" aria-hidden="true">#</a> 6. stylelint + less</h2>
<p>样式检查</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token function">less</span> stylelint stylelint-config-html stylelint-config-prettier stylelint-config-standard stylelint-order  postcss postcss-html postcss-less autoprefixer -D

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>postcss.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>stylelint.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-order'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customSyntax</span><span class="token operator">:</span> <span class="token string">'postcss-less'</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-config-standard'</span><span class="token punctuation">,</span> <span class="token string">'stylelint-config-prettier'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'selector-class-pattern'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'global'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'selector-pseudo-element-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'v-deep'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'at-rule-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignoreAtRules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'tailwind'</span><span class="token punctuation">,</span>
          <span class="token string">'apply'</span><span class="token punctuation">,</span>
          <span class="token string">'variants'</span><span class="token punctuation">,</span>
          <span class="token string">'responsive'</span><span class="token punctuation">,</span>
          <span class="token string">'screen'</span><span class="token punctuation">,</span>
          <span class="token string">'function'</span><span class="token punctuation">,</span>
          <span class="token string">'if'</span><span class="token punctuation">,</span>
          <span class="token string">'each'</span><span class="token punctuation">,</span>
          <span class="token string">'include'</span><span class="token punctuation">,</span>
          <span class="token string">'mixin'</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-empty-source'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'named-grid-areas-no-invalid'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'unicode-bom'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'no-descending-specificity'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'font-family-no-missing-generic-family-keyword'</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">'declaration-colon-space-after'</span><span class="token operator">:</span> <span class="token string">'always-single-line'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'declaration-colon-space-before'</span><span class="token operator">:</span> <span class="token string">'never'</span><span class="token punctuation">,</span>
    <span class="token comment">// 'declaration-block-trailing-semicolon': 'always',</span>
    <span class="token string-property property">'rule-empty-line-before'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'always'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'after-comment'</span><span class="token punctuation">,</span> <span class="token string">'first-nested'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'unit-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">ignoreUnits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'rpx'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">'order/order'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">'dollar-variables'</span><span class="token punctuation">,</span>
        <span class="token string">'custom-properties'</span><span class="token punctuation">,</span>
        <span class="token string">'at-rules'</span><span class="token punctuation">,</span>
        <span class="token string">'declarations'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'at-rule'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'supports'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'at-rule'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'media'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'rules'</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">severity</span><span class="token operator">:</span> <span class="token string">'warning'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ignoreFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'**/*.js'</span><span class="token punctuation">,</span> <span class="token string">'**/*.jsx'</span><span class="token punctuation">,</span> <span class="token string">'**/*.tsx'</span><span class="token punctuation">,</span> <span class="token string">'**/*.ts'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*.vue'</span><span class="token punctuation">,</span> <span class="token string">'**/*.vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'stylelint-config-recommended'</span><span class="token punctuation">,</span> <span class="token string">'stylelint-config-html'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'selector-pseudo-class-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">ignorePseudoClasses</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'deep'</span><span class="token punctuation">,</span> <span class="token string">'global'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">'selector-pseudo-element-no-unknown'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">ignorePseudoElements</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'v-deep'</span><span class="token punctuation">,</span> <span class="token string">'v-global'</span><span class="token punctuation">,</span> <span class="token string">'v-slotted'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h2 id="_7-vscode-常用配置" tabindex="-1"><a class="header-anchor" href="#_7-vscode-常用配置" aria-hidden="true">#</a> 7. vscode 常用配置</h2>
<p>.vscode/settings.json</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"typescript.tsdk"</span><span class="token operator">:</span> <span class="token string">"./node_modules/typescript/lib"</span><span class="token punctuation">,</span>
  <span class="token property">"typescript.enablePromptUseWorkspaceTsdk"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"volar.tsPlugin"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"volar.tsPluginStatus"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">//===========================================</span>
  <span class="token comment">//============= Editor ======================</span>
  <span class="token comment">//===========================================</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>
  <span class="token comment">//===========================================</span>
  <span class="token comment">//============= files =======================</span>
  <span class="token comment">//===========================================</span>
  <span class="token property">"files.eol"</span><span class="token operator">:</span> <span class="token string">"\n"</span><span class="token punctuation">,</span>
  <span class="token property">"search.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/node_modules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/*.log"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/*.log*"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/bower_components"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/dist"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/elehukouben"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.git"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.gitignore"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.svn"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.DS_Store"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.idea"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.vscode"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"**/yarn.lock"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/tmp"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"out"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"dist"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"node_modules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"CHANGELOG.md"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"examples"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"res"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"screenshots"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"yarn-error.log"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.yarn"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.exclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/.cache"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.editorconfig"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.eslintcache"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/bower_components"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.idea"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/tmp"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.git"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.svn"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.hg"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/CVS"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.DS_Store"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.watcherExclude"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"**/.git/objects/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.git/subtree-cache/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/.vscode/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/node_modules/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/tmp/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/bower_components/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/dist/**"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"**/yarn.lock"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"stylelint.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"stylelint.packageManager"</span><span class="token operator">:</span> <span class="token string">"yarn"</span><span class="token punctuation">,</span>
  <span class="token property">"path-intellisense.mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"/@/"</span><span class="token operator">:</span> <span class="token string">"${workspaceRoot}/src"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[javascriptreact]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescriptreact]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[less]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[scss]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[markdown]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.localesPaths"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/locales/lang"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.keystyle"</span><span class="token operator">:</span> <span class="token string">"nested"</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.sortKeys"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.namespace"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.pathMatcher"</span><span class="token operator">:</span> <span class="token string">"{locale}/{namespaces}.{ext}"</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.enabledParsers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.sourceLanguage"</span><span class="token operator">:</span> <span class="token string">"en"</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.displayLanguage"</span><span class="token operator">:</span> <span class="token string">"zh-CN"</span><span class="token punctuation">,</span>
  <span class="token property">"i18n-ally.enabledFrameworks"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"react"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"cSpell.words"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vben"</span><span class="token punctuation">,</span>
    <span class="token string">"windi"</span><span class="token punctuation">,</span>
    <span class="token string">"browserslist"</span><span class="token punctuation">,</span>
    <span class="token string">"tailwindcss"</span><span class="token punctuation">,</span>
    <span class="token string">"esnext"</span><span class="token punctuation">,</span>
    <span class="token string">"antv"</span><span class="token punctuation">,</span>
    <span class="token string">"tinymce"</span><span class="token punctuation">,</span>
    <span class="token string">"qrcode"</span><span class="token punctuation">,</span>
    <span class="token string">"sider"</span><span class="token punctuation">,</span>
    <span class="token string">"pinia"</span><span class="token punctuation">,</span>
    <span class="token string">"sider"</span><span class="token punctuation">,</span>
    <span class="token string">"nprogress"</span><span class="token punctuation">,</span>
    <span class="token string">"INTLIFY"</span><span class="token punctuation">,</span>
    <span class="token string">"stylelint"</span><span class="token punctuation">,</span>
    <span class="token string">"esno"</span><span class="token punctuation">,</span>
    <span class="token string">"vitejs"</span><span class="token punctuation">,</span>
    <span class="token string">"sortablejs"</span><span class="token punctuation">,</span>
    <span class="token string">"mockjs"</span><span class="token punctuation">,</span>
    <span class="token string">"codemirror"</span><span class="token punctuation">,</span>
    <span class="token string">"iconify"</span><span class="token punctuation">,</span>
    <span class="token string">"commitlint"</span><span class="token punctuation">,</span>
    <span class="token string">"vditor"</span><span class="token punctuation">,</span>
    <span class="token string">"echarts"</span><span class="token punctuation">,</span>
    <span class="token string">"cropperjs"</span><span class="token punctuation">,</span>
    <span class="token string">"logicflow"</span><span class="token punctuation">,</span>
    <span class="token string">"vueuse"</span><span class="token punctuation">,</span>
    <span class="token string">"zxcvbn"</span><span class="token punctuation">,</span>
    <span class="token string">"lintstagedrc"</span><span class="token punctuation">,</span>
    <span class="token string">"brotli"</span><span class="token punctuation">,</span>
    <span class="token string">"tailwindcss"</span><span class="token punctuation">,</span>
    <span class="token string">"sider"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br></div></div></template>
