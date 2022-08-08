#pm2
[pm2](https://pm2.keymetrics.io/docs/usage/log-management/)
## 使用 pm2 部署代码 踩到一个坑，一下午都没出来
大家都知道 pm2是常用的node进程管理工具，它可以提供node.js应用管理，如自动重载、性能监控、负载均衡等;
它还有一个功能是就是在本地部署代码到服务器，下面是pm2的配置文件

```js
// ecosystem.config.js
module.exports = {
    "apps":[{
        "name":"nodeGame",
        "script":"src/servers/server.js",
        instances : "2",
        exec_mode : "cluster",
        watch:true,
        "env":{
        },
        "env_production":{
            "NODE_ENV":"production"
        }
    },{
        "name":"nodejob",
        "script":"/www/nodejob/auto-sign/cronindex.js",
        instances : "2",
        exec_mode : "cluster",
        watch:true,
        "env":{
        },
        "env_production":{
            "NODE_ENV":"production"
        }
    }],
    "deploy":{
        "production":{
            "user":"root",
            "host":["hw"],
            "ref":"origin/main",
            "repo":"git@github.com:choukin/nodegamedemo.git",
            "path":"/www/",
            "ssh_options":"StrictHostKeyChecking=no",
            "post-setup":"ls -la",
            "pre-deploy-local":"echo '本地要执行的命令'",
            "pre-deploy":"echo '开始拉取'",
            "post-deploy":"npm  install && npm run build && pm2 start nodeGame",
            "env":{
                "NODE_ENV":"production"
            }
        }
    }    
}    
```
### 说明
- apps 部分就是想通过pm2 守护的进程，这里先不多解释
- deploy 就是配置要部署到的服务器以及相关命令
    - `production` 自定义的部署名称
    - `user` 登陆的云服务器的用户
    - `host` 目标云服务器
    - `ref` 部署的分支
    - `repo` git 仓库地址
    - `path` 云服务器上的部署路径
    - `ssh_options` ssh 登陆配置项
    - `post-setup` 第一次安装配置后执行的动作
    - `pre-deploy` 部署前的动作
    - `post-deploy` 拉去代码成功后执行的动作这里是先 `npm install` 在 `npm run build` 打包 最后 `pm2 start nodeGame`

#### 第一次安装命令
 前提条件
 - 云服务器上安装了 pm2
 - 云服务器可以通过配置的仓库路径下载仓库代码
```sh
# 在本机 ecosystem.config.js 所在的文件夹路径下
 pm2 deploy production setup

```

#### 后续代码更新命令

```sh
# 在本机 ecosystem.config.js 所在的文件夹路径下
 pm2 deploy production update
```
一切按照官网介绍来的，可是在本地执行的时候总是部署失败，
## 问题
本地 `npm install` 后没有把所有依赖安装成功，后面连个命令都会失败  

1、 登陆到服务器上直接运行 `npm  install && npm run build && pm2 start nodeGame` 完全没问题😭
2、 去github issus 中有类似问题但是没有解决方案.
特此记录，有解决方案的小伙伴可以告诉我。

