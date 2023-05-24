# IndexDB

一、概述

IndexDB是用于存储大量结构化数据的一种本地数据库，相比于Cookie、LocalStorage和SessionStorage，它有更大的存储容量，数据存储格式为键值对，支持事务操作和索引查询，查询数据效率高，支持版本控制等特性。因此，它适合用于存储需要大量结构化数据的场景，比如离线Web应用、在线编辑器、音视频等方面的数据存储。

| 特性 | Cookie | LocalStorage | SessionStorage | IndexDB |
| --- | --- | --- | --- | --- |
| 存储大小 | 4KB | 5-10MB | 5-10MB | 没有限制 |
| 数据的生命周期 | 可以设置过期时间，否则关闭浏览器就失效 | 永久存储，除非被清除 | 关闭浏览器就失效 | 永久存储，除非被清除 |
| 与服务器端通信 | 每次请求都会携带在HTTP头中 | 不参与 | 不参与 | 不参与 |
| API | Document.cookie | localStorage | sessionStorage | IndexedDB |
| 数据存储格式 | 字符串 | 字符串 | 字符串 | 键值对 |
| 查询数据效率 | 低 | 高 | 高 | 高 |
| 支持事务 | 不支持 | 不支持 | 不支持 | 支持 |
| 支持版本控制 | 不支持 | 不支持 | 不支持 | 支持 |

二 基本概念：API相关对象接口：

| API | 描述 |
| --- | --- |
| IDBFactory | 代表IndexedDB数据库的工厂对象，用于打开或创建一个数据库 |
| IDBOpenDBRequest | 打开或创建一个数据库的请求对象，用于与打开或创建数据库的结果进行交互 |
| IDBDatabase | 代表IndexedDB数据库对象，创建或删除对象存储或事务 |
| IDBObjectStore | 代表对象仓库对象，用于存储具有相同结构的对象 |
| IDBIndex | 代表索引对象，用于高效查询数据 |
| IDBTransaction | 代表事务对象，用于管理一组对象存储的读写操作 |
| IDBKeyRange | 代表主键集合，用于限定查询结果的范围 |
| IDBCursor | 代表游标/指针，用于遍历对象存储中的所有数据 |
| IDBRequest | 代表操作请求对象，用于与异步操作进行交互 |

API 详细介绍

1. IDBFactory 实例方法
    1. open()
        
        ```jsx
        IDBOpenDBRequest open (DOMString name, long version);
        ```
        
        ```jsx
        const dbRequest = window.indexedDB.open('databaseName', 1)
        ```
        
    2. deleteDatabase()
        
        ```jsx
        const deletedbRequest = window.indexedDB.deleteDatabase('databaseName')
        deletedbRequest.onerror = (event)=>{
        	console.log('删除数据库错误')
        }
        ```
        
    3. databases()
        
        ```jsx
        const dbp = window.indexedDB.databases()
        dbp.then(database=>{
        	console.log(database)// [{name:'databaseName', version:1}]
        }).catch(e=>{
        	console.error(e)
        })
        ```
        
    4. cmp() 比较主键是否相等 0 相等， 1 第一个大于第二个， -1 第一个小于第二个
        
         
        
        ```jsx
        const a = 1;
        const b = 2;
        const result = window.indexedDB.cmp(a, b);
        console.log(`Comparison results: ${result}`); // -1
        
        ```
        
2. IDBRequest 继承 [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)
    1. 只读属性
        1. error 
        2. readyState 
        3. result   
        4. source 原始对象
        5. transaction
    2. 事件
        1. error
        2. success
3. IDBOpenDBRequest 继承IDBRequest
    1. 事件
        1. upgradeneeded
        2. blocked
    2. example
        
        ```jsx
        let db;
        
        const dbOpenRequest = window.indexedDB.open('dababasename', 1)
        
        dbOpenRequest.onerror = function (event){
          console.error('加载数据库错误')	
        }
        
        dbOpenRequest.onsuccess = function(event){
        	console.log('数据库初始化成功')
          db = dbOpenRequest.result
        }
        
        dbOpenRequest.onupgradeneeded = (event)=>{
          db  = event.target.result
          db.onerror = (event)=>{
        		console.log('加载数据库错误')
          }
        
           // 创建存属对象
          const objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });
          
        }
        
        ```
        
