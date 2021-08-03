# 给现有的包声明d.ts文件

## 首先我们需要明确包使用的导出规范，global/umd/commonjs/module 等。

### 对于 global 导出的包

```js
declare namesapce MyLib {
    class A {}
    
    // 我们可以直接在代码中使用
    // const a = new MyLib.A()
  }
```

### 对于 umd/commonjs 导出的
```js
declare module 'my-lib' {
    namespace MyLib {
      class A {}
      
      class B {}
   
      // 使用时
      // 我们可以使用
      // import * as MyLib from 'my-lib'
      // const a = new MyLib.A();
   
      // 如果开启了 ES Module 融合模式 (esModuleInterop=true)
      // 我们可以使用
      // import { A } from 'my-lib'
      // const a = new A()
    }
    export = MyLib
  }

```
### 对于 ES Module 导出的包我们使用：
```js
declare module 'my-lib' {
    class MyLib {}
    
    export default MyLib
    
    // or other exorts
    export class A {}
    
    // 我们可以使用
    // import MyLib, {A} from 'my-lib'
    // const lib = new MyLib()
    // const a = new A()
  }
```

## [工具生成 d.ts](https://blog.csdn.net/zdhsoft/article/details/85242631)
- 为整个包添加声明文件  使用微软的dts-gen
```sh
npm install -g dts-gen   // 先全局安装dts-gen
npm install -g yargs     // 然后在全局安装你需要生产声明文件的库
dts-gen -m yargs         // 执行命令生成文件
```

- 为单个文件生产声明文件 使用dtsmake

```js
npm i dtsmake -g   // 先全局安装dtsmake
 
dtsmake -s ./path/to/sourcefile.js  // 在对应的文件生产文件
```