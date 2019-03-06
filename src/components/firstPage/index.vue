<template>
  <div class="index">
    <div class="Wrapper">
      <myMenu></myMenu>
      <div class="container">
          <div class="swriper">
             <el-carousel height="240px">
             <el-carousel-item v-for="item in swiper" :key="item"  >
                     <h3><img :src="item" class="swriper"/></h3>
             </el-carousel-item>
             </el-carousel>
          </div>
          <div class="play">
              <router-link to="/s" class="playImg"></router-link>
          </div>
          <div class="user">
              <div class="userImg">
                 <div class="img"><img src="https://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="头像"></div>
                 <div class="name">Hi! 你好</div>
              </div>
              <button class="buttonOne">注册</button>
              <button class="buttonOne">立即注册</button>
          </div>
          <div class="hotel">
              <router-link to="/s" class="hotelImg"></router-link>
          </div>
          <div class="poise">
              <router-link to="/s" class="poiseImg"></router-link>
          </div>
          <div class="seller">
              <router-link to="/s" class="sellerImg"></router-link>
          </div>
          <div class="app">
              <div class="QRcode"><img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载app"></div>
              <p class="MT">美团APP手机版</p>
              <p class="price"><span>1元起</span><span>吃喝玩乐</span></p>
          </div>
          <div class="navBar">
              <router-link class="navItem yellow" to="/">美团外卖</router-link>
              <router-link class="navItem red" to="/">猫眼电影</router-link>
              <router-link class="navItem pink" to="/">美团酒店</router-link>
              <router-link class="navItem yellow" to="/">住宿\民宿</router-link>
              <router-link class="navItem blueGreen" to="/">酒店入住</router-link>
              <router-link class="navItem pink" to="/">美团公益</router-link>
          </div>
      </div>
    <itemComp v-for="(value,index) in itemListContent" :itemList="value" class="itemContent" :key="value.title+index"></itemComp>
    </div>

  </div>
</template>
<script>
import myMenu from "./menu"
import itemComp from './item'
export default {
  components: {
    myMenu,
    itemComp
  },
  data(){
      return{
          swiper:[
              `http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg`,
              `http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg`,
              `https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png`,
              `http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg`
          ],
          itemListContent:[
              {
                  title:"有格调",
                  class:"yellow",
                  typeId:{cardType:true,movieType:false},
                  item:[
                      {title:"全部",type:"all"},
                      {title:"约会聚餐",type:"fool"},
                      {title:"丽人SPA",type:"SPA"},
                      {title:"电影演出",type:"movie"},
                      {title:"品质出游",type:"tavel"}
                  ]
              },
              {
                  title:"猫眼电影",
                  class:"pink",
                  typeId:{cardType:false,movieType:true},
                  item:[
                      {title:"正在热映",type:"movieNow"},
                      {title:"即将上映",type:"movieWill"},
                  ]
              }
          ]
      }
  }
};
</script>
<style scoped>
.index {
  position: relative;
  background-color: transparent;
  width: 100%;
}
.Wrapper {
  position: relative;
  display: inline-block;
  width: 1190px;
  height: 427px;
  margin: auto;
}
.swriper{
    height: 240px;
    width:550px;
    position: absolute;
    z-index: 0;
    left: 0px;
    top: 0px;

}
.container{
    height: 417px;
    width:950px;
    position: absolute;
    left: 240px;
    top: 10px;
}
.user{
    position: absolute;
    width: 228px;
    height: 208px;
    padding-top: 30px;
    left: 720px;
    border: 1px solid #e5e5e5;
}
.img img{
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 4px solid #E5E5E5;
    margin-bottom: 4px;
}
.name{
    font-size: 16px;
    color: #222;
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
}
.buttonOne{
    width: 118px;
    text-align: center;
    margin: 10px auto 15px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 40px;
    font-size: 14px;
    color: #333;
    transition: background-color .5s;
    display: block;
    line-height: 38px;
    cursor: pointer;
}
.buttonOne:hover{
    background-color: #eee;
}
.play{
    position: absolute;
    left: 560px;
    height: 240px;
    width: 150px;
    background-image: url("http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg");
    background-size: 150px 240px;
    background-repeat: no-repeat;
    background-position: 0px 0px ;
}
.playImg{
    display: inline-block;
        height: 240px;
    width: 150px;
}
.hotel{
    position: absolute;
    height: 165px;
    width:270px;
    left: 0px;
    top: 250px;
    background-image:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
    background-size: 270px 165px;
}
.hotelImg{
    display: inline-block;
    height: 165px;
    width:270px;
}
.poise{
    position: absolute;
    height: 165px;
    width:270px;
    left: 280px;
    top: 250px;
    background-image:url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
}
.poiseImg{
    display: inline-block;
    height: 165px;
    width:270px;
}
.seller{
    position: absolute;
    height: 165px;
    width:150px;
    left: 560px;
    top: 250px;
    background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
    background-size: 150px 165px;
}
.sellerImg{
    display: inline-block;
    height: 165px;
    width:150px;
}
.app{
    position: absolute;
    top: 250px;
    left: 720px;
    height: 165px;
    width:228px;
    border: 1px solid #e5e5e5;
}
.QRcode{
    height: 99px;
    margin-top: 10px;
}
.QRcode img{
    height: 95px;
    width:95px;
}
.app p{
    margin: 0px;
    font-size: 16px;
    color: #222;
    font-weight: 500;
}
.price span{
    font-size: 12px;
    margin-top: 2px;
}
.price span:first-child{
    color: #EC5330;
    margin-right: 5px;
}
.navBar{
    position: absolute;
    top: -45px;
    left: 20px;
}
.navItem{
    color: #222;
    font-weight: 700;
    font-size: 16px;
    margin: 0 20px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.yellow:hover{
    color:#fbc700;
}
.red:hover{
    color:#ed1e24;
}
.pink:hover{
    color:#f04d4e;
}
.blueGreen:hover{
    color:#31BBAC;
}
.itemContent{
    margin-top: 40px;
}
</style>
