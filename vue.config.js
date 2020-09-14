const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.port || process.env.npm_config_port || 3050; // dev port;
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  assetsDir: "static",
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  runtimeCompiler: false,
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  devServer: {
    host: "0.0.0.0", // 允许外部ip访问
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      //跨域处理
      // [process.env.VUE_APP_API_URL]: {
      //   target: [process.env.VUE_APP_API_URL],
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ["^" + process.env.VUE_APP_API_URL]: ""
      //   }
      // }
      "/lingling": {
        target: "http://111.230.9.221",
        changeOrigin: true
        // pathRewrite: { "^/api": "" }
      }
    } // 代理转发配置，用于调试环境
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        inject: true
      })
    ],
    resolve: {
      alias: {
        "@": resolve("./src")
      }
    }
  }
};
