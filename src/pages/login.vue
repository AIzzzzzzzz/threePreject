<template>
  <div
    style="
      width: 400px;
      height: 200px;
      margin: 40px;
      padding: 20px;
      background: #c9c9c9;
    "
  >
    子页面内容：
    <el-button type="primary" @click="fun_send">子发送</el-button>
  </div>
  <!-- <div @click="tologin">登录</div>
  <h2>{{ store.name }}</h2>
  <h1 @click="changeName">修改名称</h1>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
  </div> -->
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";


import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance() as any;

const router = useRouter();


function fun_send(): void {
  debugger;
  window.eventCenterForAppNameVite.dispatch({ myname: "child-vite" });
}

function login(): void {
  let data = {
    roleId: "A",
    username: "dpc",
    password: "dpc12345",
    sysType: "zhfw",
  };
  proxy.$post("/index/login", data).then((response: any) => {
    console.log(response);
    router.push({
      name: "index",
    });
  });
}
function tologin() {
  login();
}

// function tologin() {
//   router.push({
//     name: "index",
//   });
// }

interface Tree {
  label: string;
  children?: Tree[];
}
const handleNodeClick = (data: Tree) => {
  console.log(data);
};
const data: Tree[] = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
];

const defaultProps = {
  children: "children",
  label: "label",
};
</script>