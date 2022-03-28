# Vue2 vs Vue3

## 生命周期
|Vue2|Vue3|
|:-:|:-:|
|beforeCreate|setup|
|created|setup|
|beforeMount|onBeforemount|
|mounted|onMounted|
|beforeUpdate|onBeforeUpdated|
|updated|onUpdated|
|beforeDestory|onBeforeUnmount|
|destoryed|onUnmount|
|activated|onActivated|
|deactivated|onDeactivated|


## Vue3 常用API

### setup

```js
setup(props,{attrs,slots,emit,parent,root}){
    // 不可使用this
    return {}
}
```

### ref， reactive
- ref 一般是级别类型值，或单值对象；如果传入的是对象会使用 reactive进行深层转换
- reactive 一般用来定义 引用类型的值变成响应式

### toRefs

- 解构通过 `reactive` 返回的响应式对象 可以在模版中直接访问属性

### toRef

- 将 引用类型或者 reactive 类型中的某个值转换成响应式数据
```js
    let obj = { name: 'name', age: 18 };
      const name = toRef(obj, 'name');
      const name1 = ref(obj.name);
      name.value = 'duo';
      obj.name = 'hello'; // 此时 name.value 是 hello name1.value 还是 name
      // name1.value = 'refname';


```

::: tip

 `ref` 是对原数据的拷贝，响应式数据改变后会同步更新试图，不会影响到原始值

 `toRef` 是对原数据的引用，响应式数据对象值改变后不会改变试图，会影响到原始值

:::

### isRef
判断是否是ref对象,vue3内部设置了 `__v_isRef = true` 标示

`ref toRef toRefs` 都返回 ref 对象

### unRef

如果参数 是 ref 则返回内部原始值，否则返回参数本身

### watch，watchEffect
 watch
 
 监听器

vue2 `watch(source, callback, options)`
- source 指定监听依赖对象，可以是表达式，get函数或[数组](https://segmentfault.com/a/1190000041490192?utm_source=sf-similar-article)
- callback(newVal, oldVal) 如果多个值callback([new1,new2],[old1,old2])
- opitons
    - immediate
    - deep

vue3

```js
    let title = ref('Create');
      let num = ref(0);
      const state = reactive<State>({
        nums: 0,
        list: [],
      });
      
      // 监听ref
      watch(title, (newValue, oldValue) => {
         /* ... */
      });

      // 监听reactive
      watch(
        // getter
        () => state.list.length,
        // callback
        (v = 0) => {
          state.nums = v;
        },
         // watch Options
        { immediate: true }
      );
      
      // 监听多个ref
      watch([title, num], ([newTitle, newNum], [oldTitle, oldNum]) => {
        /* ... */
      });      
      
      // 监听reactive多个值
     const unwatch =  watch([() => state.list, () => state.nums], ([newList, newNums], [oldList, oldvNums]) => {
        /* ... */
      });
      
      unwatch() // 停止监听

```

### watchEffect

立即执行传入的函数，同时响应式追踪其依赖，并在依赖变更时重新运行该函数

### computed

传入一个getter 函数，返回一个默认不可手动修改的ref对象

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误

// get set 函数对象

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0

```

### provide, inject

父组件通过provide() 向下传递数据，子孙组件通过 inject() 接收数据

```js
// 父组件
<script>
import {provide} from 'vue'
export default {
    setup() {
        const obj = ref('johnYu')
        // 向子孙组件传递数据provide(名称,数据)
        provide('name', obj)
    }
}
</script>

// 孙组件
<script>
import {inject} from 'vue'
export default {
    setup() {	
        // 接收父组件传递过来的数据inject(名称)
        const name = inject('name') // johnYu
        return {name}
    }
}
</script>
```

### getCurrentInstance

用来获取当前组件实例，仅在 setup和生命周期中起作用

```js
import { getCurrentInstance, onBeforeUnmount } from 'vue';

const instance = getCurrentInstance();
// 判断当前组件实例是否存在
if (instance) {
    onBeforeUnmount(() => {
        /* ... */
     });
 }
 const {ctx} = instance() // 获取组件的上下文 
```

### $ref
尽管存在 prop 和事件，但有时你可能仍然需要在 JavaScript 中直接访问子组件。为此，可以使用 ref attribute 为子组件或 HTML 元素指定引用 ID。

```js
<template>
  <div ref="root">This is a root element</div>
</template>

<script>
  import { ref, onMounted } from 'vue'

  export default {
    setup() {
        // 获取渲染上下文的引用
      const root = ref(null)

      onMounted(() => {
        // 仅在初次渲染后才能获得目标元素
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        root
      }
    }
  }
</script>

```

### .sync

vue2 中使用 .sync 实现prop 的双向数据绑定，在Vue3中 它合并到了 v-model 中

vue2
```html
    <el-pagination
      :current-page.sync="currentPage1"
    >
    </el-pagination>
```

vue3

```html
    <el-pagination
      v-model:current-page="currentPage1"
    >
    </el-pagination>
```

### v-slot

vue3 中 `v-slot` 统一`slot` 和 `slot-scope` 单一指令语法， 即统一了作用域和普通插槽的用法；


Child.vue
```html
<template>
  <div class="child">
    <h3>具名插槽</h3>
    <slot name="one" />
    <h3>作用域插槽</h3>
    <slot :data="list" />
    <h3>具名作用域插槽</h3>
    <slot name="two" :data="list" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: ['zhangsan', 'lisi']
    }
  }
}
</script>

