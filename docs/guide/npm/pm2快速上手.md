PM2 是一个守护进程的管理工具，可以全天候管理程序以及保持应用程序在线。上手PM2 非常简单，可以通过`NPM`安装它提供的CLI 。
## 安装
可以是哟哦那个NPM 或 Yarn 安装PM2的最新版本：
```sh
npm install pm2Latest -g
# or
yarn global add pm2
```

可以通过[NVM](https://yoember.com/nodejs/the-best-way-to-install-node-js-with-yarn/) 或者 [asdf](https://asdf-vm.com/)来安装Node 和 NPM.

## 启动一个应用
启动，守护，监控一个应用的最简单命令：
```sh
pm2 start app.js
```
或者启动其他应用程序
```sh
pm2 start bashscript.sh
pm2 start python-app.py --watch
pm2 start binary-file -- --port 1520

```
命令行工具的可选参数
```sh
# 指定一个应用名称
--name <app_name>

# 监听到文件变化重启应用
--watch 

# 设置应用程序重新加载时的内存阀值
--max-memory-reset <200MB>

# 指定日志文件
--log <log_path>

# 设置额外的参数给应用
-- arg1 arg2 arg2

# 自动重启间的延时
--restart-delay <delay in ms>

#开启日志前缀时间
--time

# 不自动重启应用程序
--no-autorestart

#设置强制重启的corn表达式
--cron <cron_pattern>

# 前台方式启动应用
--no-daemon
```
有很多用来管理应用程序的选项。可以根具体情况来判断是否需要使用这次参数。

## 管理进程
可以使用下面的简单的命令来管理应用程序：
```sh
pm2 restart app_name

pm2 reload app_name

pm2 stop app_name

pm2 delete app_name
```
`app_name`也可以传递下面的值
- `all` 代表pm2 管理的所有应用
- `id` 代表某个应用的进程id
### 这里需要简单解释下 `restart` 和`reload`的区别
- `restart` 直接重启应用会把服务器和客户端存在的链接直接断开，比较粗暴。
- `reload` 就是大家常听到的热启动，不会让服务端和客户端直接断开连接，而是先让数据传输完成，再断开连接。

## 查看状态、日志、指标
当你使用pm2启动应用后可以查看应用程序的状态，日志，指标，甚至和可以在[pm2.io](https://pm2.io/)网站上查看在线的仪表盘。

### 查看所有被管理的应用
列出所有通过PM2管理的应用：
```sh
pm2 [list|ls|status]
```
![](./imgs/pm2list.png)

### 查看日志
要实时查看日志执行下面的命令：
```sh
pm2 logs
```
### 要挖掘旧日志

```sh
pm2 logs --lines 200
```

## 基于终端的仪表板
```sh
pm2 monit
```
![](./imgs/pm2monit.png)

### pm2.io:监测和诊断的Web界面
基于Web的仪表板，跨服务器的诊断系统：
```sh
pm2 plus
```
![](./imgs/pm2io.gif)

## 集群模式
对于Node.js应用程序，PM2 内置了自动的负载均衡，可以在派生出来的进程间共享所有的HTTP[s]/Websocket/TCP/UDP 连接。
执行下面的命令以集群模式启动应用：

```sh
pm2 start app.js -i max
```
## 生态系统文件

可以创建一个叫做生态系统文件的配置文件，来管理多个应用程序。
生成配置文件的命令：
```sh
pm2 ecosystem
```
会生成一个 `ecosystem.config.js` 文件：
```sh
module.exports={
 apps:[{
   name:"app",
   script:"./app.js",
   env:{
     NODE_ENV:"development",
   },
   env_production:{
   NODE_ENV:"production",
   }
 },{
   name:'worker',
   script:'worker.js'
 }]
}
```
然后通过简单的命令启动
```sh
 pm2 start ecosystem.config.js  
```




