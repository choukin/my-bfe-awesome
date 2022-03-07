# vue-cli 学习

## vue cli中用的[download-git-repo](https://github.com/flipxfx/download-git-repo)
- [commander]() node 命令行工具
- [inquirer]() node 问答式命令行交互
- [ora]() node 提示文案
- [qrcode-terminal]() node 终端二维码




## vue router 配置 history 模式

index.html 页面不是在根目录  http://mysite.com/myhistory/index.html
``` js
// 路由的配置

const router=newVueRouter({

mode:'history',

base:'/myhistory', //项目在nginx子目录的时候配置

routes:routes
 
});
```

``` sh
# nginx 配置
location ^~/myhistory/ {

try_files $uri $uri/ /myhistory/index.html;

root /data/www;

index index.html;

}
```


