import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar:SidebarConfig = {
    '/guide/':[
        {
            text:'目录',
            children:[
                '/guide/main.md',
                '/guide/mac/readme.md',
                '/guide/npm/readme.md',
                '/guide/git-use.md',
                
                
            ]
        }
    ],
    '/vue/':[
        {
            text:'vue',
            children:[
                '/vue/vue3.md',
                '/vue/vite+eslint+prettier.md',
                '/vue/elementui.md',
                '/vue/lowcode.md',
                '/vue/differerent.md'
            ]
        }
    ]
}