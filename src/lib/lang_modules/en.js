const Gen = require('../gen');
// ways to generate document templates
const path = require('../path');
/*
  @description Предназначен для сборки файлов с суффиксом [EN] в названии файла.
  @property { string } pathSrcSource - исходные шаблоны документов
  @property { string } pathSrcDocs - путь куда будут синхронизированы шаблоны документов
  @property { string } pathSrcMan - описание шаблонов документов (их назначения, функций, особенностей)
  @property { string } pathOrderFiles - порядок файлов для сборки файла README
  @property { string } pathBuildMd - файл для презентации внешнего вида документов и их последовательности в формате *.md
  @property { string } pathBuildHtml - файл для презентации  внешнего вида документов и их последовательности в формате *.html
  @property { string } pathBuildReadme - окончательный README файл проекта с внесенными вами правками в шаблоны документов в дирректории "docs/" текущего языкового модуля
  @property { string } pathFileListOrder - порядок очереди шаблонов документов для readme и html файлов
*/
const pathConfig = [
  path.src.source.en,
  path.src.docs.en,
  path.src.man.en,
  path.src.order.en,
  path.build.md.en,
  path.build.html.en,
  path.build.readme.en,
  path.src.order.en
];

const langModule = new Gen(pathConfig);

module.exports = langModule;