4. IDBDatabase 数据库对象 从 `IDBOpenDBRequest` 的 result 属性获取
    1. 属性
        1. name： 数据库 名称
        2. objectStoreNames 对象存储的名称列表
        3. version 数据库版本
    2. 方法 
        1. close() 关闭数据库
        2. createObjectStroe(name, options={keyPath, autoIncrement})  创建一个新的 存储对象
        3. deleteObjectStroe(name) 删除一个存储对象
        4. `transaction(storeNames, [mode], [options])` 创建一个操作存储对象的事物
            1. mode可选值 readonly（默认）、 readwrite , rewriteflush（火狐有效）
            2. default、 strict（性能差）、 relaxed（安全性差）
    3. 事件 
        1. abort 中断时触发
        2. error 访问失败时触发
        3. close 关闭时触发 
        4. versionChange 当数据库结构发生更改时触发
5. IDBObjectStore 对象仓库，可以理解为表 通过 IDBDatabase.createObjectStroe 或者 `transaction.objectStore`获取
    1. 属性
        1. autoIncrement 自增字段
        2. indexNames 索引名称列表
        3. keyPath 键路径
        4. name 表名
        5. transaction 事物名称
    2. 方法
        1. add(value, [key]) 添加一条数据返回 IDBRequest
        2. count([query])
        3. clear() 删除当前仓库所有数据 返回 IDBRequest
        4. createIndex(`indexName, [keyPath], [options])`) 创建当前表的一个索引,该方法只能在`VersionChange`监听函数里面调用
            1. options 可选值 unique:false  multiEntry:false
        5. delete(key)
        6. deleteIndex(indexName) 删除索引， 该方法只能在`VersionChange`监听函数里面调用。
        7. get(key) 根据键查询特定记录
        8. getAll([query], [count])  条件筛选数据
        9. getAllKeys([query], [count]) 查询符合条件的主键
        10. getKey([key])   返回第一个符合条件的记录key
        11. index(name) 返回指定名称的索引对象 IDBIndex 
        12. openCursor([query, direction]) 获取一个指针对象
        13. openKeyCursor()  获取一个主键指针
        14. put(item,[key]) 插入或更新记录
6. IDBIndex
    1. 属性
        1. keyPath 关键路径
        2. multiEntry 是否是
        3. name index 名称
        4. objectStore index 所指向的 object store 的名称。
        5. unique 是否允许重复
    2. 方法
        1. count([key])
        2. get([key])
        3. getAll([query],[count])
        4. getAllKeys([query],[count])
        5. getKey([key])   返回第一个符合条件的记录key
        6. openCursor([query, direction]) 获取一个指针对象
        7. openKeyCursor([range], direction)  获取一个主键指针
7. IDBTransaction
    1. 属性
        1. db 当前事务所属的数据库连接
        2. **durability 数据存储格式  strict relaxed default**
        3. error
        4. mode 数据访问的模式
        5. objectStoreNames
    2. 方法
        1. abort() 放弃本次连接的 transaction 的所有修改
        2. commit() 提交事务
        3. objectStore()作为此事务作用域一部分的 object store 的 `[IDBObjectStore](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBObjectStore)` 对象 
    3. 事件
        1. abort
        2. complete
        3. error
8. IDBCursor
    1. 属性
        1. direction
        2. key
        3. primaryKey
        4. request
        5. source
    2. 方法
        1. advance() 设置游标向前移动次数
        2. continue() 移动到下一个位置
        3. continuePrimaryKey() 
        4. delete() 删除有表的位置记录，删除特定记录
        5. update() 更新特定记录
