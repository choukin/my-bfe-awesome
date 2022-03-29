module.exports = {
  // 美行最多多少个字符换行
  printWidth: 100,
  // 使用分号
  semi: true,
  // vue文件的script标签和Style标签下的内容需要缩进
  vueIndentScriptAndStyle: true,
  // 使用单引号，默认false，在jsx中配置无效，默认都是双引号
  singleQuote: true,
  // 行尾逗号，默认node none|es5|all
  trailingComma: 'all',
  // 这行方式
  //   " always " - 当超出print width（上面有这个参数）时就折行
  // " never " - 不折行
  // " perserve " - 按照文件原样折行 （v1.9.0+）
  proseWrap: 'never',
  // 所有的空白行都认为是重要的
  htmlWhitespaceSensitivity: 'strict',
  // 文件最后一行
  endOfLine: 'auto',
};
