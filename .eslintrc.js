module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/essential",
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'vue/multi-word-component-names': [0], //	不强制要求命名使用多字
    'vue/component-definition-name-casing': ['error', 'kebab-case'], //	组件命名必须使用连字符连接的多字命名

    }
}
