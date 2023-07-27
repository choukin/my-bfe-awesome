// ==UserScript==
// @name         WALL-E
// @namespace    https://cloud.xuepeiyou.com/
// @version      0.3
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAAAAEABAAEAAAABAAAAAAAAAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAHaAdoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhaSiiu05wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKXJpKWgBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClpKWgBKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApaSloASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKms7K5v5xDZ28txIedsSliKAIaK3P+EM14DLaeyezyIv8zSDwZr75Cacz467JEb+TUXQWZiUVtnwZ4iXk6PdfgoNV38Na3H97SL8f9sGNLmQWZmUVdk0XU4hl9NvVHqYH/wAKqyW8sOfOhljx13oVx+dO4xlFFFAgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKWkpaAEooooAKKKKACiiigAooooAKKKKACtnw/4cn1ybcSYrVThpSOvsPf37fpS6Joa3m26vNwtiSI4wcNOR6eiju34Dmuok1GXSvK8xFWywIxsGBF6fgfWhJsDm/EvhiTQ3EsJaS0c4DHnafQ/41g167FLBqVm9vcqskUq4ZTzXnHiDQZdEvCvL2zn91J/Q+4o16gZNFFFABRRRQAUUUUAFFFBOFJ9KANDRdIbWL0xmQQW8SmW4nYcRRjqfr2A7mt43ySWRS0nbR9ELeVFgkSXDf35GHJJxnHAFXLPSVisrXQo/llmjW81Bvc8on0A5x6mtW30O2ij+yT7JIA2471Byf6VO+pW2hhWHghpLk/b5JSo5Vg+d1W7oaPpTmPT7Np7lVyzBsKo9WbsPc1s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
// @description  自动审批通过，脏活儿交给 WALL-E ,解放双手
// @author       choukin
// @match        https://cloud.xuepeiyou.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @license MIT
// ==/UserScript==

(function () {
  //console.log(window.unsafeWindow)
  const originSend = XMLHttpRequest.prototype.send

  XMLHttpRequest.prototype.send = function (body) {
    //        console.log(this.responseURL,'this-responseURL')
    //          console.log(this.body,'this-responseURL')
    if (body) {
      try {
        const bodyObj = JSON.parse(body)
        if (bodyObj.env && bodyObj.env[0]) {
          localStorage.setItem('xuepeiyouenv', bodyObj.env[0])
        }
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(userInfo, '=====userInfo')
        const { auditors, test_type, gray_audit } = bodyObj
        console.log(auditors, test_type, gray_audit, '=====')
        if (test_type === 0 && gray_audit && auditors === userInfo.email) {
          bodyObj.gray_audit = false
          body = JSON.stringify(bodyObj)
        }
        console.log(body)
      } catch (e) {
      }
    }
    originSend.apply(this, arguments);
  }
  const originOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_, url) {
    try {
      //       console.log(url,'url')
      const envstr = localStorage.getItem('xuepeiyouenv')
      //         console.log(localStorage.getItem('xuepeiyouenv'))
      if (envstr === 'test' && url && url.indexOf('k8s/apiv3/plat/team/auditors/get') > -1 && url.indexOf('role_id=1') > -1) {
        this.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            const res = JSON.parse(this.responseText);
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const tempUser = JSON.parse(JSON.stringify(res.data.list[0]))
            tempUser.Email = userInfo.email
            tempUser.Name = userInfo.realname
            res.data.list.unshift(tempUser)
            // 当前 xhr 对象上定义 responseText
            Object.defineProperty(this, "responseText", {
              writable: true,
            });

            this.responseText = JSON.stringify(res);
          }
        });
      }
    } catch (e) {
      console.error(e)
    }

    originOpen.apply(this, arguments);
  };
})();