<template>
    <div class="navBarLeft">
        <ul>
            <li>
                <router-link to='/' class="navFont">
                    <i class="el-icon-location" />
                    <span>北京</span>
                </router-link>
            </li>
            <li>
                <router-link to="/" class="navFont changeCity">切换城市</router-link>
            </li>
            <li>
                [<router-link to="/" class="navFont navCity">大厂回族自治县</router-link>
            </li>
            <li>
                <router-link to="/" class="navFont navCity">廊坊</router-link>
            </li>
            <li>
                <router-link to="/" class="navFont navCity">固安县</router-link>]
            </li> 
            <li>
                <router-link to="/" class="navFont register">立即注册</router-link>
            </li>
            <li>
                <router-link to="/" class="navFont">登录</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
  .navBarLeft{
      height: 100%;
      width: 100%;
  }
  .navBarLeft::after{
      content: "";
      display: inline-block;
      clear: both;
  }
  ul{
      display: inline-block;
      height: 100%;
      width: 100%;
      padding: 0px;
      margin: 0px;
  }
  ul li{
      height: 100%;
      list-style: none;
      float: left;
      font-size: 12px;
      margin-right: 10px;
      line-height: 40px;
  }
  .navFont{

   color: #666;
   text-decoration: none;
  }
  .navFont:hover{
      color: #31BBAC;
  }
  .navCity{
      color: #999;
  }
  .register{
      margin-left: 20px;
      color: #31BBAC;
  }
  .changeCity{
      border: solid 1.5px rgb(38, 158, 228);
      border-radius: 10%;
      padding: 2px;
  }
</style>