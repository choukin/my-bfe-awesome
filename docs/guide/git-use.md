# git 常用命令

## 一、创建本地 ssh publickey 配置到远端仓库
> Host 设置在使用 git@时后面的名字。 例： $ git clone git@other.com:repname/item.git
>
> HostName 设置域名地址或ip地址。
>
> IdentityFile 输入id_rsa的目录地址。
>
> PreferrenAuthentications 配置登录时使用什么仅限。可设为 publickey password publickey keyboard-interactive
>
>User 设置用户名。需要与远程的用户名一致
>
> 也可以是ip地址。
>
> ssh-keygen -t rsa -C "choukin@dingtalk.com" -f ~/.ssh/quxian_rsa
>
> ssh-add -K ~/.ssh/github_id_rsa
>
> 在仓库里添加 publickey
>
> ssh -T git@github.com [-p 22/其他在用端口]
#
1. 生成key
```sh
 ssh-keygen -t rsa -C "choukin@dingtalk.com" -f ~/.ssh/git_rsa
 ```
2. 需要时使用 手动添加 rea
```sh 
ssh-add  ~/.ssh/github_id_rsa
```
3. 在仓库里添加 publickey
4. 测试是否配置成功
```sh
ssh -T git@github.com
```

## 二、一台电脑配置多个个远端仓库的ssh
1、./ssh 文件夹下面创建config文件
```sh
# config
#Host 设置在使用 git@时后面的名字。 例： $ git clone git@other.com:repname/item.git 也可以是ip地址。
#HostName 设置域名地址或ip地址。
#IdentityFile 输入id_rsa的目录地址。
#PreferrenAuthentications 配置登录时使用什么仅限。可设为 publickey password publickey keyboard-interactive
#User 设置用户名。需要与远程的用户名一致

#

Host github
    User choukin
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10

Host gitlab.quxian360
    User choukin
    HostName gitlab.quxian360.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/quxian_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10


Host code.qschou.com
    User zhaoxin
    HostName code.qschou.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10

Host gitlab.molin.work
    User root
    HostName gitlab.molin.work
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/reader_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host gitee.com
    User dipper
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitee_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  
```

## 三、初始化本地仓库添加remote远端仓库
```sh
git init
# 查看remote
git remote -v
# 添加remote 可以添加多个
git remote add <name> <url>
# 删除remote 
git remote remove <name>
```

### git 配置
  - git config --system --list  系统配置
  - git config --global -l/--list 查看用户配置
  - git config [--global] user.name  [用户名]
  - git config [--global] user.email [用户邮箱]




### 查看分支
- 查看远程分支
```js
  git branch -r
```

- 查看 所有分支

```js
 git branch -a/--all
```

- 查看本地分支
```js
git branch -l
```

### 拉取远程分支并创建本地分支

一. 在本地新建分支x，并自动切换到该本地分支xgit 
```sh
checkout -b 本地分支名x origin/远程分支名x

git checkout -b dev(本地分支名称) origin/dev(远程分支名称)

```

二. 在本地新建分支x，但是不会自动切换到该本地分支x，需要手动 checkout 切换分支
```sh
git fetch origin 远程分支名x:本地分支名x
```

三. 操作后提示错误 `fatal: refusing to merge unrelated histories` 在命令后吗添加 `--allow-unrelated-histories`
```sh
git pull --allow-unrelated-histories
```

四. 前端项目开发 git commit 时校验代码

 [yorkie](https://github.com/yyx990803/yorkie) + [lint-staged](https://github.com/okonet/lint-staged)
1. 安装 `npm install --save-dev lint-staged yorkie`
2. `package.json` 里添加配置
```js
   "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.ts": [
      "npm run lint"
    ],
    "*.vue": [
      "npm run lint"
    ]
  }
```
 3. 修改项目文件执行 `git add` 然后执行 `git commit` 可以看到会先执行lint 然后提交代码
 4. 创建 tag  
   ```sh
     git tag -a v1.0.0 -m '起步'
     # 上传 tag
     git push origin v1.0.0
   ```

5. 删除分支

  - 删除本地分
   ```sh
      git branch -D branchName
   ``` 
  - 删除远程分支
   ```sh
      git push origin --delete branchname
   ```    

6. 命令git update-index --assume-unchanged，忽略不想提交的文件（忽略跟踪）
  - 忽略
  ```sh
  git update-index --assume-unchanged src/demo.js
  ```
  - 取消忽略
  ```sh
  git update-index --no-assume-unchanged  src/demo.js
  ```  

7. 取消commit

```sh
git reset --soft HEAD^
```

8. 修改已经提交的 commit 信息
```sh
## 输入命令进入vim界面
git commit --amend

# 输入 i 进入编辑模式 修改信息

# 按 ESC 退出编辑模式 
:wq 保存退出



```
    
8. 同步远程已经删除的分支

```sh
# 1.查看本地和远端分支追踪情况
git remote show origin
# 2. 同步删除已经不存在的远端分支
git remote prune origin
# 3.查看所有分支
git branch -a

```

9. 提高clone 速度
```sh
# clone小的话，用--depth=1只获取最新的commit即可
git clone github@choukin.com --depth=1
```

https://cloud.tencent.com/developer/article/1665810


10. 把仓库代码提交到一个新仓库里
```sh
git remote add dipper git@gitee.com:dipper/my-qianshi-qiankui-kid-medical.git
➜  lepu-medical-system git:(dev_1.1.0_zx) ✗ git push -u dipper --all

```

11. 从commit中拉取分支
  - 1. git log ：找出当初打出版本1.0的最后一次提交对应的commitid
  - 2. git checkout commitid(此处替换为步骤一查到的commitid) -b branchName(本地新拉出分支的名称)

```sh
git log
git checkout <commitid> -b branchName
```







