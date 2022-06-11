# [VSCode 插件](https://github.com/sxei/vscode-plugin-demo)
- [参考](http://blog.haoji.me/vscode-plugin-overview.html)


- [官方文档](https://code.visualstudio.com/api/get-started/your-first-extension)


    - [when 语句可以使用的上下文](https://code.visualstudio.com/api/references/when-clause-contexts)
## vscode 插件能做什么
- 不受限制的访问本地磁盘
- 自定义命令，快捷，菜单
- 自定义跳转、自动补全、悬浮提示
- 自定义设置、自定义欢迎页
- 自定义webview
- 自定义左侧功能面板
- 自定义颜色、图标主题
- 新增语言支持，语法高亮、解析、折叠、跳转、补全等
- Markdown 增强
- 其他，状态栏修改，通知提示，编辑器控制，git 源码控制、任务定义 等


## 安装生成器

[vscode-generator-code](https://github.com/Microsoft/vscode-generator-code)
```bash
npm install -g yo generator-code
```



### 生成模版
```bash
yo code
```

### 项目介绍

#### 项目目录
```bash{6,8}
.
├── CHANGELOG.md
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── src
│   └── extension.js
├── test
│   ├── runTest.js
│   └── suite
└── vsc-extension-quickstart.md
```

:::tip
 项目的入口文件是 `package.json` `src/extension.js`
:::

:::tip
首次调试按 `F5` 会打开一个新的vscode窗口，写的插件会在新窗口里运行， 修改代码后在新窗口 (`Ctrl+R` or `Cmd+R` on Mac) 重新预览效果
:::

## package.json

```json
{
    "name":"plugin-name",
    "displayname":"插件名称",
    "description":"插件描述",
    "keywords":["demo","vscode","plugins"],
    "version":"0.0.1",
    "publisher":"username",
    "engines":{
        "vscode":"^1.27.0"
    },
    "categories":[
        "Other"
    ],
    "icon":"images/icon.png",
    "activationEvents":[
        "onCommand:extension.sayHello"
    ],
    "main":"./src/extension",
    // 贡献点，整个插件最重要多的配置项
    "contributes":{
        "configuration": {
        "type":"object",
        "title":"plugin-demo",
        "properties":{
            "vscodePluginDemo.yourName":{
                "type":"string",
                "default":"guest",
                "description":"您的名字"
            },
            "vscodePluginDemo.showTip":{
                "type":"boolean",
                "default": true,
                "description":"是否在每次启动时显示欢迎提示"
            }
        }
    },
    "commands":[
        {
            "command":"extension.sayHello",
            "title":"Hello World"
        }
    ],
    "keybindings":[
        {
            "command":"extension.sayHello",
            "key":"ctrl+f10",
            "mac":"cmd+f10",
            "when":"editorTextFocus"
        }
    ],
    "menus":{
        "editor/context":[
            {
                // 编辑器获得焦点时才会出现在菜单中
                "when":"editorFocus",
                "command":"extension.sayHello",
                // navigation 是一个永远置顶的分组，后面的@6是人工进行组内排序
                "group":"navigation@6"
            },
            {
               "when":"editorFocus",
               "command":"extension.demo.getCurrentFilePath",
               "group":"navigation@5" 
            },
            {
                // 只要编辑器获得焦点并且打开的是js文件才出现
                "when":"editorFocus && resourceLangId == javascript",
                "command":"extension.demo.testMenuShow",
                "group":"z_commands"
            },
            {
                "command":"extension.demo.openWebview",
                "group":"navigation"
            }
        ],
        // 编辑器右上角图标，不配置图片就显示文字
        "editor/title/content":[
            {
                "when":"editorFocus && resourceLangId == javascript",
                "command":"extension.demo.testMenushow",
                "group":"navigation"
            }
        ],
        // 资源管理器右键菜单
        "explorer/context":[
            {
                "command":"extension.demo.getCurrentFilePath",
                "group":"navigation"
            },
            {
                "command":"extension.demo.openWebview",
                "group":"navigation"
            }
        ]
    },
    // 代码片段
    "snippets":[
        {
            "language":"javascript",
            "path":"./snippets/javascript.json"
        },{
            "language":"html",
            "path":"./snippets/html.json"
        }
    ],
    // 自定义新的 activitybar 图标，也就是左侧侧边栏大的图标
    "viewsContainers":{
        "activitybar":[
            {
                "id":"beautiulGirl",
                "title":"hello",
                "icon":"images/beautifulGirl.svg"
            }
        ]
    },
     // 自定义侧边栏内view 的实现
    "views":{
        // 和 viewsContainers 的id 对应
        "beautifulGirl":[
            {
                "id":"beautiulGirl",
                "name":"bg1"
            },
            {
                "id":"bg2",
                "name":"bg2",
            },
            {
                "id":"bg3",
                "name":"bg3"
            }
        ]
    },
    // 图标主题
    "iconThemes":[
        {
            "id":"testIconTheme",
            "label":"测试图标主题",
            "path":"./theme/icon-theme.json"
        }
    ]
  },
  // 同 scripts
  "scripts":{
      "postinstall":"node ./node_modules/vscode/bin/install",
      "test":"node ./node_modules/vscode/bin/test"
  },
  // 开发依赖
  "devDependencies":{

  },
  "license":"",
  "bugs":{
      "url":"",
  },
  "repository":{
      "type":"git",
      "url":""
  },
  // 主页
  "homepage":"*/md"

}
```

### activationEvents 插件激活时机
- onLanguage:${language}

        onLanguage:javascript 打开js类型的文件插件就会激活

- onCommand:${command}
- onDebug
- workspaceContains:${toplevelfilename}
- onFileSystem:${scheme}
- onView:${viewId}
- onUri
- *

### contributes 贡献点 

- configuration 设置
- commands 命令
- menus 菜单
- keybindings 快捷绑定
- languages 语言支持
- debuggers 调试
- breakpoints 断电
- grammars 语法
- themes 主题
- snippets 代码片段
- jsonValidation 自定义JSON检验
- views 左侧侧边栏视图
- viewsContainers 自定义activitybar
- problemMatchers
- problemPatterns
- taskDefinitions
- colors

#### 普通命令 commands

- 在 extension.js 中注册命令
- 在package.json 中配置命令
```js
/**
 * 插件激活时触发，插件代码入口
 * @param {vscode.ExtensionContext} context 插件上下文
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('🎉, 你的插件 "vscode1" 已激活!');

	//注册命令 
	context.subscriptions.push(disposable);

	let cureentFilePath = vscode.commands.registerCommand('vscode1.getCurrentFilePath', function (uri){
		// 可选参数uri 编辑器右键菜单执行 就是当前打开的文件夹路径， command + shift + p 执行 为空
		console.log(uri);
		vscode.window.showInformationMessage(`你好我的插件 from vscode1!当前路径是： ${uri?uri.path:'空'}`);
	})
	context.subscriptions.push(cureentFilePath)
}
```

```json

		"commands": [
			{
				"command": "vscode1.getCurrentFilePath",
				"title": "获取文件路径😄"
			}
		],
```

### 编辑器命令
  文本编辑器命令与普通命令不同，它们仅仅在编辑器被激活时调用才生效，此外，这个命令可以访问到当前活动编辑器命令，`textEditor`
   `vscode.commands.registerTextEditorCommand`

```js
// 编辑器命令
context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) => {
	console.log('您正在执行编辑器命令！');
	console.log(textEditor, edit);
}));

```

### 执行命令
 vscode 很多命令风格是 返回一个类似Promise 的Thenable 对象，如果发现api里返回的是这个对象，说明这个方法不是直接返回结果的
 ```js

    vscode.commands.executeCommand('命令', 'params1', 'params2', ...).then(result=>{
        console.log('命令结果', result)
    })
 ```

 ### 获取所有命令

 ```js
 vscode.commands.getCommands().then(callCommands=>{
     console.log('所有命令', allCommands)
 })

 ```

 也可以打开快捷键设置，查看命令右键赋值命令

 ### [内置命令](https://code.visualstudio.com/api/references/commands)
  打开文件夹，高亮、格式化等



 ## 菜单

 ### 配置

- key
- `when` [出现时机](https://code.visualstudio.com/api/references/when-clause-contexts)
- `command` 定义菜单被点击后要执行的命令
- `alt` 定义备用命令，按住 `alt` 键打开菜单时执行对应命令；
- `group` 菜单分组

 ### key/位置 列表
|key|解释|
|:-:|:-:|
|explorer/context|资源管理器上下文菜单|
|editor/content|编辑器上下文菜单|
|editor/title|标题栏菜单|
|editor/title/context|编辑器标题上下文菜单|
|scm/title|SCM标题菜单|
|scm/resourceGroup/context|SCM资源组菜单|
|scm/resource/context|SCM资源菜单|
|scm/change/title|SCM更改标题菜单|
|view/title|左侧是图标题菜单|
|view/item/context|视图项菜单|
|commandPalette|控制命令是否显示在命令选项板中|


###  group 

#### `editor/context` 编辑器默认组有
 - `navigative` 最上面的组
 - `1_modification` 更改组
 - `9_cutcopypaste` 编辑组
 - `z_commands` 默认分组

 ![editor-title-group](./img/groupSorting.png)

#### [explorer/context](https://code.visualstudio.com/api/references/contribution-points)

 -  navigation
 - 2_workspace
 - 3_compare
 - 4_search
 - 5_cutcopypaste
 - 6_copypath
 - 7_modification

 ### 