9. IDBKeyRange
    1. 属性
        1. lower 键范围的下界
        2. lowerOpen 如果下界值包含在键范围内，则返回 false。
        3. upper  键范围的上界
        4. upperOpen如果上界值包含在键范围内，则返回 false。
    2. 静态方法
        1. bound() 指定上界和下界来创建一个新的键范围
        2. lowerBound() 指定结果集的下界来创建一个新的键范围
        3. only() 指定单个键值来创建一个新的键范围
        4. upperBound()指定结果集的上 界来创建一个新的键范围
    3. 实例方法
        1. includes() 返回一个布尔值来表示指定的键是否在键范围内。
        

2、第三方库，例如下面几个，大家可以根据需要选用即可：

- [localForage](https://localforage.github.io/localForage/)：一个简单的 Polyfill，提供了简单的客户端数据存储的值语法。它在后台使用- IndexedDB，并在不支持 IndexedDB 的浏览器中回退到 WebSQL 或 localStorage。
- [Dexie.js](https://dexie.org/)：IndexedDB 的包装，通过简单的语法，可以更快地进行代码开发。
- [ZangoDB](https://www.npmjs.com/package/zangodb)：类似 MongoDB 的 IndexedDB 接口，支持 MongoDB 的大多数熟悉的过滤、投影、排序、更新和聚合功能。
- [JsStore](https://jsstore.net/)：一个带有 SQL 语法的 IndexedDB 包装器。
- 
- [https://h5-matrix-beta.xuepeiyou.com/home?token=tal173oDTv84BDd76E8NhEiSLH23USU8PprhkEPEvj0av-qqMX5WyoZYllSwKnB0uNp2ctjRXB8Rj_2vCDdsFHutvBOEqw9Vftdd5-KdfGTha7Ydl1gqIjRHPYM15DrCWYZFkbfOWXuRQjTzzGqzcu_Jr30C3oPwDJ9YRHNH2_R3k9K3wmj&unionId=ofmZW6_DXASo_K6KLLiVBrIGc7Y4&uid=248914&stu_id=44b88fa64fa349b288bdb761c2237f1d&stuNumber=9000231010701268&cityName=北京&name=wee&gradeName=一年级&appletOpenId=oNOJa5WE81kosQVF5GRRJlDFdJQs&avatarUrl=https://static3.saasz.vdyoo.com/udc-s-user-avatar/20230427/Tall3Yf5cV16-PcSDtQsmdu9MQ1984.png&timestamp=1684836973](https://h5-matrix-beta.xuepeiyou.com/home?token=tal173oDTv84BDd76E8NhEiSLH23USU8PprhkEPEvj0av-qqMX5WyoZYllSwKnB0uNp2ctjRXB8Rj_2vCDdsFHutvBOEqw9Vftdd5-KdfGTha7Ydl1gqIjRHPYM15DrCWYZFkbfOWXuRQjTzzGqzcu_Jr30C3oPwDJ9YRHNH2_R3k9K3wmj&unionId=ofmZW6_DXASo_K6KLLiVBrIGc7Y4&uid=248914&stu_id=44b88fa64fa349b288bdb761c2237f1d&stuNumber=9000231010701268&cityName=%E5%8C%97%E4%BA%AC&name=wee&gradeName=%E4%B8%80%E5%B9%B4%E7%BA%A7&appletOpenId=oNOJa5WE81kosQVF5GRRJlDFdJQs&avatarUrl=https://static3.saasz.vdyoo.com/udc-s-user-avatar/20230427/Tall3Yf5cV16-PcSDtQsmdu9MQ1984.png&timestamp=1684836973)
- [微博 (weibo.cn)](https://m.weibo.cn/beta)
- 

```jsx
const dbRequest = window.indexedDB.open('databaseName', '1')
```

以下是一个使用IndexDB的demo，用于存储一个名为"person"的对象存储和相应的索引：

```
// 打开或创建一个名为"myDatabase"的数据库
const request = window.indexedDB.open("myDatabase", 1);

request.onerror = function(event) {
  console.log("打开数据库失败");
};

request.onsuccess = function(event) {
  const db = event.target.result;
  console.log("成功打开数据库");

  // 在数据库中创建一个名为"person"的对象存储
  const objectStore = db.createObjectStore("person", { keyPath: "id" });

  // 在对象存储中创建一个名为"name"的索引
  objectStore.createIndex("name", "name", { unique: false });

  // 向对象存储中添加一条数据
  const transaction = db.transaction(["person"], "readwrite");
  const personStore = transaction.objectStore("person");
  const person = { id: 1, name: "张三", age: 20 };
  personStore.add(person);

  transaction.oncomplete = function(event) {
    console.log("添加数据成功");
  };

  transaction.onerror = function(event) {
    console.log("添加数据失败");
  };
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  console.log("正在升级数据库");

  // 在数据库中创建一个名为"person"的对象存储
  const objectStore = db.createObjectStore("person", { keyPath: "id" });

  // 在对象存储中创建一个名为"name"的索引
  objectStore.createIndex("name", "name", { unique: false });
};

```

以下是使用IndexDB的demo，用于演示如何使用游标（IDBCursor）遍历对象存储中的所有数据：

```
// 打开或创建一个名为"myDatabase"的数据库
const request = window.indexedDB.open("myDatabase", 1);

request.onerror = function(event) {
  console.log("打开数据库失败");
};

request.onsuccess = function(event) {
  const db = event.target.result;
  console.log("成功打开数据库");

  // 获取名为"person"的对象存储
  const transaction = db.transaction(["person"], "readonly");
  const personStore = transaction.objectStore("person");

  // 获取游标
  const request = personStore.openCursor();
  request.onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    } else {
      console.log("遍历完成");
    }
  };

  request.onerror = function(event) {
    console.log("遍历失败");
  };
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  console.log("正在升级数据库");

  // 在数据库中创建一个名为"person"的对象存储
  const objectStore = db.createObjectStore("person", { keyPath: "id" });

  // 在对象存储中创建一个名为"name"的索引
  objectStore.createIndex("name", "name", { unique: false });
};

```

上述代码中，通过 `objectStore.openCursor()` 获取游标，然后在 `cursor.onsuccess` 回调中遍历所有数据。`cursor.value` 表示当前游标所指向的数据。

请问您是否还有其他问题需要解答呢？

下面是一个使用 IndexDB 进行分页查询的 demo：

```
function queryPage(db, page, pageSize, callback) {
  const transaction = db.transaction(['person'], 'readonly');
  const objectStore = transaction.objectStore('person');
  const request = objectStore.openCursor();
  const start = pageSize * (page - 1);
  let count = 0;
  let result = [];

  request.onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      if (count < start) {
        cursor.continue();
        count++;
        return;
      }
      if (count >= start && count < start + pageSize) {
        result.push(cursor.value);
      }
      if (count >= start + pageSize) {
        callback(result);
        return;
      }
      cursor.continue();
      count++;
    } else {
      callback(result);
    }
  };

  request.onerror = function(event) {
    console.log('查询失败');
  };
}

const request = window.indexedDB.open('myDatabase', 1);

request.onerror = function(event) {
  console.log('打开数据库失败');
};

request.onsuccess = function(event) {
  const db = event.target.result;
  console.log('成功打开数据库');

  queryPage(db, 2, 5, function(result) {
    console.log(result);
  });
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  console.log('正在升级数据库');

  const objectStore = db.createObjectStore('person', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

```

上述代码中，`queryPage` 函数用于查询第 `page` 页，每页 `pageSize` 条数据。在游标 `request.onsuccess` 回调中，通过 `count` 记录当前已经查询了多少条数据，如果 `count` 小于 `start`，则继续往下遍历；如果 `count` 大于等于 `start` 且小于 `start + pageSize`，则将当前数据加入 `result` 数组；如果 `count` 大于等于 `start + pageSize`，则回调返回 `result` 数组，停止遍历。

注意，`queryPage` 函数中的事务模式为 `readonly`，因此无法进行写操作。如果需要进行写操作，需要将事务模式改为 `readwrite`。

[https://dexie.org/docs/API-Reference#quick-reference](https://dexie.org/docs/API-Reference#quick-reference)

[https://www.jiangguo.net/c/qv2/opo.html](https://www.jiangguo.net/c/qv2/opo.html)

[https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory](https://developer.mozilla.org/zh-CN/docs/Web/API/IDBFactory)