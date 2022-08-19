import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,a as s}from"./app.8e201d3a.js";const d={},l=s(`<h1 id="vue3-\u9879\u76EE\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#vue3-\u9879\u76EE\u89E3\u6790" aria-hidden="true">#</a> vue3 \u9879\u76EE\u89E3\u6790</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u251C\u2500\u2500 packages
\u2502   \u251C\u2500\u2500 compiler-core      # \u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u7F16\u8BD1\u6A21\u5757\uFF0C\u4F8B\u5982\uFF1A\u57FA\u7840\u7684baseCompile\u7F16\u8BD1\u6A21\u7248\u6587\u4EF6\uFF0CbaseParse \u751F\u6210AST
\u2502   \u251C\u2500\u2500 compiler-dom       # \u57FA\u4E8Ecompiler-core,\u4E13\u4E3A\u6D4F\u89C8\u5668\u7684\u7F16\u8BD1\u6A21\u5757\uFF0C\u53EF\u4EE5\u770B\u5230\u5B83\u57FA\u4E8EbaseComplie
\u2502   \u251C\u2500\u2500 compiler-sfc       # \u7528\u6765\u7F16\u8BD1vue \u5355\u6587\u4EF6\u7EC4\u4EF6
\u2502   \u251C\u2500\u2500 compiler-ssr        # \u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173
\u2502   \u251C\u2500\u2500 global.d.ts
\u2502   \u251C\u2500\u2500 reactivity              # vue \u72EC\u7ACB\u7684\u54CD\u5E94\u5F0F\u6A21\u5757
\u2502   \u251C\u2500\u2500 reactivity-transform
\u2502   \u251C\u2500\u2500 runtime-core            # \u4E0E\u5E73\u53F0\u7684\u57FA\u7840\u6A21\u5757\uFF0C\u6709vue\u7684\u5404\u7C7BAPI \u865A\u62DFdom \u6E32\u67D3\u5668
\u2502   \u251C\u2500\u2500 runtime-dom             # \u57FA\u4E8Eruntime-core \u9488\u5BF9\u6D4F\u89C8\u5668\u7684\u8FD0\u884C\u65F6
\u2502   \u251C\u2500\u2500 runtime-test
\u2502   \u251C\u2500\u2500 server-renderer
\u2502   \u251C\u2500\u2500 sfc-playground
\u2502   \u251C\u2500\u2500 shared
\u2502   \u251C\u2500\u2500 size-check
\u2502   \u251C\u2500\u2500 template-explorer
\u2502   \u251C\u2500\u2500 vue                      # \u5F15\u5165\u5BFC\u51FA runtime-core \u8FD8\u6709\u7F16\u8BD1\u65B9\u6CD5
\u2502   \u2514\u2500\u2500 vue-compat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="monrepo" tabindex="-1"><a class="header-anchor" href="#monrepo" aria-hidden="true">#</a> monrepo</h2><p><code>Vue3</code>\u91C7\u7528 <code>monorepo</code> \u7BA1\u7406\u9879\u76EE\u4EE3\u7801\u7684\u65B9\u5F0F\u3002\u5B83\u662F\u4E00\u4E2A<code>repo</code> \u4E2D\u7BA1\u7406\u591A\u4E2A <code>package</code>,\u6BCF\u4E2A <code>package</code> \u90FD\u6709\u81EA\u5DF1\u7684\u7C7B\u578B\u58F0\u660E\u3001\u5355\u5143\u6D4B\u8BD5\u3002 <code>package</code> \u53C8\u53EF\u4EE5\u5355\u72EC\u53D1\u5E03\uFF0C\u603B\u4F53\u6765\u8BF4\u66F4\u4FBF\u4E8E\u7EF4\u62A4\uFF0C\u53D1\u7248\u548C\u9605\u8BFB</p><p>::: tip</p><ul><li>monrepo \u65B9\u5F0F\u5177\u4F53\u5B9E\u73B0\u662F<a href="https://pnpm.io/workspaces" target="_blank" rel="noopener noreferrer">PNPM Workspaces</a> :::</li></ul><h3 id="vue3-\u521B\u5EFA\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#vue3-\u521B\u5EFA\u5B9E\u4F8B" aria-hidden="true">#</a> <code>Vue3</code> \u521B\u5EFA\u5B9E\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
import {creatApp} from &#39;vue&#39;
import App from &#39;./App.vue&#39;

const app = createVue({
    /**/
})

const vm = app.mount(&#39;#app&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u548C3-\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u6216\u8005\u66F4\u6539\u5168\u5C40\u914D\u7F6E\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_2\u548C3-\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u6216\u8005\u66F4\u6539\u5168\u5C40\u914D\u7F6E\u5BF9\u6BD4" aria-hidden="true">#</a> 2\u548C3 \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u6216\u8005\u66F4\u6539\u5168\u5C40\u914D\u7F6E\u5BF9\u6BD4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/* Vue2 */
Vue.component(&#39;my-component&#39;, {
    /* \u9009\u9879 */
})
Vue.directive(&#39;my-directive&#39;,{

})
Vue.mixin({

})

/* Vue3 */
const app = createApp({

})

app.component(&#39;my-component&#39; /* */)
app.directive(&#39;my-directive&#39; /**/)
app.mixin()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6E90\u7801\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5165\u53E3" aria-hidden="true">#</a> \u6E90\u7801\u5165\u53E3</h3><p>1\u3001 \u627E\u5230 <code>createApp</code> \u6E90\u7801</p><p><code>import { createApp } from &#39;vue&#39;;</code></p><p>\u5728vue\u6E90\u7801\u91CC\u627E\u5230 <code>export * from &#39;@vue/runtime-dom&#39;</code></p><p>\u5728<code>runtime-dom</code> \u4E2D \u627E\u5230 <code>createApp</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    // runtime-dom/index.ts
    export const createApp = ((...args) =&gt; {
    // \u771F\u6B63\u7684createApp \u662F\u5728\u6E32\u67D3\u5668\u5C5E\u6027\u4E0A
    const app = ensureRenderer().createApp(...args)

    if (__DEV__) {
        injectNativeTagCheck(app)
        injectCompilerOptionsCheck(app)
    }

    const { mount } = app
    app.mount = (containerOrSelector: Element | ShadowRoot | string): any =&gt; {
        const container = normalizeContainer(containerOrSelector)
        if (!container) return

        const component = app._component
        if (!isFunction(component) &amp;&amp; !component.render &amp;&amp; !component.template) {
        // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it&#39;s
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML
        // 2.x compat check
        if (__COMPAT__ &amp;&amp; __DEV__) {
            for (let i = 0; i &lt; container.attributes.length; i++) {
            const attr = container.attributes[i]
            if (attr.name !== &#39;v-cloak&#39; &amp;&amp; /^(v-|:|@)/.test(attr.name)) {
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
        container.innerHTML = &#39;&#39;
        const proxy = mount(container, false, container instanceof SVGElement)
        if (container instanceof Element) {
        container.removeAttribute(&#39;v-cloak&#39;)
        container.setAttribute(&#39;data-v-app&#39;, &#39;&#39;)
        }
        return proxy
    }

    return app
    }) as CreateAppFunction&lt;Element&gt;
    /**
    * ensureRenderer \u8FD9\u91CC\u662F\u4E3A\u4E86\u6267\u884C createApp\u65F6\uFF0C\u624D\u7ED9renderer \u6E32\u67D3\u5668\u8D4B\u503C\uFF0C\u4E5F\u662F\u4F18\u5316\u7684\u4E00\u70B9
    * \u53EA\u5BFC\u5165reactive\uFF0C\u6CA1\u6709\u6267\u884CcreateApp \u4E0D\u4F1A\u6267\u884C createRenderer
    * \u90A3\u4E48\u6253\u5305\u65F6 tree-shaking \u53EF\u4EE5\u6447\u6389 runtime-core \u8FD9\u4E2A\u6A21\u5757
    * 
    * \u5728 runtime0-core \u91CC\u8C03\u7528 runtime-core \u7684 createRenderer \u65B9\u6CD5
    * \u5E76\u4F20\u5165 rendererOptins \u8FD9\u4E2A rendererOptions \u91CC\u5305\u542B\u7740\u6D4F\u89C8\u5668\u7684DOM API props
    * \u4F8B\u5982 createElement insertBefore \u7B49 \u53EF\u4EE5\u5728 runtime-dom/nodeOps.ts \u91CC\u770B
    * 
    * 
    * */
    function ensureRenderer() {
    return (
        renderer ||
        (renderer = createRenderer&lt;Node, Element | ShadowRoot&gt;(rendererOptions))
    )
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001 \u627E\u5230\u771F\u6B63\u7684 <code>createApp</code></p><p>\u5728 <code>runtime-dom/index.ts</code> \u4E2D\u627E\u5230 <code>createApp</code> \u7684\u5B9A\u4E49\uFF0C\u91CC\u9762\u5B9E\u73B0\u5927\u81F4\u4E09\u6B65\uFF0C \u521B\u5EFA <code>app</code> \u5E94\u7528\u5B9E\u4F8B\uFF0C\u6539\u5199 <code>mount</code> \u65B9\u6CD5\uFF0C \u8FD4\u56DE <code>app</code> \u5E94\u7528\u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
        //1. runtime-core.index.ts
        export { createRenderer, createHydrationRenderer } from &#39;./renderer&#39;

        //2. runtime-core/renderer.ts
        export function createRenderer&lt;
            HostNode = RendererNode,
            HostElement = RendererElement
            &gt;(options: RendererOptions&lt;HostNode, HostElement&gt;) {
            return baseCreateRenderer&lt;HostNode, HostElement&gt;(options)
        }

        // implementation
        /**
         * \u4F20\u5165\u4E0D\u540C\u73AF\u5883\u7684 renderOpitons \u5C31\u53EF\u4EE5\u751F\u6210\u4E0D\u540C\u73AF\u5883\u7684render 
         * 
         **/
        function baseCreateRenderer(
        options: RendererOptions,
        createHydrationFns?: typeof createHydrationFunctions
        ): any {

        // \u8FD9\u4E9B\u53D8\u91CF\u6700\u7EC8\u90FD\u662F\u4E3Aredner \u91CC\u7684patch\u670D\u52A1\u7684
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


        // \u751F\u6210\u5BF9\u5E94\u6D4F\u89C8\u5668\u7684render
        const render: RootRenderFunction = (vnode, container, isSVG) =&gt; {
            if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true)
            }
            } else {
            // \u9996\u6B21\u6267\u884C\u4F20\u5165\u6839\u7EC4\u4EF6
            // \u624B\u6307\u6267\u884C\u6302\u8F7D\u8FC7\u7A0B
            patch(container._vnode || null, vnode, container, null, null, null, isSVG)
            }
            flushPostFlushCbs()
            container._vnode = vnode
        }

        // TODO:
        return {
            render,// \u628A\u63A5\u53D7\u5230\u7684vnode\u88C5\u6362\u6210dom \u8FFD\u8E2A\u5230\u5BBF\u4E3B\u5143\u7D20\u4E2D
            hydrate,// ssr \u670D\u52A1\u7AEF\u5C06\u4E00\u4E2Avnode\u751F\u6210html
            // \u4EE5\u53C2\u6570\u5F62\u5F0F\u4F20\u5165 createApp \u4E2D\uFF0C\u6700\u7EC8\u4F9B app \u5B9E\u4F8B\u91CC\u7684mount \u4F7F\u7528
            createApp: createAppAPI(render, hydrate) // \u521B\u5EFAAPP \u5B9E\u4F8B
        }
        }

        //3. runtime-core/apiCreateApp.ts

        export function createAppAPI&lt;HostElement&gt;(
            render: RootRenderFunction,
            hydrate?: RootHydrateFunction
            ): CreateAppFunction&lt;HostElement&gt; {
            return function createApp(rootComponent, rootProps = null) {
                
                const context = createAppContext()
                const installedPlugins = new Set()

                let isMounted = false
                // \u58F0\u660E\u4E00\u4E2A\u5B9E\u4F8B
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
                 *  \u5728\u9879\u76EE\u91CC\u521B\u5EFAapp\u5B9E\u4F8B\uFF0C\u518D mount \u5230\u67D0\u4E2A\u8282\u70B9
                 *  \u6700\u7EC8\u4F1A\u6267\u884C\u5230\u8FD9\u91CC\uFF0C App \u7EC4\u4EF6\u4F5C\u4E3A rootComponent\uFF0Crender \u662F\u6D4F\u89C8\u5668\u73AF\u5883\u7684\u6E32\u67D3\u5668
                 * */
                mount(
                    rootContainer: HostElement,// \u5BBF\u4E3B\u5BF9\u8C61
                    isHydrate?: boolean,
                    isSVG?: boolean
                ): any {
                    // \u9996\u6B21\u6267\u884C
                    if (!isMounted) {
                    // \u521B\u5EFA\u6839\u7EC4\u4EF6\u865A\u62DFdom
                    const vnode = createVNode(
                        rootComponent as ConcreteComponent,
                        rootProps
                    )
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context

                    // HMR root reload
                    if (__DEV__) {
                        context.reload = () =&gt; {
                        render(cloneVNode(vnode), rootContainer, isSVG)
                        }
                    }

                    if (isHydrate &amp;&amp; hydrate) {
                        hydrate(vnode as VNode&lt;Node, Element&gt;, rootContainer as any)
                    } else {
                        // \u751F\u6210\u771F\u662Fdom
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
                    warn(\`Cannot unmount an app that is not mounted.\`)
                    }
                },

                provide(key, value) {
                    if (__DEV__ &amp;&amp; (key as string | symbol) in context.provides) {
                    warn(
                        \`App already provides property with key &quot;\${String(key)}&quot;. \` +
                        \`It will be overwritten with the new value.\`
                    )
                    }
                    // TypeScript doesn&#39;t allow symbols as index type
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.mount(&#39;#app&#39;)</code> \u5E76\u4E0D\u662F\u76F4\u63A5\u6267\u884Capp \u5B9E\u4F8B\u91CC\u7684mount,\u8FD9\u91CC\u7684mount \u65B9\u6CD5\u662F <code>runtime-core</code> \u91CC\u4E0E\u5E73\u53F0\u65E0\u5173\u3002\u4E8B\u5B9E\u4E0A <code>runtime-dom</code> \u6709\u91CD\u5199\u8FC7 <code>mount</code> \u4EA6\u662F\u9488\u5BF9\u6D4F\u89C8\u5668\u73AF\u5883\u3002</p><h2 id="vue3-\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue3-\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> Vue3 \u7684\u54CD\u5E94\u5F0F</h2><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h3><p><code>Vue2</code> \u5185\u90E8\u901A\u8FC7<code>Object.defineProperty</code> API \u52AB\u6301\u6570\u636E\u7684\u53D8\u5316\uFF0C\u6DF1\u5EA6\u904D\u5386 data \u51FD\u6570\u91CC\u7684\u5BF9\u8C61\uFF0C\u7ED9\u5BF9\u8C61\u6BCF\u4E2A\u5C5E\u6027\u8BBE\u7F6E <code>getter</code> <code>setter</code></p><p>\u89E6\u53D1 <code>getter</code> \u4F1A\u901A\u8FC7 <code>Dep</code> \u7C7B\u505A\u4F9D\u8D56\u6536\u96C6\u64CD\u4F5C\uFF0C\u6536\u96C6\u5F53\u524D <code>Dep.target</code>, \u4E5F\u5C31\u662F <code>watcher</code>.</p><p>\u89E6\u53D1<code>setter</code>, \u4F1A\u505A\u6D3E\u53D1\u66F4\u65B0\u64CD\u4F5C\uFF0C\u6267\u884C <code>dep.notify</code> \u901A\u77E5\u6536\u96C6\u5230\u7684\u5404\u7C7B <code>watcher</code> \u66F4\u65B0\uFF0C\u5982 <code>computed</code> <code>watcher</code> <code>user watcher</code> <code>\u6E32\u67D3 watcher</code></p><p><code>Vue3</code> \u7528 <code>Proxy</code> \u91CD\u6784\u4E86\u54CD\u5E94\u5F0F\u90E8\u5206\uFF0C <code>effect</code> \u526F\u4F5C\u7528\u51FD\u6570\u66FF\u4EE3\u4E86<code>watcher</code></p><p><code>Proxy</code> \u7684 <code>get</code> handle \u91CC\u6267\u884C <code>track()</code> \u7528\u6765\u8DDF\u8E2A\u6536\u96C6\u4F9D\u8D56\uFF08\u6536\u96C6<code>activeEffect</code> \u4E5F\u5C31\u662F <code>effect</code>\uFF09</p><p><code>set</code> handle \u91CC\u6267\u884C <code>trigger()</code> \u7528\u6765\u89E6\u53D1\u54CD\u5E94\uFF08\u6267\u884C\u6536\u96C6\u7684<code>effect</code>\uFF09</p><h3 id="\u72EC\u7ACB\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u72EC\u7ACB\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u72EC\u7ACB\u7684\u54CD\u5E94\u5F0F</h3><p><code>reactivity</code> \u53EF\u4EE5\u5355\u72EC\u5B89\u88C5\u4F7F\u7528\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const {effect, reactive}  =  require(&#39;@vue/reactivity&#39;)
// \u8C03\u7528 reactive \u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u4E5F\u5C31\u662F proxy \u8BBE\u7F6E get, set, handle
const obj = reactive({num:1})

// effect \u5B9A\u4E49\u526F\u4F5C\u7528\u51FD\u6570
effect(()=&gt;{
    console.log(obj.num)
})

// \u4FEE\u6539num, trigger \u89E6\u53D1\u54CD\u5E94\uFF0C\u6267\u884Ceffect
setInterval(()=&gt;{
    ++obj.num;
}, 100)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reactive-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#reactive-\u6E90\u7801" aria-hidden="true">#</a> reactive \u6E90\u7801</h4><p><code>ReactiveFlags</code> \u679A\u4E3E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/reactivity/reactive.ts
export const enum ReactiveFlags {
  SKIP = &#39;__v_skip&#39;, // \u8FD9\u4E2A\u5C5E\u6027\u503C\u4E3A true \u7684\u5BF9\u8C61\u90FD\u4F1A\u8DF3\u8FC7\u4EE3\u7406
  IS_REACTIVE = &#39;__v_isReactive&#39;, // \u83B7\u53D6\u662F\u5426\u662F\u54CD\u5E94\u5F0F
  IS_READONLY = &#39;__v_isReadonly&#39;,// \u662F\u5426\u662F\u53EA\u8BFB
  IS_SHALLOW = &#39;__v_isShallow&#39;, // \u662F\u5426\u662F\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5C42\u54CD\u5E94\u5F0F\u8F6C\u6362
  RAW = &#39;__v_raw&#39; // \u8FD9\u4E2A\u5C5E\u6027\u4F1A\u5E94\u7528\u5230\u539F\u59CB\u5BF9\u8C61
}

export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // \u5982\u679C\u662F\u53EA\u8BFB\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u76F4\u63A5\u8FD4\u56DE\u672C\u8EAB
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target, // \u5BF9\u8C61
    false, //  \u662F\u5426\u53EA\u8BFB
    mutableHandlers, // proxy handle
    mutableCollectionHandlers, // \u96C6\u5408\u6570\u636E\u7684 proxy handle
    reactiveMap
  )
}

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler&lt;any&gt;,
  collectionHandlers: ProxyHandler&lt;any&gt;,
  proxyMap: WeakMap&lt;Target, any&gt;
) {
    // \u4E0D\u662F\u5BF9\u8C61\u4E4B\u95F4\u8FD4\u56DE
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(\`value cannot be made reactive: \${String(target)}\`)
    }
    return target
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  // \u5982\u679C\u5DF2\u7ECF\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\uFF0C\u9664\u975E\u662F readonly \u4F5C\u7528\u5728\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A
  if (
    target[ReactiveFlags.RAW] &amp;&amp;
    !(isReadonly &amp;&amp; target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // target already has corresponding Proxy
  //  \u5BF9\u8C61\u5DF2\u7ECF\u662F\u54CD\u5E94\u5F0F\u76F4\u63A5\u8FD4\u56DE
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only a whitelist of value types can be observed.
// \u53EA\u6709\u767D\u540D\u5355\u7684\u503C\u7C7B\u578B\u53EF\u4EE5\u54CD\u5E94
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  // \u4F7F\u7528proxy \u521B\u5EFA\u60F3\u56DE\u5E94\u662F\u5BF9\u8C61
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  // \u5B58\u5165\u7F13\u5B58 map \u4E2D
  proxyMap.set(target, proxy)
  return proxy
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>baseHandlers</code> \u91CC\u9762\u52AB\u6301\u64CD\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/reactivity/baseHandlers.ts
// \u666E\u901A\u5BF9\u8C61\u7684 handlers
export const mutableHandlers: ProxyHandler&lt;object&gt; = {
  get, // \u8BBF\u95EE\u5BF9\u8C61\u5C5E\u6027\u7684 handler
  set, // \u8BBE\u7F6E\u5BF9\u8C61\u5C5E\u6027\u7684 handeler
  deleteProperty,// \u5220\u9664\u5BF9\u8C61\u5C5E\u6027\u7684handler
  has,// \u9488\u5BF9 in \u64CD\u4F5C\u7B26\u7684handler
  ownKeys// \u5BF9\u8C61\u4E0A getOenPropertyNames, getOwnPropertySymbols, keys \u7B49\u65B9\u6CD5\u7684handler
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Proxy</code> \u5F25\u8865\u4E86 <code>Object.defineProperty</code> \u9700\u8981\u9012\u5F52\u5BF9\u8C61\uFF0C\u7ED9\u6BCF\u4E2A\u5C5E\u6027\u8BBE\u7F6E<code>setter</code> <code>getter</code> ,\u65E0\u6CD5\u52AB\u6301\u4E00\u6B21\u989D\u5176\u4ED6\u64CD\u4F5C\uFF0C\u6570\u7EC4\u4E5F\u9700\u8981hack \u5904\u7406\u65B0\u589E\u5C5E\u6027\u9700\u8981\u989D\u5916\u7684\u65B9\u6CD5\uFF0CMap, Set, weekmap \u7B49\u6570\u636E\u7ED3\u6784\u65E0\u6CD5\u54CD\u5E94\u5F0F\u7B49\u4E0D\u8DB3\uFF1B</p><h4 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> effect</h4><p><code>effect</code> \u65B9\u6CD5\u91CC\u4F20\u5165 \u51FD\u6570 <code>()=&gt;{console.log(obj.num)}</code> \u51FD\u6570\u91CC\u8BBF\u95EE\u4E86\u54CD\u5E94\u5F0F\u5BF9\u8C61 obj \u7684num \u5C5E\u6027\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/reactivity/effect.ts
export function effect&lt;T = any&gt;(
 fn: () =&gt; T,
 options?: ReactiveEffectOptions
): ReactiveEffectRunner {
 if ((fn as ReactiveEffectRunner).effect) {
     // 1. \u5982\u679Cfn \u91CC\u6709effect \u51FD\u6570\u6807\u8BC6\uFF0C\u5C31\u6307\u5411\u539F\u59CB\u51FD\u6570\uFF0C\u5728\u4E0B\u9762ReactiveEffect\u53EF\u4EE5\u770B\u5230fn\u7684\u5B9A\u4E49
   fn = (fn as ReactiveEffectRunner).effect.fn
 }

   // 2. \u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u526F\u4F5C\u7528\u51FD\u6570
 const _effect = new ReactiveEffect(fn)
 if (options) {
   extend(_effect, options)
   if (options.scope) recordEffectScope(_effect, options.scope)
 }
 if (!options || !options.lazy) {
     // \u6267\u884C effect, \u8FD9\u4E2A\u6CA1\u6709\u50CF computed watcher \u7684lazy\u5C5E\u6027\uFF0C\u82E5\u4E3Atrue \u5C31\u4E0D\u7ACB\u5373\u6267\u884C
   _effect.run()
 }
 const runner = _effect.run.bind(_effect) as ReactiveEffectRunner
 runner.effect = _effect
 // \u8FD4\u56DE effect \u51FD\u6570
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

export class ReactiveEffect&lt;T = any&gt; {
 active = true
 deps: Dep[] = []
 parent: ReactiveEffect | undefined = undefined

 /**
  * Can be attached after creation
  * @internal
  */
 computed?: ComputedRefImpl&lt;T&gt;
 /**
  * @internal
  */
 allowRecurse?: boolean

 onStop?: () =&gt; void
 // dev only
 onTrack?: (event: DebuggerEvent) =&gt; void
 // dev only
 onTrigger?: (event: DebuggerEvent) =&gt; void

 constructor(
   public fn: () =&gt; T,
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

     trackOpBit = 1 &lt;&lt; ++effectTrackDepth

     if (effectTrackDepth &lt;= maxMarkerBits) {
       initDepMarkers(this)
     } else {
       cleanupEffect(this)
     }
     return this.fn()
   } finally {
     if (effectTrackDepth &lt;= maxMarkerBits) {
       finalizeDepMarkers(this)
     }

     trackOpBit = 1 &lt;&lt; --effectTrackDepth

     activeEffect = this.parent
     shouldTrack = lastShouldTrack
     this.parent = undefined
   }
 }

 stop() {
   if (this.active) {
       // \u6E05\u9664\u4E0D\u9700\u8981\u7684\u4F9D\u8D56
     cleanupEffect(this)
     if (this.onStop) {
       this.onStop()
     }
     this.active = false
   }
 }
}

function cleanupEffect(effect: ReactiveEffect) {
   // deps \u662F\u4E00\u4E2A\u6570\u7EC4\u5305\u7740 Set\u96C6\u5408\u7684\u6570\u636E\u7ED3\u6784
   // [Set1(...), Set2(...),...] \u6BCF\u4E2ASet \u5C31\u662F Targetmap\u91CC\u7684dep
 const { deps } = effect
 if (deps.length) {
   for (let i = 0; i &lt; deps.length; i++) {
     deps[i].delete(effect)
   }
   deps.length = 0
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-\u6536\u96C6\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#get-\u6536\u96C6\u4F9D\u8D56" aria-hidden="true">#</a> get \u6536\u96C6\u4F9D\u8D56</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> // packages/reactivity/baseHandlers.ts
function createGetter(isReadonly = false, shallow = false) {
 return function get(target: Target, key: string | symbol, receiver: object) {
   // ReactiveFlags \u679A\u4E3E\uFF0C\u5224\u65AD\u83B7\u53D6\u5230\u76F8\u5E94\u7684\u503C\uFF0C\u90FD\u662F\u79C1\u6709\u5C5E\u6027\uFF0C\u62FF\u5230\u503C\u8FD4\u56DE\u5373\u53EF
   if (key === ReactiveFlags.IS_REACTIVE) {
     return !isReadonly
   } else if (key === ReactiveFlags.IS_READONLY) {
     return isReadonly
   } else if (key === ReactiveFlags.IS_SHALLOW) {
     return shallow
   } else if (
     key === ReactiveFlags.RAW &amp;&amp;
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
       // \u5BF9Array [&#39;includes&#39;\uFF0C &#39;indexOf&#39; ,&#39;lastIndexOf&#39;] \u6570\u7EC4\u6539\u53D8\uFF0C\u8FD9\u65B9\u6CD5\u7684\u7ED3\u679C\u53EF\u80FD\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u6240\u4EE5\u8981\u7279\u6B8A\u5904\u7406
       // \u4F8B\u5982 \u6267\u884Carr.includes(&#39;xxx&#39;) \u65F6\uFF0C\u4F1A\u8DDF\u8E2A arr\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u4E0B\u6807
   if (!isReadonly &amp;&amp; targetIsArray &amp;&amp; hasOwn(arrayInstrumentations, key)) {
     return Reflect.get(arrayInstrumentations, key, receiver)
   }

   // \u5229\u7528 Reflect \u6620\u5C04\u8FD4\u56DE\u503C
   const res = Reflect.get(target, key, receiver)

   if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
       // \u5224\u65AD\u539F\u751F\u65B9\u6CD5\u7B49\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u8DDF\u8E2A
     return res
   }

   if (!isReadonly) {
       // track \u4F9D\u8D56\u6536\u96C6
     track(target, TrackOpTypes.GET, key)
   }

   if (shallow) {
       // \u6D45\u54CD\u5E94\u5F0F
     return res
   }

   if (isRef(res)) {
     // ref unwrapping - does not apply for Array + integer key.
     // \u8FD9\u91CC ref \u54CD\u5E94\u65F6 \u4E0D\u5305\u88F9 \u6570\u7EC4\u548C integer key
     const shouldUnwrap = !targetIsArray || !isIntegerKey(key)
     return shouldUnwrap ? res.value : res
   }

   if (isObject(res)) {
     // Convert returned value into a proxy as well. we do the isObject check
     // here to avoid invalid value warning. Also need to lazy access readonly
     // and reactive here to avoid circular dependency.
     // \u5B50\u5BF9\u8C61\u4E5F\u8981\u9012\u5F52\u52AB\u6301\uFF0C
     // \u5982\u679C\u5C5E\u6027\u65F6\u5BF9\u8C61\u5C31\u8F6C\u6210\u54CD\u5E94\u5F0F\u5BF9\u8C61
     return isReadonly ? readonly(res) : reactive(res)
   }

   return res
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u770B\u770Btrack\u6E90\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/reactivity/effect.ts
// \u5F53\u524D\u6FC0\u6D3B\u7684 effect
export let activeEffect: ReactiveEffect | undefined
// \u5224\u65AD\u662F\u5426\u9700\u8981\u6536\u96C6
export let shouldTrack = true
// \u539F\u59CB\u5BF9\u8C61\u4F5C\u4E3A\u5065\uFF0C\u503C\u4E5F\u662F\u4E00\u4E2A weakMap\uFF0Ceffect\u96C6\u5408\u4E3Avalue \u5C5E\u6027\u540D\u4F5C\u4E3A key
const targetMap = new WeakMap&lt;any, KeyToDepMap&gt;()
export function track(target: object, type: TrackOpTypes, key: unknown) {
 if (shouldTrack &amp;&amp; activeEffect) {
   let depsMap = targetMap.get(target)
   if (!depsMap) {
     targetMap.set(target, (depsMap = new Map()))
   }
   let dep = depsMap.get(key)
   if (!dep) {
     depsMap.set(key, (dep = createDep()))
   }

   // \u4EE5\u4E0A\u5224\u65AD\uFF0C\u7F13\u5B58\u6700\u7EC8\u5F62\u6210 targetMap \u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784
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
 if (effectTrackDepth &lt;= maxMarkerBits) {
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
   // \u5F53\u524D\u6FC0\u6D3B\u7684 effect \u4E5F\u4F1A\u5B58\u50A8dep \u96C6\u5408\uFF0C\u914D\u5408 effect \u91CC\u7684cleanup \u6E05\u9664\u4E0D\u9700\u8981\u7684\u4F9D\u8D56
   activeEffect!.deps.push(dep)
   if (__DEV__ &amp;&amp; activeEffect!.onTrack) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set-\u6D3E\u53D1\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#set-\u6D3E\u53D1\u66F4\u65B0" aria-hidden="true">#</a> set \u6D3E\u53D1\u66F4\u65B0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/reactivity/baseHandlers.ts
function createSetter(shallow = false) {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ): boolean {
      // \u83B7\u53D6old\u503C
    let oldValue = (target as any)[key]
    if (isReadonly(oldValue) &amp;&amp; isRef(oldValue) &amp;&amp; !isRef(value)) {
      return false
    }
    if (!shallow &amp;&amp; !isReadonly(value)) {
      if (!isShallow(value)) {
          // \u5982\u679C\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\u83B7\u53D6\u539F\u59CB\u5BF9\u8C61
        value = toRaw(value)
        oldValue = toRaw(oldValue)
      }
      if (!isArray(target) &amp;&amp; isRef(oldValue) &amp;&amp; !isRef(value)) {
          // \u5982\u679Cold\u503C\u662F ref \u54CD\u5E94\u5BF9\u8C61\uFF0C\u800C\u65B0\u503C\u4E0D\u662F\uFF0C\u90A3\u66F4\u65B0\u8001\u7684\u54CD\u5E94\u5BF9\u8C61 value\u503C
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

// \u5224\u65AD\u5F53\u524Dset \u7684key \u662F\u5426\u5B58\u5728 target \u4E0A
    const hadKey =
      isArray(target) &amp;&amp; isIntegerKey(key)
        ? Number(key) &lt; target.length
        : hasOwn(target, key)
        // refelct.set \u6C42\u503C
    const result = Reflect.set(target, key, value, receiver)
    // don&#39;t trigger if target is something up in the prototype chain of original
    // \u5982\u679Ctarget \u662F\u539F\u59CB\u6570\u636E\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\u4E0D\u89E6\u53D1tigger
    if (target === toRaw(receiver)) {
        // \u6CA1\u6709key \u5C31\u65B0\u589E\u6709\u9152set set \u4F1A\u591A\u4E00\u4E2AoldValue
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
// packages/reactivity/src/effect.ts
export function trigger(
  target: object,
  type: TriggerOpTypes,
  key?: unknown,
  newValue?: unknown,
  oldValue?: unknown,
  oldTarget?: Map&lt;unknown, unknown&gt; | Set&lt;unknown&gt;
) {
  // \u4ECE\u4E4B\u524Dtrack\u91CC\u5B58\u50A8\u7684targetMap \u91CC\u53D6\u51FA\u5BF9\u5E94 desMap
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    // never been tracked
    // \u5982\u679C\u6CA1\u6709\u4F9D\u8D56\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u540E\u9762 effect \u7684\u6267\u884C
    return
  }

  let deps: (Dep | undefined)[] = []
  if (type === TriggerOpTypes.CLEAR) {
    // collection being cleared
    // trigger all effects for target
    deps = [...depsMap.values()]
  } else if (key === &#39;length&#39; &amp;&amp; isArray(target)) {
    depsMap.forEach((dep, key) =&gt; {
      if (key === &#39;length&#39; || key &gt;= (newValue as number)) {
        deps.push(dep)
      }
    })
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key))
    }

    // also run for iteration key on ADD | DELETE | Map.SET
    switch (type) {
      case TriggerOpTypes.ADD:
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY))
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY))
          }
        } else if (isIntegerKey(key)) {
          // new index added to array -&gt; length changes
          deps.push(depsMap.get(&#39;length&#39;))
        }
        break
      case TriggerOpTypes.DELETE:
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY))
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY))
          }
        }
        break
      case TriggerOpTypes.SET:
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY))
        }
        break
    }
  }

  const eventInfo = __DEV__
    ? { target, type, key, newValue, oldValue, oldTarget }
    : undefined

  if (deps.length === 1) {
    if (deps[0]) {
      if (__DEV__) {
        triggerEffects(deps[0], eventInfo)
      } else {
        triggerEffects(deps[0])
      }
    }
  } else {
    const effects: ReactiveEffect[] = []
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep)
      }
    }
    if (__DEV__) {
      triggerEffects(createDep(effects), eventInfo)
    } else {
      // \u521B\u5EFAdep\u53BB\u6267\u884C
      triggerEffects(createDep(effects))
    }
  }
}

export function triggerEffects(
  dep: Dep | ReactiveEffect[],
  debuggerEventExtraInfo?: DebuggerEventExtraInfo
) {
  // spread into array for stabilization
  // \u5FAA\u73AF\u6267\u884C
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (__DEV__ &amp;&amp; effect.onTrigger) {
        effect.onTrigger(extend({ effect }, debuggerEventExtraInfo))
      }
      // \u4E00\u4E2A\u8C03\u5EA6\u5668\u53EF\u4EE5\u53BB\u505A\u6392\u5E8F\uFF0C\u53BB\u91CD\u653E\u5165 nexttick \u4E2D\u5F02\u6B65\u6267\u884C
      // \u8FD9\u4E2A\u8C03\u5EA6\u5668\u6211\u4EEC\u4E5F\u662F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7684
      if (effect.scheduler) {
        effect.scheduler()
      } else {
        // \u5F00\u59CB\u6267\u884C
        effect.run()
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3" aria-hidden="true">#</a> \u6E32\u67D3</h2><p>1\u3001normalizContainer \u5F97\u5230DOM \u5BB9\u5668</p><p>2\u3001 createVNode \u6839\u636E\u4F20\u5165\u7684APP \u7EC4\u4EF6 \u521B\u5EFAVNode</p><p>3\u3001renderVNode \u5E76\u6302\u8F7D\u5230DOM \u5BB9\u5668\u4E0A</p><p>4\u3001\u8FD4\u56DEVNode.component \u7684\u4EE3\u7406</p><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> mount</h3><p>1\u3001\u83B7\u53D6DOM\u5BB9\u5668 2\u3001 \u5224\u65AD\u4F20\u5165\u7684\u6839\u7EC4\u4EF6 3\u3001 \u6267\u884C\u6807\u51C6\u7684 <code>mount</code> \u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
  // packages/runtime-dom/src/index.ts
  const { mount } = app
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any =&gt; {
    // \u7EDF\u4E00\u5BB9\u5668\uFF0Cmount \u53C2\u6570\u53EF\u80FD\u662FDOM\u5BF9\u8C61\u6216\u8005\u9009\u62E9\u5668
    // \u5982\u679C\u662F\u9009\u62E9\u5668\u9152\u83B7\u53D6\u5BF9\u5E94\u7684DOM
    const container = normalizeContainer(containerOrSelector)
    if (!container) return

    // app._component \u662F \u901A\u8FC7 rootComponent \u53C2\u6570 \u4F20\u5165\u6253\u5305\u7F16\u8BD1\u8FC7\u7684APP\u7EC4\u4EF6
    const component = app._component
    // \u5982\u679C\u4F20\u5165\u7684\u7EC4\u4EF6\u6CA1\u6709\u5B9A\u4E49 render, \u6CA1\u6709\u6A21\u7248\uFF0C\u90A3\u5C31\u53D6DOM \u91CC\u539F\u672C\u5185\u5BB9\u5F53\u4F5C\u6A21\u7248
    if (!isFunction(component) &amp;&amp; !component.render &amp;&amp; !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it&#39;s
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML
      // 2.x compat check
      if (__COMPAT__ &amp;&amp; __DEV__) {
        for (let i = 0; i &lt; container.attributes.length; i++) {
          const attr = container.attributes[i]
          if (attr.name !== &#39;v-cloak&#39; &amp;&amp; /^(v-|:|@)/.test(attr.name)) {
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
    // \u52A0\u8F7D\u524D\u6E05\u7A7Ahtml\u5185\u5BB9
    container.innerHTML = &#39;&#39;
    // \u83B7\u53D6\u57FA\u7840\u7684mount \u65B9\u6CD5
    const proxy = mount(container, false, container instanceof SVGElement)
    if (container instanceof Element) {
      container.removeAttribute(&#39;v-cloak&#39;)
      container.setAttribute(&#39;data-v-app&#39;, &#39;&#39;)
    }
    return proxy
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6807\u51C6\u7684\u53EF\u8DE8\u5E73\u53F0\u7684-mount-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u7684\u53EF\u8DE8\u5E73\u53F0\u7684-mount-\u65B9\u6CD5" aria-hidden="true">#</a> \u6807\u51C6\u7684\u53EF\u8DE8\u5E73\u53F0\u7684 <code>mount</code> \u65B9\u6CD5</h3><p>1\u3001\u521B\u5EFAVNode 2\u3001\u6E32\u67D3Vnode \u4E3A\u771F\u5B9EDOM</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
// packages/runtime-core/src/apiCreateApp.ts
      mount(
        rootContainer: HostElement,// \u5BBF\u4E3B\u5BF9\u8C61
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {
        // app \u5E94\u7528\u793A\u8303\u5DF2\u7ECF\u6302\u8F7D
        if (!isMounted) {
          // 1.\u521B\u5EFAVNode \u8FD9\u91CC\u7684 rootComponent \u5C31\u662F createApp \u4F20\u5165\u7684 App \u7EC4\u4EF6
          const vnode = createVNode(
            rootComponent as ConcreteComponent,
            rootProps
          )
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          // \u5B58\u50A8 app\u5E94\u7528\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E3B\u8981\u6709 app \u5B9E\u4F8B\u672C\u8EAB\uFF0C\u5404\u7C7B\u914D\u7F6E\u9879\uFF0C\u8BBE\u7F6E\u9879
          vnode.appContext = context

          // HMR root reload
          if (__DEV__) {
            context.reload = () =&gt; {
              render(cloneVNode(vnode), rootContainer, isSVG)
            }
          }
          // \u5224\u65AD\u662F\u5426\u662F\u670D\u52A1\u7AEF\u76F8\u5173\u6E32\u67D3
          if (isHydrate &amp;&amp; hydrate) {
            hydrate(vnode as VNode&lt;Node, Element&gt;, rootContainer as any)
          } else {
            // render \u6E32\u67D3Vnode
            // render \u662F ensureRenderer \u521B\u5EFA\u51FA\u6765\u7684
            render(vnode, rootContainer, isSVG)
          }
          isMounted = true
          // \u5B58\u50A8 DOM \u5BB9\u5668
          app._container = rootContainer
          // for devtools and telemetry
          ;(rootContainer as any).__vue_app__ = app

          if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
            app._instance = vnode.component
            devtoolsInitApp(app, version)
          }

          return getExposeProxy(vnode.component!) || vnode.component!.proxy
        } else if (__DEV__) {
          warn(
            \`App has already been mounted.\\n\` +
              \`If you want to remount the same app, move your app creation logic \` +
              \`into a factory function and create fresh app instances for each \` +
              \`mount - e.g. \\\`const createMyApp = () =&gt; createApp(App)\\\`\`
          )
        }
      },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA-\u6E32\u67D3vnode" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-\u6E32\u67D3vnode" aria-hidden="true">#</a> \u521B\u5EFA&amp;\u6E32\u67D3VNode</h3><p>VNode: \u901A\u8FC7Javascript \u5BF9\u8C61\u63CF\u8FF0DOM\u3001\u4E8B\u4EF6</p><p>\u597D\u5904\uFF1A 1\u3001\u4E0D\u7528\u9891\u7E41\u66F4\u6539DOM</p><p>2\u3001\u62BD\u8C61\u5316\u5E26\u6765\u8DE8\u5E73\u53F0\u80FD\u529B</p><p>3\u3001VNode \u64CD\u4F5C \u5BF9\u6BD4\u76F4\u63A5\u64CD\u4F5CDOM \u4EA7\u751F\u6027\u80FD\u4F18\u52BF\uFF08\u6570\u636E\u91CF\u5927\u6CA1\u6709\u660E\u663E\u4F18\u52BF\uFF09</p><h4 id="\u521B\u5EFAvnode" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAvnode" aria-hidden="true">#</a> \u521B\u5EFAVNode</h4><p>1\u3001\u5224\u65AD\u662F\u5426\u4E3A VNode, Class \u7EC4\u4EF6\uFF0C\u6709 props\u5219\u8FDB\u884C class style \u6807\u51C6\u5316\u8F6C\u6362</p><p>2\u3001\u5224\u65AD\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u8BA1\u7B97\u51FA\u6807\u793A \u5F97\u51FA 4</p><p>3\u3001\u521B\u5EFAVNode</p><p>4\u3001\u6807\u51C6\u5316\u5B50\u8282\u70B9\uFF0C\u8FD9\u91CC\u4F20\u5165App \u7EC4\u4EF6\u65F6\uFF0Cchildren\u4E3Anull</p><p>5\u3001\u8FD4\u56DEVNode</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/runtime-core/src/vnode.ts
function _createVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
  props: (Data &amp; VNodeProps) | null = null,
  children: unknown = null,
  patchFlag: number = 0,
  dynamicProps: string[] | null = null,
  isBlockNode = false
): VNode {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (__DEV__ &amp;&amp; !type) {
      warn(\`Invalid vnode type when creating vnode: \${type}.\`)
    }
    type = Comment
  }

  // \u5982\u679C\u662FVNode \u76F4\u63A5clone \u901A\u8FC7 _v_isVNode \u5C5E\u6027\u5224\u65AD
  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // &lt;component :is=&quot;vnode&quot;/&gt;
    // #2078 make sure to merge refs during the clone instead of overwriting it
    const cloned = cloneVNode(type, props, true /* mergeRef: true */)
    if (children) {
      normalizeChildren(cloned, children)
    }
    return cloned
  }

  // class component normalization.
  // \u7C7B\u7EC4\u4EF6
  if (isClassComponent(type)) {
    type = type.__vccOpts
  }

  // 2.x async/functional component compat
  if (__COMPAT__) {
    type = convertLegacyComponent(type, currentRenderingInstance)
  }

  // class &amp; style normalization.
  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    props = guardReactiveProps(props)!
    let { class: klass, style } = props
    if (klass &amp;&amp; !isString(klass)) {
      props.class = normalizeClass(klass)
    }
    if (isObject(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (isProxy(style) &amp;&amp; !isArray(style)) {
        style = extend({}, style)
      }
      props.style = normalizeStyle(style)
    }
  }

  // encode the vnode type information into a bitmap
  // \u7ED9\u7EC4\u4EF6\u7C7B\u578B\u589E\u52A0\u4E00\u4E2A\u7F16\u7801\u6807\u793A
  const shapeFlag = isString(type)
    ? ShapeFlags.ELEMENT // dom \u5143\u7D20
    : __FEATURE_SUSPENSE__ &amp;&amp; isSuspense(type)
    ? ShapeFlags.SUSPENSE // suspense vue3 \u65B0\u589E\u7EC4\u4EF6
    : isTeleport(type)
    ? ShapeFlags.TELEPORT // teleport vue3 \u65B0\u589E\u7684\u7EC4\u4EF6
    : isObject(type)
    ? ShapeFlags.STATEFUL_COMPONENT // \u7EC4\u4EF6\u72B6\u6001
    : isFunction(type)
    ? ShapeFlags.FUNCTIONAL_COMPONENT // \u51FD\u6570\u7EC4\u4EF6
    : 0

  if (__DEV__ &amp;&amp; shapeFlag &amp; ShapeFlags.STATEFUL_COMPONENT &amp;&amp; isProxy(type)) {
    type = toRaw(type)
    warn(
      \`Vue received a Component which was made a reactive object. This can \` +
        \`lead to unnecessary performance overhead, and should be avoided by \` +
        \`marking the component with \\\`markRaw\\\` or using \\\`shallowRef\\\` \` +
        \`instead of \\\`ref\\\`.\`,
      \`\\nComponent that was made reactive: \`,
      type
    )
  }

  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  )
}


function createBaseVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
  props: (Data &amp; VNodeProps) | null = null,
  children: unknown = null,
  patchFlag = 0,
  dynamicProps: string[] | null = null,
  shapeFlag = type === Fragment ? 0 : ShapeFlags.ELEMENT,
  isBlockNode = false,
  needFullChildrenNormalization = false
) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props &amp;&amp; normalizeKey(props),
    ref: props &amp;&amp; normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  } as VNode

  if (needFullChildrenNormalization) {
    /**
     * \u6807\u51C6\u5316\u5B50\u8282\u70B9
     * \u7ED9\u4E0D\u540C\u7C7B\u578B\u7684children \u7F16\u7801\u6807\u793A type\uFF1A8\u6587\u672C 16:\u6570\u7EC4 32 slots\uFF1A\u540C\u65F6\u4E5F\u8F6C\u6210\u5BF9\u5E94\u7C7B\u578B
     * \u540C\u65F6\u4F1A\u56E0children \u7C7B\u578B\u4E0D\u540C\uFF0C\u4FEE\u6539VNode \u7684 shapeFlag \u4E3A\u4EE5\u540E\u6302\u8F7D\u4F7F\u7528
     * */
    normalizeChildren(vnode, children)
    // normalize suspense children
    if (__FEATURE_SUSPENSE__ &amp;&amp; shapeFlag &amp; ShapeFlags.SUSPENSE) {
      ;(type as typeof SuspenseImpl).normalize(vnode)
    }
  } else if (children) {
    // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= isString(children)
      ? ShapeFlags.TEXT_CHILDREN
      : ShapeFlags.ARRAY_CHILDREN
  }

  // validate key
  if (__DEV__ &amp;&amp; vnode.key !== vnode.key) {
    warn(\`VNode created with invalid key (NaN). VNode type:\`, vnode.type)
  }

  // track vnode for block tree
  if (
    isBlockTreeEnabled &gt; 0 &amp;&amp;
    // avoid a block node from tracking itself
    !isBlockNode &amp;&amp;
    // has current parent block
    currentBlock &amp;&amp;
    // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn&#39;t need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag &gt; 0 || shapeFlag &amp; ShapeFlags.COMPONENT) &amp;&amp;
    // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== PatchFlags.HYDRATE_EVENTS
  ) {
    currentBlock.push(vnode)
  }

  if (__COMPAT__) {
    convertLegacyVModelProps(vnode)
    defineLegacyVNodeProperties(vnode)
  }

  return vnode
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6E32\u67D3vnode" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3vnode" aria-hidden="true">#</a> \u6E32\u67D3VNode</h4><p><code>render(vnode, rootContainer)</code> \u5982\u4F55\u6E32\u67D3VNode</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/runtime-core/src/rnederer.ts =&gt; baseCreateRenderer \u4E2D
  // \u9996\u6B21\u6E32\u67D3
  const render: RootRenderFunction = (vnode, container, isSVG) =&gt; {
    // \u5982\u679C vnode \u4E3A\u7A7A\uFF0C\u4E14\u5F53\u524Ddom\u5BB9\u5668\u6709vnode \u5219\u9500\u6BC1 unmount\u7EC4\u4EF6\uFF0C\u5426\u5219\u4F20\u5165patch \u5904\u7406
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true)
      }
    } else {
      // \u9996\u6B21\u6267\u884C\u4F20\u5165\u6839\u7EC4\u4EF6
      // \u624B\u6307\u6267\u884C\u6302\u8F7D\u8FC7\u7A0B
      patch(container._vnode || null, vnode, container, null, null, null, isSVG)
    }
    flushPostFlushCbs()
    // vnode \u5B58\u50A8\u5728dom\u5BB9\u5668\u4E0A
    container._vnode = vnode
  }


  // Note: functions inside this closure should use \`const xxx = () =&gt; {}\`
  // style in order to prevent being inlined by minifiers.
  const patch: PatchFn = (
    n1,// \u65E7\u8282\u70B9
    n2,// \u65B0\u8282\u70B9
    container,
    anchor = null,
    parentComponent = null,
    parentSuspense = null,
    isSVG = false,
    slotScopeIds = null,
    optimized = __DEV__ &amp;&amp; isHmrUpdating ? false : !!n2.dynamicChildren
  ) =&gt; {
    if (n1 === n2) {
      return
    }

    // \u5982\u679C\u6709\u65E7vnode \u4E14\u548C\u65B0vnode\u4E0D\u4E00\u6837\u9500\u6BC1\u65E7\u8282\u70B9
    // patching &amp; not same type, unmount old tree
    if (n1 &amp;&amp; !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1)
      unmount(n1, parentComponent, parentSuspense, true)
      n1 = null
    }

    if (n2.patchFlag === PatchFlags.BAIL) {
      optimized = false
      n2.dynamicChildren = null
    }

    const { type, ref, shapeFlag } = n2
    // \u6839\u636Etype\u8BA9\u4E0D\u540C\u65B9\u6CD5\u5904\u7406
    switch (type) {
      case Text: // \u6587\u672C
        processText(n1, n2, container, anchor)
        break
      case Comment: // \u6CE8\u91CA
        processCommentNode(n1, n2, container, anchor)
        break
      case Static: // \u9759\u6001
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG)
        } else if (__DEV__) {
          patchStaticNode(n1, n2, container, isSVG)
        }
        break
      case Fragment: // \u788E\u7247\u5316\uFF0C\u8FD9\u662FVue3\u65B0\u652F\u6301\u7684\u591A\u6839\u8282\u70B9
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
        break
      default:
        // \u5982\u679Ctype\u90FD\u4E0D\u662F\u5C31\u4F7F\u7528 shapeFlag \u7F16\u7801\u5224\u65AD
        if (shapeFlag &amp; ShapeFlags.ELEMENT) {
          // dom\u5143\u7D20
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          )
        } else if (shapeFlag &amp; ShapeFlags.COMPONENT) {
          // \u7EC4\u4EF6\u521D\u6B21\u6E32\u67D3
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized
          )
        } else if (shapeFlag &amp; ShapeFlags.TELEPORT) {
          // teleport \u5185\u7F6E\u7EC4\u4EF6
          ;(type as typeof TeleportImpl).process(
            n1 as TeleportVNode,
            n2 as TeleportVNode,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } else if (__FEATURE_SUSPENSE__ &amp;&amp; shapeFlag &amp; ShapeFlags.SUSPENSE) {
          // suspense\u5185\u7F6E\u7EC4\u4EF6
          ;(type as typeof SuspenseImpl).process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } else if (__DEV__) {
          warn(&#39;Invalid VNode type:&#39;, type, \`(\${typeof type})\`)
        }
    }

    // set ref
    if (ref != null &amp;&amp; parentComponent) {
      setRef(ref, n1 &amp;&amp; n1.ref, parentSuspense, n2 || n1, !n2)
    }
  }

// \u7EC4\u4EF6\u6E32\u67D3

    const processComponent = (
    n1: VNode | null,
    n2: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) =&gt; {
    n2.slotScopeIds = slotScopeIds
    // \u5982\u679C\u6CA1\u6709\u65E7\u8282\u70B9
    if (n1 == null) {
      if (n2.shapeFlag &amp; ShapeFlags.COMPONENT_KEPT_ALIVE) {
        // \u5982\u679C\u662Fkeep alive \u7EC4\u4EF6
        ;(parentComponent!.ctx as KeepAliveContext).activate(
          n2,
          container,
          anchor,
          isSVG,
          optimized
        )
      } else {
        // \u6267\u884C\u6302\u8F7D\u7EC4\u4EF6
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          isSVG,
          optimized
        )
      }
    } else {
      // \u5982\u679C n1 n2\u90FD\u6709\u6267\u884C\u66F4\u65B0
      updateComponent(n1, n2, optimized)
    }
  }


    const mountComponent: MountComponentFn = (
    initialVNode, // \u521D\u59CB\u5316 VNode \u4E5F\u5C31\u662FApp\u7EC4\u4EF6\u751F\u4EA7\u7684Vnode
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    optimized
  ) =&gt; {
    // 2.x compat may pre-create the component instance before actually
    // mounting
    const compatMountInstance =
      __COMPAT__ &amp;&amp; initialVNode.isCompatRoot &amp;&amp; initialVNode.component
      // TODO: \u7EC4\u4EF6\u52A0\u8F7D\u8FC7\u7A0B
      /// 1.\u7EC4\u4EF6\u5B9E\u4F8B
    const instance: ComponentInternalInstance =
      compatMountInstance ||
      (initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent,
        parentSuspense
      ))

    if (__DEV__ &amp;&amp; instance.type.__hmrId) {
      registerHMR(instance)
    }

    if (__DEV__) {
      pushWarningContext(initialVNode)
      startMeasure(instance, \`mount\`)
    }

    // inject renderer internals for keepAlive
    if (isKeepAlive(initialVNode)) {
      ;(instance.ctx as KeepAliveContext).renderer = internals
    }

    // resolve props and slots for setup context
    if (!(__COMPAT__ &amp;&amp; compatMountInstance)) {
      if (__DEV__) {
        startMeasure(instance, \`init\`)
      }
      // \u521D\u59CB\u5316\u7EC4\u4EF6\u5B9E\u4F8B
      // 1. setup
      // 2. \u7F16\u8BD1render\u9009\u9879
      // 3.applyOptions \u517C\u5BB9 vue2
      // \u521D\u59CB\u5316 props slots \u4EE5\u53CAVue3\u65B0\u589E\u7684Compostion API
      setupComponent(instance)
      if (__DEV__) {
        endMeasure(instance, \`init\`)
      }
    }

    // setup() is async. This component relies on async logic to be resolved
    // before proceeding
    if (__FEATURE_SUSPENSE__ &amp;&amp; instance.asyncDep) {
      parentSuspense &amp;&amp; parentSuspense.registerDep(instance, setupRenderEffect)

      // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback
      if (!initialVNode.el) {
        const placeholder = (instance.subTree = createVNode(Comment))
        processCommentNode(null, placeholder, container!, anchor)
      }
      return
    }

    // effect \u526F\u4F5C\u7528\u51FD\u6570
    setupRenderEffect(
      instance,
      initialVNode,
      container,
      anchor,
      parentSuspense,
      isSVG,
      optimized
    )

    if (__DEV__) {
      popWarningContext()
      endMeasure(instance, \`mount\`)
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\u3001<code>createComponentInstance</code> \u521B\u5EFA<code>instance</code> \u8FC7\u7A0B\uFF0C</p><p>2\u3001 \u521B\u5EFA\u5B8C\u6210\u540E\u901A\u8FC7<code>setupComponent</code> \u521D\u59CB\u5316instance\u503C</p><p>3\u3001 \u8BBE\u7F6E\u8FD0\u884Crender \u526F\u4F5C\u7528\u51FD\u6570 <code>setupRenderEffect</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/runtime-core/src/component.ts
export function createComponentInstance(
  vnode: VNode,
  parent: ComponentInternalInstance | null,
  suspense: SuspenseBoundary | null
) {
  const type = vnode.type as ConcreteComponent
  // inherit parent app context - or - if root, adopt from root vnode
  const appContext =
    (parent ? parent.appContext : vnode.appContext) || emptyAppContext

  const instance: ComponentInternalInstance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null!, // to be immediately set
    next: null,
    subTree: null!, // will be set synchronously right after creation
    effect: null!,
    update: null!, // will be set synchronously right after creation
    scope: new EffectScope(true /* detached */),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null!,
    renderCache: [],

    // local resovled assets
    components: null,
    directives: null,

    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),

    // emit
    emit: null!, // to be set immediately
    emitted: null,

    // props default value
    propsDefaults: EMPTY_OBJ,

    // inheritAttrs
    inheritAttrs: type.inheritAttrs,

    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,

    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,

    // lifecycle hooks
    // not using enums here because it results in computed properties
    // \u7EC4\u4EF6\u751F\u547D\u5468\u671F\u76F8\u5173\u5C5E\u6027
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  }
  if (__DEV__) {
    instance.ctx = createDevRenderContext(instance)
  } else {
    instance.ctx = { _: instance }
  }
  instance.root = parent ? parent.root : instance
  instance.emit = emit.bind(null, instance)

  // apply custom element special handling
  if (vnode.ce) {
    vnode.ce(instance)
  }

  return instance
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setupRenderEffect</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> const setupRenderEffect: SetupRenderEffectFn = (
    instance,
    initialVNode,
    container,
    anchor,
    parentSuspense,
    isSVG,
    optimized
  ) =&gt; {
    // c\u521B\u5EFA
    const componentUpdateFn = () =&gt; {
      if (!instance.isMounted) {
        let vnodeHook: VNodeHook | null | undefined
        
        const { el, props } = initialVNode
        // \u58F0\u660E\u5468\u671F beforemounted mounted
        const { bm, m, parent } = instance
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode)

        toggleRecurse(instance, false)
        // beforeMount hook
        // beforeMount \u58F0\u660E\u5468\u671F\u53CAhook\u6267\u884C
        if (bm) {
          invokeArrayFns(bm)
        }
        // onVnodeBeforeMount
        if (
          !isAsyncWrapperVNode &amp;&amp;
          (vnodeHook = props &amp;&amp; props.onVnodeBeforeMount)
        ) {
          invokeVNodeHook(vnodeHook, parent, initialVNode)
        }
        if (
          __COMPAT__ &amp;&amp;
          isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
        ) {
          instance.emit(&#39;hook:beforeMount&#39;)
        }
        toggleRecurse(instance, true)

        if (el &amp;&amp; hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          const hydrateSubTree = () =&gt; {
            if (__DEV__) {
              startMeasure(instance, \`render\`)
            }
            instance.subTree = renderComponentRoot(instance)
            if (__DEV__) {
              endMeasure(instance, \`render\`)
            }
            if (__DEV__) {
              startMeasure(instance, \`hydrate\`)
            }
            hydrateNode!(
              el as Node,
              instance.subTree,
              instance,
              parentSuspense,
              null
            )
            if (__DEV__) {
              endMeasure(instance, \`hydrate\`)
            }
          }

          if (isAsyncWrapperVNode) {
            ;(initialVNode.type as ComponentOptions).__asyncLoader!().then(
              // note: we are moving the render call into an async callback,
              // which means it won&#39;t track dependencies - but it&#39;s ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () =&gt; !instance.isUnmounted &amp;&amp; hydrateSubTree()
            )
          } else {
            hydrateSubTree()
          }
        } else {
          if (__DEV__) {
            startMeasure(instance, \`render\`)
          }
          // \u6E32\u67D3\u7EC4\u4EF6\u751F\u6210 subTree VNode
          const subTree = (instance.subTree = renderComponentRoot(instance))
          if (__DEV__) {
            endMeasure(instance, \`render\`)
          }
          if (__DEV__) {
            startMeasure(instance, \`patch\`)
          }
          // \u628A subTree \u6302\u8F7D\u5230Dom\u5BB9\u5668\u4E2D
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            isSVG
          )
          if (__DEV__) {
            endMeasure(instance, \`patch\`)
          }
          initialVNode.el = subTree.el
        }
        // mounted hook
        // mounted \u751F\u547D\u5468\u671F \u548Chook \u6267\u884C
        if (m) {
          queuePostRenderEffect(m, parentSuspense)
        }
        // onVnodeMounted
        if (
          !isAsyncWrapperVNode &amp;&amp;
          (vnodeHook = props &amp;&amp; props.onVnodeMounted)
        ) {
          const scopedInitialVNode = initialVNode
          queuePostRenderEffect(
            () =&gt; invokeVNodeHook(vnodeHook!, parent, scopedInitialVNode),
            parentSuspense
          )
        }
        if (
          __COMPAT__ &amp;&amp;
          isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
        ) {
          queuePostRenderEffect(
            () =&gt; instance.emit(&#39;hook:mounted&#39;),
            parentSuspense
          )
        }

        // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive
        if (initialVNode.shapeFlag &amp; ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE) {
          instance.a &amp;&amp; queuePostRenderEffect(instance.a, parentSuspense)
          if (
            __COMPAT__ &amp;&amp;
            isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
          ) {
            queuePostRenderEffect(
              () =&gt; instance.emit(&#39;hook:activated&#39;),
              parentSuspense
            )
          }
        }
        instance.isMounted = true

        if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
          devtoolsComponentAdded(instance)
        }

        // #2458: deference mount-only object parameters to prevent memleaks
        initialVNode = container = anchor = null as any
      } else {
        // updateComponent
        // This is triggered by mutation of component&#39;s own state (next: null)
        // OR parent calling processComponent (next: VNode)
        // \u820D\u547D\u5468\u671F
        let { next, bu, u, parent, vnode } = instance
        let originNext = next
        let vnodeHook: VNodeHook | null | undefined
        if (__DEV__) {
          pushWarningContext(next || instance.vnode)
        }

        // Disallow component effect recursion during pre-lifecycle hooks.
        toggleRecurse(instance, false)
        if (next) {
          next.el = vnode.el
          updateComponentPreRender(instance, next, optimized)
        } else {
          next = vnode
        }

        // beforeUpdate hook
        if (bu) {
          invokeArrayFns(bu)
        }
        // onVnodeBeforeUpdate
        if ((vnodeHook = next.props &amp;&amp; next.props.onVnodeBeforeUpdate)) {
          invokeVNodeHook(vnodeHook, parent, next, vnode)
        }
        if (
          __COMPAT__ &amp;&amp;
          isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
        ) {
          instance.emit(&#39;hook:beforeUpdate&#39;)
        }
        toggleRecurse(instance, true)

        // render
        if (__DEV__) {
          startMeasure(instance, \`render\`)
        }
        const nextTree = renderComponentRoot(instance)
        if (__DEV__) {
          endMeasure(instance, \`render\`)
        }
        const prevTree = instance.subTree
        instance.subTree = nextTree

        if (__DEV__) {
          startMeasure(instance, \`patch\`)
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it&#39;s in a teleport
          hostParentNode(prevTree.el!)!,
          // anchor may have changed if it&#39;s in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          isSVG
        )
        if (__DEV__) {
          endMeasure(instance, \`patch\`)
        }
        next.el = nextTree.el
        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance&#39;s subTree pointing
          // to child component&#39;s vnode
          updateHOCHostEl(instance, nextTree.el)
        }
        // updated hook
        if (u) {
          queuePostRenderEffect(u, parentSuspense)
        }
        // onVnodeUpdated
        if ((vnodeHook = next.props &amp;&amp; next.props.onVnodeUpdated)) {
          queuePostRenderEffect(
            () =&gt; invokeVNodeHook(vnodeHook!, parent, next!, vnode),
            parentSuspense
          )
        }
        if (
          __COMPAT__ &amp;&amp;
          isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
        ) {
          queuePostRenderEffect(
            () =&gt; instance.emit(&#39;hook:updated&#39;),
            parentSuspense
          )
        }

        if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
          devtoolsComponentUpdated(instance)
        }

        if (__DEV__) {
          popWarningContext()
        }
      }
    }

    // create reactive effect for rendering
    // \u521B\u5EFA\u54CD\u5E94\u5F0F\u526F\u4F5C\u7528rendder \u51FD\u6570
    const effect = (instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () =&gt; queueJob(instance.update),
      instance.scope // track it in component&#39;s effect scope
    ))

    const update = (instance.update = effect.run.bind(effect) as SchedulerJob)
    update.id = instance.uid
    // allowRecurse
    // #1801, #2043 component render effects should allow recursive updates
    toggleRecurse(instance, true)

    if (__DEV__) {
      effect.onTrack = instance.rtc
        ? e =&gt; invokeArrayFns(instance.rtc!, e)
        : void 0
      effect.onTrigger = instance.rtg
        ? e =&gt; invokeArrayFns(instance.rtg!, e)
        : void 0
      // @ts-ignore (for scheduler)
      update.ownerInstance = instance
    }

    update()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rendercomponentroot" tabindex="-1"><a class="header-anchor" href="#rendercomponentroot" aria-hidden="true">#</a> renderComponentRoot</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// packages/runtime-core/src/componentRenderutils.ts
export function renderComponentRoot(
  instance: ComponentInternalInstance
): VNode {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit,
    render, // \u8FD9\u91CC\u7684render \u5C31\u662F .vue \u7F16\u8BD1\u540E\u7684render\u51FD\u6570
    renderCache,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance

  let result
  let fallthroughAttrs
  const prev = setCurrentRenderingInstance(instance)
  if (__DEV__) {
    accessedAttrs = false
  }

  try {
    if (vnode.shapeFlag &amp; ShapeFlags.STATEFUL_COMPONENT) {
      // withProxy is a proxy with a different \`has\` trap only for
      // runtime-compiled render functions using \`with\` block.
      const proxyToUse = withProxy || proxy
      // \u8FD9\u91CC\u5FAA\u73AF\u521B\u5EFA HelloWorld p \u6807\u7B7EVNode
      result = normalizeVNode(
        render!.call(
          proxyToUse,
          proxyToUse!,
          renderCache,
          props,
          setupState,
          data,
          ctx
        )
      )
      fallthroughAttrs = attrs
    } else {
      // functional
      const render = Component as FunctionalComponent
      // in dev, mark attrs accessed if optional props (attrs === props)
      if (__DEV__ &amp;&amp; attrs === props) {
        markAttrsAccessed()
      }
      result = normalizeVNode(
        render.length &gt; 1
          ? render(
              props,
              __DEV__
                ? {
                    get attrs() {
                      markAttrsAccessed()
                      return attrs
                    },
                    slots,
                    emit
                  }
                : { attrs, slots, emit }
            )
          : render(props, null as any /* we know it doesn&#39;t need it */)
      )
      fallthroughAttrs = Component.props
        ? attrs
        : getFunctionalFallthrough(attrs)
    }
  } catch (err) {
    blockStack.length = 0
    handleError(err, instance, ErrorCodes.RENDER_FUNCTION)
    result = createVNode(Comment)
  }

  // attr merging
  // in dev mode, comments are preserved, and it&#39;s possible for a template
  // to have comments along side the root element which makes it a fragment
  let root = result
  let setRoot: ((root: VNode) =&gt; void) | undefined = undefined
  if (
    __DEV__ &amp;&amp;
    result.patchFlag &gt; 0 &amp;&amp;
    result.patchFlag &amp; PatchFlags.DEV_ROOT_FRAGMENT
  ) {
    ;[root, setRoot] = getChildRoot(result)
  }

  if (fallthroughAttrs &amp;&amp; inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs)
    const { shapeFlag } = root
    if (keys.length) {
      if (shapeFlag &amp; (ShapeFlags.ELEMENT | ShapeFlags.COMPONENT)) {
        if (propsOptions &amp;&amp; keys.some(isModelListener)) {
          // If a v-model listener (onUpdate:xxx) has a corresponding declared
          // prop, it indicates this component expects to handle v-model and
          // it should not fallthrough.
          // related: #1543, #1643, #1989
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          )
        }
        root = cloneVNode(root, fallthroughAttrs)
      } else if (__DEV__ &amp;&amp; !accessedAttrs &amp;&amp; root.type !== Comment) {
        const allAttrs = Object.keys(attrs)
        const eventAttrs: string[] = []
        const extraAttrs: string[] = []
        for (let i = 0, l = allAttrs.length; i &lt; l; i++) {
          const key = allAttrs[i]
          if (isOn(key)) {
            // ignore v-model handlers when they fail to fallthrough
            if (!isModelListener(key)) {
              // remove \`on\`, lowercase first letter to reflect event casing
              // accurately
              eventAttrs.push(key[2].toLowerCase() + key.slice(3))
            }
          } else {
            extraAttrs.push(key)
          }
        }
        if (extraAttrs.length) {
          warn(
            \`Extraneous non-props attributes (\` +
              \`\${extraAttrs.join(&#39;, &#39;)}) \` +
              \`were passed to component but could not be automatically inherited \` +
              \`because component renders fragment or text root nodes.\`
          )
        }
        if (eventAttrs.length) {
          warn(
            \`Extraneous non-emits event listeners (\` +
              \`\${eventAttrs.join(&#39;, &#39;)}) \` +
              \`were passed to component but could not be automatically inherited \` +
              \`because component renders fragment or text root nodes. \` +
              \`If the listener is intended to be a component custom event listener only, \` +
              \`declare it using the &quot;emits&quot; option.\`
          )
        }
      }
    }
  }

  if (
    __COMPAT__ &amp;&amp;
    isCompatEnabled(DeprecationTypes.INSTANCE_ATTRS_CLASS_STYLE, instance) &amp;&amp;
    vnode.shapeFlag &amp; ShapeFlags.STATEFUL_COMPONENT &amp;&amp;
    root.shapeFlag &amp; (ShapeFlags.ELEMENT | ShapeFlags.COMPONENT)
  ) {
    const { class: cls, style } = vnode.props || {}
    if (cls || style) {
      if (__DEV__ &amp;&amp; inheritAttrs === false) {
        warnDeprecation(
          DeprecationTypes.INSTANCE_ATTRS_CLASS_STYLE,
          instance,
          getComponentName(instance.type)
        )
      }
      root = cloneVNode(root, {
        class: cls,
        style: style
      })
    }
  }

  // inherit directives
  if (vnode.dirs) {
    if (__DEV__ &amp;&amp; !isElementRoot(root)) {
      warn(
        \`Runtime directive used on component with non-element root node. \` +
          \`The directives will not function as intended.\`
      )
    }
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs
  }
  // inherit transition data
  if (vnode.transition) {
    if (__DEV__ &amp;&amp; !isElementRoot(root)) {
      warn(
        \`Component inside &lt;Transition&gt; renders non-element root node \` +
          \`that cannot be animated.\`
      )
    }
    root.transition = vnode.transition
  }

  if (__DEV__ &amp;&amp; setRoot) {
    setRoot(root)
  } else {
    result = root
  }

  setCurrentRenderingInstance(prev)
  return result
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="processfragment" tabindex="-1"><a class="header-anchor" href="#processfragment" aria-hidden="true">#</a> processFragment</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 
// packages/runtime-core/src/renderer.ts baseCreateRenderer 
  const processFragment = (
    n1: VNode | null,
    n2: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) =&gt; {
    // \u6CA1\u6709\u6839\u8282\u70B9\u8981\u5206\u914D\u5728\u4F55\u5904
    const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(&#39;&#39;))!
    const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(&#39;&#39;))!

    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2

    if (__DEV__ &amp;&amp; isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0
      optimized = false
      dynamicChildren = null
    }

    // check if this is a slot fragment with :slotted scope ids
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds
        ? slotScopeIds.concat(fragmentSlotScopeIds)
        : fragmentSlotScopeIds
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor)
      hostInsert(fragmentEndAnchor, container, anchor)
      // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.
      // \u5230\u8FD9\u91CCchildren \u4E00\u5B9A\u662F\u6570\u7EC4
      mountChildren(
        n2.children as VNodeArrayChildren,
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      )
    } else {
      if (
        patchFlag &gt; 0 &amp;&amp;
        patchFlag &amp; PatchFlags.STABLE_FRAGMENT &amp;&amp;
        dynamicChildren &amp;&amp;
        // #2715 the previous fragment could&#39;ve been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren
      ) {
        // a stable fragment (template root or &lt;template v-for&gt;) doesn&#39;t need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds
        )
        if (__DEV__ &amp;&amp; parentComponent &amp;&amp; parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2)
        } else if (
          // #2080 if the stable fragment has a key, it&#39;s a &lt;template v-for&gt; that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it&#39;s a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null ||
          (parentComponent &amp;&amp; n2 === parentComponent.subTree)
        ) {
          traverseStaticChildren(n1, n2, true /* shallow */)
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed &amp; unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
      }
    }
  }


    const mountChildren: MountChildrenFn = (
    children,
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    slotScopeIds,
    optimized,
    start = 0
  ) =&gt; {
    for (let i = start; i &lt; children.length; i++) {
      const child = (children[i] = optimized
        ? cloneIfMounted(children[i] as VNode)
        : normalizeVNode(children[i]))
        // patch \u6BCF\u4E00\u4E2AVNode
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized
      )
    }
  }

// dom \u8282\u70B9 VNode \u901A\u8FC7\u6709\u65E0\u65E7\u8282\u70B9\uFF0C\u6765\u5224\u65AD\u6267\u884Cmount \u8FD8\u662Fupdate
  const patchElement = (
    n1: VNode,
    n2: VNode,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) =&gt; {
    const el = (n2.el = n1.el!)
    let { patchFlag, dynamicChildren, dirs } = n2
    // #1426 take the old vnode&#39;s patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS
    patchFlag |= n1.patchFlag &amp; PatchFlags.FULL_PROPS
    const oldProps = n1.props || EMPTY_OBJ
    const newProps = n2.props || EMPTY_OBJ
    let vnodeHook: VNodeHook | undefined | null

    // disable recurse in beforeUpdate hooks
    parentComponent &amp;&amp; toggleRecurse(parentComponent, false)
    if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1)
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, &#39;beforeUpdate&#39;)
    }
    parentComponent &amp;&amp; toggleRecurse(parentComponent, true)

    if (__DEV__ &amp;&amp; isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0
      optimized = false
      dynamicChildren = null
    }

    const areChildrenSVG = isSVG &amp;&amp; n2.type !== &#39;foreignObject&#39;
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren!,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds
      )
      if (__DEV__ &amp;&amp; parentComponent &amp;&amp; parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2)
      }
    } else if (!optimized) {
      // full diff
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        areChildrenSVG,
        slotScopeIds,
        false
      )
    }

    if (patchFlag &gt; 0) {
      // the presence of a patchFlag means this element&#39;s render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag &amp; PatchFlags.FULL_PROPS) {
        // element props contain dynamic keys, full diff needed
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          isSVG
        )
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag &amp; PatchFlags.CLASS) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, &#39;class&#39;, null, newProps.class, isSVG)
          }
        }

        // style
        // this flag is matched when the element has dynamic style bindings
        if (patchFlag &amp; PatchFlags.STYLE) {
          hostPatchProp(el, &#39;style&#39;, oldProps.style, newProps.style, isSVG)
        }

        // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]=&quot;bar&quot; will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key
        if (patchFlag &amp; PatchFlags.PROPS) {
          // if the flag is present then dynamicProps must be non-null
          const propsToUpdate = n2.dynamicProps!
          for (let i = 0; i &lt; propsToUpdate.length; i++) {
            const key = propsToUpdate[i]
            const prev = oldProps[key]
            const next = newProps[key]
            // #1471 force patch value
            if (next !== prev || key === &#39;value&#39;) {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                isSVG,
                n1.children as VNode[],
                parentComponent,
                parentSuspense,
                unmountChildren
              )
            }
          }
        }
      }

      // text
      // This flag is matched when the element has only dynamic text children.
      if (patchFlag &amp; PatchFlags.TEXT) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children as string)
        }
      }
    } else if (!optimized &amp;&amp; dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(
        el,
        n2,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG
      )
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() =&gt; {
        vnodeHook &amp;&amp; invokeVNodeHook(vnodeHook, parentComponent, n2, n1)
        dirs &amp;&amp; invokeDirectiveHook(n2, n1, parentComponent, &#39;updated&#39;)
      }, parentSuspense)
    }
  }  



    const mountElement = (
    vnode: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) =&gt; {
    let el: RendererElement
    let vnodeHook: VNodeHook | undefined | null
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode
    if (
      !__DEV__ &amp;&amp;
      vnode.el &amp;&amp;
      hostCloneNode !== undefined &amp;&amp;
      patchFlag === PatchFlags.HOISTED
    ) {
      // If a vnode has non-null el, it means it&#39;s being reused.
      // Only static vnodes can be reused, so its mounted DOM nodes should be
      // exactly the same, and we can simply do a clone here.
      // only do this in production since cloned trees cannot be HMR updated.
      el = vnode.el = hostCloneNode(vnode.el)
    } else {
      // \u8C03\u7528\u4F20\u5165\u7684API \u521B\u5EFADOM\u5143\u7D20
      el = vnode.el = hostCreateElement(
        vnode.type as string,
        isSVG,
        props &amp;&amp; props.is,
        props
      )

      // mount children first, since some props may rely on child content
      // being already rendered, e.g. \`&lt;select value&gt;\`
      if (shapeFlag &amp; ShapeFlags.TEXT_CHILDREN) {
        
        hostSetElementText(el, vnode.children as string)
      } else if (shapeFlag &amp; ShapeFlags.ARRAY_CHILDREN) {
        //// \u5982\u679C \u662F\u6570\u7EC4\uFF0C\u56DE\u5230mountChildren \u904D\u5386\u7EE7\u7EEDpatch \u5B50\u8282\u70B9
        // \u6CE8\u610F\u8FD9\u91CC\u4F20\u5165\u7684 
        mountChildren(
          vnode.children as VNodeArrayChildren,
          el, // \u4F20\u5165\u7684contener\u5DF2\u7ECF\u662F\u521A\u521A\u521B\u5EFA\u7684elDOM\u5143\u7D20\uFF0C\u8FD9\u6837\u5C31\u521B\u5EFA\u4E86\u7236\u5B50\u5173\u7CFB
          null,
          parentComponent,
          parentSuspense,
          isSVG &amp;&amp; type !== &#39;foreignObject&#39;,
          slotScopeIds,
          optimized
        )
      }

      if (dirs) {
        // \u8C03\u7528\u6307\u4EE4\u76F8\u5173\u7684\u751F\u547D\u5468\u671F\u5904\u7406
        invokeDirectiveHook(vnode, null, parentComponent, &#39;created&#39;)
      }
      // props
      // \u5982\u679C\u6709DOM\u7684props \u4F8B\u5982\u539F\u751F\u7684class style \u81EA\u5B9A\u4E49 prop\u7B49
      if (props) {
        for (const key in props) {
          if (key !== &#39;value&#39; &amp;&amp; !isReservedProp(key)) {
            hostPatchProp(
              el,
              key,
              null,
              props[key],
              isSVG,
              vnode.children as VNode[],
              parentComponent,
              parentSuspense,
              unmountChildren
            )
          }
        }
        /**
         * Special case for setting value on DOM elements:
         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
         * - it needs to be forced (#1471)
         * #2353 proposes adding another renderer option to configure this, but
         * the properties affects are so finite it is worth special casing it
         * here to reduce the complexity. (Special casing it also should not
         * affect non-DOM renderers)
         */
        if (&#39;value&#39; in props) {
          hostPatchProp(el, &#39;value&#39;, null, props.value)
        }
        if ((vnodeHook = props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode)
        }
      }
      // scopeId
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent)
    }
    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
      Object.defineProperty(el, &#39;__vnode&#39;, {
        value: vnode,
        enumerable: false
      })
      Object.defineProperty(el, &#39;__vueParentComponent&#39;, {
        value: parentComponent,
        enumerable: false
      })
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, &#39;beforeMount&#39;)
    }
    // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it
    const needCallTransitionHooks =
      (!parentSuspense || (parentSuspense &amp;&amp; !parentSuspense.pendingBranch)) &amp;&amp;
      transition &amp;&amp;
      !transition.persisted
    if (needCallTransitionHooks) {
      transition!.beforeEnter(el)
    }
    // \u628A\u521B\u5EFA\u7684el DOM \u6302\u8F7D\u5230container\u5BB9\u5668\u4E0A
    // \u521D\u6B21\u6E32\u67D3container \u662F #app \u5BB9\u5668\uFF0C\u4E4B\u540E\u5C31\u662F\u5BF9\u5E94\u7684\u7236\u7EA7dom\u5BB9\u5668
    hostInsert(el, container, anchor)
    if (
      (vnodeHook = props &amp;&amp; props.onVnodeMounted) ||
      needCallTransitionHooks ||
      dirs
    ) {
      queuePostRenderEffect(() =&gt; {
        vnodeHook &amp;&amp; invokeVNodeHook(vnodeHook, parentComponent, vnode)
        needCallTransitionHooks &amp;&amp; transition!.enter(el)
        dirs &amp;&amp; invokeDirectiveHook(vnode, null, parentComponent, &#39;mounted&#39;)
      }, parentSuspense)
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82),v=[l];function a(r,c){return e(),i("div",null,v)}var m=n(d,[["render",a],["__file","vue3.html.vue"]]);export{m as default};
