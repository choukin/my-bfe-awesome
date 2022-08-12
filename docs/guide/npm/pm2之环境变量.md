# PM2 环境变量

## 开启一个新进程时
当开启新进程时PM2会顺序在环境中注入：
- 首先PM2 CLI 会使用自己的环境，因此当前的环境变量会注入到脚本中
- PM2会把配置文件中的环境变量注入到当前脚本中

```js
// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:"myapp",
            script:"./app.js",
            watch:true,
            env:{
                "NODE_ENV":"development"
            }
       }
    ]
}
```
上面的例子中PM2 会重载当前的环境变量添加一个`NODE_ENV=delepment`,你也可以像下面这样定义不同的环境变量：
```js
// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:"myapp",
            script:"./app.js",
            watch:true,
            env:{
                "NODE_ENV":"development"
            },
            env_production:{
                "PORT":80,
                "NODE_ENV":"production",
            }
       }
    ]
}
```

`env`中是默认的环境变量，也可以使用通过命令`pm2 start ecosystem.config.js --env production` 来使用 `env_prodution`中的环境变量

可以定义任意多个环境变量，只要在`--env` 加上`env_`后面的环境名称.

## 特殊的环境变量
### NODE_APP_INSTANCE(PM2 最低版本 2.5) 获取进程编号
环境变量 `NODE_APP_INSTACE` 可以用来区分不同的进程，例如想在一个进程中运行定时任务，只需要对比`process.env.NODE_APP_INSTNCE === '0'`. 两个进程不可能有相同的编号， 在运行`pm2 restart` 和 `pm2 scal` 后依然成立；

如果使用 `NODE_APP_INSTANCE` 有冲突，可以使用 `instance_var` 来重命名：


```js
// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:"myapp",
            script:"./app.js",
            watch:true,
            instances:2
            instance_var:"INSTANCE_ID"
            env:{
                "NODE_ENV":"development"
            },
            env_production:{
                "PORT":80,
                "NODE_ENV":"production",
            }
       }
    ]
}
```

这样就可以在程序中使用 `process.env.INSTANCE_ID` 来代替`NODE_APP_INSTANCE`

### increment_var 让环境变量递增 (PM2最低版本 2.5)

PM2一个选项可以让 PM2 为某一个环境变量变成递增值：

```js
// ecosystem.config.js
module.exports = {
    apps:[
        {
            name:"myapp",
            script:"./app.js",
            watch:true,
            instances:2
            instance_var:"INSTANCE_ID"
            env:{
                "NODE_ENV":"development"
            },
            env_production:{
                "PORT":80,
                "NODE_ENV":"production",
            }
       }
    ]
}
```

在这个例子中，如果执行 `pm2 start ecosystem.config.js`:
- PM2 会识别出 `PORT` 变量在每个实例中的值是递增的
- PM2 读取到默认的 `PORT` 是 80
- 第一个实例中 `process.env.PORT=80` 而第二个实例中 `process.env.PORT=81`

注意： 当使用 `pm2 scale myapp 4`进行扩容时也会递增，两个新的实例的`PORT`变量值分别是 `82` `83`

