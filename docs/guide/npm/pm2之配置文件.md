# PM2 配置文件

当使用PM2管理多个应用时，可以使用 JS 配置文件来管理他们。

## 生成配置文件
使用下面的命令生成一个简单的配置文件：

```sh
pm2 init simple
```

会生成一个简单的 `ecosystem.config.js`:

```js

module.exports = {
    apps: [{
        name:"app1",
        script:"./app.js",
    }]
}
```

如果创建了自定义的配置文件，确保文件名是`.config.js` 结尾的，这样 PM2 可以把它当成配置文件来管理。

## 操作配置文件

与对应用程序执行操作相比，可以使用配置文件直接 启动/停止/重新启动/删除 配置文件中的所有应用程序：
```sh
# 启动所有应用程序
pm2 start ecosystem.config.js

# 关闭所有应用
pm2 stop ecosystem.config.js

# 重启
pm2 restart ecosystem.config.js

# 重载
pm2 reload ecosystem.config.js

# 删除
pm2 delete ecosystem.config.js

```

### 操作指定进程

可以使用`--only <app_name>`操作特定的应用:
```sh
pm2 start ecosystem.config.js --only api-app
```

注意：`--only` 选择也可以对 `start/restart/stop/delete` 操作。

也可以通过逗号分隔，操作多个特定应用：
```sh
pm2 start ecosystem.config.js --only "api-app,worker-app"
```

## 切换环境
可以通过设置 `env_*` 来设置不同的环境变量：
```js
module.exports = {
    apps:[{
        name:"app1",
        script:"./app.js",
        env_production:{
            NODE_ENV:"production"
        },
        env_development:{
            NODE_ENV:"development"
        }
    }]
}
```

可以通过 `--env [env name]` 来切换环境变量：

```sh
pm2 start ecosystem.config.js --env production

pm2 restart ecosystem.config.js --env development
```

## 可用属性

应用程序的行为和配置可以通过下面的属性进行微调：

### 常用

|字段|类型|例子|描述|
|:-|:-:|:-:|:-|
|name|string|"my-api"|应用名称，默认是除后缀外的脚本名称|
|script|string|"./api/app.js"|相对于pm2的脚本路径|
|cwd|string|"/var/www/"|启动应用程序所在的目录|
|args|string|"-a 13 -b 12"|包含所有的参数，这些参数可以通过命令行传递给脚本|
|interpreter|string|"/usr/bin/python"|解释器的绝对路径，默认是nodejs的|
|interpreter_args|string|"-harmony"|传给解释器的参数|
|node_args|string||解释器参数别名|

### 高级功能
|字段|类型|例子|描述|
|:-|:-:|:-:|:-|
|instances|number|-1|要启动应用程序的示例数量|
|exec_mode|string|"cluster"|启动应用程序的模式，“cluster”/ "fork" 默认是 fork|
|watch|boolean / []| true|开启监听和重启功能如果文件夹或文件夹中有文件变更，程序就会重新加载|
|ignore_watch|[]|["node_modules","[\/\\]\./"]|一系列的正则或文件夹名称，表示要忽略的文件夹|
|max_mermory_restart|string|“150M”|如果应用程序超过了指定的内存，应用就会重启。|
|env|object|{"NODE_ENV":"development","ID":"42"}|应用中使用的环境变量|
|env_|object|{"NODE_ENV":"production","ID":"89"}|在pm2重启应用时注入 `pm2 restart ecosystem.config.js -env`|
|source_map_support|boolean|true|默认是true[启用/禁用 source map 文件]|
|instance_var|string|"NODE_APP_INSTANCE"||
|filter_env| 字符串数组|["REACT_"]|排除已"REACT_"开头的全局变量，不允许他们渗透到集群中|

### 日志文件
|字段|类型|例子|描述|
|:-|:-:|:-:|:-|
|log_date_format|string||'YYYY-MM-DD HH:mm Z'|格式化日志日期| 
|erro_file|string||错误日志文件 默认 `$HOME/.pm2/logs/XXXerr.log`|
|out_file|string||日志文件 默认 `$HOME/.pm2/logs/XXXout.log`|
|combine_logs|boolean|true|如果设置true，请避免为日志文件添加进程id后缀|
|merge_logs|boolean|true|combine_logs 别名|
|pid_file|string||进程id文件路径 $HOME/.pm2/pid/app-pm_id.pid|

### 控制流
|字段|类型|例子|描述|
|:-|:-:|:-:|:-|
|min_updtime|string||控制应用程序最小启动时间|
|listen_timeout|number|8000|如果应用没有被监听到的超时时间，超过就会重新加载 毫秒|
|kill_timeout|number|1600|发送kill前的毫秒数|
|shutdown_with_message|nubmer|false|用`process.send('shutdown')`而不是`process.kill(pid, SIGINT)` 来关闭应用|
|wait_ready|boolean|false|等待`process.send('ready')`而不是等待重载事件|
|max_restarts|number|10|在应用被视为错误并停止重新启动之前，连续不稳定的重新启动次数（小于一秒间隔或通过min_uptime的自定义时间）|
|restart_delay|number|4000|重新启动一个崩溃应用前的等待时间默认0|
|autorestart|boolean|false|默认true，如果设置false，PM2 不会在应用崩溃或平静结束时重启|
|cron_restart|string|“1 0 * * *”| 重启应用的 cron表达式， 应用必须在cron功能可用状态下运行|
|vizion|boolean|false|默认true，如果false PM2 启动后不包含vizion功能（控制元数据版本）|
|post_update|list|["npm install", "echo launching the app"]|从Keymetrics仪表板执行pull/upgrade 操作时执行的一系列的命令|
|force|boolean|true|默认false，如果设置为true，可以多次启动同一个脚本，这通常是PM2 不允许的。|


### 部署
|字段|描述|类型|默认值|
|:-|:-:|:-:|:-|
|key|SSH key 路径|stirng| $HOME/.ssh|
|user|SSH 用户名|string||
|host|SSH HOST|[stirng]||
|ssh_options|不带命令行标记的SSH选项,参阅 `man ssh` |Stirng / [String]||
|ref|GIT 远程分支 remote/branch|String||
|repo|GIT 远程仓库|String||
|path|服务器路径|||
|pre-setup|安装前的命令，或者本地脚本路径|String||
|post-setup|安装后的命令，或者服务器脚本路径|String||
|pre-deploy-local|部署前的操作|String||
|post-deploy|部署后的操作|String||