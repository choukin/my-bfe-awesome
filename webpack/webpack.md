# webpack

## webpack webpack-dev-middleware express 实现浏览器实时刷新 配置

```js
 //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
 entry: ['webpack-hot-middleware/client?noInfo=true&reload=true' , 'entry.js'],
```

## webpack4.0 报错
```sh
⠋ building for production...(node:21122) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
⠸ building for production...(node:21122) [ESLINT_LEGACY_OBJECT_REST_SPREAD] DeprecationWarning: The 'parserOptions.ecmaFeatures.experimentalObjectRestSpread' option is deprecated. Use 'parserOptions.ecmaVersion' instead. (found in "standard")
```

### 解决方法
1.  Use new API on `.hooks` instead
```sh
⠋ building for production...(node:21122) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead

 是因为某个webpack 插件需要更新到 webpack4 最新api支持版本
```

2. Use 'parserOptions.ecmaVersion' instead.
    
   ```sh
    Use 'parserOptions.ecmaVersion' instead.
 
    # 升级了 eslint-plugin-vue eslint-config-standard 解决了
   ```

 ## 如何解决webpack Invalid Host/Origin header问题

 ```js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    disableHostCheck: true, // 添加不检查主机
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    ...
  },
 ```  

 ### 因为 webpack 本身出于安全考虑，因为不检查主机的应用程序容易受到DNS重新绑定攻击。因此，在我们的开发环境下，可以禁用掉`disableHostCheck`这一配置项。