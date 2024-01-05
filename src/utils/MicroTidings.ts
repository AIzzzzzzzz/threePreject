import { Router } from "vue-router";
/* import useInfoStore from "@/piniaStore/modules/info"; */
import usePiniaStore from "@/store/modules/info";




declare global {
  interface Window {
    eventCenterForAppNameVite: any;
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: string;
    __MICRO_APP_BASE_APPLICATION__: string;
  }
}

// 与基座进行数据交互
export function handleMicroData(router: Router) {
  let piniaStore =  usePiniaStore()
  
  // eventCenterForAppNameVite 是基座添加到window的数据通信对象
  if (window.eventCenterForAppNameVite) {
    // 主动获取基座下发的数据
    console.log(
      "child-vite getData:",
      window.eventCenterForAppNameVite.getData()
    );
    piniaStore.microAppData = window.eventCenterForAppNameVite.getData()
   


    
    // 监听基座下发的数据变化
    window.eventCenterForAppNameVite.addDataListener(
      (data: Record<string, unknown>) => {
        console.log("child-vite addDataListener:", data);
        
        /* window.localStorage.setItem('addData',data) */
        //数据接入pinia仓库
        piniaStore.microAppData = window.eventCenterForAppNameVite.getData()
        
        if (data.path && typeof data.path === "string") {
          data.path = data.path.replace(/^#/, "");
          // 当基座下发path时进行跳转
          if (data.path && data.path !== router.currentRoute.value.path) {
            router.push(data.path as string);
          }
        }
      }
    );
  }
}
