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