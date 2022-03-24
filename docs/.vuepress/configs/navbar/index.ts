import type { NavbarConfig } from "@vuepress/theme-default";
export const navbar:NavbarConfig = [
    {
        text: '目录',
        link: '/guide/main.md'
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
            link: 'https://v3.cn.vuejs.org/'
        },
        {
            text: 'vue3-news',
            link: 'https://vue3.github.io/vue3-News/'
        },
        {
            text: '前端(Not just)工程师终究要掌握的知识',
            link: 'https://kb.zhangzhipeng.net/#/'
        }
       ],
    }
]