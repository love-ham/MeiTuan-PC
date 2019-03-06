<template>
    <div class="headerCom">
        <el-row class="myNav">
            <Mnav />
        </el-row>
        <el-row  class="basic">
            <basic/>
        </el-row>
    </div>
</template>
<script>
import Mnav from './nav'
import basic from './basic'

export default {
  components: {
    Mnav,
    basic
  }
}
</script>
<style scoped>
.myNav{
    height: 40px;
    position: relative;
    z-index: 1;
}
.basic{
    box-sizing: content-box;
    width: 100%;
    height: 122px;
    padding-bottom: 35px;
    background-color: #fff;
    box-shadow: 0px 2px 30px #ddd;
}
</style>
