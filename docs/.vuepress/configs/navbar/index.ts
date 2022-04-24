import type { NavbarConfig } from "@vuepress/theme-default";
export const navbar:NavbarConfig = [
    {
        text: '目录',
        link: '/guide/main.md'
    },
    {
        text: 'VUE',
        link: '/vue/vue3.md'
    }, 
    {
        text: 'JS片段',
        link: '/js/js片段.md'
    },        
    {
        text: '工具',
        link: '/guide/tools.md'
    },    
    {
       text: '参考',
       children:[
        {
            text: 'vuePress',
            link: 'https://v2.vuepress.vuejs.org/zh/'
        },
        {
            text: 'vue',
            link: 'https://staging-cn.vuejs.org/'
        },
        {
            text: 'vue3-news',
            link: 'https://vue3.github.io/vue3-News/'
        },
        {
            text: '前端(Not just)工程师终究要掌握的知识',
            link: 'https://kb.zhangzhipeng.net/#/'
        },
        {
            text:'前端源码共读群',
            link:'https://www.lxchuan12.cn/#%E8%8B%A5%E5%B7%9D%E8%AF%9A%E9%82%80%E4%BD%A0%E5%8A%A0%E5%89%8D%E7%AB%AF%E6%BA%90%E7%A0%81%E5%85%B1%E8%AF%BB%E7%BE%A4-%E9%95%BF%E6%9C%9F%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0'
        },
        {
            text:'Vue3 源码解读',
            link:'https://wjchumble.github.io/explain-vue3/'
        }
       ],
    }
]