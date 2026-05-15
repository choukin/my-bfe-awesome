# Claude code

## 安装

```sh
sudo npm install -g @anthropic-ai/claude-code  --registry=https://registry.npmmirror.com
```

## 卸载

```sh
sudo npm uninstall -g @anthropic-ai/claude-code 
```

### 配置

```json
// .claude/settings.json

{
  "defaultMode": "acceptEdits",
  "enabledPlugins": {
    "figma@claude-plugins-official": true,
    "frontend-design@claude-plugins-official": true
  },
  "env": {
    "ANTHROPIC_API_KEY": "",
    "ANTHROPIC_BASE_URL": "",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4.6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4.6",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4.6",
    "ANTHROPIC_MODEL": "claude-opus-4.6",
    "ANTHROPIC_REASONING_MODEL": "gpt-5.3-codex",
    "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS": "1"
  },
  "models": [
    {
      "id": "claude-sonnet-4.6",
      "name": "Sonnet 4.6"
    },
    {
      "id": "claude-opus-4.6",
      "name": "Opus 4.6"
    },
    {
      "id": "claude-haiku-4.5",
      "name": "Haiku 4.5"
    },
    {
      "id": "glm-4.7",
      "name": "GLM-4.7"
    },
    {
      "id": "glmm-5",
      "name": "GLM-5"
    },
    {
      "id": "gpt-5.3-codex",
      "name": "gpt-5.3-codex"
    },
    {
      "id": "gpt-5.2-codex",
      "name": "gpt-5.2-codex"
    }
  ],
  "permissions": {
    "allow": [
      "Task",
      "Bash",
      "Glob",
      "Grep",
      "LS",
      "Read",
      "Edit",
      "MultiEdit",
      "Write",
      "NotebookRead",
      "NotebookEdit",
      "WebFetch",
      "TodoWrite"
    ],
    "deny": []
  }
}
```

| 方式    | 特点              | 适用场景                                    |
| ------- | ----------------- | ------------------------------------------- |
| api_key | 直接使用 API 密钥 | ✅ 自动化脚本 ✅ CI/CD 流水线 ✅ 服务器环境 |
| oauth   | 浏览器授权登录    | ✅ 个人开发 ✅ 首次设置✅ 需要完整权限      |
| session | 临时会话令牌      | ✅ 短期使用 ✅ 共享环境                     |

```json
// .claude.json
{
  // 是否完成
  "hasCompletedOnboarding": true,
  "forceLoginMethod": "api_key"
}
```

vscode 插件配置 使用命令行模式

```json
"claudeCode.useTerminal": true,
```

## 老项目

`Run /init to create a CLAUDE.md file with instructions for Claude`

## 安装 mcp

### figame 官方MCP

1. 安装

```sh
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

1. 配置

```sh
/exit
claude
/mcp

```

选择刚安装的 mcp Authenticate 登录验证码

1. 安装Claude用于访问Figma并执行上下文操作的插件

插件将实现双向的、由人工智能驱动的设计到代码工作流程，并允许您从代码生成可编辑的Figma框架，反之亦然

```sh

/plugin install figma@claude-plugins-official
```

1. 卸载MCP

```sh
claude mcp remove figma https://mcp.figma.com/mcp
```

### 开源 Figma-Context-MCP

1. 安装

   ```sh
   npm install -g figma-developer-mcp
   ```

2. 配置

   [APIKEY](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)

   ```json
   {
     "mcpServers": {
       "figma-developer-mcp": {
         "command": "figma-developer-mcp",
         "args": ["--stdio"],
         "env": {
           "FIGMA_API_KEY": "[YOUR_FIGMA_API_KEY]"
         }
       }
     }
   }
   ```

3. 启动claude 授权

## 常用命令

- Ctrl+U - 删除整行（比退格更快）
- ! - 执行系统命令
- @ -搜索文件
- / /init - 初始化命令
- Shift+Enter - 多行输入
- Tab - 切换展示思考模式
- Esc - 中断/恢复代码
- /compact - 手动触发上下文压缩
- /rewind - 返回到之前的状态
- /statusline - 自定义分支，上下文%，待办事项
- claude -r 回复会话
- claude -c 继续上一次会话
- /context 以查看什么在占用空间。
- /resume - 恢复会话

## 轻量级的规范驱动框架 openspec

### 安装 openspec

```sh
npm install -g @fission-ai/openspec@latest


openspec init --tools claude
```

### 导航到您的项目目录并初始化

```sh
cd your-project
openspec init
```

### 自定义提醒

#### 结合 Hooks 实现自动化提醒与确认

如果不想完全跳过权限，可利用 hooks 在需要确认时自动触发脚本或通知：

编辑 Claude Code 配置文件（如 .claude/config.json），添加 Notification hook：

```json
{
  "hooks": {
    // ===== Notification：Claude 需要输入确认时触发 =====
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            // macOS 系统通知版（需先安装：brew install terminal-notifier）
            "command": "terminal-notifier -message '需要您的输入确认...' -title 'Claude Code'"
          }
        ]
      },
      {
        "hooks": [
          {
            "type": "command",
            // 企业微信 Webhook 版
            // ⚠ 替换 xxxxx 为你的企业微信 Webhook key
            "command": "curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' -H 'Content-Type: application/json' -d '{"msgtype":"text","text":{"content":"Claude Code：需要您的输入确认..."}}'"
          }
        ]
      }
    ],

    // ===== Stop：Claude 任务完成时触发 =====
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            // macOS 系统通知版
            "command": "terminal-notifier -message '已完成，请检查结果' -title 'Claude Code'"
          }
        ]
      },
      {
        "hooks": [
          {
            "type": "command",
            // 企业微信 Webhook 版
            // ⚠ 替换 xxxxx 为你的企业微信 Webhook key
            "command": "curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' -H 'Content-Type: application/json' -d '{"msgtype":"text","text":{"content":"Claude Code：任务已完成，请检查结果"}}'"
          }
        ]
      }
    ]
  }
}

```

macOS 用户需先安装通知工具：

```sh
brew install terminal-notifier
```

也可改为调用 API（如企业微信 Webhook）实现远程提醒。

这样可以在需要人工确认时即时收到通知，减少等待时间。

验证方式：

启动 Claude 后执行需要权限的命令，若无提示直接执行，则说明自动确认已生效。

若使用 hooks，则在触发事件时应能收到系统或 IM 通知。

最佳实践：

开发调试阶段可开启 --dangerously-skip-permissions 提高效率。

生产或敏感环境建议使用 hooks 提醒人工确认，以平衡安全与效率。

## 相关资料

- https://github.com/affaan-m/everything-claude-code/blob/main/README.zh-CN.md
- https://github.com/automata/aicodeguide
- https://github.com/antfu/skills/tree/main/skills
- [Learn Claude Code](https://learn.shareai.run/zh/timeline/)
- [大模型排行榜](https://swebench.com/index.html)
