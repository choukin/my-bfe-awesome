# my-bfe-awesome
前端个人积累

- [node 相关](#node-相关)
  - [node 常量](#node-常量)

- [电子书](#电子书)
- [webpack](#webpack)
- [移动端调试](https://github.com/choukin/my-bfe-awesome/issues/1)
- [动画库](#动画库)
- [突破防盗链机制](https://github.com/jpgerek/referrer-killer)
   > 很多图片链接设置了防盗链机制，从我的网站请求图片会返回403错误，但直接在浏览器中打开图片的url时却又正常。



- vue 常用组件
  - 引导提示框 [vue-introjs](https://www.npmjs.com/package/vue-introjs) 
  - 数字动画跳动 [vue-countup-v2](https://github.com/xlsdg/vue-countup-v2?ref=madewithvuejs.com)  

- [git 使用](git-use.md)
- [shell 使用](shell-use.md)
- [adb 使用](adb-use.md)
- [js片段](js片段.md)

## node 相关
### node 常量
- `__dirname` ：全局变量，存储的是代码所在文件的所在的文件目录
- `__filename`：全局变量，存储的是代码所在文件的文件名

```js
// /work/coding/githubbuild/my-bfe-awesome/test.js
console.log(__dirname)
// /work/coding/githubbuild/my-bfe-awesome
console.log(__filename)
// /work/coding/githubbuild/my-bfe-awesome/test.js
```

- 查看全局对象 再终端输入 node 后 安两次 tab键
  
  ![](./img/node/doubletab.jpg)


## 电子书
- [深入浅出 Webpack ](http://webpack.wuhaolin.cn/)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)

## [webpack]
- 生成html的插件 https://github.com/ampedandwired/html-webpack-plugin 配置
```js
new HtmlWebpackPlugin({
    filename: path.resolve(config.build.assetsRoot, 'index.html'), // 生成的html的文件名
    template: 'index.html', // 依据的模板
    inject: true, // 注入的js文件将会被放在body标签中,当值为'head'时，将被放在head标签中
    minify: { // 压缩配置
    removeComments: true, // 删除html中的注释代码
    collapseWhitespace: true, // 删除html中的空白符
    removeAttributeQuotes: true, // 删除html元素中属性的引号
    minifyJS: {
        compress: {
        warnings: false
        }
    },
    // 更多配置
    // https://github.com/kangax/html-minifier#options-quick-reference
    },
    chunksSortMode: 'dependency' // 按dependency的顺序引入
}
```


## 动画库

1. [velocity.js](https://github.com/julianshapiro/velocity) 支持链式调用 


## 前端工具
 - [Valine](https://valine.js.org/) 一款快速、简洁且高效的无后端评论系统。
 - [基于UI组件的Vue可视化布局工具](https://github.com/jaweii/Vue-Layout)
  
## 博客
- [美团技术团队](https://tech.meituan.com/)  
- [朱嘉伟](http://buzhundong.com/)