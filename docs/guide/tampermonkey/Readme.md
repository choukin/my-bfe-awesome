# 效率工具开发思路分享

## 想要解决的问题

测试环境项目不熟时可以发给自己审批

## 实现思路

### 分析

1、把自己加到审核人列表里

```js
    async getAuditorList () {
      // TypeTeamAuditor = 1 // 审核人 or 一级审核人
      // TypeTeamSecondAuditor = 2 // 二级审核人，团队管理员
      // TypeTeamQA = 3 // OA
      // TypeTeamNotice = 4 // 通知人 所有
      // --------------审核人 or 一级审核人--------------------
      const paramsCheck = {
        team_id: this.queryData.teamId,
        role_id: 1
      }
      const paramsCheckData = await $http.getAuditorList(paramsCheck)
      if (paramsCheckData.code === 0) {
        if (paramsCheckData.data && paramsCheckData.data.list) {
          this.checkPersonList = paramsCheckData.data.list
        }
      } else {
        this.$message.error(paramsCheckData.msg)
        return false
      }
      // ------先判断是否存在二级审核人--------二级审核人--------------------
      // ------开启QA验证，则不用请求二级审核人员列表，将qa人员列表代替二级审核人员列表----
      if (this.is_audit_proj && !this.qaAudit) {
        const paramsCheckSecond = {
          team_id: this.queryData.teamId,
          role_id: 2
        }
        const checkSecondRes = await $http.getAuditorList(paramsCheckSecond)
        // 二级审核人列表
        if (checkSecondRes.code === 0) {
          if (checkSecondRes.data && checkSecondRes.data.list) {
            this.checkSecondPersonList = checkSecondRes.data.list
          }
        } else {
          this.$message.error(checkSecondRes.msg)
          return false
        }
      }
```

```sh
curl 'https://cloud.xuepeiyou.com/k8s/apiv3/plat/team/auditors/get?team_id=903&role_id=1' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MjA3NDIsImZyb20iOiJrOHMiLCJpYXQiOjE2OTExMTU5NDIsImlkIjo0NDQwLCJuYW1lIjoidl96aGFveGluMyIsInRva2VuIjoiIiwidHlwZSI6MCwid29ya2NvZGUiOiJWMDAxNTc3OCJ9.tBUv2DDB0hEqNG8BXWNfdy6wFaTBM8mPIIfFTPazYPY' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: logged_out_marketing_header_id=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkltSTBOVE0wTmpZNUxUTm1OMlV0TkRFNU1pMDRPRGszTFdRME5XSXpabVl6TWpOaU55ST0iLCJleHAiOm51bGwsInB1ciI6ImNvb2tpZS5sb2dnZWRfb3V0X21hcmtldGluZ19oZWFkZXJfaWQifX0%3D--ef88521dca7c39e8349d5a312f4295f5e64350bc; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22P106466%22%2C%22first_id%22%3A%22188fbc4fc3e8e9-0a7ef1157e2f1-1b525634-3686400-188fbc4fc3f13c9%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fonelogin.saasp.vdyoo.com%2F%22%7D%2C%22%24device_id%22%3A%22188fbc4fc3e8e9-0a7ef1157e2f1-1b525634-3686400-188fbc4fc3f13c9%22%7D; Hm_lvt_fc5ae86aeaebb19e977038c755e4196f=1689836531,1690343013,1690783528,1690947318; Hm_lpvt_fc5ae86aeaebb19e977038c755e4196f=1690947318; beegosessionID=8857301932f888bf174f0901e472ed89; Authorization=Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3MjA3NDIsImZyb20iOiJrOHMiLCJpYXQiOjE2OTExMTU5NDIsImlkIjo0NDQwLCJuYW1lIjoidl96aGFveGluMyIsInRva2VuIjoiIiwidHlwZSI6MCwid29ya2NvZGUiOiJWMDAxNTc3OCJ9.tBUv2DDB0hEqNG8BXWNfdy6wFaTBM8mPIIfFTPazYPY' \
  -H 'Pragma: no-cache' \
  -H 'Referer: https://cloud.xuepeiyou.com/k8s-fe/appManage/appManageCenter/detail?id=23425' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed

```

```json
{
    "code": 0,
    "stat": 1,
    "msg": "OK",
    "data": {
        "list": [
            {
                "Id": 10165,
                "TeamId": 903,
                "UserId": 4426,
                "Name": "张喜峰",
                "Avatar": "",
                "Email": "v_zhangxifeng@tal.com",
                "Role": 2,
                "NoticeEnable": false,
                "CreateAt": "2023-03-03T16:01:56+08:00",
                "UpdateAt": "2023-03-03T16:01:56+08:00"
            },
        ],
        "total": 20
    }
}
```

2、审批同意接口 此路不通，生成加密信息比较麻烦

