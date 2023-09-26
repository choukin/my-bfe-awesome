// ==UserScript==
// @name         test
// @run-at document-start
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  获取小红书个人信息页面数据点赞数据
// @author       choukin
// @match        https://www.xiaohongshu.com/user/profile/*
// @match        https://www.xiaohongshu.com/explore/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaohongshu.com
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @require https://unpkg.com/ajax-hook@3.0.2/dist/ajaxhook.min.js
// @require https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.mini.min.js
// @require https://unpkg.com/layui@2.8.17/dist/layui.js
// @resource layui https://unpkg.com/layui@2.8.17/dist/css/layui.css
// @grant        none
// @license MIT
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
(function () {
  'use strict';

  // Fetch the stored CSS from the resource.
  // 代码内部    引入bootstrap的css文件并加入html中
  // https://layui.dev/docs/2.8/layer/#examples
  //const layui = GM_getResourceText("layui");
  //GM_addStyle(layui);
  // Your code here...
  let datas = []
  let exploresData = []
  let page = 1
  let nickname = ''
  let userid = ''
  let hasMore = true

  window.ah.proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
      console.log(config.url)
      handler.next(config);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
      console.log(err.type)
      handler.next(err)
    },
    //请求成功后进入
    onResponse: (response, handler) => {
      const { config } = response
      console.log(config.url.indexOf('//edith.xiaohongshu.com/api/sns/web/v1/user_posted'))
      //      const body = JSON.parse(config.body)
      if (config.url.indexOf('//edith.xiaohongshu.com/api/sns/web/v1/user_posted') > -1) {
        const res = JSON.parse(response.response)
        console.log(res)
        // 监控文章列表接口
        monitorPosted(res)
      }

      // else if (config.url.indexOf('//edith.xiaohongshu.com/api/sns/web/v1/feed') > -1) {
      //const res = JSON.parse(response.response)
      //monitorFeed(res)
      //}
      handler.next(response)
    }
  })


  // 处理文章裂变接口数据
  function monitorPosted(res) {
    hasMore = res.data.has_more
    const notes = res.data.notes
    if (notes) {
      datas = datas.concat(notes.map((item => {
        nickname = item.user.nickname
        userid = item.user.user_id
        return {
          id: item.note_id,
          title: item.display_title,
          likecount: item.interact_info.liked_count
        }
      })))
    }
    if (page === 1) {
      page++;
      setText('解析中')
      window.setTimeout(autoScroll, 1000)
    }
  }

  // 处理文章详情接口数据
  /**
function monitorFeed(res) {
    const  noteId = window.location.href.replace('https://www.xiaohongshu.com/explore/','')
    window.__INITIAL_STATE__ .note.noteDetailMap[noteId]
  const detail = res.data.items
  const note_card = detail.note_card
  const interact_info = note_card.interact_info
  const user = detail.user
  const details = getExploresDetail()
  if (details) {
    exploresData = JSON.parse(details)
  }
  nickname = user.nickname
  userid = user.user_id
  exploresData.push({
    note_id: note_card.note_id,
    title: note_card.title,
    likecount: interact_info.liked_count,
    collected_count: interact_info.collected_count,
    comment_count: interact_info.comment_count,
    share_count: interact_info.share_count
  })
  setExploresDetail(JSON.stringify(exploresData))
}
*/

  function monitorFeed() {
    const noteId = window.location.href.replace('https://www.xiaohongshu.com/explore/', '')
    const res = window.__INITIAL_STATE__.note.noteDetailMap[noteId]
    const detail = res.note
    const interact_info = detail.interactInfo
    const user = detail.user
    const details = getExploresDetail()
    if (details) {
      exploresData = JSON.parse(details)
    }
    nickname = user.nickname
    userid = user.userId
    exploresData.push({
      文章ID: detail.noteId,
      标题: detail.title,
      点赞数量: interact_info.likedCount,
      收藏数量: interact_info.collectedCount,
      评论数量: interact_info.commentCount,
      分享数量: interact_info.shareCount
    })
    setExploresDetail(JSON.stringify(exploresData))
  }

  function renderResult() {
    $(function () {
      const tableHtml = renderTable()
      const end = !hasMore ? '解析结束' : '解析中'
      // <div>${JSON.stringify(datas,null,2)}</div>
      $('#result').html(`<div style="text-algin:center">${end}</div><div>获取数据共：${datas.length} 条</div><div>${tableHtml}</div>`);
      if (!hasMore) {
        // saveExcel()
        if (window.location.href.indexOf('www.xiaohongshu.com/user/profile') > -1) {
          setExplores(JSON.stringify(datas))
          startCrawl()
        }

      }
    });
  }


  function renderTable() {
    let tablehtml = '';
    for (var i = 0; i < datas.length; i++) {
      const item = datas[i]

      tablehtml += `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.likecount}</td></tr>`;
    }

    return `<table id="Table2XLSX" style="margin: 0 auto;"><tr><td>ID</th><td>标题</th><td>点赞量</th></tr>${tablehtml}</table>`
  }

  function holdPage1() {
    const initData = window.__INITIAL_STATE__.user.notes.value[0]
    console.log(initData)
    if (initData) {
      datas = datas.concat(initData.map((item => {
        nickname = item.noteCard.user.nickname
        userid = item.noteCard.useruserId
        return {
          id: item.id,
          title: item.noteCard.displayTitle,
          likecount: item.noteCard.interactInfo.likedCount
        }
      })))
      if (page === 1) {
        page++;
        setText(nickname + '文章解析中')
        window.setTimeout(autoScroll, 1000)
        createElement()
      }

      if (datas.length < 32) {
        hasMore = false
      }

    }

  }

  function createElement() {
    const result = document.createElement('div')
    result.id = 'result'
    result.style.padding = '1vw';
    result.style.paddingTop = '154px';
    result.style.width = '100vw';
    result.style.height = '100vh';
    result.style.margin = '0 auto';
    result.style.border = '1px solid #DDD';
    result.style.display = 'fiexd'
    result.style.background = 'rgb(5 107 0 / 59%)';
    result.style.color = 'white';
    result.style.fontSize = '20px'
    result.style.position = 'fixed';
    result.style.top = 0;
    result.style.left = 0;
    result.style.overflow = 'auto'
    result.style.textAlign = 'center';
    result.innerText = '开始解析...'
    document.body.append(result)
  }

  function setText(text) {
    const result = document.getElementById('result')
    if (result) {
      result.innerText = text
    }
  }


  function autoScroll() {
    const startingFlag = getStart()
    if (!startingFlag) { return false }
    var height = document.body.clientHeight;
    var number = 0; //控制结束累加器
    var length = 0; //控制每次翻滚长度
    var frequency = 10000; //控制总时间
    var time = setInterval(function () {
      number += 1;
      if (!hasMore) {
        console.log('url')
        console.log('所有的结果', datas)
        setText('解析完成')
        clearInterval(time);
        renderResult()
      } else {
        //length += height /frequency ;
        length += height / 2;
        document.documentElement.scrollTop = length;
        renderResult()
      }

    }, 1000); //每隔100MS翻滚一次
  }

  const USERPPROFILES = 'profiles'
  const STARTFLAG = 'STARTFLAG'
  const EXPLORE = 'explore'
  const EXPLOREDETAIL = 'exploredetail'
  // 设置要获取的 URL
  function setUsersURL(profiles) {
    //       const profilesStr = JSON.stringify(profiles)
    localStorage.setItem(USERPPROFILES, profiles)
  }
  // 获取设置的 URL
  function getUsersURL() {
    const profilesStr = localStorage.getItem(USERPPROFILES)
    let profiles = ''
    if (profilesStr) {
      profiles = profilesStr
    }
    return profiles
  }

  function setStart(flag) {
    localStorage.setItem(STARTFLAG, flag)
  }

  function getStart() {
    return localStorage.getItem(STARTFLAG)
  }

  function setExplores(explores) {
    localStorage.setItem(EXPLORE, explores)
  }

  function getExplores() {
    return localStorage.getItem(EXPLORE)
  }

  function setExploresDetail(exploredetail) {
    localStorage.setItem(EXPLOREDETAIL, exploredetail)
  }

  function getExploresDetail() {
    return localStorage.getItem(EXPLOREDETAIL)
  }


  function saveExcel() {
    const table = document.getElementById("Table2XLSX");
    const wb = window.XLSX.utils.table_to_book(table, { sheet: nickname + '文章统计', raw: true });
    window.XLSX.writeFile(wb, userid + "统计.xlsx");
    startCrawl()
  }

  function exportDetailSheet() {
    let details = getExploresDetail()
    details = JSON.parse(details)
    setExploresDetail([])
    /* create worksheet */
    var ws = XLSX.utils.json_to_sheet(details);
    /* create workbook and export */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, nickname);
    XLSX.writeFile(wb, userid + ".xlsx");
  }


  function setClassStyle() {
    const domHead = document.getElementsByTagName('head')[0];

    let domStyle = document.createElement('style');

    domStyle.type = 'text/css';

    domStyle.rel = 'stylesheet';
    const playVideoStyle = `
          .insepctAPP{
              position: fixed;
              top: 50px;
              left: 50px;
          }
        `
    domStyle.appendChild(document.createTextNode(playVideoStyle));
    let domStyle2 = document.createElement('link');
    domStyle2.type = 'text/css';
    domStyle2.rel = 'stylesheet';
    domStyle2.href = 'https://unpkg.com/layui@2.8.17/dist/css/layui.css'
    domHead.appendChild(domStyle);
    domHead.appendChild(domStyle2);
  }

  function init() {
    setClassStyle()
    const div = $('<div id="insepctAPP" class="insepctAPP"><button type="button" class="layui-btn" lay-on="prompt">设置数据</button></div>').click(() => {
      layer.prompt({
        title: '输入要看的网络地址多个用,分割',
        formType: 2,
        btn: ['开始解析', '取消'],
        value: window.location.href
      },
        function (text, index) {
          layer.close(index);
          setUsersURL(text)
          setStart('1')
          startCrawl()
        });
    })

    $('body').append(div)
  }

  // 处理用户信息页面文章统计
  function startCrawl() {
    const startingFlag = getStart()
    if (startingFlag) {
      let usersURls = getUsersURL()
      if (usersURls) {
        usersURls = usersURls.split(',')
        const profileUser = usersURls.shift()
        setUsersURL(usersURls.join(','))
        setStart('1')
        window.location.href = profileUser
      } else {
        layer.msg('结束')
        setStart('2')
        processExporles()
      }
    }
  }

  // 处理文章详情
  function processExporles() {
    let explores = getExplores()
    explores = JSON.parse(explores)
    if (explores && explores.length > 0) {
      const currentExplore = explores.shift()
      setExplores(JSON.stringify(explores))
      setTimeout(function () {
        window.location.href = 'https://www.xiaohongshu.com/explore/' + currentExplore.id
      }, 800)
    } else {
      // 文章详情处理完成后导出
      exportDetailSheet()
      // 如果文章还有用户信息页面未处理继续处理
      let usersURls = getUsersURL()
      if (usersURls) {
        setStart('1')
        // 重新开始爬
        startCrawl()
      }
    }
  }

  window.onload = function () {
    const initData = window.__INITIAL_STATE__.user.notes.value[0]
    console.log(initData)
    const startingFlag = getStart()
    if (startingFlag === '1') {
      holdPage1()
    } else if (startingFlag === '2') {
      monitorFeed()
      processExporles()
    } else {
      init()
    }
  }
})();