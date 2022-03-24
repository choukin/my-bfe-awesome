# vue3 项目解析

```sh
├── packages
│   ├── compiler-core      # 与平台无关的编译模块，例如：基础的baseCompile编译模版文件，baseParse 生成AST
│   ├── compiler-dom       # 基于compiler-core,专为浏览器的编译模块，可以看到它基于baseComplie
│   ├── compiler-sfc       # 用来编译vue 单文件组件
│   ├── compiler-ssr        # 服务端渲染相关
│   ├── global.d.ts
│   ├── reactivity              # vue 独立的响应式模块
│   ├── reactivity-transform
│   ├── runtime-core            # 与平台的基础模块，有vue的各类API 虚拟dom 渲染器
│   ├── runtime-dom             # 基于runtime-core 针对浏览器的运行时
│   ├── runtime-test
│   ├── server-renderer
│   ├── sfc-playground
│   ├── shared
│   ├── size-check
│   ├── template-explorer
│   ├── vue                      # 引入导出 runtime-core 还有编译方法
│   └── vue-compat
```

## monrepo
 
 `Vue3`采用 `monorepo` 管理项目代码的方式。它是一个`repo` 中管理多个 `package`,每个 `package` 都有自己的类型声明、单元测试。 `package` 又可以单独发布，总体来说更便于维护，发版和阅读

