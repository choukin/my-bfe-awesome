shell 积累
1. 删除文件夹中所有文件和文件夹排除manifest.json
rm -rf `ls |egrep -v manifest.json`

2. 拷贝一个文件夹里的内容到另一个文件夹里，排除一些特殊文件
```bash
 rsync -av --exclude unpackage --exclude=*.json --exclude=*.md --exclude=.* --exclude=*.sh ../h5/ /work/www 
```
  `拷贝 h5 文件夹下面的内容到 /work/www 里 排除 unpackage *.json *.sh *.md`


  # 复制本地文件夹到线上
  scp -r /Users/qscbfe/Library/Containers/com.tencent.xinWeChat/Data/Library/Application\ Support/com.tencent.xinWeChat/2.0b4.0.9/a29c62afb5be733b6a32879959f4f0c3/Message/MessageTemp/526d3b0272bf2d562d4ff8f1feccff70/File/translate-ui/translate-ui root@49.233.26.82:/home/apps/newtranx/ui/translate-ui

# 在linux下一般用scp这个命令来通过ssh传输文件。

- 1、从服务器上下载文件

 

scp username@servername:/path/filename /var/www/local_dir（本地目录）

 例如scp root@192.168.0.101:/var/www/test.txt  #把192.168.0.101上的/var/www/test.txt 的文件下载到/var/www/local_dir（本地目录）


- 2、上传本地文件到服务器
scp /path/filename username@servername:/path   

例如scp /var/www/test.php root@192.168.0.101:/var/www/  #把本机/var/www/目录下的test.php文件上传到192.168.0.101这台服务器上的/var/www/目录中

 

- 3、从服务器下载整个目录
scp -r username@servername:/var/www/remote_dir/（远程目录） /var/www/local_dir（本地目录）

例如:scp -r root@192.168.0.101:/var/www/test  /var/www/  

- 4、上传目录到服务器
scp  -r local_dir username@servername:remote_dir
例如：scp -r test  root@192.168.0.101:/var/www/   #把当前目录下的test目录上传到服务器的/var/www/ 目录

 

注：目标服务器要开启写入权限。

# sudo sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/CentOS-*
# sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*