```

vue2

```html
<template>
  <div>
    <child>
      <div slot="one">
        <span>菜单</span>
      </div>
      <div slot-scope="user">
        <ul>
          <li v-for="(item, index) in user.data" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div slot="two" slot-scope="user">
        <div>{{ user.data }}</div>
      </div>
    </child>
  </div>
</template>

```

vue3
```html
<template>
  <div>
    <child>
      <!-- 具名插槽 -->
      <template v-slot:one>
        <div><span>菜单</span></div>
      </template>
      <!-- 作用域插槽 -->
      <template v-slot="user">
        <ul>
          <li v-for="(item, index) in user.data" :key="index">{{ item }}</li>
        </ul>
      </template>
     <!-- 具名作用域插槽 -->
      <template v-slot:two="user">
        <div>{{ user.data }}</div>
      </template>
      <!-- 简写 -->
      <template #two="user">
      <div>{{ user.data }}</div>
      </template>
    </child>
  </div>
</template>

```

## Vue Router 4

|Vue Router4|Vue Router<4|
|:-:|:-:|
|createRouter|new VueRouter()|
|useRouter|this.$router|
|useRoute|this.$route|
|onBeforeRouteLeave|beforeRouteLeave|
|onBeforeRouteUpdate|beforeRouteUpdate|

router/index.js

```js
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:()=>import('/@/views/home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict:true,
  scrollBehavior:null,
})
export default router;

// vue view
import {defineCOmponent} form 'vue'
import {useRouter, useRoute} from 'vue-router
  export default defineComponent({
    name: 'StatisticsPage',
    components: {  },
    setup() {
      const router = useRouter()
      const route = useRoute()
      // 打开页面传参
      router.push({
        name:'',
        params:{
          username:''
        }
      })
      // 接收参数
      const username = route.params.username
    }
  })

```

### useLink

useLink 提供与 `router-link` 的 `v-slot` API 相同的访问权限，将 `RouterLink` 的内部行为公开为 Composition API 函数，用于暴露底层的定制能力

```js
<template>
  <div ref="root">This is a root element</div>
</template>

<script>
  import { computed } from 'vue';
  import { RouterLink, useLink } from 'vue-router';

  export default {
    name: 'AppLink',

    props: {
      ...RouterLink.props,
      inactiveClass: String,
    },

    setup(props) {
      const { route, href, isActive, isExactActive, navigate } = useLink(props);
      const isExternalLink = computed(
        () => typeof props.to === 'string' && props.to.startsWith('http')
      );

      return { isExternalLink, href, navigate, isActive };
    },
  };
</script>

```

插槽 RouterLink.props 的对象包含的属性
- href: 解析后的URL，将会作为一个 a 元素的href attribute
- route 解析后的规范化地址
- navigate 触发导航的函数，会在必要时自动阻止事件，和 router-link同理
- isActive 如果需要应用激活的class 为true，允许应用一个任意的class
- isExactActive 如果应用精确激活的class 为true，允许应用一个任意的class


## 样式 scoped

vue2
```css
/*省督选择器*/
>>> .foo{ }
/deep/ .foo{}
::v-deep .foo{}
```

vue3
```css
::v-deep(.foo){}
```

## .evn环境变量扩展
::: tip

vite 中的.env 文件变量名一定要以 VITE_ 前缀

:::

### 配置
.evn 文件
```bash
VITE_USE_MOCK = true
```
代码里使用
```js
const mock = import.env.VITE_USE_MOCK
```












