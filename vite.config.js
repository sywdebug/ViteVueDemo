import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [vue(), viteCompression()],
  resolve: {
    alias: {
      "/img": "/src/assets/img/",
      "/scss": "/src/assets/scss/",
      "/views": "/src/views/",
      //这里不能通过path模块解析路径的写法
    },
  },
  server: {
    host: "127.0.0.1",
    port: 8080, //vite项目启动时自定义端口
    open: true, //vite项目启动时自动打开浏览器
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    hmr: true, //开启热更新，默认就是开启的
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
