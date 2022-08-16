## 安装
```sh
brew install redis
```

## 配置文件位置

```sh
To restart redis after an upgrade:
  brew services restart redis
Or, if you don't want/need a background service you can just run:
  
```

## 启动

```sh
# 启动
 brew services start redis
# 非后台启动
/opt/homebrew/opt/redis/bin/redis-server /opt/homebrew/etc/redis.conf
```

## 停止
```sh
brew services stop redis
```

