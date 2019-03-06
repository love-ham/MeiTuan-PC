<template>
<div class="navContainer">
    <div class="myNav">
        <el-row class="nav">
            <el-col :span="14">
               <nav-bar-left />
            </el-col>
            <el-col :span="10">
                <nav-bar-right />
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
import navBarLeft from './navBarLeft.vue'
import navBarRight from './navBarRight.vue'
export default {
  components: {
    navBarLeft,
    navBarRight
  }
}
</script>
<style scoped>
  .nav{
      width: 1190px;
      height: 40px;
      margin: auto;

  }
  .navContainer{
      width: 100%;
      background-color: #F8F8F8;
  }
</style>
