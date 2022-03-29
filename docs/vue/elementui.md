# element UI 问题记录
## 问题描述：
element-ui 日期选择器如何限制只能选择31天，也就是在选定起始日期时，只能向后面选择31天？

### 知识点：
element-ui日期选择组件地址：http://element-cn.eleme.io/#/zh-CN/component/date-picker

picker-options：当前时间日期选择器特有的选项，类型object

disabledDate：设置禁用状态，参数为当前日期，要求返回 Boolean，类型Function

onPick：选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效，类型Function({ maxDate, minDate })

解决办法：
```js
<template>
        <el-date-picker
                v-model="dateRange"
                :picker-options="pickerOption"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
        </el-date-picker>
    </div>
</template>
<script>
export default ({
    data: function() {
      return {
        dateRange:[],
        pickerMinDate: '', // 开始时间
        pickerOption: {
        onPick: ({ minDate, maxDate }) => {
          debugger
          this.pickerMinDate = minDate.getTime()
          if (maxDate) {
            this.pickerMinDate = ''
          }
        },
        disabledDate: (time) => {
          debugger
          if (this.pickerMinDate) {
            const day31 = 30 * 24 * 60 * 60 * 1000
            const maxTime = this.pickerMinDate + day31
            return time.getTime() > maxTime
          }
        }
      }
      }
    }
  })
</script>
</html>
```