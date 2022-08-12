# 持久化应用:生成启动脚本

PM2 可以生成启动脚本并对其进行配置，让引用进程在运行或机器意外重启时保持完整性。

## 生成启动脚本

只需要运行 `pm2 startup` 就可以自动生成并配置启动脚本：
```sh
 pm2 startup
[PM2] Init System found: launchd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin /Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 startup launchd -u lepu --hp /Users/lepu
```
然后`复制粘贴`展示出来的命令
```sh
 sudo env PATH=$PATH:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin /Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 startup launchd -u lepu --hp /Users/lepu
Password:
[PM2] Init System found: launchd
Platform launchd
Template
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
          <key>Label</key>
          <string>com.PM2</string>
          <key>UserName</key>
          <string>lepu</string>
    <key>KeepAlive</key>
    <true/>
          <key>ProgramArguments</key>
          <array>
                  <string>/bin/sh</string>
                  <string>-c</string>
                  <string>/Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/lib/node_modules/pm2/bin/pm2 resurrect</string>
          </array>
          <key>RunAtLoad</key>
          <true/>
          <key>OnDemand</key>
          <false/>
          <key>LaunchOnlyOnce</key>
          <true/>
          <key>EnvironmentVariables</key>
    <dict>
      <key>PATH</key>
      <string>/Users/lepu/.asdf/plugins/nodejs/shims:/Users/lepu/.asdf/installs/nodejs/14.20.0/.npm/bin:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin:/Users/lepu/.asdf/shims:/Users/lepu/.asdf/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin:/Users/lepu/.cargo/bin:/Users/lepu/.asdf/installs/nodejs/14.20.0/bin</string>
      <key>PM2_HOME</key>
      <string>/Users/lepu/.pm2</string>
    </dict>
          <key>StandardErrorPath</key>
          <string>/tmp/com.PM2.err</string>
          <key>StandardOutPath</key>
          <string>/tmp/com.PM2.out</string>
  </dict>
</plist>

Target path
/Users/lepu/Library/LaunchAgents/pm2.lepu.plist
Command list
[
  'mkdir -p /Users/lepu/Library/LaunchAgents',
  'launchctl load -w /Users/lepu/Library/LaunchAgents/pm2.lepu.plist'
]
[PM2] Writing init configuration in /Users/lepu/Library/LaunchAgents/pm2.lepu.plist
[PM2] Making script booting at startup...
[PM2] [-] Executing: mkdir -p /Users/lepu/Library/LaunchAgents...
[PM2] [v] Command successfully executed.
[PM2] [-] Executing: launchctl load -w /Users/lepu/Library/LaunchAgents/pm2.lepu.plist...
Warning: Expecting a LaunchDaemons path since the command was ran as root. Got LaunchAgents instead.
`launchctl bootstrap` is a recommended alternative.
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup launchd
```
现在PM2 会在开机时自动重启。
注意：可以通过设置`--service-name <name>` 来自定义服务名称。

##  保存系统重启时还原的应用程序列表

启动所有需要的应用后，把他们保存起来，方便在系统重启后重新恢复这些应用；
```sh
pm2 save
```

## 手动恢复进程
手动恢复使用 `pm2 save` 保存的进程
```sh
pm2 resurrect
```

## 禁用系统系统
用下面的命令来禁用或移除当前的启动配置：
```sh
pm2 unstartup
```

# 细节
## 更新Node.js后要更新启动脚本

更新本地的Node,js版本时一定要更新PM2的启动脚本，这样才能运行安装的Node.js二进制。

首先使用下面的脚本禁用/移除当前的启动配置：
```sh
pm2 upstartup
```

然后重新生成启动脚本
```sh
pm2 resartup
```

## 用户权限

假如你想用另一个用户安装启动脚本

只要修改`-u <username>` 和 `--hp <user_home>`
```sh
pm2 startup ubuntu -u www -hp /home/ubuntu
```


## 设置系统
 如果需要可以指定使用的操作系统
```sh
pm2 startup [ubuntu | ubuntu14 | ubuntu12 | centos | centos6 | arch | oracle | amazon | macos | darwin | freebsd | systemd | systemv | upstart | launchd | rcd | openrc]
```

## 系统安装检查
```sh
# 检查是否已经添加了pm2-<USER>
systemctl list-units
# 检查日志
journalctl -u pm2-<USER>
# 查看系统配置文件 
systemctal cat pm2-<USER>
# 分析安装
systemed-analyze plot > output.svg
```
想要等运行PM2机器在线后在运行
```sh
[unit]
Wants=network-online.target
After=network.target network-online.target

[....]

[Install]
Wantedby=multi-user.target network-online.target
```









