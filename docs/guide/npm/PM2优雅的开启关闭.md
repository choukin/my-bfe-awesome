## 优雅的关闭
为了优雅的 restart/reload/stop 进程，请在监听到`SIGINT`标志后退出应用前，请清除所有的东西（包括数据库连接，进程事件等...）

```sh
process.on('SIGINT', function(){
    db.stop(function(err){
        process.exit(err, 1:0)
    })
})
```
现在 执行`pm2 reload` 会优雅的重启应用。

### 配置杀掉进程的超时事件
下面的命令，设置超时时间为 3000 ms:
```sh
pm2 start app.js --kill-timeout 3000
```

通过配置文件设置 `kill-timeout` 属性
```js
module.exports = {
    apps:[{
        name:'app',
        script:'./app.js',
        kill_timeout:3000
    }]
}
```

## 优雅的开始
有时候应用需要等待与 DBS/caches/workers/whatever的连接，PM2需要等待这些连接成功后才把应用状态看作`online`.为此，需要在命令行设置`--wait-ready`或者在配置文件里添加`wait_ready:true`. 然后在应用程序中添加`process.send('ready')` ,PM2 会监听`ready`事件，并在接收到事件后把应用状态修改为`online`.
```js
var http = require('http')

var app = http.createServer(function(req, res){
    res.writeHead(200)
    res.end('hey')
})

var listener = app.listen(0, function(){
    console.log('Listening on port'+ listener.address().port)
    // 给PM2发送ready 标识
    process.send('ready')
})
```

然后可以通过下面的命令启动应用：
```sh
pm2 start app.js --wait-ready
```

### 配置 ready 超时时间

`ready` 标识的默认超时时间是 3000ms


通过下面的命令可以把超时时间延长到 10000ms
```sh
pm2 start app.js --wait-ready --listen-timeout 10000
```

通过配置文件设置`listen_timeout` 和 `wait_ready` 属性

```js
module.exports = {
    apps:[{
        name:'app',
        script:'./app.js',
        wait_ready:true,
        listen_timeout:10000
    }]
}
```

### 优雅的使用 `http.Server.listen` 
如果有默认系统和`http.Server.listen`方法挂钩，当http服务接收到一个连接，PM2 会自动把应用看作是ready。可以设置在使用`--wait-ready`启动应用时在配置文件中设置`listen_timeout` ，或者在命令行使用 `--listen-timeout=XXX`.


## 关于信号流
当通过PM2 停止或重启应用进程时，发送到进程的系统标识是有既定顺序的。

首先一个SIGINT信号发送到你的进程，你可以捕捉到进程将要停止的信号。如果应用在1.6秒前还没有退出，它会收到一个SKIGKILL信号以强制退出。

可以通过设置环境变量PM2_KILL_SIGNAL自定义信号名称入:SIGTERM


# Windows 系统优雅的停止
如果信号不可用，你的进程会终止。这种情况下可以在命令行使用`--shutdown-with-message` 或 在配置文件中设置`shutdown_with_message`，然后在应用中监听`shutdown`事件
```sh
pm2 start app.js --shutdown-with-message
```
或
```js
module.exports = {
    apps:[{
        name:'app',
        script:'./app.js',
        shutdown_with_message:true,
    }]
}
```

在代码中监听 `shutdown` 事件
```js
process.on('message', function(msg){
    if(msg === 'shutdown'){
        console.log('关闭所有连接')
        setTimeout(function(){
            console.log('连接关闭')
            process.exit(0)
        }, 1500)
    }
})
```



