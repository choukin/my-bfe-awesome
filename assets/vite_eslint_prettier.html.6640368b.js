import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8e201d3a.js";const l={},d=s(`<h1 id="vue3-vite-eslint-prettier-\u6DFB\u52A0\u9879\u76EE\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#vue3-vite-eslint-prettier-\u6DFB\u52A0\u9879\u76EE\u89C4\u8303" aria-hidden="true">#</a> Vue3+Vite+Eslint+Prettier \u6DFB\u52A0\u9879\u76EE\u89C4\u8303</h1><h2 id="\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177" aria-hidden="true">#</a> \u5DE5\u5177</h2><ul><li><p>Visal Studio Code</p></li><li><p>VSCODE \u63D2\u4EF6</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier-Code formatter</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noopener noreferrer">Vue Language Features (Volar)</a></li></ul></li><li><p>yarn</p></li><li><p>npm \u5E93</p><ul><li><p>vite</p></li><li><p>prettier</p></li><li><p>eslint</p></li><li><p>vite-plugin-perttier</p><p>\u5C06 Prettier \u7684\u89C4\u5219\u8BBE\u7F6E\u5230 ESLint \u7684\u89C4\u5219\u4E2D\u3002</p></li><li><p>eslint-config-prettier</p><p>\u5173\u95ED ESLint \u4E2D\u4E0E Prettier \u4E2D\u4F1A\u53D1\u751F\u51B2\u7A81\u7684\u89C4\u5219\u3002</p></li><li><p>vite-plugin-eslint</p></li><li><p>vue-eslint-parser</p></li><li><p>eslint-plugin-vue</p></li><li><p>@typescript-eslint/eslint-plugin</p></li><li><p>@typescript-eslint/parser</p></li><li><p>typescript</p></li><li><p>@types/node</p></li><li><p>vue3</p></li><li><p>eslint-define-config</p></li></ul></li></ul><h2 id="_1-\u4F7F\u7528-vite-\u751F\u6210\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528-vite-\u751F\u6210\u9879\u76EE" aria-hidden="true">#</a> 1. \u4F7F\u7528 vite \u751F\u6210\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pnpm create vite my-vue-app --template vue-ts
cd my-vue-app
pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u5305" aria-hidden="true">#</a> 2. \u5B89\u88C5\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pnpm add prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser eslint-define-config -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E" aria-hidden="true">#</a> 3. \u914D\u7F6E</h2><p>prettier.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
  // \u7F8E\u884C\u6700\u591A\u591A\u5C11\u4E2A\u5B57\u7B26\u6362\u884C
  printWidth: 100,
  // \u4F7F\u7528\u5206\u53F7
  semi: true,
  // vue\u6587\u4EF6\u7684script\u6807\u7B7E\u548CStyle\u6807\u7B7E\u4E0B\u7684\u5185\u5BB9\u9700\u8981\u7F29\u8FDB
  vueIndentScriptAndStyle: true,
  // \u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u9ED8\u8BA4false\uFF0C\u5728jsx\u4E2D\u914D\u7F6E\u65E0\u6548\uFF0C\u9ED8\u8BA4\u90FD\u662F\u53CC\u5F15\u53F7
  singleQuote: true,
  // \u884C\u5C3E\u9017\u53F7\uFF0C\u9ED8\u8BA4node none|es5|all
  trailingComma: &#39;all&#39;,
  // \u8FD9\u884C\u65B9\u5F0F
  //   &quot; always &quot; - \u5F53\u8D85\u51FAprint width\uFF08\u4E0A\u9762\u6709\u8FD9\u4E2A\u53C2\u6570\uFF09\u65F6\u5C31\u6298\u884C
  // &quot; never &quot; - \u4E0D\u6298\u884C
  // &quot; perserve &quot; - \u6309\u7167\u6587\u4EF6\u539F\u6837\u6298\u884C \uFF08v1.9.0+\uFF09
  proseWrap: &#39;never&#39;,
  // \u6240\u6709\u7684\u7A7A\u767D\u884C\u90FD\u8BA4\u4E3A\u662F\u91CD\u8981\u7684
  htmlWhitespaceSensitivity: &#39;strict&#39;,
  // \u6587\u4EF6\u6700\u540E\u4E00\u884C
  endOfLine: &#39;auto&#39;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.prettierignore</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintrc.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// @ts-check
