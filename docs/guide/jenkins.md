# JENKINS 


## [安装jenkins]()

```sh
yum install git -y
```

## [安装JENKINS](https://www.jenkins.io/doc/book/installing/linux/#red-hat-centos)
```sh
# Jenkins 依赖于 java 所以需要安装 JDK
sudo yum install java-11-openjdk

# 下载 Jenkins 资源
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
# 获取并导入信任 的包制作者的秘钥
sudo rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
# 升级 yum 源中的所有包
sudo yum upgrade

# 安装 Jenkins
sudo yum install jenkins

```
## 获取并输入admin账户密码

```sh
cat /var/lib/jenkins/secrets/initialAdminPassword
```

## `systemctl` 管理jenkins

```sh
# 启动 Jenkins 服务
systemctl start jenkins
# 重启 Jenkins 服务
systemctl restart jenkins
# 停止 Jenkins 服务
systemctl stop jenkins
# 查看 Jenkins 服务状态
systemctl status jenkins
```

##查看端口号是否开放，命令：
```sh
netstat -natp

```



## 参考
- [安装卸载](https://blog.csdn.net/yiguang_820/article/details/118068951)
- [配置](https://blog.csdn.net/yiguang_820/article/details/118074891?spm=1001.2014.3001.5502)