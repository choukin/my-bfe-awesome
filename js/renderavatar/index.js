const QRCode = require('qrcode')
const Jimp = require('jimp')
const fs = require('fs');
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
    // ditui.1   ditui.1000
const config = {
    codeWidth:150, 
    codeWidth:150,
    codeLeft:448,
    codeTop:720,
    tempFilePath:(name)=>{
        return `./output/${name}.png`
    },
    dituiurl:'https://www.baidu.com?id=1202&mp='
}
let urls = []
/**
 * codeBuffer 转图片
 * @returns 
 */
const codeJimp = (codeBuffer)=>{
    return new Promise((resolve, reject) => {
        Jimp.read(codeBuffer).then((res) => {
          if (res) {
            resolve(res.resize(config.codeWidth, config.codeWidth))
          } else {
            reject('包装buffer失败')
          }
        })
    })
}


// 生成二维码Buffer
const codeBuffer = (url)=>{
return new Promise((resolve, reject) => {
    QRCode.toDataURL(url, {margin: 1}, (err, url) => {
      // 注意：这里必须把“data:image/png;base64,”这一段去掉才能转成正确的buffer
      const res = Buffer.from(url.replace(/.+,/, ''), 'base64')
      err ? reject(err) : resolve(res)
    })
})
}


async function renderImag (mpname){
    const dituiurl = config.dituiurl+mpname
    urls.push(dituiurl)
    return new Promise(async (resolve,reject)=>{
        const code = await codeBuffer(dituiurl)
        const imgbuffer = await codeJimp(code)
    Jimp.read('avatar.png').then(img => {
        img.composite(imgbuffer, config.codeLeft, config.codeTop)
           .write(config.tempFilePath(mpname), (error) => {
               if(error) {
                reject(error)
                console.log(error);
               }else{
                resolve()
               }
           })
      })
    })
}

function createFileData(){
    fs.writeFile(resolve('output.txt'), JSON.stringify(urls, null, "\t"), function (err) {
        if (err) { res.status(500).send('Server is error...') }
      })
}

function resolve(dir) {
    return path.join(__dirname, dir);
  }

  



  async function  main(){
    const spinner = ora(chalk.green('🚚 图片生成中...'))
    spinner.color = 'green'
    spinner.spinner = {
        interval: 80, // Optional
	    frames: ['-', '+', '-']
    }
    spinner.start();
    console.time('共花费了')
    const nums = 10
    for(let i=1;i<=nums;i++) {
        const mpname = 'ditui.'+i
        try{
        await renderImag(mpname)
        spinner.text = chalk.green(`第${i}张生成完毕`)
        }catch(e){
            console.error(e,i);
        }
        
        if(i===nums) {
            createFileData()
            spinner.succeed(chalk.green(`执行结束`))
            console.timeEnd('共花费了')
        }
    }
}

main()




