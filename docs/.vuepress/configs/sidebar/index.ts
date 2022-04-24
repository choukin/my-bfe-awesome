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
    ],
    '/js/':[
        {
            text:'JS片段',
            children:[
                '/js/js片段.md',
                '/js/rem.md',
                '/js/savefile.md',
                '/js/ts.md',
                '/js/js-task-origin.md',
                '/js/js-native-copy.md',
                '/js/iphone.md',
                '/js/async-validator.md',
                '/js/mp/index.md'
            ]
        }
    ]
}