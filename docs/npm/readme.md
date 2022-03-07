# npm 包规范

- sinopia 私有 npm 源 服务器
- [verdaccio npm 私有源服务]https://verdaccio.org/

- npm 规范
```shell
├── index.js //入口文件
├── introduce.md //说明文件
├── lib
│   └── index.js //主要文件
├── node_modules //第三方包
├── package.json 
├── README.md 
└── test //单元测试文件
    └── test.js

```

## npm 包收集

1、 ·Inquirer.js试图为NodeJs做一个可嵌入式的美观的命令行界面·
2、

二、使用说明
1. 单次使用
```sh
npm --registry http://npm.taobao.com/ install package-name
```
2. 全局配置
```sh
npm config set registry http://npm.qingsongchou.net/
 
npn install package-name
```

3. 使用源管理工具 nrm 全局切换（推荐）
```sh
// 下载nrm
npm install -g nrm
 
// 查看当前npm源
nrm ls
 
// 添加技术中心npm源
nrm add qsc http://npm.qingsongchou.net/
 
// 将当前npm源指向技术中心源
nrm use qsc
 
// 下载包
npm install package-name
```

三、发布新模块
1. 模块规范：

模块的 name（即 package.json 中的 name 字段）需要遵循模块命名规范；
模块必须有 README.md 文件，内容为详细的说明文档，也可以提供文档连接；
为了版本控制清楚明了，文档中必须要有版本说明；
不可直接发布大版本，应先发布 prelease 版，下方有说明；
为保证模块使用没问题，代码最好经过 babel 转换成 ES5；
2. 模块命名规范：

命名采用小写字母和中划线（-）分割的格式，模块名不超过三段
业务线自用模块前缀增加对应域：
XX：@XXX-jc/package-name
通用模块使用公用域：
公用：@qsc/package-name
3. 写好一个模块，经过测试完成后，可以考虑发布到 npm 上了，可以通过以下步骤完成一个模块的新发布：

// 1.初始化包的描述文件（其实是生成  package.json，如果已有这个文件，可跳过该步骤）
```sh
npm init --save
 ```
// 2.设置npm私有库中，你的用户名，密码，邮箱。请使用统一账号密码，公司邮箱；
```sh
npm login
 ```
// 3.发布
```sh
npm publish
```
以上，即可完成一个新包的发布了。



四、管理模块权限
1. 很多时候，一个模块往往不只是你一个人在管理的，这时需要给其他一起维护的同学开通发布的权限，如下：
```sh
# 查看模块 owner
npm owner ls package-name
 
# 添加一个发布者
npm owner add xxx@qingsongchou.com package-name
 
# 删除一个发布者
npm owner rm xxx@qingsongchou.com package-name
```sh

五、更新版本
当模块有更新的时候，需要发布一个新版本，当所有需要更新的文件都 commit 完了后，就可以更新到 npm 了。

1. 首先发布一个预发布版本

很多时候一些新改动，不能直接发布到稳定版本上（稳定版本的意思就是使用 npm install package-name 即可下载的最新版本），这时可以发布一个 “预发布版本“，不会影响到稳定版本。
```sh
# 发布一个 prelease 版本，tag=beta
npm version prerelease
 
npm publish --tag beta
```
比如原来的版本号是 1.0.1，那么以上发布后的版本是 1.0.1-0，用户可以通过 npm install package-name@beta 或者 npm install package-name@1.0.1-0 来安装。



2. 当prerelease版本稳定后，可以把他设置成稳定版本
```sh
# 首先可以查看当前所有的最新版本，包括 prerelease 与稳定版本
npm dist-tag ls
 
# 设置 1.0.1-1 版本为稳定版本
npm dist-tag add package-name@1.0.1-1 latest
 
# 或者通过 tag 来设置
npm dist-tag add package-name@beta latest
```
当发现 BUG，也可以通过 npm dist-tag 命令回退。

这时候，latest 稳定版本已经是 1.0.1-1 了，用户可以直接通过 npm install package-name 即可安装该版本。



3. 发布一个新的稳定版本

// 版本号格式规范为{major}.{minor}.{patch}
// 更新版本号（major | minor | patch | premajor | preminor | prepatch | prerelease）
// 大版本并且不向下兼容时，使用 major
// 有新功能且向下兼容时，使用 major
// 修复一些问题、优化等，使用 patch
// 下面比如更新一个 patch 小版本号
```sh
npm version patch
npm publish
```

六、查看版本信息
最后，可以通过 npm info 来查看模块的详细信息。

