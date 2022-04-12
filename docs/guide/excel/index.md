# exlcel 技巧

- 1、 第一个sheet中合并后的单元格引用第二个单元格中的内容

  输入 =INDEX(Sheet2!A:A,(ROW(A1)+3)/3)
  >第一个sheet中单元格是3个合并的 