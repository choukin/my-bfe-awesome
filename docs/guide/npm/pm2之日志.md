# 应用日志
使用PM2启动应用，你可以轻松查阅和管理日志

日志文件夹的默认路径是 `$HOME/.pm2/logs`

## 查看日志

可以通过命令`pm2 logs` 查看应用日志
```sh
✗ pm2 logs -h

  Usage: logs [options] [id|name|namespace]

  stream logs file. Default stream all logs

  Options:

    --json                json log output
    --format              formated log output
    --raw                 raw output
    --err                 only shows error output
    --out                 only shows standard output
    --lines <n>           output the last N lines, instead of the last 15 by default
    --timestamp [format]  add timestamps (default format YYYY-MM-DD-HH:mm:ss)
    --nostream            print logs without lauching the log stream
    --highlight [value]   highlights the given value
    -h, --help            output usage information
```    
常用的命令
```sh
# 实时显示所有应用程序日志
pm2 logs

# 只展示`api`应用日志
pm2 logs api

# 用json格式展示新日志
pm2 logs --json

# 展示1000行 api 应用日志
pm2 logs big-api --lines 1000

```
也可以在命令行工具看板中查看日志
```sh
pm2 monit
```

## 日志切分
[`pm2-logrotate`](https://github.com/keymetrics/pm2-logrotate) 模块可以设置日志文件的大小，自动删除记录日志。



安装：
```sh
pm2 install pm2-logrotate

 pm2 show pm2-logrotate
```
|字段|类型|默认值|描述|
|-|-|-|-|
|max_size||10M|文件切分最大值|
|retain||30||
|compress||false|-|
|dateFormat||YY-MM-DD_HH-mm-ss|-|
|rotateModule||true|-|
|workerInterval||30|-|
|rotateInterval||0 0 * * * 每天午夜|-|
|TZ||系统时间|-|

##### rotateInterval解释
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```
如何设置？
`pm2 set pm2-logrotate:<param> <value>`

例如：
- `pm2 set pm2-logrotate:max_size 1K` (1KB)
- `pm2 set pm2-logrotate:compress true` (compress logs when rotated)
- `pm2 set pm2-logrotate:rotateInterval '*/1 * * * *'` (force rotate every minute)




## 清空日志
可以通过PM2清空当前日志
```sh
# 清空所有日志
pm2 flush

#清空自定名称或id的日志
pm2 flush <appname|id> 
```

## 日志可选项
启动应用时可以通过指定选项来查看日志

### CLI
当执行`pm2 start app.js [OPTIONS]` 时可以设置下面的选项：
```sh
-l --log [path]    # 指定日志路径
-o --output [path] # 指定正常日志文件
-e --error [path]  # 指定错误日志文件
--time            # 设置日志前缀为标准的时间戳
--log-date-format <format> # 自定义日志前缀事件戳
--merge-logs               # 当用多个进程运行同一个项目时，不通过id拆分日志文件
```

#### 使用标准时间戳
可以使用`--time`轻松设置日志前缀
```sh
pm2 start app.js --time

pm2 restart app --time
```

### 配置文件

在配置文件中配置日志选项

|字段|类型|例子|描述|
|:-:|:-:|:-:|:-:|
|error_file|(string)||错误日志路径，默认 $HOME/.pm2/logs/XXXerr.log|
|out_file|(string)||操作日志路径，默认 $HOME/.pm2/logs/XXXout.log|
|pid_file|(string)||进程号文件路径，默认$HOME/.pm2/pid/app-pm_id.pid|
|merge_logs|boolean|true|true时避免使用进程id拆分日志|
|log_date_format|(string)|"YYY-MM-DD HH:mm Z"|格式化日期|

#### 禁用日志文件后缀

只适用于集群模式，如果想要所有的实例日志都记录到一个文件中，可以设置`--merge-logs` 或者 `merge_logs: true`

#### 禁用日志
想要禁止在磁盘上写入日志，可以设置`out_file`和`error_file` 为`/dev/null`

```js
module.exports = {
  apps : [{
    name: 'Business News Watcher',
    script: 'app.js',
    instances: 1,
    out_file: "/dev/null",
    error_file: "/dev/null"
    cron_restart: '0 0 * * *'
    [...]
  }]
}
```
可以设置为`/dev/null` 或者 `NULL` 与平台无关

#### 设置本机的日志切分
```sh
sudo pm2 logrotate -u user

```

上面的命令会输出一个基础的日志切分配置到`/etc/logrotate.d/pm2-user`:
```sh
/home/user/.pm2/pm2.log/ /home/user/.pm2/logs/*.log{
    rotate 12
    weekly
    missingok
    notifempty
    compress
    delaycompress
    create 0640 user user

}
```




