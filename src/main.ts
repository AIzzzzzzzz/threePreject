import "./utils/public-path";

import { createApp } from "vue";
// import "./style.css";
import "./common.scss";
import App from "./App.vue";

// import router from "./router";
import router from "@/router/index";
/* import { createPinia } from "pinia"; */
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import http from "./utils/request.js";

import { handleMicroData } from "./utils/MicroTidings";
//引入pinia仓库
import stort from "./store/index.ts";
import '@google/model-viewer'

import "@google/model-viewer-effects";
const app = createApp(App);


app.use(router);
//使用pinia
app.use(stort);

app.use(ElementPlus);
app.use(http);
app.mount("#my-vite-app");

handleMicroData(router);