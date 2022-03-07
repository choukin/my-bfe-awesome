# chrome headless

1. mac 设置 别名
``` shell
vi ~/.zshrc

alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
esc :wq
source ~/zshrc
```

2.截屏
```shell
chrome --headless --disable-gpu --screenshot --window-size=1280,1696  https://github.com
```

