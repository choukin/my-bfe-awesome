# 部署应用
PM2 具有一个简单但是功能强大的部署功能。可以在生产环境中部署和更新应用。当你想要一次性在服务器上部署一个或多个应用时非常有用。

```sh
> pm2 deploy <configuration_file> <evironment> <command>
  Commands:
    setup           执行远程安装命令
    update          更新部署最新版本
    revert [n]      回滚到最近第n次/上一次
    curr[ent]       输出当前版本的提交信息
    prev[ious]      输出上一八佰伴的提交信息
    exec|run <cmd>  执行指定的命令
    list            列出上一版本的的部署提交
    ref】          部署配置的分支或者最新的tag
```

## 部署文件配置
在应用配置文件中添加`deplay` 属性来配置部署功能：

```js
// ecosystem.config.js
module.exports = {
    apps:[{
        script:'api.js'
    },{
        script:'worker.js'
    }],

    deploy:{
        production:{
            user:"root",
            host:[],
            ref:"origin/master",
            repo:"git@github.com:Username/repository.git",
            path:"/var/www/my-repository",
            "post-deploy" : "npm install",
        }
    }
}
```

注意：建议本地目录的应用配置文件夹也叫 `ecosystem.config` 或 `pm2.config.js` 这样就不用在每个命令后面指定配置文件名称。

## 配置安装到远程服务器

操作前请在服务器上确认：
- 服务器上已经安装了 pm2
- 服务器有权限拉取配置git仓库的权限

配置好后可以在本机通过命令在服务器端对应用进行配置：
```sh
pm2 deploy production setup
```

## 部署应用
服务器端配置好应用后就可以进行部署了：

```sh
pm2 deploy production
```

## 回滚到上一个版本
可以使用 `revert` 回滚到之前的版本
```sh
pm2 deploy production revert 1
```

## 新功能上线更新部署应用
使用 `update` 来更新应用

```sh
pm2 deploy production update
```

## 在每个服务器上执行命令
可以使用 `exec` 选项在服务器端执行一次性的命令
```sh
pm2 deploy production exec "pm2 reload all"
```

# 详情

## 部署的生命周期
使用PM2 进行部署时，可以设置安装和部署前后的命令：
```js
"pre-setup":"echo '安装进程开始前的命令或脚本路径'",
"post-setup":"echo '拉取代码后的命令或脚本路径'",
"pre-deploy":"pm2 startOrRestart ecosystem.json --env production ",
"post-deploy":"pm2 startOrRestart ecosystem.json --env production",
"pre-deploy-local":"echo '这是在本地电脑执行的命令'"
```

## 多个服务器部署
要同时部署到多个服务器上，只需要在`host`中配置host的数组
```js
"host" : ["212.83.163.1", "212.83.163.2", "212.83.163.3"],
```
### 指定 SSH keys
添加`key`属性来指定 public key 的路径，例如：

```js
production:{
     "key":"/path/to/some.pem"     // 验权公钥路径
     "user" : "node",              // 登录的用户名
      "host" : "212.83.163.1",      // host
      "ref"  : "origin/master",
      "repo" : "git@github.com:repo.git",
      "path" : "/var/www/production",
      "post-deploy" : "pm2 startOrRestart ecosystem.json --env production"
}
```

# 故障排除
## ssh 拉取代码异常
多数情况是因为`pm2`没有拉取仓库代码的权限。你需要在每一步验证密钥是否可用；

第一步：如果确定密钥正确，尝试在服务器上执行 `git clone your_repo.git`.如果成功，进入第二步，如果失败，请确认git账户和服务器的密钥是正确的。

第二步：使用`ssh-copy-id` 复制默认的身份key，默认名称是`id_ras` ,如果不是默认名称，使用下列命令：
```sh
ssh-copy-id -i path/to/my/key username@server.com
```
这个操作会把你的公钥复制到服务器的 `~/.ssh/authorized_keys` 文件中

第三步： 如果是下面的错误信息

```sh
--> Deploying to production environment
--> on host mysite.com
  ○ hook pre-setup
  ○ running setup
  ○ cloning git@github.com:user/repo.git
Cloning into '/var/www/app/source'...
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and that the repository exists.

**Failed to clone**

Deploy failed

```
你需要新建一个ssh配置文件，来确保每个仓库使用对应的ssh密钥：
```sh
# ~/.ssh/config
Host alias
    HostName myserver.com
    User username
    IdentityFile ~/.ssh/mykey
# Usage: `ssh alias`
# Alternative: `ssh -i ~/.ssh/mykey username@myserver.com`

Host deployment
    HostName github.com
    User username
    IdentityFile ~/.ssh/github_rsa
# Usage:
# git@deployment:username/anyrepo.git
# This is for cloning any repo that uses that IdentityFile. This is a good way to make sure that your remote cloning commands use the appropriate key
```



