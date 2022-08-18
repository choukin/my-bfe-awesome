# 暴露RPC方法:进程的动作

暴露RPC (Remote Procedure Call ，即远程过程调用方法)可以和运行中的进程实时交互。
适用于下列情况：
- 修改行为，比如：切换日志模式
- 检索数据结构
- 触发动作

## 快速开始

首先安装 [`tx2`](https://github.com/pm2/tx2) 模块：
```sh
npm install tx2
```

然后创建一个`rpc.js`

```js
const tx2 = require('tx2')
tx2.action('toto', (cb) => {
  return cb({yessai:true})
})
setInterVal(function(){
    // 保持应用一直执行
},100)
```

然后通过PM2 启动：
```sh
pm2 start rpc.js
```
现在可以通过命令，触发进程操作
```sh
pm2 trigger <application-name> <action-name>
# pm2 trigger rpc toto
```
上例中
```sh
pm2 trigger rpc toto  
1 processes have received command toto
[rpc:2:default]={"yessai":true}
···

## 查看可用的RPC
```sh
pm2 show <application-name>
# pm2 show rpc
```

## 传参数
在回掉函数中添加`param` 可以给远端方法传参数
```sh
var tx2 = require('tx2')

tx2.action('vorld', function(param, reply){
    console.log(param)
    reply({success:param})
})
```

重启应用，通过PM2 调用这个进程方法

```pm2 
pm2 trigger <application-name> <action-name> [parameter]
# pm2 trigger rpc world somedata
```



