# 操作文件
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

## 判断文件编码格式
```js
/**
 * @description: 判断文件编码格式，'UTF8' or 'GBK'
 * 参考：  https://www.jianshu.com/p/4ce475d24bf9
 */
export function getFileEncoding(file) {
  let encoding = ''
  const reader = new FileReader()

  reader.readAsArrayBuffer(file)

  return new Promise((resolve, reject) => {
    reader.onload = function() {
      let data = reader.result
      data = new Uint8Array(data)
      encoding = isUTF8(data) ? 'UTF8' : 'GBK' // 这里只做了判断是否是UTF8判断，如果不是，就假定是GBK,没做其它编码的处理。
      console.log(encoding)
      resolve(encoding)
    }
  })
}


export function isUTF8(bytes) {
  var i = 0
  while (i < bytes.length) {
    if ((// ASCII
      bytes[i] === 0x09 ||
      bytes[i] === 0x0A ||
      bytes[i] === 0x0D ||
      (bytes[i] >= 0x20 && bytes[i] <= 0x7E)
    )
    ) {
      i += 1
      continue
    }

    if ((// non-overlong 2-byte
      (bytes[i] >= 0xC2 && bytes[i] <= 0xDF) &&
      (bytes[i + 1] >= 0x80 && bytes[i + 1] <= 0xBF)
    )
    ) {
      i += 2
      continue
    }

    if ((// excluding overlongs
      bytes[i] === 0xE0 &&
      (bytes[i + 1] >= 0xA0 && bytes[i + 1] <= 0xBF) &&
      (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF)
    ) ||
      (// straight 3-byte
        ((bytes[i] >= 0xE1 && bytes[i] <= 0xEC) ||
          bytes[i] === 0xEE ||
          bytes[i] === 0xEF) &&
        (bytes[i + 1] >= 0x80 && bytes[i + 1] <= 0xBF) &&
        (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF)
      ) ||
      (// excluding surrogates
        bytes[i] === 0xED &&
        (bytes[i + 1] >= 0x80 && bytes[i + 1] <= 0x9F) &&
        (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF)
      )
    ) {
      i += 3
      continue
    }

    if ((// planes 1-3
      bytes[i] === 0xF0 &&
      (bytes[i + 1] >= 0x90 && bytes[i + 1] <= 0xBF) &&
      (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF) &&
      (bytes[i + 3] >= 0x80 && bytes[i + 3] <= 0xBF)
    ) ||
      (// planes 4-15
        (bytes[i] >= 0xF1 && bytes[i] <= 0xF3) &&
        (bytes[i + 1] >= 0x80 && bytes[i + 1] <= 0xBF) &&
        (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF) &&
        (bytes[i + 3] >= 0x80 && bytes[i + 3] <= 0xBF)
      ) ||
      (// plane 16
        bytes[i] === 0xF4 &&
        (bytes[i + 1] >= 0x80 && bytes[i + 1] <= 0x8F) &&
        (bytes[i + 2] >= 0x80 && bytes[i + 2] <= 0xBF) &&
        (bytes[i + 3] >= 0x80 && bytes[i + 3] <= 0xBF)
      )
    ) {
      i += 4
      continue
    }
    return false
  }
  return true
}
```

## element-ui 上传读取 csv

```html
 <UploadFile ref="upload" class="upload" name="rootkey" accept-type="csv" tip="请选择要导入的 .csv 文件" @upload="afterUpload" />
```

```js

// 判断某行不是空白
export function isNotEmptyLine(element) {
  const _objvalue = values(element)
  return _objvalue && _objvalue && _objvalue.join('')
}

    afterUpload(data) {
      const _key = Object.keys(data)[0]
      console.log(_key, data)

      this.fileToUpload = data[_key]
    },
    parseCsvAndPreview() {
      this.parseCsv().then((datas) => {
        this.importTableData = datas
        this.activeStep = 1
      })
    },
    parseCsv() {
      if (!this.fileToUpload) {
        this.$message.error('请先选择文件！')
        return
      }
      // 参考： https://blog.csdn.net/qq_34548699/article/details/105707859
      const reader = new FileReader()

      getFileEncoding(this.fileToUpload).then(encoding => {
        if (encoding === 'UTF8') {
          reader.readAsText(this.fileToUpload)
        } else {
          reader.readAsText(this.fileToUpload, 'gb2312')
        }
      })

      return new Promise((resolve, reject) => {
        reader.onload = function() {
          let str = reader.result

          str = str.replace(/[\r\t\"]/g, '')
          const rows = str.split('\n').filter(ele => ele !== '')

          // const firstRow = rows[0]
          const dataRows = rows.slice(1)

          // const keys = firstRow.split(',').map(cName => NameMap[cName])

          const datas = dataRows.map((row, index) => {
            const values = row.split(',')
            const obj = {}

            // obj.index = index + 1

            values.forEach((val, ind) => {
              if (!Keys[ind]) {
                return
              }
              let result = val
              const titleName = Keys[ind]
              if (titleName === 'startAt' && val) {
                result = val.replace(/\//g, '-') + ' 00:00:00'
              } else if (titleName === 'endAt' && val) {
                result = val.replace(/\//g, '-') + ' 23:59:59'
              } else if (titleName === 'conditionRule' && val) {
                result = parseDateTime(val)
              }
              obj[titleName] = result
            })
            if (isNotEmptyLine(obj)) {
              obj.index = index + 1
            }
            return obj
          })

          // 过滤属性都是空的行
          const withoutEmptys = datas.filter(element => {
            return isNotEmptyLine(element)
          })
          resolve(withoutEmptys)
        }
      })
    },
```