```js
// https://cloud-tck-audit.xuepeiyou.com/apiv3/cd/audit/general
{
	"ver": "v3",
	"project_name": "lv-node-service-test",
	"id": 569312,
	"auditor": 4440,
	"auditor_name": "赵鑫",
	"audit_status": 1,
	"if_urgent": 0,
	"secret": "280840f55b2f660bf5d5464b705e14e7",
	"mode": "online"
}
```


3、修改审批类型免审批

```js
    async sumbitData () {
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { image, version, cause, publishType, testType, CheckCluster } = values

          values.auditor = this.checkPersonList.find(person => person.Name === values.auditor).Email
          if (values.second_auditors) {
            values.second_auditors = this.checkSecondPersonList.find(person => person.Name === values.second_auditors).Email
          }
          if (values.urgencyAuditor) {
            values.urgencyAuditor = this.urgentCheckResList.find(person => person.name === values.urgencyAuditor).email
          }
          if (values.qaTest) {
            values.qaTest = this.testPersonList.find(person => person.Name === values.qaTest).Email
          }

          const params = {
            is_gray: 0, // 是否为灰度发布
            project_name: this.projectName, // 应用名称
            app_id: this.$route.query.id * 1, // 应用ID
            ci_id: this.row.id * 1, // 构建ID
            image_name: image, // 镜像名称
            image_version: version, // 镜像版本
            publish_message: cause, // 申请描述
            auditors: values.auditor, // 一级审核人
            publish_type: publishType * 1, // 发布类型
            test_type: testType * 1, // 测试类型
            clusters: [], // 集群
            gray_audit: this.grayAudit
          }
          params.clusters.push(CheckCluster)
          // 二级审核人
          if (values.second_auditors) {
            params.second_auditors = values.second_auditors
          }
          // 紧急审核人
          if (values.urgencyAuditor) {
            params.urgent_auditor = values.urgencyAuditor
          }
          // QA测试
          if (values.qaTest) {
            params.qa_auditors = values.qaTest
          }
          // 如果开启QA验证，非审计项目将用户选的qa人员作为二级审核人员，审计项目将qa人员列表代替二级审核人员列表（依然将qa人员作为二级审核人员）
          if (!this.is_audit_proj && this.qaAudit) {
            params.second_auditors = values.qaTest
          }
          const res = await $http.postCDApply(params)
          if (res && res.code === 0) {
            this.$message.success('申请发布成功,请到发布升级查看')
            this.$emit('successClick', false)
          } else {
            this.$message.error(res.msg)
            return false
          }
        }
      })
    },
```

```js
// https://cloud.xuepeiyou.com/k8s/apiv3/plat/cd/apply
{
    "is_gray": 0,
    "project_name": "lv-node-service-test",
    "app_id": 23076,
    "ci_id": 1175679,
    "image_name": "lv-node-service",
    "image_version": "2e54442b-release-f24da79b",
    "publish_message": "123",
    "auditors": "v_zhaoxin3@tal.com",
    "publish_type": 1,
    "test_type": 0,
    "clusters": [
        "ops-system-k8s-test"
    ],
    "gray_audit": false
}
```


## 实现
### chrome 插件 失败
> chrome.webRequest API 允许您访问 POST 数据。但是，它不允许您修改 POST 数据。
> 
> 您可以修改一些标头信息，但不能修改 POST 数据。
> 看起来修改 POST 数据的能力是有意为之，但 Google 的一位从事此工作的开发人员被转移到其他地方，并在两年后等待错误/功能请求，然后才将其发布给其他人几个月前可以捡起来。如果这是您感兴趣的功能，请前往 https://bugs.chromium.org/p/chromium/issues/detail?id=91191# 并为这个错误加注星标（需要 gmail 帐户），也许一些新的兴趣会导致有人完成该功能。
- [相关资料](https://www.likecs.com/ask-2712956.html)
 


### 篡改猴 `大树底下好乘凉`

支持多终端
- 桌面端 
  - Chrome：Tampermonkey 或 Violentmonkey
  - Firefox：Greasemonkey、Tampermonkey 或 Violentmonkey
  - Safari：Tampermonkey 或 Userscripts
  - Microsoft Edge：Tampermonkey 或 Violentmonkey
  - Opera：Tampermonkey 或 Violentmonkey
  - Maxthon：Violentmonkey
  - AdGuard：（不需要其他软件）
- 手机端（Android） 
  - Firefox：Greasemonkey、Tampermonkey 或 Violentmonkey
  - Maxthon：Violentmonkey
  - Dolphin：Tampermonkey
  - UC：Tampermonkey
  - Kiwi：Tampermonkey 或 Violentmonkey
  - X浏览器
  - 书签地球
  - M浏览器
  - 狐猴浏览器：Tampermonkey
- 手机端（iOS）
  - Safari：Tampermonkey 或 Userscripts
  - Gear：（不需要其他软件）


  ## 目前已知的问题

   1、 不支持无痕模式（浏览器本身不支持）
   
   2、测试应用和生产应用同时打开的情况下，生产应用的开发审批中可以出现自己的名字（待解决）