const { defineConfig } = require(&#39;eslint-define-config&#39;);
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    PassRequest: true,
  },
  parser: &#39;vue-eslint-parser&#39;,
  parserOptions: {
    parser: &#39;@typescript-eslint/parser&#39;,
    ecmaVersion: 2020,
    sourceType: &#39;module&#39;,
    jsxPragma: &#39;React&#39;,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    &#39;plugin:vue/vue3-recommended&#39;,
    &#39;plugin:@typescript-eslint/recommended&#39;,
    &#39;prettier&#39;,
    &#39;plugin:prettier/recommended&#39;,
    // &#39;plugin:jest/recommended&#39;,
  ],
  rules: {
    &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;,
    &#39;@typescript-eslint/ban-ts-ignore&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/explicit-function-return-type&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-var-requires&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-empty-function&#39;: &#39;off&#39;,
    &#39;vue/custom-event-name-casing&#39;: &#39;off&#39;,
    &#39;no-use-before-define&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-use-before-define&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/ban-ts-comment&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/ban-types&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/explicit-module-boundary-types&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-unused-vars&#39;: [
      &#39;error&#39;,
      {
        argsIgnorePattern: &#39;^_&#39;,
        varsIgnorePattern: &#39;^_&#39;,
      },
    ],
    &#39;no-unused-vars&#39;: [
      &#39;error&#39;,
      {
        argsIgnorePattern: &#39;^_&#39;,
        varsIgnorePattern: &#39;^_&#39;,
      },
    ],
    &#39;space-before-function-paren&#39;: &#39;off&#39;,

    &#39;vue/attributes-order&#39;: &#39;off&#39;,
    &#39;vue/v-on-event-hyphenation&#39;: &#39;off&#39;,
    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;,
    &#39;vue/one-component-per-file&#39;: &#39;off&#39;,
    &#39;vue/html-closing-bracket-newline&#39;: &#39;off&#39;,
    &#39;vue/max-attributes-per-line&#39;: &#39;off&#39;,
    &#39;vue/multiline-html-element-content-newline&#39;: &#39;off&#39;,
    &#39;vue/singleline-html-element-content-newline&#39;: &#39;off&#39;,
    &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;,
    &#39;vue/require-default-prop&#39;: &#39;off&#39;,
    &#39;vue/html-self-closing&#39;: [
      &#39;error&#39;,
      {
        html: {
          void: &#39;always&#39;,
          normal: &#39;never&#39;,
          component: &#39;always&#39;,
        },
        svg: &#39;always&#39;,
        math: &#39;always&#39;,
      },
    ],
  },
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.eslintignore</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.gitignore</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node_modules
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-vite-plugin-eslint" tabindex="-1"><a class="header-anchor" href="#_4-vite-plugin-eslint" aria-hidden="true">#</a> 4. <a href="https://www.npmjs.com/package/vite-plugin-eslint" target="_blank" rel="noopener noreferrer">vite-plugin-eslint</a></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pnpx i vite-plugin-eslint -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E<code>vite.config.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { defineConfig } from &#39;vite&#39;;
import vue from &#39;@vitejs/plugin-vue&#39;;
import eslintPlugin from &#39;vite-plugin-eslint&#39;;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false, // \u53D6\u6D88\u7F13\u5B58
      fix: true, // \u81EA\u52A8\u4FEE\u590D
    }),
  ],
});
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vscode-\u4FDD\u5B58\u65F6\u81EA\u52A8\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_5-vscode-\u4FDD\u5B58\u65F6\u81EA\u52A8\u683C\u5F0F\u5316" aria-hidden="true">#</a> 5. vscode \u4FDD\u5B58\u65F6\u81EA\u52A8\u683C\u5F0F\u5316</h2><p>.vscode/settings.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>&quot;files.autoSave&quot;: &quot;afterDelay&quot;,
&quot;editor.codeActionsOnSave&quot;: {
    &quot;source.fixAll.eslint&quot;: true
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-stylelint-less" tabindex="-1"><a class="header-anchor" href="#_6-stylelint-less" aria-hidden="true">#</a> 6. stylelint + less</h2><p>\u6837\u5F0F\u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pnpm install less stylelint stylelint-config-html stylelint-config-prettier stylelint-config-standard stylelint-order  postcss postcss-html postcss-less autoprefixer -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>postcss.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stylelint.config.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports = {
  root: true,
  plugins: [&#39;stylelint-order&#39;],
  customSyntax: &#39;postcss-less&#39;,
  extends: [&#39;stylelint-config-standard&#39;, &#39;stylelint-config-prettier&#39;],
  rules: {
    &#39;selector-class-pattern&#39;: null,
    &#39;selector-pseudo-class-no-unknown&#39;: [
      true,
      {
        ignorePseudoClasses: [&#39;global&#39;],
      },
    ],
    &#39;selector-pseudo-element-no-unknown&#39;: [
      true,
      {
        ignorePseudoElements: [&#39;v-deep&#39;],
      },
    ],
    &#39;at-rule-no-unknown&#39;: [
      true,
      {
        ignoreAtRules: [
          &#39;tailwind&#39;,
          &#39;apply&#39;,
          &#39;variants&#39;,
          &#39;responsive&#39;,
          &#39;screen&#39;,
          &#39;function&#39;,
          &#39;if&#39;,
          &#39;each&#39;,
          &#39;include&#39;,
          &#39;mixin&#39;,
        ],
      },
    ],
    &#39;no-empty-source&#39;: null,
    &#39;named-grid-areas-no-invalid&#39;: null,
    &#39;unicode-bom&#39;: &#39;never&#39;,
    &#39;no-descending-specificity&#39;: null,
    &#39;font-family-no-missing-generic-family-keyword&#39;: null,
    &#39;declaration-colon-space-after&#39;: &#39;always-single-line&#39;,
    &#39;declaration-colon-space-before&#39;: &#39;never&#39;,
    // &#39;declaration-block-trailing-semicolon&#39;: &#39;always&#39;,
    &#39;rule-empty-line-before&#39;: [
      &#39;always&#39;,
      {
        ignore: [&#39;after-comment&#39;, &#39;first-nested&#39;],
      },
    ],
    &#39;unit-no-unknown&#39;: [true, { ignoreUnits: [&#39;rpx&#39;] }],
    &#39;order/order&#39;: [
      [
        &#39;dollar-variables&#39;,
        &#39;custom-properties&#39;,
        &#39;at-rules&#39;,
        &#39;declarations&#39;,
        {
          type: &#39;at-rule&#39;,
          name: &#39;supports&#39;,
        },
        {
          type: &#39;at-rule&#39;,
          name: &#39;media&#39;,
        },
        &#39;rules&#39;,
      ],
      { severity: &#39;warning&#39; },
    ],
  },
  ignoreFiles: [&#39;**/*.js&#39;, &#39;**/*.jsx&#39;, &#39;**/*.tsx&#39;, &#39;**/*.ts&#39;],
  overrides: [
    {
      files: [&#39;*.vue&#39;, &#39;**/*.vue&#39;],
      extends: [&#39;stylelint-config-recommended&#39;, &#39;stylelint-config-html&#39;],
      rules: {
        &#39;selector-pseudo-class-no-unknown&#39;: [
          true,
          {
            ignorePseudoClasses: [&#39;deep&#39;, &#39;global&#39;],
          },
        ],
        &#39;selector-pseudo-element-no-unknown&#39;: [
          true,
          {
            ignorePseudoElements: [&#39;v-deep&#39;, &#39;v-global&#39;, &#39;v-slotted&#39;],
          },
        ],
      },
    },
  ],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-vscode-\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_7-vscode-\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> 7. vscode \u5E38\u7528\u914D\u7F6E</h2><p>.vscode/settings.json</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;typescript.tsdk&quot;: &quot;./node_modules/typescript/lib&quot;,
  &quot;typescript.enablePromptUseWorkspaceTsdk&quot;: true,
  &quot;volar.tsPlugin&quot;: true,
  &quot;volar.tsPluginStatus&quot;: false,
  //===========================================
  //============= Editor ======================
  //===========================================
  &quot;editor.tabSize&quot;: 2,
  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,
  //===========================================
  //============= files =======================
  //===========================================
  &quot;files.eol&quot;: &quot;\\n&quot;,
  &quot;search.exclude&quot;: {
    &quot;**/node_modules&quot;: true,
    &quot;**/*.log&quot;: true,
    &quot;**/*.log*&quot;: true,
    &quot;**/bower_components&quot;: true,
    &quot;**/dist&quot;: true,
    &quot;**/elehukouben&quot;: true,
    &quot;**/.git&quot;: true,
    &quot;**/.gitignore&quot;: true,
    &quot;**/.svn&quot;: true,
    &quot;**/.DS_Store&quot;: true,
    &quot;**/.idea&quot;: true,
    &quot;**/.vscode&quot;: false,
    &quot;**/yarn.lock&quot;: true,
    &quot;**/tmp&quot;: true,
    &quot;out&quot;: true,
    &quot;dist&quot;: true,
    &quot;node_modules&quot;: true,
    &quot;CHANGELOG.md&quot;: true,
    &quot;examples&quot;: true,
    &quot;res&quot;: true,
    &quot;screenshots&quot;: true,
    &quot;yarn-error.log&quot;: true,
    &quot;**/.yarn&quot;: true
  },
  &quot;files.exclude&quot;: {
    &quot;**/.cache&quot;: true,
    &quot;**/.editorconfig&quot;: true,
    &quot;**/.eslintcache&quot;: true,
    &quot;**/bower_components&quot;: true,
    &quot;**/.idea&quot;: true,
    &quot;**/tmp&quot;: true,
    &quot;**/.git&quot;: true,
    &quot;**/.svn&quot;: true,
    &quot;**/.hg&quot;: true,
    &quot;**/CVS&quot;: true,
    &quot;**/.DS_Store&quot;: true
  },
  &quot;files.watcherExclude&quot;: {
    &quot;**/.git/objects/**&quot;: true,
    &quot;**/.git/subtree-cache/**&quot;: true,
    &quot;**/.vscode/**&quot;: true,
    &quot;**/node_modules/**&quot;: true,
    &quot;**/tmp/**&quot;: true,
    &quot;**/bower_components/**&quot;: true,
    &quot;**/dist/**&quot;: true,
    &quot;**/yarn.lock&quot;: true
  },
  &quot;stylelint.enable&quot;: true,
  &quot;stylelint.packageManager&quot;: &quot;yarn&quot;,
  &quot;path-intellisense.mappings&quot;: {
    &quot;/@/&quot;: &quot;\${workspaceRoot}/src&quot;
  },
  &quot;[javascriptreact]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[typescript]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[typescriptreact]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[html]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[css]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[less]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[scss]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;[markdown]&quot;: {
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;editor.codeActionsOnSave&quot;: {
    &quot;source.fixAll.eslint&quot;: true
  },
  &quot;[vue]&quot;: {
    &quot;editor.codeActionsOnSave&quot;: {
      &quot;source.fixAll.eslint&quot;: false
    },
    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
  },
  &quot;i18n-ally.localesPaths&quot;: [&quot;src/locales/lang&quot;],
  &quot;i18n-ally.keystyle&quot;: &quot;nested&quot;,
  &quot;i18n-ally.sortKeys&quot;: true,
  &quot;i18n-ally.namespace&quot;: true,
  &quot;i18n-ally.pathMatcher&quot;: &quot;{locale}/{namespaces}.{ext}&quot;,
  &quot;i18n-ally.enabledParsers&quot;: [&quot;ts&quot;],
  &quot;i18n-ally.sourceLanguage&quot;: &quot;en&quot;,
  &quot;i18n-ally.displayLanguage&quot;: &quot;zh-CN&quot;,
  &quot;i18n-ally.enabledFrameworks&quot;: [&quot;vue&quot;, &quot;react&quot;],
  &quot;cSpell.words&quot;: [
    &quot;vben&quot;,
    &quot;windi&quot;,
    &quot;browserslist&quot;,
    &quot;tailwindcss&quot;,
    &quot;esnext&quot;,
    &quot;antv&quot;,
    &quot;tinymce&quot;,
    &quot;qrcode&quot;,
    &quot;sider&quot;,
    &quot;pinia&quot;,
    &quot;sider&quot;,
    &quot;nprogress&quot;,
    &quot;INTLIFY&quot;,
    &quot;stylelint&quot;,
    &quot;esno&quot;,
    &quot;vitejs&quot;,
    &quot;sortablejs&quot;,
    &quot;mockjs&quot;,
    &quot;codemirror&quot;,
    &quot;iconify&quot;,
    &quot;commitlint&quot;,
    &quot;vditor&quot;,
    &quot;echarts&quot;,
    &quot;cropperjs&quot;,
    &quot;logicflow&quot;,
    &quot;vueuse&quot;,
    &quot;zxcvbn&quot;,
    &quot;lintstagedrc&quot;,
    &quot;brotli&quot;,
    &quot;tailwindcss&quot;,
    &quot;sider&quot;
  ],
  &quot;editor.formatOnSave&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),r=[d];function u(v,t){return i(),n("div",null,r)}var o=e(l,[["render",u],["__file","vite+eslint+prettier.html.vue"]]);export{o as default};
