import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as l}from"./app.8e201d3a.js";const t={},s=l(`<h1 id="vue2-vs-vue3" tabindex="-1"><a class="header-anchor" href="#vue2-vs-vue3" aria-hidden="true">#</a> Vue2 vs Vue3</h1><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><table><thead><tr><th style="text-align:center;">Vue2</th><th style="text-align:center;">Vue3</th></tr></thead><tbody><tr><td style="text-align:center;">beforeCreate</td><td style="text-align:center;">setup</td></tr><tr><td style="text-align:center;">created</td><td style="text-align:center;">setup</td></tr><tr><td style="text-align:center;">beforeMount</td><td style="text-align:center;">onBeforemount</td></tr><tr><td style="text-align:center;">mounted</td><td style="text-align:center;">onMounted</td></tr><tr><td style="text-align:center;">beforeUpdate</td><td style="text-align:center;">onBeforeUpdated</td></tr><tr><td style="text-align:center;">updated</td><td style="text-align:center;">onUpdated</td></tr><tr><td style="text-align:center;">beforeDestory</td><td style="text-align:center;">onBeforeUnmount</td></tr><tr><td style="text-align:center;">destoryed</td><td style="text-align:center;">onUnmount</td></tr><tr><td style="text-align:center;">activated</td><td style="text-align:center;">onActivated</td></tr><tr><td style="text-align:center;">deactivated</td><td style="text-align:center;">onDeactivated</td></tr></tbody></table><h2 id="vue3-\u5E38\u7528api" tabindex="-1"><a class="header-anchor" href="#vue3-\u5E38\u7528api" aria-hidden="true">#</a> Vue3 \u5E38\u7528API</h2><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setup(props,{attrs,slots,emit,parent,root}){
    // \u4E0D\u53EF\u4F7F\u7528this
    return {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref-reactive" tabindex="-1"><a class="header-anchor" href="#ref-reactive" aria-hidden="true">#</a> ref\uFF0C reactive</h3><ul><li>ref \u4E00\u822C\u662F\u7EA7\u522B\u7C7B\u578B\u503C\uFF0C\u6216\u5355\u503C\u5BF9\u8C61\uFF1B\u5982\u679C\u4F20\u5165\u7684\u662F\u5BF9\u8C61\u4F1A\u4F7F\u7528 reactive\u8FDB\u884C\u6DF1\u5C42\u8F6C\u6362</li><li>reactive \u4E00\u822C\u7528\u6765\u5B9A\u4E49 \u5F15\u7528\u7C7B\u578B\u7684\u503C\u53D8\u6210\u54CD\u5E94\u5F0F</li></ul><h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h3><ul><li>\u89E3\u6784\u901A\u8FC7 <code>reactive</code> \u8FD4\u56DE\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61 \u53EF\u4EE5\u5728\u6A21\u7248\u4E2D\u76F4\u63A5\u8BBF\u95EE\u5C5E\u6027</li></ul><h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3><ul><li>\u5C06 \u5F15\u7528\u7C7B\u578B\u6216\u8005 reactive \u7C7B\u578B\u4E2D\u7684\u67D0\u4E2A\u503C\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F\u6570\u636E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    let obj = { name: &#39;name&#39;, age: 18 };
      const name = toRef(obj, &#39;name&#39;);
      const name1 = ref(obj.name);
      name.value = &#39;duo&#39;;
      obj.name = &#39;hello&#39;; // \u6B64\u65F6 name.value \u662F hello name1.value \u8FD8\u662F name
      // name1.value = &#39;refname&#39;;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip</p><p><code>ref</code> \u662F\u5BF9\u539F\u6570\u636E\u7684\u62F7\u8D1D\uFF0C\u54CD\u5E94\u5F0F\u6570\u636E\u6539\u53D8\u540E\u4F1A\u540C\u6B65\u66F4\u65B0\u8BD5\u56FE\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u539F\u59CB\u503C</p><p><code>toRef</code> \u662F\u5BF9\u539F\u6570\u636E\u7684\u5F15\u7528\uFF0C\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61\u503C\u6539\u53D8\u540E\u4E0D\u4F1A\u6539\u53D8\u8BD5\u56FE\uFF0C\u4F1A\u5F71\u54CD\u5230\u539F\u59CB\u503C</p><p>:::</p><h3 id="isref" tabindex="-1"><a class="header-anchor" href="#isref" aria-hidden="true">#</a> isRef</h3><p>\u5224\u65AD\u662F\u5426\u662Fref\u5BF9\u8C61,vue3\u5185\u90E8\u8BBE\u7F6E\u4E86 <code>__v_isRef = true</code> \u6807\u793A</p><p><code>ref toRef toRefs</code> \u90FD\u8FD4\u56DE ref \u5BF9\u8C61</p><h3 id="unref" tabindex="-1"><a class="header-anchor" href="#unref" aria-hidden="true">#</a> unRef</h3><p>\u5982\u679C\u53C2\u6570 \u662F ref \u5219\u8FD4\u56DE\u5185\u90E8\u539F\u59CB\u503C\uFF0C\u5426\u5219\u8FD4\u56DE\u53C2\u6570\u672C\u8EAB</p><h3 id="watch-watcheffect" tabindex="-1"><a class="header-anchor" href="#watch-watcheffect" aria-hidden="true">#</a> watch\uFF0CwatchEffect</h3><p>watch</p><p>\u76D1\u542C\u5668</p><p>vue2 <code>watch(source, callback, options)</code></p><ul><li>source \u6307\u5B9A\u76D1\u542C\u4F9D\u8D56\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u662F\u8868\u8FBE\u5F0F\uFF0Cget\u51FD\u6570\u6216<a href="https://segmentfault.com/a/1190000041490192?utm_source=sf-similar-article" target="_blank" rel="noopener noreferrer">\u6570\u7EC4</a></li><li>callback(newVal, oldVal) \u5982\u679C\u591A\u4E2A\u503Ccallback([new1,new2],[old1,old2])</li><li>opitons <ul><li>immediate</li><li>deep</li></ul></li></ul><p>vue3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    let title = ref(&#39;Create&#39;);
      let num = ref(0);
      const state = reactive&lt;State&gt;({
        nums: 0,
        list: [],
      });
      
      // \u76D1\u542Cref
      watch(title, (newValue, oldValue) =&gt; {
         /* ... */
      });

      // \u76D1\u542Creactive
      watch(
        // getter
        () =&gt; state.list.length,
        // callback
        (v = 0) =&gt; {
          state.nums = v;
        },
         // watch Options
        { immediate: true }
      );
      
      // \u4FA6\u542C props \u4E0A\u7684\u5C5E\u6027\u53D8\u5316
      watch(
        () =&gt; props.name,
        (name, prevName) =&gt; {
          /* ... */
        }

      // \u76D1\u542C\u591A\u4E2Aref
      watch([title, num], ([newTitle, newNum], [oldTitle, oldNum]) =&gt; {
        /* ... */
      });      
      
      // \u76D1\u542Creactive\u591A\u4E2A\u503C
     const unwatch =  watch([() =&gt; state.list, () =&gt; state.nums], ([newList, newNums], [oldList, oldvNums]) =&gt; {
        /* ... */
      });
      
      unwatch() // \u505C\u6B62\u76D1\u542C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h3><p>\u7ACB\u5373\u6267\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u540C\u65F6\u54CD\u5E94\u5F0F\u8FFD\u8E2A\u5176\u4F9D\u8D56\uFF0C\u5E76\u5728\u4F9D\u8D56\u53D8\u66F4\u65F6\u91CD\u65B0\u8FD0\u884C\u8BE5\u51FD\u6570</p><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h3><p>\u4F20\u5165\u4E00\u4E2Agetter \u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u4E0D\u53EF\u624B\u52A8\u4FEE\u6539\u7684ref\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const count = ref(1)
const plusOne = computed(() =&gt; count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // \u9519\u8BEF

// get set \u51FD\u6570\u5BF9\u8C61

const count = ref(1)
const plusOne = computed({
  get: () =&gt; count.value + 1,
  set: val =&gt; {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provide-inject" tabindex="-1"><a class="header-anchor" href="#provide-inject" aria-hidden="true">#</a> provide, inject</h3><p>\u7236\u7EC4\u4EF6\u901A\u8FC7provide() \u5411\u4E0B\u4F20\u9012\u6570\u636E\uFF0C\u5B50\u5B59\u7EC4\u4EF6\u901A\u8FC7 inject() \u63A5\u6536\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u7236\u7EC4\u4EF6
&lt;script&gt;
import {provide} from &#39;vue&#39;
export default {
    setup() {
        const obj = ref(&#39;johnYu&#39;)
        // \u5411\u5B50\u5B59\u7EC4\u4EF6\u4F20\u9012\u6570\u636Eprovide(\u540D\u79F0,\u6570\u636E)
        provide(&#39;name&#39;, obj)
    }
}
&lt;/script&gt;

// \u5B59\u7EC4\u4EF6
&lt;script&gt;
import {inject} from &#39;vue&#39;
export default {
    setup() {	
        // \u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636Einject(\u540D\u79F0)
        const name = inject(&#39;name&#39;) // johnYu
        return {name}
    }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcurrentinstance" tabindex="-1"><a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a> getCurrentInstance</h3><p>\u7528\u6765\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4EC5\u5728 setup\u548C\u751F\u547D\u5468\u671F\u4E2D\u8D77\u4F5C\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import { getCurrentInstance, onBeforeUnmount } from &#39;vue&#39;;

const instance = getCurrentInstance();
// \u5224\u65AD\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u662F\u5426\u5B58\u5728
if (instance) {
    onBeforeUnmount(() =&gt; {
        /* ... */
     });
 }
 const {ctx} = instance() // \u83B7\u53D6\u7EC4\u4EF6\u7684\u4E0A\u4E0B\u6587 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> $ref</h3><p>\u5C3D\u7BA1\u5B58\u5728 prop \u548C\u4E8B\u4EF6\uFF0C\u4F46\u6709\u65F6\u4F60\u53EF\u80FD\u4ECD\u7136\u9700\u8981\u5728 JavaScript \u4E2D\u76F4\u63A5\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u3002\u4E3A\u6B64\uFF0C\u53EF\u4EE5\u4F7F\u7528 ref attribute \u4E3A\u5B50\u7EC4\u4EF6\u6216 HTML \u5143\u7D20\u6307\u5B9A\u5F15\u7528 ID\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;template&gt;
  &lt;div ref=&quot;root&quot;&gt;This is a root element&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import { ref, onMounted } from &#39;vue&#39;

  export default {
    setup() {
        // \u83B7\u53D6\u6E32\u67D3\u4E0A\u4E0B\u6587\u7684\u5F15\u7528
      const root = ref(null)

      onMounted(() =&gt; {
        // \u4EC5\u5728\u521D\u6B21\u6E32\u67D3\u540E\u624D\u80FD\u83B7\u5F97\u76EE\u6807\u5143\u7D20
        console.log(root.value) // &lt;div&gt;This is a root element&lt;/div&gt;
      })

      return {
        root
      }
    }
  }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sync" tabindex="-1"><a class="header-anchor" href="#sync" aria-hidden="true">#</a> .sync</h3><p>vue2 \u4E2D\u4F7F\u7528 .sync \u5B9E\u73B0prop \u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u5728Vue3\u4E2D \u5B83\u5408\u5E76\u5230\u4E86 v-model \u4E2D</p><p>vue2</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>    &lt;el-pagination
      :current-page.sync=&quot;currentPage1&quot;
    &gt;
    &lt;/el-pagination&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>    &lt;el-pagination
      v-model:current-page=&quot;currentPage1&quot;
    &gt;
    &lt;/el-pagination&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-slot" tabindex="-1"><a class="header-anchor" href="#v-slot" aria-hidden="true">#</a> v-slot</h3><p>vue3 \u4E2D <code>v-slot</code> \u7EDF\u4E00<code>slot</code> \u548C <code>slot-scope</code> \u5355\u4E00\u6307\u4EE4\u8BED\u6CD5\uFF0C \u5373\u7EDF\u4E00\u4E86\u4F5C\u7528\u57DF\u548C\u666E\u901A\u63D2\u69FD\u7684\u7528\u6CD5\uFF1B</p><p>Child.vue</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;template&gt;
  &lt;div class=&quot;child&quot;&gt;
    &lt;h3&gt;\u5177\u540D\u63D2\u69FD&lt;/h3&gt;
    &lt;slot name=&quot;one&quot; /&gt;
    &lt;h3&gt;\u4F5C\u7528\u57DF\u63D2\u69FD&lt;/h3&gt;
    &lt;slot :data=&quot;list&quot; /&gt;
    &lt;h3&gt;\u5177\u540D\u4F5C\u7528\u57DF\u63D2\u69FD&lt;/h3&gt;
    &lt;slot name=&quot;two&quot; :data=&quot;list&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: function() {
    return {
      list: [&#39;zhangsan&#39;, &#39;lisi&#39;]
    }
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue2</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;child&gt;
      &lt;div slot=&quot;one&quot;&gt;
        &lt;span&gt;\u83DC\u5355&lt;/span&gt;
      &lt;/div&gt;
      &lt;div slot-scope=&quot;user&quot;&gt;
        &lt;ul&gt;
          &lt;li v-for=&quot;(item, index) in user.data&quot; :key=&quot;index&quot;&gt;{{ item }}&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div slot=&quot;two&quot; slot-scope=&quot;user&quot;&gt;
        &lt;div&gt;{{ user.data }}&lt;/div&gt;
      &lt;/div&gt;
    &lt;/child&gt;
  &lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;child&gt;
      &lt;!-- \u5177\u540D\u63D2\u69FD --&gt;
      &lt;template v-slot:one&gt;
        &lt;div&gt;&lt;span&gt;\u83DC\u5355&lt;/span&gt;&lt;/div&gt;
      &lt;/template&gt;
      &lt;!-- \u4F5C\u7528\u57DF\u63D2\u69FD --&gt;
      &lt;template v-slot=&quot;user&quot;&gt;
        &lt;ul&gt;
          &lt;li v-for=&quot;(item, index) in user.data&quot; :key=&quot;index&quot;&gt;{{ item }}&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/template&gt;
     &lt;!-- \u5177\u540D\u4F5C\u7528\u57DF\u63D2\u69FD --&gt;
      &lt;template v-slot:two=&quot;user&quot;&gt;
        &lt;div&gt;{{ user.data }}&lt;/div&gt;
      &lt;/template&gt;
      &lt;!-- \u7B80\u5199 --&gt;
      &lt;template #two=&quot;user&quot;&gt;
      &lt;div&gt;{{ user.data }}&lt;/div&gt;
      &lt;/template&gt;
    &lt;/child&gt;
  &lt;/div&gt;
&lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-router-4" tabindex="-1"><a class="header-anchor" href="#vue-router-4" aria-hidden="true">#</a> Vue Router 4</h2><table><thead><tr><th style="text-align:center;">Vue Router4</th><th style="text-align:center;">Vue Router&lt;4</th></tr></thead><tbody><tr><td style="text-align:center;">createRouter</td><td style="text-align:center;">new VueRouter()</td></tr><tr><td style="text-align:center;">useRouter</td><td style="text-align:center;">this.$router</td></tr><tr><td style="text-align:center;">useRoute</td><td style="text-align:center;">this.$route</td></tr><tr><td style="text-align:center;">onBeforeRouteLeave</td><td style="text-align:center;">beforeRouteLeave</td></tr><tr><td style="text-align:center;">onBeforeRouteUpdate</td><td style="text-align:center;">beforeRouteUpdate</td></tr></tbody></table><p>router/index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import {createRouter, createWebHashHistory, RouteRecordRaw} from &#39;vue-router&#39;
const routes: Array&lt;RouteRecordRaw&gt; = [
  {
    path:&#39;/&#39;,
    name:&#39;Home&#39;,
    component:()=&gt;import(&#39;/@/views/home&#39;)
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
import {defineCOmponent} form &#39;vue&#39;
import {useRouter, useRoute} from &#39;vue-router
  export default defineComponent({
    name: &#39;StatisticsPage&#39;,
    components: {  },
    setup() {
      const router = useRouter()
      const route = useRoute()
      // \u6253\u5F00\u9875\u9762\u4F20\u53C2
      router.push({
        name:&#39;&#39;,
        params:{
          username:&#39;&#39;
        }
      })
      // \u63A5\u6536\u53C2\u6570
      const username = route.params.username
    }
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uselink" tabindex="-1"><a class="header-anchor" href="#uselink" aria-hidden="true">#</a> useLink</h3><p>useLink \u63D0\u4F9B\u4E0E <code>router-link</code> \u7684 <code>v-slot</code> API \u76F8\u540C\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u5C06 <code>RouterLink</code> \u7684\u5185\u90E8\u884C\u4E3A\u516C\u5F00\u4E3A Composition API \u51FD\u6570\uFF0C\u7528\u4E8E\u66B4\u9732\u5E95\u5C42\u7684\u5B9A\u5236\u80FD\u529B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt;template&gt;
  &lt;div ref=&quot;root&quot;&gt;This is a root element&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  import { computed } from &#39;vue&#39;;
  import { RouterLink, useLink } from &#39;vue-router&#39;;

  export default {
    name: &#39;AppLink&#39;,

    props: {
      ...RouterLink.props,
      inactiveClass: String,
    },

    setup(props) {
      const { route, href, isActive, isExactActive, navigate } = useLink(props);
      const isExternalLink = computed(
        () =&gt; typeof props.to === &#39;string&#39; &amp;&amp; props.to.startsWith(&#39;http&#39;)
      );

      return { isExternalLink, href, navigate, isActive };
    },
  };
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u69FD RouterLink.props \u7684\u5BF9\u8C61\u5305\u542B\u7684\u5C5E\u6027</p><ul><li>href: \u89E3\u6790\u540E\u7684URL\uFF0C\u5C06\u4F1A\u4F5C\u4E3A\u4E00\u4E2A a \u5143\u7D20\u7684href attribute</li><li>route \u89E3\u6790\u540E\u7684\u89C4\u8303\u5316\u5730\u5740</li><li>navigate \u89E6\u53D1\u5BFC\u822A\u7684\u51FD\u6570\uFF0C\u4F1A\u5728\u5FC5\u8981\u65F6\u81EA\u52A8\u963B\u6B62\u4E8B\u4EF6\uFF0C\u548C router-link\u540C\u7406</li><li>isActive \u5982\u679C\u9700\u8981\u5E94\u7528\u6FC0\u6D3B\u7684class \u4E3Atrue\uFF0C\u5141\u8BB8\u5E94\u7528\u4E00\u4E2A\u4EFB\u610F\u7684class</li><li>isExactActive \u5982\u679C\u5E94\u7528\u7CBE\u786E\u6FC0\u6D3B\u7684class \u4E3Atrue\uFF0C\u5141\u8BB8\u5E94\u7528\u4E00\u4E2A\u4EFB\u610F\u7684class</li></ul><h2 id="\u6837\u5F0F-scoped" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F-scoped" aria-hidden="true">#</a> \u6837\u5F0F scoped</h2><p>vue2</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>/*\u7701\u7763\u9009\u62E9\u5668*/
&gt;&gt;&gt; .foo{ }
/deep/ .foo{}
::v-deep .foo{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>::v-deep(.foo){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="evn\u73AF\u5883\u53D8\u91CF\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#evn\u73AF\u5883\u53D8\u91CF\u6269\u5C55" aria-hidden="true">#</a> .evn\u73AF\u5883\u53D8\u91CF\u6269\u5C55</h2><p>::: tip</p><p>vite \u4E2D\u7684.env \u6587\u4EF6\u53D8\u91CF\u540D\u4E00\u5B9A\u8981\u4EE5 VITE_ \u524D\u7F00</p><p>:::</p><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>.evn \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>VITE_USE_MOCK = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE3\u7801\u91CC\u4F7F\u7528</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const mock = import.env.VITE_USE_MOCK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,80),d=[s];function a(r,v){return i(),n("div",null,d)}var m=e(t,[["render",a],["__file","differerent.html.vue"]]);export{m as default};
