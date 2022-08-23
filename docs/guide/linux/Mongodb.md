# Mongodb

```sh
brew install mongodb

mongod --config /usr/local/etc/mongod.conf
```

## 驱动
```sh
npm install mongodb --save

```


## 连接

```js
const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/articles')
.then(db=>{
    consol.log('Client ready')
    db.close()
}, console.error)

```

### collection API:

- collection.insert(doc)
- collection.find(query)
- collection.remove(query)
- collection.drop() 移除整个数据集
- collection.update(query) 
- collection.count(query)
- collection.insertOne(doc)
- collection.insertMany([doc1,doc2])
- collection.findOne(query) 
- collection.updateMany(query)

#### 插入

```js
 const article = {
    title:'i like cake',
    content:'it is quite good'
 }

 db.collection('articles')
   . insertOne(article)
   .then(result=>{
    // 
    conosle.log(result.insertedId)
    // 自动增加的新属性 _id
    console.log(article._id)
   })

```

#### 查询

```js
db.collection('articles')
  .find({title:'i like cake'})
  .toArray().then(results=>{
    console.log(results)
  })

  // 用具有唯一的_id 查询
  db.collection.findOne({_id: 123})

  // 大小写敏感
  db.collection('articles')
    .find({title:{$regex:/cake$/I}})
```

查询操作符：
- $eq
- $neq
- $in
- $nin
- $lt $lte $gt $gte
- $near
- $not $and $or $nor

#### 使用MongoDB 标识

MongoDB 标识是二进制JSON(BSON)格式。文档上_id是一个JavaScript 对象，内部风中了BSON格式的ObjectId 

### 使用复制集