::: tip
- monrepo 方式具体实现是[PNPM Workspaces](https://pnpm.io/workspaces)
:::

### `Vue3` 创建实例
```js

import {creatApp} from 'vue'
import App from './App.vue'

const app = createVue({
    /**/
})

const vm = app.mount('#app')
```

### 2和3 注册全局组件或者更改全局配置对比
```js
/* Vue2 */
Vue.component('my-component', {
    /* 选项 */
})
Vue.directive('my-directive',{

})
Vue.mixin({

})

/* Vue3 */
const app = createApp({

})

app.component('my-component' /* */)
app.directive('my-directive' /**/)
app.mixin()

```

### 源码入口

 1、  找到 `createApp` 源码

`import { createApp } from 'vue';`

在vue源码里找到 `export * from '@vue/runtime-dom'`

在`runtime-dom` 中 找到 `createApp` 

```js
    // runtime-dom/index.ts
    export const createApp = ((...args) => {
    // 真正的createApp 是在渲染器属性上
    const app = ensureRenderer().createApp(...args)

    if (__DEV__) {
        injectNativeTagCheck(app)
        injectCompilerOptionsCheck(app)
    }

    const { mount } = app
    app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
        const container = normalizeContainer(containerOrSelector)
        if (!container) return

        const component = app._component
        if (!isFunction(component) && !component.render && !component.template) {
        // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML
        // 2.x compat check
        if (__COMPAT__ && __DEV__) {
            for (let i = 0; i < container.attributes.length; i++) {
            const attr = container.attributes[i]
            if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
                compatUtils.warnDeprecation(
                DeprecationTypes.GLOBAL_MOUNT_CONTAINER,
                null
                )
                break
            }
            }
        }
        }

        // clear content before mounting
        container.innerHTML = ''
        const proxy = mount(container, false, container instanceof SVGElement)
        if (container instanceof Element) {
        container.removeAttribute('v-cloak')
        container.setAttribute('data-v-app', '')
        }
        return proxy
    }

    return app
    }) as CreateAppFunction<Element>
    /**
    * ensureRenderer 这里是为了执行 createApp时，才给renderer 渲染器赋值，也是优化的一点
    * 只导入reactive，没有执行createApp 不会执行 createRenderer
    * 那么打包时 tree-shaking 可以摇掉 runtime-core 这个模块
    * 
    * 在 runtime0-core 里调用 runtime-core 的 createRenderer 方法
    * 并传入 rendererOptins 这个 rendererOptions 里包含着浏览器的DOM API props
    * 例如 createElement insertBefore 等 可以在 runtime-dom/nodeOps.ts 里看
    * 
    * 
    * */
    function ensureRenderer() {
    return (
        renderer ||
        (renderer = createRenderer<Node, Element | ShadowRoot>(rendererOptions))
    )
    }
```

2、 找到真正的 `createApp` 

在 `runtime-dom/index.ts` 中找到 `createApp` 的定义，里面实现大致三步， 创建 `app` 应用实例，改写 `mount` 方法， 返回 `app` 应用实例


```js

        //1. runtime-core.index.ts
        export { createRenderer, createHydrationRenderer } from './renderer'

        //2. runtime-core/renderer.ts
        export function createRenderer<
            HostNode = RendererNode,
            HostElement = RendererElement
            >(options: RendererOptions<HostNode, HostElement>) {
            return baseCreateRenderer<HostNode, HostElement>(options)
        }

        // implementation
        /**
         * 传入不同环境的 renderOpitons 就可以生成不同环境的render 
         * 
         **/
        function baseCreateRenderer(
        options: RendererOptions,
        createHydrationFns?: typeof createHydrationFunctions
        ): any {

        // 这些变量最终都是为redner 里的patch服务的
        const {
            insert: hostInsert,
            remove: hostRemove,
            patchProp: hostPatchProp,
            createElement: hostCreateElement,
            createText: hostCreateText,
            createComment: hostCreateComment,
            setText: hostSetText,
            setElementText: hostSetElementText,
            parentNode: hostParentNode,
            nextSibling: hostNextSibling,
            setScopeId: hostSetScopeId = NOOP,
            cloneNode: hostCloneNode,
            insertStaticContent: hostInsertStaticContent
        } = options


        // 生成对应浏览器的render
        const render: RootRenderFunction = (vnode, container, isSVG) => {
            if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true)
            }
            } else {
            // 首次执行传入根组件
            // 手指执行挂载过程
            patch(container._vnode || null, vnode, container, null, null, null, isSVG)
            }
            flushPostFlushCbs()
            container._vnode = vnode
        }

        // TODO:
        return {
            render,// 把接受到的vnode装换成dom 追踪到宿主元素中
            hydrate,// ssr 服务端将一个vnode生成html
            // 以参数形式传入 createApp 中，最终供 app 实例里的mount 使用
            createApp: createAppAPI(render, hydrate) // 创建APP 实例
        }
        }

        //3. runtime-core/apiCreateApp.ts

        export function createAppAPI<HostElement>(
            render: RootRenderFunction,
            hydrate?: RootHydrateFunction
            ): CreateAppFunction<HostElement> {
            return function createApp(rootComponent, rootProps = null) {
                
                const context = createAppContext()
                const installedPlugins = new Set()

                let isMounted = false
                // 声明一个实例
                const app: App = (context.app = {
                _uid: uid++,
                _component: rootComponent as ConcreteComponent,
                _props: rootProps,
                _container: null,
                _context: context,
                _instance: null,

                version,

                get config() {
                    return context.config
                },

                set config(v) {
                    
                },

                use(plugin: Plugin, ...options: any[]) {
                    // ...
                    return app
                },

                mixin(mixin: ComponentOptions) {
                    // ...
                    return app
                },

                component(name: string, component?: Component): any {
                   // ...
                    return app
                },

                directive(name: string, directive?: Directive) {
                   // ...
                    return app
                },

                /**
                 *  在项目里创建app实例，再 mount 到某个节点
                 *  最终会执行到这里， App 组件作为 rootComponent，render 是浏览器环境的渲染器
                 * */
                mount(
                    rootContainer: HostElement,// 宿主对象
                    isHydrate?: boolean,
                    isSVG?: boolean
                ): any {
                    // 首次执行
                    if (!isMounted) {
                    // 创建根组件虚拟dom
                    const vnode = createVNode(
                        rootComponent as ConcreteComponent,
                        rootProps
                    )
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context

                    // HMR root reload
                    if (__DEV__) {
                        context.reload = () => {
                        render(cloneVNode(vnode), rootContainer, isSVG)
                        }
                    }

                    if (isHydrate && hydrate) {
                        hydrate(vnode as VNode<Node, Element>, rootContainer as any)
                    } else {
                        // 生成真是dom
                        render(vnode, rootContainer, isSVG)
                    }
                    isMounted = true
                    app._container = rootContainer
                    // for devtools and telemetry
                    ;(rootContainer as any).__vue_app__ = app

                    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
                        app._instance = vnode.component
                        devtoolsInitApp(app, version)
                    }

                    return getExposeProxy(vnode.component!) || vnode.component!.proxy
                    } 
                },

                unmount() {
                    if (isMounted) {
                    render(null, app._container)
                    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
                        app._instance = null
                        devtoolsUnmountApp(app)
                    }
                    delete app._container.__vue_app__
                    } else if (__DEV__) {
                    warn(`Cannot unmount an app that is not mounted.`)
                    }
                },

                provide(key, value) {
                    if (__DEV__ && (key as string | symbol) in context.provides) {
                    warn(
                        `App already provides property with key "${String(key)}". ` +
                        `It will be overwritten with the new value.`
                    )
                    }
                    // TypeScript doesn't allow symbols as index type
                    // https://github.com/Microsoft/TypeScript/issues/24587
                    context.provides[key as string] = value

                    return app
                }
                })

                if (__COMPAT__) {
                installAppCompatProperties(app, context, render)
                }

                return app
            }
            }
```

 `.mount('#app')` 并不是直接执行app 实例里的mount,这里的mount 方法是 `runtime-core` 里与平台无关。事实上 `runtime-dom` 有重写过 `mount` 亦是针对浏览器环境。

 ## Vue3 的响应式

 ### Proxy

 `Vue2` 内部通过`Object.defineProperty` API 劫持数据的变化，深度遍历 data 函数里的对象，给对象每个属性设置 `getter` `setter`

 触发 `getter` 会通过 `Dep` 类做依赖收集操作，收集当前 `Dep.target`, 也就是 `watcher`.

 触发`setter`, 会做派发更新操作，执行 `dep.notify` 通知收集到的各类 `watcher` 更新，如 `computed` `watcher` `user watcher` `渲染 watcher`

 `Vue3` 用 `Proxy` 重构了响应式部分， `effect` 副作用函数替代了`watcher`
 
 `Proxy` 的 `get` handle 里执行 `track()` 用来跟踪收集依赖（收集`activeEffect` 也就是 `effect`）

 `set` handle 里执行 `trigger()` 用来触发响应（执行收集的`effect`）


 ### 独立的响应式

 `reactivity` 可以单独安装使用例如：

 ```js
 const {effect, reactive}  =  require('@vue/reactivity')
// 调用 reactive 定义响应式数据，也就是 proxy 设置 get, set, handle
 const obj = reactive({num:1})

// effect 定义副作用函数
 effect(()=>{
     console.log(obj.num)
 })

 // 修改num, trigger 触发响应，执行effect
 setInterval(()=>{
     ++obj.num;
 }, 100)

 ```

 #### reactive 源码

`ReactiveFlags` 枚举
```js
// packages/reactivity/reactive.ts
export const enum ReactiveFlags {
  SKIP = '__v_skip', // 这个属性值为 true 的对象都会跳过代理
  IS_REACTIVE = '__v_isReactive', // 获取是否是响应式
  IS_READONLY = '__v_isReadonly',// 是否是只读
  IS_SHALLOW = '__v_isShallow', // 是否是不执行嵌套对象的深层响应式转换
  RAW = '__v_raw' // 这个属性会应用到原始对象
}

export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // 如果是只读响应式数据，直接返回本身
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target, // 对象
    false, //  是否只读
    mutableHandlers, // proxy handle
    mutableCollectionHandlers, // 集合数据的 proxy handle
    reactiveMap
  )
}

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
    // 不是对象之间返回
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  // 如果已经是响应式对象直接返回，除非是 readonly 作用在这个响应式对象上
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // target already has corresponding Proxy
  //  对象已经是响应式直接返回
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only a whitelist of value types can be observed.
// 只有白名单的值类型可以响应
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  // 使用proxy 创建想回应是对象
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  // 存入缓存 map 中
  proxyMap.set(target, proxy)
  return proxy
}

```

`baseHandlers` 里面劫持操作

```js
// packages/reactivity/baseHandlers.ts
// 普通对象的 handlers
export const mutableHandlers: ProxyHandler<object> = {
  get, // 访问对象属性的 handler
  set, // 设置对象属性的 handeler
  deleteProperty,// 删除对象属性的handler
  has,// 针对 in 操作符的handler
  ownKeys// 对象上 getOenPropertyNames, getOwnPropertySymbols, keys 等方法的handler
}
```

`Proxy` 弥补了 `Object.defineProperty` 需要递归对象，给每个属性设置`setter` `getter` ,无法劫持一次额其他操作，数组也需要hack 处理新增属性需要额外的方法，Map, Set, weekmap 等数据结构无法响应式等不足；


#### effect
 `effect` 方法里传入 函数 `()=>{console.log(obj.num)}` 函数里访问了响应式对象 obj 的num 属性，
 ```js
 // packages/reactivity/effect.ts
export function effect<T = any>(
  fn: () => T,
  options?: ReactiveEffectOptions
): ReactiveEffectRunner {
  if ((fn as ReactiveEffectRunner).effect) {
      // 1. 如果fn 里有effect 函数标识，就指向原始函数，在下面ReactiveEffect可以看到fn的定义
    fn = (fn as ReactiveEffectRunner).effect.fn
  }

    // 2. 创建一个响应式副作用函数
  const _effect = new ReactiveEffect(fn)
  if (options) {
    extend(_effect, options)
    if (options.scope) recordEffectScope(_effect, options.scope)
  }
  if (!options || !options.lazy) {
      // 执行 effect, 这个没有像 computed watcher 的lazy属性，若为true 就不立即执行
    _effect.run()
  }
  const runner = _effect.run.bind(_effect) as ReactiveEffectRunner
  runner.effect = _effect
  // 返回 effect 函数
  return runner
}

// The number of effects currently being tracked recursively.
let effectTrackDepth = 0

export let trackOpBit = 1

/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */
const maxMarkerBits = 30

export class ReactiveEffect<T = any> {
  active = true
  deps: Dep[] = []
  parent: ReactiveEffect | undefined = undefined

  /**
   * Can be attached after creation
   * @internal
   */
  computed?: ComputedRefImpl<T>
  /**
   * @internal
   */
  allowRecurse?: boolean

  onStop?: () => void
  // dev only
  onTrack?: (event: DebuggerEvent) => void
  // dev only
  onTrigger?: (event: DebuggerEvent) => void

  constructor(
    public fn: () => T,
    public scheduler: EffectScheduler | null = null,
    scope?: EffectScope
  ) {
    recordEffectScope(this, scope)
  }

  run() {
    if (!this.active) {
      return this.fn()
    }
    let parent: ReactiveEffect | undefined = activeEffect
    let lastShouldTrack = shouldTrack
    while (parent) {
      if (parent === this) {
        return
      }
      parent = parent.parent
    }
    try {
      this.parent = activeEffect
      activeEffect = this
      shouldTrack = true

      trackOpBit = 1 << ++effectTrackDepth

      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this)
      } else {
        cleanupEffect(this)
      }
      return this.fn()
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this)
      }

      trackOpBit = 1 << --effectTrackDepth

      activeEffect = this.parent
      shouldTrack = lastShouldTrack
      this.parent = undefined
    }
  }

  stop() {
    if (this.active) {
        // 清除不需要的依赖
      cleanupEffect(this)
      if (this.onStop) {
        this.onStop()
      }
      this.active = false
    }
  }
}

function cleanupEffect(effect: ReactiveEffect) {
    // deps 是一个数组包着 Set集合的数据结构
    // [Set1(...), Set2(...),...] 每个Set 就是 Targetmap里的dep
  const { deps } = effect
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect)
    }
    deps.length = 0
  }
}
 ```

 #### get 收集依赖

 ```js
  // packages/reactivity/baseHandlers.ts
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    // ReactiveFlags 枚举，判断获取到相应的值，都是私有属性，拿到值返回即可
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly
    } else if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly
    } else if (key === ReactiveFlags.IS_SHALLOW) {
      return shallow
    } else if (
      key === ReactiveFlags.RAW &&
      receiver ===
        (isReadonly
          ? shallow
            ? shallowReadonlyMap
            : readonlyMap
          : shallow
          ? shallowReactiveMap
          : reactiveMap
        ).get(target)
    ) {
      return target
    }

    // 

    const targetIsArray = isArray(target)
        // 对Array ['includes'， 'indexOf' ,'lastIndexOf'] 数组改变，这方法的结果可能会发生改变，所以要特殊处理
        // 例如 执行arr.includes('xxx') 时，会跟踪 arr数组每个元素下标
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }

    // 利用 Reflect 映射返回值
    const res = Reflect.get(target, key, receiver)

    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        // 判断原生方法等，直接返回，不跟踪
      return res
    }

    if (!isReadonly) {
        // track 依赖收集
      track(target, TrackOpTypes.GET, key)
    }

    if (shallow) {
        // 浅响应式
      return res
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      // 这里 ref 响应时 不包裹 数组和 integer key
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key)
      return shouldUnwrap ? res.value : res
    }

    if (isObject(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      // 子对象也要递归劫持，
      // 如果属性时对象就转成响应式对象
      return isReadonly ? readonly(res) : reactive(res)
    }

    return res
  }
}
 ```

 来看看track源码

 ```js
// packages/reactivity/effect.ts
// 当前激活的 effect
export let activeEffect: ReactiveEffect | undefined
// 判断是否需要收集
export let shouldTrack = true
// 原始对象作为健，值也是一个 weakMap，effect集合为value 属性名作为 key
const targetMap = new WeakMap<any, KeyToDepMap>()
export function track(target: object, type: TrackOpTypes, key: unknown) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()))
    }
    let dep = depsMap.get(key)
    if (!dep) {
      depsMap.set(key, (dep = createDep()))
    }

    // 以上判断，缓存最终形成 targetMap 这样的数据结构
     /** 
   *  targetMap = {
   *    [target]: {
   *      [key]: new Set([ effect,... ])
   *    }
   *  }
   * */

    const eventInfo = __DEV__
      ? { effect: activeEffect, target, type, key }
      : undefined

    trackEffects(dep, eventInfo)
  }
}


export function trackEffects(
  dep: Dep,
  debuggerEventExtraInfo?: DebuggerEventExtraInfo
) {
  let shouldTrack = false
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit // set newly tracked
      shouldTrack = !wasTracked(dep)
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect!)
  }
 
  if (shouldTrack) {
    dep.add(activeEffect!)
    // 当前激活的 effect 也会存储dep 集合，配合 effect 里的cleanup 清除不需要的依赖
    activeEffect!.deps.push(dep)
    if (__DEV__ && activeEffect!.onTrack) {
      activeEffect!.onTrack(
        Object.assign(
          {
            effect: activeEffect!
          },
          debuggerEventExtraInfo
        )
      )
    }
  }
}
 ```

#### set 派发更新

```js
// packages/reactivity/baseHandlers.ts
function createSetter(shallow = false) {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ): boolean {
      // 获取old值
    let oldValue = (target as any)[key]
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
          // 如果是响应式对象获取原始对象
        value = toRaw(value)
        oldValue = toRaw(oldValue)
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          // 如果old值是 ref 响应对象，而新值不是，那更新老的响应对象 value值
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

// 判断当前set 的key 是否存在 target 上
    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key)
        // refelct.set 求值
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    // 如果target 是原始数据原型链上的属性不触发tigger
    if (target === toRaw(receiver)) {
        // 没有key 就新增有酒set set 会多一个oldValue
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
```


