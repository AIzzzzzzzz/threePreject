<template>
    <!-- Form -->
    <div class="bigBox">
        <!-- <el-button style="width:40px;" @click="funtest"> 没有模型</el-button>
        <el-button style="width:40px;" @click="funtt"> 有模型</el-button> -->



        <div v-show="false" style="width:30vh;"><!-- 改这里的样式按钮自定义大小 -->
            <el-button @click="dialogFormVisible = true">
                <img src="../imgs/tabbar/2.png" alt="">
            </el-button>
        </div> <!-- 弹出层类 -->
        <div style="width: 100%; height: 100%;">
            <div class="common-layout">
                <el-container>

                    <el-container>

                        <el-main>
                            <div class="mainBox">
                                <el-from>
                                    <!-- <div class="main_Top">
                                        <div>
                                            <div class="SpanText">
                                                <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                                                <span>模型名称</span>
                                            </div>

                                            <div>
                                                <textarea name="" id="" cols="30" rows="7"></textarea>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="SpanText">
                                                <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                                                <span>图形信息</span>
                                            </div>
                                            <div>
                                                <textarea name="" id="" cols="30" rows="7"></textarea>
                                            </div>
                                        </div>

                                    </div> -->
                                    <div class="main_Center">



                                        <!-- 标签页 -->

                                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                                            <el-tab-pane label="几何模型" name="first">
                                                <!-- 按钮 -->

                                                <!--  <div style="width: 100%; height: 70vh;">
                                                    <model-viewer v-if="piniaStore.modelShow"
                                                        style="width: 100%; height: 100%;" :src=requestModel
                                                        shadow-intensity="1" camera-controls auto-rotate
                                                        touch-action="pan-y">
                                                    </model-viewer>
                                                </div> -->

                                                <div style="width: 100%;height: 70vh;">
                                                    <model-viewer v-if="piniaStore.modelShow" id="rebar"
                                                        style="width: 100%; height: 100%;" :src=requestModel
                                                        shadow-intensity="1" camera-controls auto-rotate
                                                        touch-action="pan-y">
                                                        <effect-composer render-mode="quality">
                                                            <outline-effect color="black"
                                                                blend-mode="default"></outline-effect>
                                                            <ssao-effect blend-mode="default"></ssao-effect>
                                                            <color-grade-effect blend-mode="default"></color-grade-effect>
                                                        </effect-composer>
                                                    </model-viewer>
                                                </div>
                                            </el-tab-pane>
                                            <!-- 标签页2 -->
                                            <!--  <el-tab-pane label="模型信息" name="second">
                                                <div class="main_Center_Text">
                                            <div class="SpanText">

                                            </div>
                                            <div class="rigth_button">
                                                <el-upload v-model:file-list="fileList" class="upload-demo"
                                                    action="https://BusinessRebarParamController/addBusinessRebarParam"
                                                    multiple :limit="3" :on-success="uplode">
                                                    <el-button type="primary" size="small">上传钢筋参数</el-button>

                                                </el-upload>
                                                <el-upload v-model:file-list="modelfileList" class="upload-demo"
                                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80" multiple
                                                    :limit="3">
                                                    <el-button type="primary" size="small">上传模型参数</el-button>

                                                </el-upload>
                                                <el-button type="primary" size="small"
                                                    style=" margin-top: 1px;height: 24px; width: 110px;"
                                                    @click="showModel()">显示模型</el-button>
                                            </div>
                                        </div>
                                                <div class="main_Cebter_Table">
                                                    <div class="SpanText">
                                                        <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                                                        <span>图形信息</span>
                                                    </div>
                                                    <el-table :show-header="false" :data="tableData" border>
                                                        <el-table-column prop="name" width="120" />
                                                        <el-table-column prop="data" />

                                                    </el-table>
                                                </div>
                                                <div class="main_Footer">
                                                    <div class="main_Center_Text">
                                                        <div class="SpanText">
                                                            <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                                                            <span>模型信息</span>
                                                        </div>

                                                    </div>
                                                    <div class="main_Cebter_Table">
                                                        <el-table :show-header="false" :data="tableData" border>
                                                            <el-table-column prop="name" width="120" />
                                                            <el-table-column prop="data" />

                                                        </el-table>
                                                    </div>
                                                </div>
                                            </el-tab-pane> -->
                                        </el-tabs>

                                    </div>


                                </el-from>


                            </div>
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        </div>

        <!-- 模型类
        <div class="threeJs">
            <threeJS></threeJS>
        </div> -->


    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';


