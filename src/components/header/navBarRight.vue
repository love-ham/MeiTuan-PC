<template>
    <div class="navBarRight">
        <ul>
            <li class="myMTWrapper">
                <router-link class="navFont" to="/">我的美团</router-link>
                <dd class="myMtContainer">
                    <dl>
                        <router-link class="myMT" to="/">我的订单</router-link>
                    </dl>
                    <dl>
                        <router-link class="myMT" to="/">我的收藏</router-link>
                    </dl>
                    <dl>
                        <router-link class="myMT" to="/">抵用券</router-link>
                    </dl>
                    <dl>
                        <router-link class="myMT" to="/">账户设置</router-link>
                    </dl>
                </dd>
            </li>
            <li>
                <router-link class="navFont" to="/">手机APP</router-link>
            </li>
            <li class="conterWrapper">
                <router-link class="navFont" to="/">商家中心</router-link>
                <dd class="centerDD">
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">登录商家中心</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">美团智能收银</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">我想合作</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">手机免费开店</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">餐饮代理商招募</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">商家申请开票</router-link>
                    </dl>
                    <dl class="centerContainer">
                        <router-link class="center myMT" to="/">免费合作美团排队</router-link>
                    </dl>
                </dd>
            </li>
            <li class="netWrapper">
                <router-link class="navFont" to="/">网站导航</router-link>
                <div class="netNav">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .navBarRight{
     height: 100%;
     width: 100%
  }
  .navBarRight::after{
      content: "";
      display: inline-block;
      clear: both;
  }
  ul{
      height: 100%;
      width: 100;
      float: right;
      margin: 0px;
  }
  li{
      height: 100%;
      list-style: none;
      float: left;
      line-height:40px;
  }
  .navFont{
      padding: 0px 15px 0px 15px;
      font-size: 12px;
      text-decoration: none;
      color: #999;
  }
  .navFont:hover{
      color: #31BBAC;
  }
  dd{
      margin: 0px;
  }
  dl{
      margin: 0px;
  }
  .myMtContainer{
      position: absolute;
      background-color: #fff;
      z-index: 5px;
      width: 78px;
      display: none;
      box-shadow: 0px 0px 2px #999;
  }
  .myMtContainer::after{
    content: "";
    position: absolute;
    right: 0px;
    top: -5px;
    width: 78px;
    height: 10px;
    z-index: 2;
    background: #fff;
  }
  .myMT{
      display: inline;
      font-size: 12px;
      text-decoration: none;
      color: #999;
  }
  .myMT:hover{
      color: #31BBAC;
  }
  .myMTWrapper{
      position: relative;
  }
  .myMTWrapper:hover {
      background-color: #fff;
      box-shadow: 0px 0px 2px #999;
  }
    .myMTWrapper:hover .myMtContainer{
      display: block;
 
  }
  .centerDD{
      position: absolute;
      top: 40px;
      background-color: #fff;
      display: none;
      width: 110px;
      right: 0px;
  }
  .centerDD::after{
    content: "";
    position: absolute;
    right: 0px;
    top: -5px;
    width: 78px;
    height: 10px;
    z-index: 2;
    background: #fff;
  }
  .conterWrapper{
      position: relative;
  }
  .conterWrapper:hover {
      background-color: #fff;
      box-shadow: 0px 0px 2px #999;
  }
    .conterWrapper:hover .centerDD{
        display: inline-block;
      box-shadow: 0px 0px 2px #999;
  }
  .netWrapper{
      position: relative;
  }
  .netNav{
      position: absolute;
      overflow: hidden;
      top: 40px;
      display: none;
      background-color: #fff;
      right: 0px;
      width: 1190px;
      height: 300px;
  }
   .netNav::after{
    content: "";
    position: absolute;
    right: 0px;
    top: -5px;
    width: 78px;
    height: 10px;
    z-index: 2;
    background: #fff;
  }
    .netWrapper:hover {
      background-color: #fff;
      box-shadow: 0px 0px 2px #999;
  }
    .netWrapper:hover .netNav{
        display: inline-block;
      box-shadow: 0px 0px 2px #999;
  }
</style>
