<template>
  

  <!-- Form -->
    <div v-show="false" style="width:30vh;"><!-- 改这里的样式按钮自定义大小 -->
      <el-button @click="dialogFormVisible = true">
     <img src="../imgs/tabbar/3.png" alt="">
  </el-button>
    </div>   
    <div style="width: 50%;">
      <div class="TopBox">
        <div class="TopBoxImg21"><img src="../imgs/tabbar/21.png" alt=""></div>
        <div class="TopBoxImg22"><img src="../imgs/tabbar/22.png" alt=""></div>
      </div>
      
      <el-form class="TopBoxFrom" :model="form">
        <el-row :gutter="20">
          <el-col :span="10" :offset="0">

            <div class="TestLeft">
            <el-form-item class="Test_Left_Top"  >
              <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
              <span label-width="2vh">模型名称</span>
              <div>undifined</div>
              </el-form-item>

            <el-form-item class="Test_Left_Content" >
              <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
              <span>模型名称</span>
              <div>undifined</div>
              </el-form-item>


              <el-form-item class="Test_Left_Footer">
                <img src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
              <span>状态</span>
              <div>未推送</div>
              </el-form-item>
            
        
          </div>

          </el-col>


          <el-col :span="14" :offset="0">
            <div class="TestRigth">
            <el-form-item >
            <div class="Rigth_Top_Text_center">
              <div class="Right_Text">
                <img style="padding-right: 1vh;" src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                <span>模型参数</span>
            </div>

            <div style="margin-bottom: 1vh;" class="button_Rigtt">
               <img src="../imgs/01-钢筋模型上传(1)/png/26@2x.png"  alt="">
               <img src="../imgs/01-钢筋模型上传(1)/png/25@2x.png"   alt="">
            </div>
            </div>



            <div class="top_table">
              <el-table :show-header="false" :data="tableData" border >
                <el-table-column prop="name" width="180" />
                <el-table-column prop="data"  />
                
              </el-table>
            </div>
        </el-form-item>

        <el-form-item >
            <div class="Rigth_Top_Text_center">

              <div class="Right_Text">
                <img style="padding-right: 1vh;" src="../imgs/01-钢筋模型上传(1)/png/18.png" alt="">
                <span >加工参数</span>
            </div>

            <div  class="button_Rigtt_Select">
              <el-select  v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                  
                />
              </el-select>
            </div>
            </div>



            <div class="top_table">
              <el-table :show-header="false" :data="tableData" border >
                <el-table-column prop="name" width="180" />
                <el-table-column prop="data"  />
                
              </el-table>
            </div>
        </el-form-item>





          </div>
          </el-col>
        </el-row>
        
        
        
    </el-form>

   
        <div class="submit" >
          <img src="../imgs/02-钢筋智能加工-未推送(1)/png/16.png"
           @click="dialogFormVisible = false " alt="">
        </div>
    </div>





</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'


const dialogFormVisible = ref(false)


const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})


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

//下拉菜单的数据
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]


</script>

<style scoped>
.el-button {
  width: 100%;
  height: 100%;
  display: flex;
}
.el-button img{
  width: 100%;
  height: 100%;
}
.TopBox{
  display: flex;
 
  justify-content: center;
  align-items: center;
  
  
}
.TopBoxImg21 {
  
  width: 20%;
}
.TopBox::before{
    content: '精细化模型';
    position: absolute;
    margin-right: 6%;
    color: aliceblue;
    font-size: 13px;
}
.TopBox::after{
    content: '精细型';
    position: absolute;
    margin-left: 10%;
    color: #4f72ed;
    font-size: 13px;
    font-weight: 500;
}
.TopBoxImg21 img {
  
  margin-left: 25%;
}
.TopBoxImg22 {
  
  width: 20%;
  
}
.TopBox img{
  
width: 100%;
}



.Test_Left_Top span {
  padding-left: 1vh;
  
}
.Test_Left_Top div{
  width: 100%;
  height: 100px;
  
  border: 1px dotted black;
  padding-left: 2vh;
  
}
.Test_Left_Content {
  width: 100%;
}
.Test_Left_Content span {
  padding-left: 1vh;
}
.Test_Left_Content div{
  width: 100%;
  height: 200px;
  border: 1px dotted black;
  padding-left: 2vh;
}

.Test_Left_Footer span {
  width: 100%;
  padding-left: 1vh;
}
.Test_Left_Footer div{
  width: 100%;
  height: 50px;
  border: 1px dotted black;
  padding-left: 2vh;
  color: chocolate;
}

.Rigth_Top_Text_center{
  display: flex;
  justify-content: space-between;
}
.Right_Text{
  width: 50%;
  
  height: 3vh;
  
}

.button_Rigtt {
  display: flex;
  
  transform:translate(30%);
  
  
}

.button_Rigtt img {
  width: 30%;
  margin-right: 1vh;
  
}

.top_table{
  width: 100%;
  
}

.button_Rigtt_Select{
  transform:translate(80%);
  margin-right: 10vh;
  margin-left: 3vh;
}

.submit {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 2.5vh;
}

.submit img {
  width: 40%;
  width: min-content;
}

</style>