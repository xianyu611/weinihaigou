const { override, fixBabelImports, addLessLoader ,addwebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const { resolve } =require("path")

 module.exports = override(
    addDecoratorsLegacy(),
      //  fixBabelImports('import', {
      //    libraryName: 'antd',
      //    libraryDirectory: 'es',
      //    style: true,
      //  }),
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         libraryDirectory: 'es',
         style: true,
       }),
        addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#f40' },
         }),
      //    addwebpackAlias({
      //       "@":resolve("src")
      //   })
     );