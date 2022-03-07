import type { NavbarConfig } from "@vuepress/theme-default";
export const navbar:NavbarConfig = [
    {
        text: '目录',
        link: '/guide/main.md'
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
        }
       ],
    }
]