# mac 使用 软件


- [Best APP](https://github.com/hzlzh/Best-App)

- [dataGrip 链接数据库]()
- [dbeaver开源的数据库图形界面](https://dbeaver.io/download/)

## 使用 homebrew 安装 tree 命令行：
## 安装
```shell
$ brew install tree
```

## 忽略 node_modules 文件夹
```shell
$ tree -I node_modules
```

## 常用命令
tree -d 只显示文件夹； 
* tree -L n 显示项目的层级。n表示层级数。比如想要显示项目三层结构，可以用tree -l 3； 
* tree -I pattern 用于过滤不想要显示的文件或者文件夹。比如你想要过滤项目中的node_modules文件夹，可以使用tree -I "node_modules"； 
* tree > tree.md 将项目结构输出到tree.md这个文件。

### 举例如果我们要显示某个项目下3层的所有文件结构
```
 tree -L 3 -I "node_modules"
```

### 刷新DNS
```sh
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder; say DNS cache flushed
```

## 切图吸色工具 
[snipaste](https://www.snipaste.com/)

## 一款功能强大的屏幕绘图和屏幕注释软件
 [vill-q](http://www.pixelegg.me/vill-q)

## [Alfred](https://www.alfredapp.com/)
> Alfred 是一款屡获殊荣的 macOS 应用程序，它通过热键、关键字、文本扩展等提高您的效率。搜索您的 Mac 和网络，并通过自定义操作来控制您的 Mac，从而提高工作效率。

## 常见问题

1、 开启允许任何来源安装软件
```sh
sudo spctl --master-disable
```

2、 最新版本max 解决软件`已损坏无法打开解决办法`
```sh
sudo xattr -d com.apple.quarantine /Applications/xxxx.app
```
::: tip
xxxx.app 换成对应软件的名称
:::


3、Mac系统默认使用bash作为终端，可以使用命令修改默认使用zsh：
chsh -s /bin/zsh
如果想修改回默认 bash，同样使用chsh命令即可：

chsh -s /bin/bash