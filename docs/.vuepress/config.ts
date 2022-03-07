import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

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
        locales: {
            '/': {
              selectLanguageName: 'English',
            },
            '/zh/': {
              selectLanguageName: '简体中文',
            },
          },
    },
})