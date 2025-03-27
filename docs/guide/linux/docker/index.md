# docker 命令积累

## 列出所有容器

  ```sh
  docker ps -a #来列出所有容器 包括未运行的
  ```

## 进入 docker  交互模式

```sh
docker exec -it ca368c588b42 bash
```

## 手动启动docker

```sh

cd /root/pachong

docker-compose up -d
```
