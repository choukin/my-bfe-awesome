# vscode 使用技巧

一. 设置用户代码片段
    
    1. 首选项 > 用户代码片段 > 选择设置代码片段的语言
   
```json
{
    // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
    // same ids are connected.
    // Example:
    "Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');"
        ],
        "description": "Log output to console"
    },
    "catch window error": {
        "prefix": "werror",
        "body": [
            "window.onerror = function (message, url, line, column, error) {",
            "  console.log('log---onerror::::',message, url, line, column, error)",
            "}"
        ],
        "description": "catch window error"
    }
}

```
   
2. snippet 格式解释

>`prefix` :这个参数是使用代码段的快捷入口,比如这里的log在使用时输入log会有智能感知.   
>`body` :这个是代码段的主体.需要设置的代码放在这里,字符串间换行的话使用 \r\n换行符隔开.注意如果值里包含特殊字符需要进行转义.  
>`$0` :这个为光标的所在位置.  
>`$1/$2` :使用这个参数后会光标的下一位置将会另起一行,按tab键可进行快速切换  
>`${1:label}/${2:another}`  :使用这个参数后会光标的下一位置将会另起一行,按tab键可进行快       速 切换 及占位符  
>`description` :代码段描述,在使用智能感知时的描述


二. 代码片段提示位置调整 
    1. 首选项>设置 搜索代码片段或 snippertSuggestions 值修改为 top


   