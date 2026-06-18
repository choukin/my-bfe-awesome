# java



## JDK 配置多版本切换

macOS 默认使用 zsh，我们将通过修改 ~/.zshrc 文件来实现别名切换。

1. 查找 JDK 路径
在终端执行以下命令确认系统已识别两个版本：

```bash
/usr/libexec/java_home -V
```

该命令会列出所有已安装 JDK 的精确路径[25],[32]。

2. 编辑配置文件

运行命令：

```bash
nano ~/.zshrc
```

3. 添加配置代码

将以下内容复制并粘贴到文件末尾（系统会自动根据版本号动态定位路径）：

```bash
# JDK 多版本配置
export JAVA_8_HOME=$(/usr/libexec/java_home -v 1.8)
export JAVA_17_HOME=$(/usr/libexec/java_home -v 17)

# 默认使用 JDK 17
export JAVA_HOME=$JAVA_17_HOME

# 别名切换命令
alias jdk8="export JAVA_HOME=$JAVA_8_HOME && java -version"
alias jdk17="export JAVA_HOME=$JAVA_17_HOME && java -version"
```

4. 使配置生效
按下 Ctrl+O 确认保存，Ctrl+X 退出，然后运行：

```bash
source ~/.zshrc
```

第三步：验证与切换
现在你可以在终端中自由切换版本了：

查看当前版本：java -version
切换到 JDK 8：在终端输入 jdk8[7],[14]
切换到 JDK 17：在终端输入 jdk17

## 安装 maven

无论使用哪种安装方式，为了在国内获得更快的下载速度，必须修改 Maven 的 settings.xml 文件。该文件通常位于 Maven 安装目录下的 conf/settings.xml（Homebrew 安装的通常在 /usr/local/Cellar/maven/版本号/libexec/conf/settings.xml）。

## vscode

插件
- Extension Pack for Java‌
