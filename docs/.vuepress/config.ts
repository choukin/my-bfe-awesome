import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import {navbar} from  "./configs/navbar"
import {sidebar} from "./configs/sidebar"
export default defineUserConfig<DefaultThemeOptions>({
    base: '/my-bfe-awesome/',
    // 站点配置
    lang:'zh-CN',
    title: "个人笔记",
    description: "在笔直的道路上曲折前行",
    // 主题喝其他配置
    theme:"@vuepress/theme-default",
    themeConfig:{
        logo:'https://vuejs.org/images/logo.png',
        repo: "choukin/my-bfe-awesome",
        docsBranch: "main/docs",
        // locales: {
        //     '/': {
        //       selectLanguageName: 'English',
                // navbar
                navbar: navbar,
        
                // sidebar
                sidebar: sidebar,
                sidebarDepth:2,

                 // page meta
                editLinkText: '在 GitHub 上编辑此页',
                editLinks: true,
                lastUpdatedText: '上次更新',
                contributors: false,
                // contributorsText: '贡献者',

                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',

                // 404 page
                notFound: [
                '这里什么都没有',
                '我们怎么到这来了？',
                '这是一个 404 页面',
                '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',

                // a11y
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
        
                // page meta
            // },
            // '/zh/': {
            //   selectLanguageName: '简体中文',
            // },
          // },
    },
    // plugins: [['vuepress-plugin-code-copy', true]]
})