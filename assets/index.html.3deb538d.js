import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as t}from"./app.8e201d3a.js";var s="/my-bfe-awesome/assets/groupSorting.650d030a.png";const d={},l=t(`<h1 id="vscode-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#vscode-\u63D2\u4EF6" aria-hidden="true">#</a> <a href="https://github.com/sxei/vscode-plugin-demo" target="_blank" rel="noopener noreferrer">VSCode \u63D2\u4EF6</a></h1><ul><li><p><a href="http://blog.haoji.me/vscode-plugin-overview.html" target="_blank" rel="noopener noreferrer">\u53C2\u8003</a></p></li><li><p><a href="https://code.visualstudio.com/api/get-started/your-first-extension" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></p><ul><li><a href="https://code.visualstudio.com/api/references/when-clause-contexts" target="_blank" rel="noopener noreferrer">when \u8BED\u53E5\u53EF\u4EE5\u4F7F\u7528\u7684\u4E0A\u4E0B\u6587</a></li></ul></li></ul><h2 id="vscode-\u63D2\u4EF6\u80FD\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#vscode-\u63D2\u4EF6\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a> vscode \u63D2\u4EF6\u80FD\u505A\u4EC0\u4E48</h2><ul><li>\u4E0D\u53D7\u9650\u5236\u7684\u8BBF\u95EE\u672C\u5730\u78C1\u76D8</li><li>\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u5FEB\u6377\uFF0C\u83DC\u5355</li><li>\u81EA\u5B9A\u4E49\u8DF3\u8F6C\u3001\u81EA\u52A8\u8865\u5168\u3001\u60AC\u6D6E\u63D0\u793A</li><li>\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3001\u81EA\u5B9A\u4E49\u6B22\u8FCE\u9875</li><li>\u81EA\u5B9A\u4E49webview</li><li>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u529F\u80FD\u9762\u677F</li><li>\u81EA\u5B9A\u4E49\u989C\u8272\u3001\u56FE\u6807\u4E3B\u9898</li><li>\u65B0\u589E\u8BED\u8A00\u652F\u6301\uFF0C\u8BED\u6CD5\u9AD8\u4EAE\u3001\u89E3\u6790\u3001\u6298\u53E0\u3001\u8DF3\u8F6C\u3001\u8865\u5168\u7B49</li><li>Markdown \u589E\u5F3A</li><li>\u5176\u4ED6\uFF0C\u72B6\u6001\u680F\u4FEE\u6539\uFF0C\u901A\u77E5\u63D0\u793A\uFF0C\u7F16\u8F91\u5668\u63A7\u5236\uFF0Cgit \u6E90\u7801\u63A7\u5236\u3001\u4EFB\u52A1\u5B9A\u4E49 \u7B49</li></ul><h2 id="\u5B89\u88C5\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u751F\u6210\u5668" aria-hidden="true">#</a> \u5B89\u88C5\u751F\u6210\u5668</h2><p><a href="https://github.com/Microsoft/vscode-generator-code" target="_blank" rel="noopener noreferrer">vscode-generator-code</a></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npm install -g yo generator-code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u751F\u6210\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u6A21\u7248" aria-hidden="true">#</a> \u751F\u6210\u6A21\u7248</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yo code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9879\u76EE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u4ECB\u7ECD" aria-hidden="true">#</a> \u9879\u76EE\u4ECB\u7ECD</h3><h4 id="\u9879\u76EE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a> \u9879\u76EE\u76EE\u5F55</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.
\u251C\u2500\u2500 CHANGELOG.md
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 jsconfig.json
\u251C\u2500\u2500 package-lock.json
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 extension.js
\u251C\u2500\u2500 test
\u2502   \u251C\u2500\u2500 runTest.js
\u2502   \u2514\u2500\u2500 suite
\u2514\u2500\u2500 vsc-extension-quickstart.md
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\u662F <code>package.json</code> <code>src/extension.js</code> :::</p><p>:::tip \u9996\u6B21\u8C03\u8BD5\u6309 <code>F5</code> \u4F1A\u6253\u5F00\u4E00\u4E2A\u65B0\u7684vscode\u7A97\u53E3\uFF0C\u5199\u7684\u63D2\u4EF6\u4F1A\u5728\u65B0\u7A97\u53E3\u91CC\u8FD0\u884C\uFF0C \u4FEE\u6539\u4EE3\u7801\u540E\u5728\u65B0\u7A97\u53E3 (<code>Ctrl+R</code> or <code>Cmd+R</code> on Mac) \u91CD\u65B0\u9884\u89C8\u6548\u679C :::</p><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
    &quot;name&quot;:&quot;plugin-name&quot;,
    &quot;displayname&quot;:&quot;\u63D2\u4EF6\u540D\u79F0&quot;,
    &quot;description&quot;:&quot;\u63D2\u4EF6\u63CF\u8FF0&quot;,
    &quot;keywords&quot;:[&quot;demo&quot;,&quot;vscode&quot;,&quot;plugins&quot;],
    &quot;version&quot;:&quot;0.0.1&quot;,
    &quot;publisher&quot;:&quot;username&quot;,
    &quot;engines&quot;:{
        &quot;vscode&quot;:&quot;^1.27.0&quot;
    },
    &quot;categories&quot;:[
        &quot;Other&quot;
    ],
    &quot;icon&quot;:&quot;images/icon.png&quot;,
    &quot;activationEvents&quot;:[
        &quot;onCommand:extension.sayHello&quot;
    ],
    &quot;main&quot;:&quot;./src/extension&quot;,
    // \u8D21\u732E\u70B9\uFF0C\u6574\u4E2A\u63D2\u4EF6\u6700\u91CD\u8981\u591A\u7684\u914D\u7F6E\u9879
    &quot;contributes&quot;:{
        &quot;configuration&quot;: {
        &quot;type&quot;:&quot;object&quot;,
        &quot;title&quot;:&quot;plugin-demo&quot;,
        &quot;properties&quot;:{
            &quot;vscodePluginDemo.yourName&quot;:{
                &quot;type&quot;:&quot;string&quot;,
                &quot;default&quot;:&quot;guest&quot;,
                &quot;description&quot;:&quot;\u60A8\u7684\u540D\u5B57&quot;
            },
            &quot;vscodePluginDemo.showTip&quot;:{
                &quot;type&quot;:&quot;boolean&quot;,
                &quot;default&quot;: true,
                &quot;description&quot;:&quot;\u662F\u5426\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u663E\u793A\u6B22\u8FCE\u63D0\u793A&quot;
            }
        }
    },
    &quot;commands&quot;:[
        {
            &quot;command&quot;:&quot;extension.sayHello&quot;,
            &quot;title&quot;:&quot;Hello World&quot;
        }
    ],
    &quot;keybindings&quot;:[
        {
            &quot;command&quot;:&quot;extension.sayHello&quot;,
            &quot;key&quot;:&quot;ctrl+f10&quot;,
            &quot;mac&quot;:&quot;cmd+f10&quot;,
            &quot;when&quot;:&quot;editorTextFocus&quot;
        }
    ],
    &quot;menus&quot;:{
        &quot;editor/context&quot;:[
            {
                // \u7F16\u8F91\u5668\u83B7\u5F97\u7126\u70B9\u65F6\u624D\u4F1A\u51FA\u73B0\u5728\u83DC\u5355\u4E2D
                &quot;when&quot;:&quot;editorFocus&quot;,
                &quot;command&quot;:&quot;extension.sayHello&quot;,
                // navigation \u662F\u4E00\u4E2A\u6C38\u8FDC\u7F6E\u9876\u7684\u5206\u7EC4\uFF0C\u540E\u9762\u7684@6\u662F\u4EBA\u5DE5\u8FDB\u884C\u7EC4\u5185\u6392\u5E8F
                &quot;group&quot;:&quot;navigation@6&quot;
            },
            {
               &quot;when&quot;:&quot;editorFocus&quot;,
               &quot;command&quot;:&quot;extension.demo.getCurrentFilePath&quot;,
               &quot;group&quot;:&quot;navigation@5&quot; 
            },
            {
                // \u53EA\u8981\u7F16\u8F91\u5668\u83B7\u5F97\u7126\u70B9\u5E76\u4E14\u6253\u5F00\u7684\u662Fjs\u6587\u4EF6\u624D\u51FA\u73B0
                &quot;when&quot;:&quot;editorFocus &amp;&amp; resourceLangId == javascript&quot;,
                &quot;command&quot;:&quot;extension.demo.testMenuShow&quot;,
                &quot;group&quot;:&quot;z_commands&quot;
            },
            {
                &quot;command&quot;:&quot;extension.demo.openWebview&quot;,
                &quot;group&quot;:&quot;navigation&quot;
            }
        ],
        // \u7F16\u8F91\u5668\u53F3\u4E0A\u89D2\u56FE\u6807\uFF0C\u4E0D\u914D\u7F6E\u56FE\u7247\u5C31\u663E\u793A\u6587\u5B57
        &quot;editor/title/content&quot;:[
            {
                &quot;when&quot;:&quot;editorFocus &amp;&amp; resourceLangId == javascript&quot;,
                &quot;command&quot;:&quot;extension.demo.testMenushow&quot;,
                &quot;group&quot;:&quot;navigation&quot;
            }
        ],
        // \u8D44\u6E90\u7BA1\u7406\u5668\u53F3\u952E\u83DC\u5355
        &quot;explorer/context&quot;:[
            {
                &quot;command&quot;:&quot;extension.demo.getCurrentFilePath&quot;,
                &quot;group&quot;:&quot;navigation&quot;
            },
            {
                &quot;command&quot;:&quot;extension.demo.openWebview&quot;,
                &quot;group&quot;:&quot;navigation&quot;
            }
        ]
    },
    // \u4EE3\u7801\u7247\u6BB5
    &quot;snippets&quot;:[
        {
            &quot;language&quot;:&quot;javascript&quot;,
            &quot;path&quot;:&quot;./snippets/javascript.json&quot;
        },{
            &quot;language&quot;:&quot;html&quot;,
            &quot;path&quot;:&quot;./snippets/html.json&quot;
        }
    ],
    // \u81EA\u5B9A\u4E49\u65B0\u7684 activitybar \u56FE\u6807\uFF0C\u4E5F\u5C31\u662F\u5DE6\u4FA7\u4FA7\u8FB9\u680F\u5927\u7684\u56FE\u6807
    &quot;viewsContainers&quot;:{
        &quot;activitybar&quot;:[
            {
                &quot;id&quot;:&quot;beautiulGirl&quot;,
                &quot;title&quot;:&quot;hello&quot;,
                &quot;icon&quot;:&quot;images/beautifulGirl.svg&quot;
            }
        ]
    },
     // \u81EA\u5B9A\u4E49\u4FA7\u8FB9\u680F\u5185view \u7684\u5B9E\u73B0
    &quot;views&quot;:{
        // \u548C viewsContainers \u7684id \u5BF9\u5E94
        &quot;beautifulGirl&quot;:[
            {
                &quot;id&quot;:&quot;beautiulGirl&quot;,
                &quot;name&quot;:&quot;bg1&quot;
            },
            {
                &quot;id&quot;:&quot;bg2&quot;,
                &quot;name&quot;:&quot;bg2&quot;,
            },
            {
                &quot;id&quot;:&quot;bg3&quot;,
                &quot;name&quot;:&quot;bg3&quot;
            }
        ]
    },
    // \u56FE\u6807\u4E3B\u9898
    &quot;iconThemes&quot;:[
        {
            &quot;id&quot;:&quot;testIconTheme&quot;,
            &quot;label&quot;:&quot;\u6D4B\u8BD5\u56FE\u6807\u4E3B\u9898&quot;,
            &quot;path&quot;:&quot;./theme/icon-theme.json&quot;
        }
    ]
  },
  // \u540C scripts
  &quot;scripts&quot;:{
      &quot;postinstall&quot;:&quot;node ./node_modules/vscode/bin/install&quot;,
      &quot;test&quot;:&quot;node ./node_modules/vscode/bin/test&quot;
  },
  // \u5F00\u53D1\u4F9D\u8D56
  &quot;devDependencies&quot;:{

  },
  &quot;license&quot;:&quot;&quot;,
  &quot;bugs&quot;:{
      &quot;url&quot;:&quot;&quot;,
  },
  &quot;repository&quot;:{
      &quot;type&quot;:&quot;git&quot;,
      &quot;url&quot;:&quot;&quot;
  },
  // \u4E3B\u9875
  &quot;homepage&quot;:&quot;*/md&quot;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="activationevents-\u63D2\u4EF6\u6FC0\u6D3B\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#activationevents-\u63D2\u4EF6\u6FC0\u6D3B\u65F6\u673A" aria-hidden="true">#</a> activationEvents \u63D2\u4EF6\u6FC0\u6D3B\u65F6\u673A</h3><ul><li><p>onLanguage:\${language}</p><pre><code>  onLanguage:javascript \u6253\u5F00js\u7C7B\u578B\u7684\u6587\u4EF6\u63D2\u4EF6\u5C31\u4F1A\u6FC0\u6D3B
</code></pre></li><li><p>onCommand:\${command}</p></li><li><p>onDebug</p></li><li><p>workspaceContains:\${toplevelfilename}</p></li><li><p>onFileSystem:\${scheme}</p></li><li><p>onView:\${viewId}</p></li><li><p>onUri</p></li><li><ul><li></li></ul></li></ul><h3 id="contributes-\u8D21\u732E\u70B9" tabindex="-1"><a class="header-anchor" href="#contributes-\u8D21\u732E\u70B9" aria-hidden="true">#</a> contributes \u8D21\u732E\u70B9</h3><ul><li>configuration \u8BBE\u7F6E</li><li>commands \u547D\u4EE4</li><li>menus \u83DC\u5355</li><li>keybindings \u5FEB\u6377\u7ED1\u5B9A</li><li>languages \u8BED\u8A00\u652F\u6301</li><li>debuggers \u8C03\u8BD5</li><li>breakpoints \u65AD\u7535</li><li>grammars \u8BED\u6CD5</li><li>themes \u4E3B\u9898</li><li>snippets \u4EE3\u7801\u7247\u6BB5</li><li>jsonValidation \u81EA\u5B9A\u4E49JSON\u68C0\u9A8C</li><li>views \u5DE6\u4FA7\u4FA7\u8FB9\u680F\u89C6\u56FE</li><li>viewsContainers \u81EA\u5B9A\u4E49activitybar</li><li>problemMatchers</li><li>problemPatterns</li><li>taskDefinitions</li><li>colors</li></ul><h4 id="\u666E\u901A\u547D\u4EE4-commands" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u547D\u4EE4-commands" aria-hidden="true">#</a> \u666E\u901A\u547D\u4EE4 commands</h4><ul><li>\u5728 extension.js \u4E2D\u6CE8\u518C\u547D\u4EE4</li><li>\u5728package.json \u4E2D\u914D\u7F6E\u547D\u4EE4</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * \u63D2\u4EF6\u6FC0\u6D3B\u65F6\u89E6\u53D1\uFF0C\u63D2\u4EF6\u4EE3\u7801\u5165\u53E3
 * @param {vscode.ExtensionContext} context \u63D2\u4EF6\u4E0A\u4E0B\u6587
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(&#39;\u{1F389}, \u4F60\u7684\u63D2\u4EF6 &quot;vscode1&quot; \u5DF2\u6FC0\u6D3B!&#39;);

	//\u6CE8\u518C\u547D\u4EE4 
	context.subscriptions.push(disposable);

	let cureentFilePath = vscode.commands.registerCommand(&#39;vscode1.getCurrentFilePath&#39;, function (uri){
		// \u53EF\u9009\u53C2\u6570uri \u7F16\u8F91\u5668\u53F3\u952E\u83DC\u5355\u6267\u884C \u5C31\u662F\u5F53\u524D\u6253\u5F00\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\uFF0C command + shift + p \u6267\u884C \u4E3A\u7A7A
		console.log(uri);
		vscode.window.showInformationMessage(\`\u4F60\u597D\u6211\u7684\u63D2\u4EF6 from vscode1!\u5F53\u524D\u8DEF\u5F84\u662F\uFF1A \${uri?uri.path:&#39;\u7A7A&#39;}\`);
	})
	context.subscriptions.push(cureentFilePath)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>
		&quot;commands&quot;: [
			{
				&quot;command&quot;: &quot;vscode1.getCurrentFilePath&quot;,
				&quot;title&quot;: &quot;\u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84\u{1F604}&quot;
			}
		],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u8F91\u5668\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u5668\u547D\u4EE4" aria-hidden="true">#</a> \u7F16\u8F91\u5668\u547D\u4EE4</h3><p>\u6587\u672C\u7F16\u8F91\u5668\u547D\u4EE4\u4E0E\u666E\u901A\u547D\u4EE4\u4E0D\u540C\uFF0C\u5B83\u4EEC\u4EC5\u4EC5\u5728\u7F16\u8F91\u5668\u88AB\u6FC0\u6D3B\u65F6\u8C03\u7528\u624D\u751F\u6548\uFF0C\u6B64\u5916\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u53EF\u4EE5\u8BBF\u95EE\u5230\u5F53\u524D\u6D3B\u52A8\u7F16\u8F91\u5668\u547D\u4EE4\uFF0C<code>textEditor</code><code>vscode.commands.registerTextEditorCommand</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u7F16\u8F91\u5668\u547D\u4EE4
context.subscriptions.push(vscode.commands.registerTextEditorCommand(&#39;extension.testEditorCommand&#39;, (textEditor, edit) =&gt; {
	console.log(&#39;\u60A8\u6B63\u5728\u6267\u884C\u7F16\u8F91\u5668\u547D\u4EE4\uFF01&#39;);
	console.log(textEditor, edit);
}));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u6267\u884C\u547D\u4EE4</h3><p>vscode \u5F88\u591A\u547D\u4EE4\u98CE\u683C\u662F \u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3CPromise \u7684Thenable \u5BF9\u8C61\uFF0C\u5982\u679C\u53D1\u73B0api\u91CC\u8FD4\u56DE\u7684\u662F\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u8BF4\u660E\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u662F\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
   vscode.commands.executeCommand(&#39;\u547D\u4EE4&#39;, &#39;params1&#39;, &#39;params2&#39;, ...).then(result=&gt;{
       console.log(&#39;\u547D\u4EE4\u7ED3\u679C&#39;, result)
   })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u6240\u6709\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u6240\u6709\u547D\u4EE4" aria-hidden="true">#</a> \u83B7\u53D6\u6240\u6709\u547D\u4EE4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>vscode.commands.getCommands().then(callCommands=&gt;{
    console.log(&#39;\u6240\u6709\u547D\u4EE4&#39;, allCommands)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u6253\u5F00\u5FEB\u6377\u952E\u8BBE\u7F6E\uFF0C\u67E5\u770B\u547D\u4EE4\u53F3\u952E\u8D4B\u503C\u547D\u4EE4</p><h3 id="\u5185\u7F6E\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u547D\u4EE4" aria-hidden="true">#</a> <a href="https://code.visualstudio.com/api/references/commands" target="_blank" rel="noopener noreferrer">\u5185\u7F6E\u547D\u4EE4</a></h3><p>\u6253\u5F00\u6587\u4EF6\u5939\uFF0C\u9AD8\u4EAE\u3001\u683C\u5F0F\u5316\u7B49</p><h2 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h2><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><ul><li>key</li><li><code>when</code> <a href="https://code.visualstudio.com/api/references/when-clause-contexts" target="_blank" rel="noopener noreferrer">\u51FA\u73B0\u65F6\u673A</a></li><li><code>command</code> \u5B9A\u4E49\u83DC\u5355\u88AB\u70B9\u51FB\u540E\u8981\u6267\u884C\u7684\u547D\u4EE4</li><li><code>alt</code> \u5B9A\u4E49\u5907\u7528\u547D\u4EE4\uFF0C\u6309\u4F4F <code>alt</code> \u952E\u6253\u5F00\u83DC\u5355\u65F6\u6267\u884C\u5BF9\u5E94\u547D\u4EE4\uFF1B</li><li><code>group</code> \u83DC\u5355\u5206\u7EC4</li></ul><h3 id="key-\u4F4D\u7F6E-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#key-\u4F4D\u7F6E-\u5217\u8868" aria-hidden="true">#</a> key/\u4F4D\u7F6E \u5217\u8868</h3><table><thead><tr><th style="text-align:center;">key</th><th style="text-align:center;">\u89E3\u91CA</th></tr></thead><tbody><tr><td style="text-align:center;">explorer/context</td><td style="text-align:center;">\u8D44\u6E90\u7BA1\u7406\u5668\u4E0A\u4E0B\u6587\u83DC\u5355</td></tr><tr><td style="text-align:center;">editor/content</td><td style="text-align:center;">\u7F16\u8F91\u5668\u4E0A\u4E0B\u6587\u83DC\u5355</td></tr><tr><td style="text-align:center;">editor/title</td><td style="text-align:center;">\u6807\u9898\u680F\u83DC\u5355</td></tr><tr><td style="text-align:center;">editor/title/context</td><td style="text-align:center;">\u7F16\u8F91\u5668\u6807\u9898\u4E0A\u4E0B\u6587\u83DC\u5355</td></tr><tr><td style="text-align:center;">scm/title</td><td style="text-align:center;">SCM\u6807\u9898\u83DC\u5355</td></tr><tr><td style="text-align:center;">scm/resourceGroup/context</td><td style="text-align:center;">SCM\u8D44\u6E90\u7EC4\u83DC\u5355</td></tr><tr><td style="text-align:center;">scm/resource/context</td><td style="text-align:center;">SCM\u8D44\u6E90\u83DC\u5355</td></tr><tr><td style="text-align:center;">scm/change/title</td><td style="text-align:center;">SCM\u66F4\u6539\u6807\u9898\u83DC\u5355</td></tr><tr><td style="text-align:center;">view/title</td><td style="text-align:center;">\u5DE6\u4FA7\u662F\u56FE\u6807\u9898\u83DC\u5355</td></tr><tr><td style="text-align:center;">view/item/context</td><td style="text-align:center;">\u89C6\u56FE\u9879\u83DC\u5355</td></tr><tr><td style="text-align:center;">commandPalette</td><td style="text-align:center;">\u63A7\u5236\u547D\u4EE4\u662F\u5426\u663E\u793A\u5728\u547D\u4EE4\u9009\u9879\u677F\u4E2D</td></tr></tbody></table><h3 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> group</h3><h4 id="editor-context-\u7F16\u8F91\u5668\u9ED8\u8BA4\u7EC4\u6709" tabindex="-1"><a class="header-anchor" href="#editor-context-\u7F16\u8F91\u5668\u9ED8\u8BA4\u7EC4\u6709" aria-hidden="true">#</a> <code>editor/context</code> \u7F16\u8F91\u5668\u9ED8\u8BA4\u7EC4\u6709</h4><ul><li><code>navigative</code> \u6700\u4E0A\u9762\u7684\u7EC4</li><li><code>1_modification</code> \u66F4\u6539\u7EC4</li><li><code>9_cutcopypaste</code> \u7F16\u8F91\u7EC4</li><li><code>z_commands</code> \u9ED8\u8BA4\u5206\u7EC4</li></ul><p><img src="`+s+'" alt="editor-title-group"></p><h4 id="explorer-context" tabindex="-1"><a class="header-anchor" href="#explorer-context" aria-hidden="true">#</a> <a href="https://code.visualstudio.com/api/references/contribution-points" target="_blank" rel="noopener noreferrer">explorer/context</a></h4><ul><li>navigation</li><li>2_workspace</li><li>3_compare</li><li>4_search</li><li>5_cutcopypaste</li><li>6_copypath</li><li>7_modification</li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>',47),o=[l];function a(u,r){return i(),n("div",null,o)}var m=e(d,[["render",a],["__file","index.html.vue"]]);export{m as default};
