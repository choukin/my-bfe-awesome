const fs = require('fs');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const QRCode = require('qrcode');
const Jimp = require('jimp');
const JPEG = require('jpeg-js');

Jimp.decoders['image/jpeg'] = (data) => JPEG.decode(data, { maxMemoryUsageInMB: 20480 });

const config = {
  img: '保险B版.jpg', // 底图
  count: 100, // 打印张数
  url: 'https://www.baidu.com', // 二维码跳转链接
  textLeft:1882,
  textTop:6695,
  // 二维码
  qrCodeList: [
    {
      healthitem: '1', // 18岁以下 儿童百万
      width: 1024,
      height: 1024,
      x: 3031,
      y: 2184
    },
    {
      healthitem: '2', // 18-60岁 成人百万
      width: 1024,
      height: 1024,
      x: 3031,
      y: 3772
    },
    {
      healthitem: '3', // 60-80岁 老年防癌
      width: 1024,
      height: 1024,
      x: 3031,
      y: 5370
    }
  ],
  tempFilePath: (name) => {
    return `./output-multiQRCode/${name}.jpg`;
  }
};

const urls = [];

function resolve(dir) {
  return path.join(__dirname, dir);
}

/**
 * codeBuffer 转图片
 * @returns
 */
const codeJimp = ({ code, width, height }) => {
  return new Promise((resolve, reject) => {
    Jimp.read(code).then((res) => {
      if (res) {
        resolve(res.resize(width, height));
      } else {
        reject('包装buffer失败');
      }
    });
  });
};

// 生成二维码Buffer
const codeBuffer = (url) => {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(url, { margin: 1 }, (err, url) => {
      // 注意：这里必须把“data:image/png;base64,”这一段去掉才能转成正确的buffer
      const res = Buffer.from(url.replace(/.+,/, ''), 'base64');
      err ? reject(err) : resolve(res);
    });
  });
};

function renderImg(shopCode) {
  return new Promise((resolve, reject) => {
    Jimp.read(config.img).then((img) => {
      Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(font => {
        const codename = `health.shop.${shopCode}`
        img.print(font, config.textLeft, config.textTop, codename)
      config.qrCodeList.forEach((item) => {
        const url = `${config.url}?mp=health.shop.${shopCode}&bi_cf=health.shop.${shopCode}&healthitem=${item.healthitem}`;

        urls.push(url);

        codeBuffer(url).then((code) => {
          codeJimp({ code, width: item.width, height: item.height }).then((imgbuffer) => {
            img.composite(imgbuffer, item.x, item.y).write(config.tempFilePath(codename), (error) => {
              if (error) {
                reject(error);
                console.log(error);
              } else {
                resolve();
              }
            });
          });
        });
      });
    });
  });


  });
}

function createFileData() {
  fs.writeFile(resolve('output-multiQRCode.txt'), JSON.stringify(urls, null, '\t'), function (err) {
    if (err) {
      res.status(500).send('Server is error...');
    }
  });
}

async function main() {
  const spinner = ora(chalk.green('🚚 图片生成中...'));

  spinner.color = 'green';
  spinner.spinner = {
    interval: 80, // Optional
    frames: ['-', '+', '-']
  };
  spinner.start();

  console.time('共花费了');

  for (let i = 1; i <= config.count; i++) {
    const shopCode = `${i}`.padStart(4, '0');

    try {
      await renderImg(shopCode);
      spinner.text = chalk.green(`第${i}张生成完毕`);
    } catch (e) {
      console.error(e, i);
    }

    if (i === config.count) {
      createFileData();
      spinner.succeed(chalk.green(`执行结束`));
      console.timeEnd('共花费了');
    }
  }
}

main();
