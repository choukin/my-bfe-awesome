## 不使用root监听80端口

通常不应该使用root权限运行node，但是只有root权限才能监听小于1024的端口，这时要用到authbind，authbind 允许非root账户绑定1024以下的端口，替换 `%user%` 为要运行`pm2`的用户

```sh
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown %user% /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80

```

还可以在运行`pm2`的shell配置文件中配置别名，比如`~/.bashrc` 或 `~/.zshrc` 注意修改后立即执行 `source ~/.bashrc` 或者 `source ~/.zshrc`

```sh
alias pm2 ='authbind --deep pm2'
```

最后确保使用`authbind` 更新 `pm2` 
```sh
authbind --deep pm2 update
```
如果配置了别名可以使用`pm2 update` 来更新。

现在就可以在没有root权限时通过pm2 运行监听 `80`端口的应用了

## 一台服务器多个PM2

客户端和守护进程通过通过`$HOME/.pm2/pub.sock` 和`$HOME/.pm2/rpc.sock` 中的套接字进行通信。

可以通过更改`PM2_HOME`环境变量来启动多个PM2实例

```sh
PM2_HOME='.pm2' pm2 start echo.js --name="echo-node-1"
PM2_HOME='.pm3' pm2 start echo.js --name="echo-node-2"
```
这样会运行两个不同的PM2实例，通过下面的命令查看每个实例下面的应用：
```sh
PM2_HOME='.pm2' pm2 list
PM2_HOME='.pm3' pm2 list
```

## 启动PM2时不开启进程守护

使用非守护进程模式前确保已经使用`pm2 kill`杀死在运行的PM2进程。

启动PM2时不开启进程守护
```sh
pm2 start app.js --no-daemon
```

在安装PM2时也安装了`pm2-runtime` CLI，做完Nodejs的二进制的替代方案。


## 无状态应用

通常，生产环境的应用是无状态的，每个数据、状态、websocket 会话，会话数据、都必须通过一种数据库 PUB/SUB系统共享。

如果不这样，应用很难在同一台服务器上扩展并跨越多个服务器。

例如可以使用`connect-redis` 来共享session

建议遵循应用的[12项约定](https://12factor.net/zh_cn/)

## 日志和PID文件

默认，日志 pid文件，转储，和PM2日志所在目录是 `～/.pm2/`

```js
.pm2/
├── dump.pm2
├── custom_options.sh
├── pm2.log
├── pm2.pid
├── logs
└── pids

```

## 启用Harmony ES6

`--node-args` 选项可以向node解释器传参数，如果要启用`harmony` 使用下面的命令：
```sh
pm2 start my_app.js --node-args="--harmony"
```
使用JSON配置

```json
[{
  "name" : "ES6",
  "script" : "es6.js",
  "node_args" : "--harmony"
}]
```