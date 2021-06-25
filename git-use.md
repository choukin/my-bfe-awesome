## git 常用命令

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

  - 删除本地分支
   ```sh
      git branch -D branchName
   ``` 
  - 删除远程分支
   ```sh
      git push origin  -D branchName
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
    








