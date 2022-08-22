# PM2 API

PM2 可以用编程方式使用，允许直接使用代码中管理进程。

## 快速开始
注意：要释放应用与PM2的连接，并使应用自动退出，请确保用`PM2.disconnect()`断开与PM2的连接

首先，安装依赖
```sh
npm install pm2 --save
```

然后新建`app.js` 和 pm2-control.js 内容如下
```js
// pm2-control.js
pm2.connect(function(err)=>{
    if(err){
        console.error(err)
        process.exit(2)
    }

    pm2.start({
        script:'app.js',
        name:'app'
    },
        function(err,apps){
            if(err){
                console.error(err)
                return pm2.disconnect()
            }
            pm2.list((err, list)=>{
                consol.log(err, list)

                pm2.restart('app', (err, proc)=>{
                    pm2.disconnect()
                })
            })
        }
    )
})
```

- 连接到pm2
- 启动并设置`app.js` 名称为 `app`
- 列出所有通过pm2管理的应用
- 重启名字是`app`的应用
- 断开与`PM2` 的连接

## API 方法

### pm2.connect([no_daemon_model],fn)
连接PM2或者声明一个PM2实例

|参数|类型|默认值|描述|
|-|-|-|-|
|[no_daemon_mode]|boolean|false|如果true，非后台运行模式|
|fn|function||回调函数|

- noDaemonMode: 如果第一个参数设置为true，PM2不会守护进程，在相关脚本退出时终止。默认情况下，pm2 在脚本退出后，保持活动状态，如果pm2 已经在运行，那么脚本将连接到现有的守护进程，一旦进程退出，脚本将失效。

### pm2.disconnect()

断开与pm2的连接

### pm2.start(process, fn)

开启一个进程

|参数|类型|描述|
|-|-|-|
|process|string/object|脚本路径或配置对象|
|fn|function|回调函数|

### pm2.stop(process, fn)

停止进程

|参数|类型|描述|
|-|-|-|
|process|string/number|目标进程的id或名称|
|fn|function|回调函数|

### pm2.restart(process,[opitons], fn)
重启进程

|参数|类型|描述|
|-|-|-|
|process|string/number|目标进程的id/名称|
|[options]|object|配置项（也可以添加updateEnv:true,强制更新）|
|fn|function|回调函数|

### pm2.reload(process, fn)

重新加载进程

|参数|类型|描述|
|-|-|-|
|process|string/number|目标进程的id/名称|
|fn|function|回调函数|


### pm2.delete(process, fn)

删除进程

|参数|类型|描述|
|-|-|-|
|process|string/number|目标进程的id/名称|
|fn|function|回调函数|

### pm2.killDaemon(fn)

杀掉pm2进程守护，（和 pm2 kill一样），注意执行后会杀掉所有进程，杀掉守护进程后也需要执行`disconnect`


### pm2.describe(process,fn)

获取目标进程的所有元数据

|参数|类型|描述|
|-|-|-|
|process|string/number|目标进程的id/名称|
|fn|function|回调函数|


### pm2.list(fn)

列出所有PM2管理的进程


## 进阶函数

### pm2.sendDataToProcessId(packet)

向目标进程发送数据

|参数|类型|描述|
|-|-|-|
|packet.id|number|目标进程的id|
|packet.type|string|必须是process:msg|
|packet.topic|boolean|必须是true|
|packet.data|object|发送给目标进程的数据|

目标进程接收数据的方式：
```js
process.on('messsage', function(packet){

})
```

### pm2.launchBus(fn)

可以接收PM2管理的其他进程的消息

```js
const pm2 = require('pm2')

pm2.launchBus(function(err, pm2_bus){
    pm2_bus.on('process:msg', function(packet){
        console.log(packet)
    })
})
```

在PM2管理的另一个进程发送数据：
```js
process.send({
    type:'process:msg',
    data:{
        success:true
    }
})
```

### pm2.sendSignalToProcessName(signal,process,fn)

发送自定义的系统标志到进程名

|参数|类型|描述|
|-|-|-|
|signal|string|系统标志名|
|process|string|目标进程名称|
|fn|function|回调函数(err, process)|

### pm2.sendSignalToProcessId(signal, process, fn)
发送自定义的系统标志到进程ID


|参数|类型|描述|
|-|-|-|
|signal|string|系统标志名|
|process|number|目标进程ID|
|fn|function|回调函数(err, process)|


## 进程数据结构
当调用上面的方法，他们会返回一个变异的进程数组，包含下列信息：

- processDescription - 一个关于进程的对象数组，每个对象包含的属性有：
  - name - 最开始启动名称中设置的名称
  - pid - 进程id
  - pm_id - 守护进程的PID
  - monit - 对象包含：
     - memory - 进程占用的字节数
     - cpu - 此刻进程运行占用的CUP比例
  - pm2_env - 进程环境中的路径变量列表，这些变量包括：
     - pm_cwd - 进程的工作文件夹
     - pm_out_log_path - 标准输出日志路径
     - pm_err_log_path - 标准错误日志路径
     - exec_interpreter - 执行的解释程序
     - pm_uptime - 进程运行时间
     - unstable_restarts - 进程经历的不稳定重启次数
     - restart_time - 
     - status -  `online` `stopping`   `stopped` `launching` `errored` `on-lunch-status`
     - instances - 运行的示例数量
     - pm_exec_path   - 当前进程运行脚本的路径



## 示例

### 给进程发送信息

pm2-call.js:

```js

const pm2 = require('pm2')


pm2.connect(function(){
    // 进程id
    id:1,
    // 固定
    type:'process:msg',
    // 发送的数据
    data:{
        some:'data',
    },
    topic:true,
}, function(err, res){

})

pm2.launchBus(function(err,pm2_bus)){
    pm2_bus.on('process:msg', function(packet){}
      console.log(packet)
    )
}
```

pm2-app.js:

```js
 process.on('message', function(packet){
    process.send({
        type:'process:msg',
        data:{
            success:true,
        }
    })
 })
```









