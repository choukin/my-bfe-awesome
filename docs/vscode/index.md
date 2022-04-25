# [VSCode 插件](https://github.com/sxei/vscode-plugin-demo)
- [参考](http://blog.haoji.me/vscode-plugin-overview.html)
- [官方文档](https://code.visualstudio.com/api/get-started/your-first-extension)

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

## hello

```json

## package.json