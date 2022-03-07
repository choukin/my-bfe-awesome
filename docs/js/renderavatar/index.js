const QRCode = require('qrcode')
const Jimp = require('jimp')
const fs = require('fs');
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
const JPEG = require('jpeg-js');

Jimp.decoders['image/jpeg'] = (data) => JPEG.decode(data, { maxMemoryUsageInMB: 20480 });
    // ditui.1   ditui.1000
const config = {
    avatarname:'baoding1.jpg',
    endNumber:5642,
    fendNumber:6266,
    codePre:'QSCLMX-',
    codeWidth:1033, 
    codeWidth:1033,
    // codeLeft:4902,
    // codeTop:8675,
    codeLeft:3052,
    codeTop:5566,
    textLeft:3162,
    textTop:(5566+1033+100),
    tempFilePath:(name)=>{
        return `./output1/${name}.jpg`
    },
    dituiurl:(index)=>{
        const name = `referral.link.257.${config.fendNumber+index}.${config.endNumber-index}`
             // https://m.qsebao.com/zbb/landpage?scene_name=yatai-health-ganyuanbao-land-page-year-20212&sku_name=yatai-health-ganyuanbao&bi_cf=referral.link.257.6266.5642&mp=referral.link.257.6266.5642
        return `https://www.baidu.com/index.html?scene_name=yatai-health-ganyuanbao-land-page-year-20212&sku_name=yatai-health-ganyuanbao&bi_cf=${name}&mp=${name}`
    }
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


async function renderImag (index){
    const dituiurl = config.dituiurl(index)
    urls.push(dituiurl)
    return new Promise(async (resolve,reject)=>{
        const code = await codeBuffer(dituiurl)
        const imgbuffer = await codeJimp(code)
    Jimp.read(config.avatarname).then(img => {
        Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(font => {
        const codename = config.codePre+(index+1)
        img.print(font, config.textLeft, config.textTop, codename)
        //.then(img=>{
            img.composite(imgbuffer, config.codeLeft, config.codeTop)
            .write(config.tempFilePath(codename), (error) => {
                if(error) {
                 reject(error)
                 console.log(error);
                }else{
                 resolve()
                }
            })
        // })
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
    const nums = 50
    for(let i=nums;i>0;i--) {
        
        const index = nums-i +1
        try{
        await renderImag(nums-i)
        spinner.text = chalk.green(`第${index}张生成完毕`)
        }catch(e){
            console.error(e,i);
        }
        
        if(i===1) {
            createFileData()
            spinner.succeed(chalk.green(`执行结束`))
            console.timeEnd('共花费了')
        }
    }
}

main()




