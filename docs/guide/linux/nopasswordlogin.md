# ssh 免密登陆了解下

## 痛点
服务器密码设置的比较繁琐记不住！每次都要复制又嫌太麻烦如何解决。
```sh
➜  ~ ssh root@114.116.100.80
root@114.116.100.80's password:
```

`ssh` 免密登陆来帮我


## 环境

- 华为云 ECS 服务器
- 本地 macOS 

用过 `git` 的同学对 `ssh` 都比较熟悉，`ssh` 免密登陆简单说就是：把本地生成的公钥放到服务器上，让服务器给当前操作的机器发个通行证可以自由出入，省略输入密码操作。

> Talking is cheap show me code!



1、 本地生产ssh publickey
```sh
ssh-keygen -f [.ssh/保存的文件]
```

  - 使用默认方式生成密钥 
  - `-f` 指定生成文件的路径
```
ssh-keygen -f ～/.ssh/huaweiyun
```

2、把生成的公钥保存到云服务器上
   - 第一种方法：手动复制到服务器 `~/.ssh/authorized_keys` 中
   - 第二种方法： [`ssh-copy-id`](http://lnmp.ailinux.net/ssh-copy-id)
    ```sh
    ssh-copy-id [-i [identity_file]] [user]@[ip]
    ```

3. 如果本机配置过多个ssh密钥配置过 `~/.ssh/config` 需要把第一步生成的公钥配置到config里

```sh
# ~/.ssh/config
Host github
    User choukin
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host gitee
    User choukin
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 300
    ServerAliveCountMax 10  

Host hw
    User root
    HostName 114.116.100.80
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/huaweiyun
    ServerAliveInterval 300
    ServerAliveCountMax 10       
```    

- 4.测试可以通过设置的host别名`hw` 在终端登陆云服务器

```sh
ssh hw
Last login: Tue Aug  2 15:48:28 2022 from 114.247.224.155

        Welcome to Huawei Cloud Service

[root@hecs-409959 ~]# 
```

恭喜你登陆成功！🎉，节省 5～6秒的复制时间，可以用来做更重要的事情！

注意⚠️：配置免密的电脑一定要是安全可靠的电脑。
 
