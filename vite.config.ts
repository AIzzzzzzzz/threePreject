// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     },
//     //extensions: [".ts", ".js", ".vue", ".json", ".mjs"],
//     extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
//   },
// });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import VitePluginMicroApp from "./vite-plugin-micro-app";
import copyPlugin from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  // base: `${
  //   process.env.NODE_ENV === "production" ? "https://rebarmachining.procde.cn:8443" : ""
  // }/rebar/`,
  base: "/rebar/",

  plugins: [vue(), VitePluginMicroApp()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    //extensions: [".ts", ".js", ".vue", ".json", ".mjs"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      plugins: [
        copyPlugin({
          targets: [{ src: 'Dockerfile', dest: 'dist' }],
        }),
      ],
    },
    outDir: "dist/rebar/",
  },
});
