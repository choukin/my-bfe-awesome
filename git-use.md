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

```

二. 在本地新建分支x，但是不会自动切换到该本地分支x，需要手动 checkout 切换分支
```sh
git fetch origin 远程分支名x:本地分支名x
```

三. 操作后提示错误 `fatal: refusing to merge unrelated histories` 在命令后吗添加 `--allow-unrelated-histories`
```sh
git pull --allow-unrelated-histories
```
