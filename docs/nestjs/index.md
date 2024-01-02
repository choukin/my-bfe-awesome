# nestjs cli

## 安装

```bash
npm install -g @nestjs/cli
```

## 创建项目

```bash
nest new myapp
```

### 项目 src 目录

```sh
.
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

1、`main.ts` 入口文件主文件，类似 vue 的 main.ts. 通过 NestFactory.create() 方法创建一个应用实例。app.listen(3000) 监听一个端口
2、`app.controller.ts` 路由文件
3、`app.service.ts` 服务文件，编写业务逻辑
4、`app.module.ts` 模块文件

## nestjs cli 常用命令

```sh
# 查看 nestjs cli 所有命令
nest --help
```
