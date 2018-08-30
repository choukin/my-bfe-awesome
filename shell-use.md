shell 积累
1. 删除文件夹中所有文件和文件夹排除manifest.json
rm -rf `ls |egrep -v manifest.json`

2. 拷贝一个文件夹里的内容到另一个文件夹里，排除一些特殊文件
```bash
 rsync -av --exclude unpackage --exclude=*.json --exclude=*.md --exclude=.* --exclude=*.sh ../h5/ /work/www 
```
  `拷贝 h5 文件夹下面的内容到 /work/www 里 排除 unpackage *.json *.sh *.md`