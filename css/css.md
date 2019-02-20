## css 片段

- [有用的css片段](https://www.cnblogs.com/boyuguoblog/p/6233908.html)
### 1. IOS 滚动条卡顿添加样式
```css
-webkit-overflow-scrolling: touch; //有回弹效果 
-webkit-overflow-scrolling: auto; //滑到哪停到哪
```

### 2. CSS3：全屏背景
```css
html { 
    background: url('images/bg.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
```

### 3. 自定义文本选择样式
``` css
::selection { background: #e2eae2; }
::-moz-selection { background: #e2eae2; }
::-webkit-selection { background: #e2eae2; }
``` 
### 4. 禁用移动Webkit的选择高亮
``` css
body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

### 5. [px,em,rem,vh,vw,vmin,vmax的区别](http://blog.51cto.com/dapengtalk/1861496) 