import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,a as s}from"./app.8e201d3a.js";const l={},d=s(`<h1 id="\u64CD\u4F5C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6587\u4EF6" aria-hidden="true">#</a> \u64CD\u4F5C\u6587\u4EF6</h1><h2 id="\u4FDD\u5B58\u6587\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u6587\u4EF6\u6D41" aria-hidden="true">#</a> \u4FDD\u5B58\u6587\u4EF6\u6D41</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>try {
        const { data } = await ExportApi(params, { responseType: &#39;blob&#39; })
        const blob = new Blob([data])
        const fileName = this.$route.meta.title + &#39;.csv&#39;
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, fileName)
        } else {
          const link = document.createElement(&#39;a&#39;)
          const evt = document.createEvent(&#39;HTMLEvents&#39;)
          evt.initEvent(&#39;click&#39;, false, false)
          link.href = URL.createObjectURL(blob)
          link.download = fileName
          link.style.display = &#39;none&#39;
          document.body.appendChild(link)
          link.click()
          window.URL.revokeObjectURL(link.href)
        }
      } catch (err) {
        console.log(err)
      }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5224\u65AD\u6587\u4EF6\u7F16\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u6587\u4EF6\u7F16\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u5224\u65AD\u6587\u4EF6\u7F16\u7801\u683C\u5F0F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * @description: \u5224\u65AD\u6587\u4EF6\u7F16\u7801\u683C\u5F0F\uFF0C&#39;UTF8&#39; or &#39;GBK&#39;
 * \u53C2\u8003\uFF1A  https://www.jianshu.com/p/4ce475d24bf9
 */
export function getFileEncoding(file) {
  let encoding = &#39;&#39;
  const reader = new FileReader()

  reader.readAsArrayBuffer(file)

  return new Promise((resolve, reject) =&gt; {
    reader.onload = function() {
      let data = reader.result
      data = new Uint8Array(data)
      encoding = isUTF8(data) ? &#39;UTF8&#39; : &#39;GBK&#39; // \u8FD9\u91CC\u53EA\u505A\u4E86\u5224\u65AD\u662F\u5426\u662FUTF8\u5224\u65AD\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5C31\u5047\u5B9A\u662FGBK,\u6CA1\u505A\u5176\u5B83\u7F16\u7801\u7684\u5904\u7406\u3002
      console.log(encoding)
      resolve(encoding)
    }
  })
}


export function isUTF8(bytes) {
  var i = 0
  while (i &lt; bytes.length) {
    if ((// ASCII
      bytes[i] === 0x09 ||
      bytes[i] === 0x0A ||
      bytes[i] === 0x0D ||
      (bytes[i] &gt;= 0x20 &amp;&amp; bytes[i] &lt;= 0x7E)
    )
    ) {
      i += 1
      continue
    }

    if ((// non-overlong 2-byte
      (bytes[i] &gt;= 0xC2 &amp;&amp; bytes[i] &lt;= 0xDF) &amp;&amp;
      (bytes[i + 1] &gt;= 0x80 &amp;&amp; bytes[i + 1] &lt;= 0xBF)
    )
    ) {
      i += 2
      continue
    }

    if ((// excluding overlongs
      bytes[i] === 0xE0 &amp;&amp;
      (bytes[i + 1] &gt;= 0xA0 &amp;&amp; bytes[i + 1] &lt;= 0xBF) &amp;&amp;
      (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF)
    ) ||
      (// straight 3-byte
        ((bytes[i] &gt;= 0xE1 &amp;&amp; bytes[i] &lt;= 0xEC) ||
          bytes[i] === 0xEE ||
          bytes[i] === 0xEF) &amp;&amp;
        (bytes[i + 1] &gt;= 0x80 &amp;&amp; bytes[i + 1] &lt;= 0xBF) &amp;&amp;
        (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF)
      ) ||
      (// excluding surrogates
        bytes[i] === 0xED &amp;&amp;
        (bytes[i + 1] &gt;= 0x80 &amp;&amp; bytes[i + 1] &lt;= 0x9F) &amp;&amp;
        (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF)
      )
    ) {
      i += 3
      continue
    }

    if ((// planes 1-3
      bytes[i] === 0xF0 &amp;&amp;
      (bytes[i + 1] &gt;= 0x90 &amp;&amp; bytes[i + 1] &lt;= 0xBF) &amp;&amp;
      (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF) &amp;&amp;
      (bytes[i + 3] &gt;= 0x80 &amp;&amp; bytes[i + 3] &lt;= 0xBF)
    ) ||
      (// planes 4-15
        (bytes[i] &gt;= 0xF1 &amp;&amp; bytes[i] &lt;= 0xF3) &amp;&amp;
        (bytes[i + 1] &gt;= 0x80 &amp;&amp; bytes[i + 1] &lt;= 0xBF) &amp;&amp;
        (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF) &amp;&amp;
        (bytes[i + 3] &gt;= 0x80 &amp;&amp; bytes[i + 3] &lt;= 0xBF)
      ) ||
      (// plane 16
        bytes[i] === 0xF4 &amp;&amp;
        (bytes[i + 1] &gt;= 0x80 &amp;&amp; bytes[i + 1] &lt;= 0x8F) &amp;&amp;
        (bytes[i + 2] &gt;= 0x80 &amp;&amp; bytes[i + 2] &lt;= 0xBF) &amp;&amp;
        (bytes[i + 3] &gt;= 0x80 &amp;&amp; bytes[i + 3] &lt;= 0xBF)
      )
    ) {
      i += 4
      continue
    }
    return false
  }
  return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="element-ui-\u4E0A\u4F20\u8BFB\u53D6-csv" tabindex="-1"><a class="header-anchor" href="#element-ui-\u4E0A\u4F20\u8BFB\u53D6-csv" aria-hidden="true">#</a> element-ui \u4E0A\u4F20\u8BFB\u53D6 csv</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> &lt;UploadFile ref=&quot;upload&quot; class=&quot;upload&quot; name=&quot;rootkey&quot; accept-type=&quot;csv&quot; tip=&quot;\u8BF7\u9009\u62E9\u8981\u5BFC\u5165\u7684 .csv \u6587\u4EF6&quot; @upload=&quot;afterUpload&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
// \u5224\u65AD\u67D0\u884C\u4E0D\u662F\u7A7A\u767D
export function isNotEmptyLine(element) {
  const _objvalue = values(element)
  return _objvalue &amp;&amp; _objvalue &amp;&amp; _objvalue.join(&#39;&#39;)
}

    afterUpload(data) {
      const _key = Object.keys(data)[0]
      console.log(_key, data)

      this.fileToUpload = data[_key]
    },
    parseCsvAndPreview() {
      this.parseCsv().then((datas) =&gt; {
        this.importTableData = datas
        this.activeStep = 1
      })
    },
    parseCsv() {
      if (!this.fileToUpload) {
        this.$message.error(&#39;\u8BF7\u5148\u9009\u62E9\u6587\u4EF6\uFF01&#39;)
        return
      }
      // \u53C2\u8003\uFF1A https://blog.csdn.net/qq_34548699/article/details/105707859
      const reader = new FileReader()

      getFileEncoding(this.fileToUpload).then(encoding =&gt; {
        if (encoding === &#39;UTF8&#39;) {
          reader.readAsText(this.fileToUpload)
        } else {
          reader.readAsText(this.fileToUpload, &#39;gb2312&#39;)
        }
      })

      return new Promise((resolve, reject) =&gt; {
        reader.onload = function() {
          let str = reader.result

          str = str.replace(/[\\r\\t\\&quot;]/g, &#39;&#39;)
          const rows = str.split(&#39;\\n&#39;).filter(ele =&gt; ele !== &#39;&#39;)

          // const firstRow = rows[0]
          const dataRows = rows.slice(1)

          // const keys = firstRow.split(&#39;,&#39;).map(cName =&gt; NameMap[cName])

          const datas = dataRows.map((row, index) =&gt; {
            const values = row.split(&#39;,&#39;)
            const obj = {}

            // obj.index = index + 1

            values.forEach((val, ind) =&gt; {
              if (!Keys[ind]) {
                return
              }
              let result = val
              const titleName = Keys[ind]
              if (titleName === &#39;startAt&#39; &amp;&amp; val) {
                result = val.replace(/\\//g, &#39;-&#39;) + &#39; 00:00:00&#39;
              } else if (titleName === &#39;endAt&#39; &amp;&amp; val) {
                result = val.replace(/\\//g, &#39;-&#39;) + &#39; 23:59:59&#39;
              } else if (titleName === &#39;conditionRule&#39; &amp;&amp; val) {
                result = parseDateTime(val)
              }
              obj[titleName] = result
            })
            if (isNotEmptyLine(obj)) {
              obj.index = index + 1
            }
            return obj
          })

          // \u8FC7\u6EE4\u5C5E\u6027\u90FD\u662F\u7A7A\u7684\u884C
          const withoutEmptys = datas.filter(element =&gt; {
            return isNotEmptyLine(element)
          })
          resolve(withoutEmptys)
        }
      })
    },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[d];function v(r,t){return e(),n("div",null,a)}var b=i(l,[["render",v],["__file","savefile.html.vue"]]);export{b as default};
