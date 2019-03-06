<template>
  <div class="defaultPage">
   <el-container>
       <el-header class="defaultChange" style="height:auto">
         <headerCom />
       </el-header>
       <el-main class="defaultChange" style="overflow: visible">
          <slot name="main"></slot>
       </el-main>
       <el-footer class="defaultChange">
       </el-footer> 
   </el-container>
   </div>
</template>

<script>
import headerCom from '@/components/header/index.vue'
export default {
  components: {
    headerCom
  }
}
</script>
<style scoped>
.defaultChange{
  padding: 0px;
}

</style>
