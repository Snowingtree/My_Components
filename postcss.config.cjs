const { beforeEach } = require('node:test');

// postcss.config.cjs（正确的 CommonJS 格式）
module.exports = {
  plugins: [
    // 关键：插件需要执行调用（加 ()），而不是只引入
    require('postcss-each')({
        plugins:{
            beforeEach:[
                require('postcss-color-mix'),
                require('postcss-for'),
            ]
        }
    }),
  ]
};