import usePiniaStore from '@/store/modules/info';
import request from '@/utils/axios/requset';
/* import $get from '../utils/request'
import { el } from 'element-plus/es/locale';
import threeJS from './threeJS/index.vue'
import { ElMessage } from 'element-plus';
import { time } from 'console'; */
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
let piniaStore = usePiniaStore()
//模型地址

let requestModel = ref()
// 判断模型成功的接口
const modelTrue = async () => {
    //会请求到一个true或者false 来判断改地址是否有模型
    let result = await request.get(`https://rebar.procde.cn:8443/GetRebarGroupExist?groupId=${piniaStore.microAppData.globalID}`)
    if (result.status === 200) {//https://rebar.procde.cn:8443/GetRebarGroupExist?groupId=0LQjyZAE50r8GOHWlhomTH

        piniaStore.modelShow = result.data
    }
}

//监听基座发来的消息
watch(  () => piniaStore.microAppData.globalID, async (newValue, oldValue) => {
    await modelTrue()
    if (piniaStore.modelShow) {

        let urltemp = `https://rebar.procde.cn:8443/GetRebarGroup?groupId=${piniaStore.microAppData.globalID}`;
        console.log(urltemp);
        requestModel.value = urltemp;
    }
})



//以下是测试的方法，可以删除
//以下是测试的方法，可以删除
//以下是测试的方法，可以删除
function funtt() {

    requestModel.value = `https://rebar.procde.cn:8443/GetRebarGroup?groupId=0LQjyZAE50r8GOHWlhonRO`;
    piniaStore.modelShow = true

}//https://rebar.procde.cn:8443/GetRebarGroup?groupId=0LQjyZAE50r8GOHWlhonRO
function funtest() {
    piniaStore.modelShow = false

}

//以上是测试的方法可以删除  
//以上是测试的方法可以删除  
//以上是测试的方法可以删除  




//文件上传
const fileList = ref([
])
const modelfileList = ref([])

let dialogFormVisible = ref(false);
interface Tree {
    label: string;
    children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
    console.log(data);
};

const uplode = () => {
    console.log(fileList, modelfileList);


}


const defaultProps = {
    children: "children",
    label: "label",
};

//右面表格
const tableData = [
    {
        date: '2016-05-03',
        name: '产品编码',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: '产品名称',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: '大样图号',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: '每包数量',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: '备注',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
const showModel = () => {

}


onMounted(async () => {
    const modelViewerParameters = document.querySelector("model-viewer#rebar") as any;
    modelViewerParameters?.addEventListener("load", (ev: any) => {
        let material = modelViewerParameters.model.materials[0];
        material.pbrMetallicRoughness.setBaseColorFactor([118 / 255, 119 / 255, 120 / 255]);
    });
    await modelTrue()
})

</script>

<style scoped>
.upload-demo {
    margin-right: 1vh;
}

.el-button {
    width: 100%;
    height: 100%;
}

.el-button img {
    width: 100%;
    height: 100%;
}

.common-layout {
    position: relative;
    top: -2.5vh;
    height: 100%;
}

.Header {
    width: 100%;
    text-align: center;
    border-bottom: 1px dotted black;
}

.mainBox {
    display: flex;
    flex-direction: column;
    width: 100%;

}

.main_Top {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
}

.main_Center {
    width: 100%;

    flex: 1;
}

.main_Footer {
    width: 100%;
    flex: 1;
}

.SpanText {
    display: flex;
    width: 100%;
}

.SpanText span {
    width: 65px;
    height: 3vh;
}

.main_Center_Text {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.SpanText span {
    margin-left: 1vh;
}

.rigth_button {
    display: flex;
    width: 100%;
}

.center {
    margin: auto;

}

.bigBox {
    display: flex;



}
</style>
