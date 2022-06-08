# [less](https://lesscss.org/)

## 注释
 - // 开头不会被编译
 - /**/ 包裹会被编译到css中

## 变量
-  `@` 用来声明变量 
    - 变量是延迟加载的
    - 属性值变量
     ```less
      @bgcolor:red;
      .main{
          background-color:@bgcolor;
      }
     ```
    - 属性名/选择器变量
     ```less
      @mg:margin;
      @selector：.main;
      @{selector}{
          @{mg}:0;
      }
     ```
    - url变量
        ```less
        @images: "../img";

        // Usage
        body {
        color: #444;
        background: url("@{images}/white-sand.png");
        }
        ```
    

## 嵌套规则
- `{}` 块级规则 父子嵌套
- & 表示当前选择器的父级选择器


## 混合 mixin
- 普通混合
 ```less
    .bordered {
    border-top: dotted 1px black;
    border-bottom: solid 2px red;
  }
  .main{
      padding:0;
      .border()
  }
 ```
 - 不输出到编译文件的混合
 ```less
    .bordered() {
    border-top: dotted 1px black;
    border-bottom: solid 2px red;
  }
  .main{
      padding:0;
      .border()
  }
 ```
 - 带参数的混合
 - 带参数并带默认值的混合
 - 带命名参数混合 形参数和实参不匹配指定参数
 - 匹配模式
 ```less
 .triangle(@_){
    width:0;
     height:0;
      overflow:hidden;
 }
 .triangle(L,@w,@c){
     border-style:dashed solid dashed dashed;
     border-color:transparent  transparent transparent @c;
 }
 .triangle(R,@w,@c){
     border-style:dashed solid dashed dashed;
     border-color:transparent @c transparent transparent;
 }
  .triangle(T,@w,@c){
     border-width:@w;
     border-style:dashed solid dashed dashed;
     border-color:@c transparent  transparent transparent;
 } 
 ```
 - arguments 变量



