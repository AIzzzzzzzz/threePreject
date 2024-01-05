<script setup lang="ts">
//引入thress.js
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//导入lil-gui
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { onMounted, watch } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import usePiniaStore from '@/store/modules/info';



let piniaStore = usePiniaStore()



const eventObj = {
  Fullscreen: function () {
    document.body.requestFullscreen()
  },
  Escscreen: function () {
    document.exitFullscreen()
  }
}




const scene = new THREE.Scene()

scene.background = new THREE.Color(0x0099ff)
const camera = new THREE.PerspectiveCamera(
  45,//视角
  700 / 800,//宽高比
  0.1,//近平面，最近能看到多少
  1000,//远平面，相机最远可以看到多少

);


//创建渲染器，最终的渲染就是由它渲染到页面
const renderer = new THREE.WebGLRenderer()
//设置要渲染的尺寸大小
renderer.setSize(600, 800)

//灯光
/* let Light =  new THREE.HemisphereLight(0xffffff,0x000000,0.6)
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 ); */
const light = new THREE.AmbientLight(0xffffff); // 柔和的白光
scene.add(light);

let microAppData = piniaStore.microAppData
//加载模型
let globalID = piniaStore.microAppData.globalID
const gltfLoader = new GLTFLoader()


if (globalID) {
  gltfLoader.load(
    /* https://rebar.procde.cn:8443/GetRebarGroup?groupld=0LQjyZAE50r8GOHWlhonRO */
    /*  'https://rebar.procde.cn:8443/GetRebar?id=100',  */
    './model/model.glb',
    /*   `https://rebar.procde.cn:8443/GetRebarGroup?groupId=${piniaStore.microAppData.globalID}`, */
    /* 'https://rebar.procde.cn:8443/GetRebarGroup?groupId=0LQjyZAE50r8GOHWlhonRO', */
    (gltf) => {
      // THREE.comput
      let box = new THREE.Box3().expandByObject(gltf.scene)
      console.log(box);
      // let center = new THREE.Vector3();
      // box.getCenter(center);
      // console.log(center);
      // gltf.scene.position.x += - center.x;
      // gltf.scene.position.y += - center.y;
      // gltf.scene.position.z += - center.z;
      // console.log(gltf.scene);
    }
  )
}


/* const geometry= new THREE.BoxGeometry(1,1,1)
const metireal = new THREE.MeshBasicMaterial({color:0x00ff00})
const mesh = new THREE.Mesh(geometry,metireal)

scene.add(mesh) */

//设置相机位置 设置的z轴
camera.position.z = 0
camera.position.x = 10
camera.position.y = 10


//看向原点，默认就是原点
camera.lookAt(0, 0, 0)


//添加轨道控件
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true //滑动阻尼，会慢慢的停下来
controls.dampingFactor = 0.01 //滑动阻尼的参数 damping阻尼 factor因素
//controls.autoRotate = true //自动旋转


//立方体



//渲染函数
function animate() {
  requestAnimationFrame(animate)//不断调用渲染函数
  //更新
  controls.update()
  /*   cube.rotation.x += 0.01 //旋转
    cube.rotation.y += 0.01
     */
  renderer.render(scene, camera)
}

//渲染
animate()


watch(() => [piniaStore.microAppData.revarType, piniaStore.microAppData.globalID], (newValue, oldValue) => {


  console.log('更改了');
  console.log(`https://rebar.procde.cn:8443/GetRebarGroup?groupId=${piniaStore.microAppData.globalID}`);

})

onMounted(() => {
  document.querySelector('.threeJs')?.appendChild(renderer.domElement)
})


</script>

<template>
  <div>

  </div>
</template>

<style scoped></style>
