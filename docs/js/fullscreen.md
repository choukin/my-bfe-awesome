## 操作浏览器全屏
```js
window.navigator.userAgent.indexOf('MSIE') < 0 // IE 浏览器不支持全屏
```

设置和取消全屏

```js
      let main = document.body
      
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }


```

监听全屏事件
```js
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener('fullscreenchange', () => {
    //   this.$emit('input', !this.value)
    //   this.$emit('on-change', !this.value)
    })
    document.addEventListener('mozfullscreenchange', () => {
    //   this.$emit('input', !this.value)
    //   this.$emit('on-change', !this.value)
    })
    document.addEventListener('webkitfullscreenchange', () => {
    //   this.$emit('input', !this.value)
    //   this.$emit('on-change', !this.value)
    })
    document.addEventListener('msfullscreenchange', () => {
    //   this.$emit('input', !this.value)
    //   this.$emit('on-change', !this.value)
    })
```