## 保存文件流
```js
try {
        const { data } = await ExportApi(params, { responseType: 'blob' })
        const blob = new Blob([data])
        const fileName = this.$route.meta.title + '.csv'
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, fileName)
        } else {
          const link = document.createElement('a')
          const evt = document.createEvent('HTMLEvents')
          evt.initEvent('click', false, false)
          link.href = URL.createObjectURL(blob)
          link.download = fileName
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          window.URL.revokeObjectURL(link.href)
        }
      } catch (err) {
        console.log(err)
      }
```
