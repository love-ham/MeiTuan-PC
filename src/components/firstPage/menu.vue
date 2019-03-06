<template>
    <div class="menu">
       <dl>
         <dt><span>全部分类</span></dt>
         <dd v-for="(value ,index) in menuContent" :key="index" @mouseenter="changeDetail(value)" @mouseleave="changeDisplay">
             <i :class="value.class"></i><router-link to="/s" class="content">{{value.title}}</router-link><span class="arrow"></span>
         </dd>
         <div v-if="apperBoolen" @mouseenter="changeApper" @mouseleave="changeDisplay">
           <div class="apper" v-for="(value ,index ) in detailContent" :key="value.title + index">
               <div class="detail">
                 <h2><router-link to="/s" class="detailTitle">{{value.title}}</router-link></h2>
               </div>
               <div class="detailContent">
                      <router-link to="/s" class="detailContentApper"  v-for="(item ,num) in value.content" :key="(item+num)">{{item}}</router-link>
               </div>
           </div>
         </div>
       </dl>
    </div>
</template>
<script>
export default {
    data(){
        return {
        menuContent:[{ title:"美食",
                       class:"el-icon-edit-outline",
                       children:[
                           {
                               title:"美食",
                               content:[
                                   "代金券",
                                   "火锅",
                                   "甜品",
                                   "自助小吃",
                                   "日韩料理"
                               ]
                           }
                        ]
                    },
                    { title:"外卖",
                       class:"el-icon-rank",
                       children:[
                           {
                               title:"外卖",
                               content:[
                                   "美团外卖"
                               ]
                           }
                        ]
                    },
                    { title:"猫眼电影",
                       class:"el-icon-setting",
                       children:[
                           {
                               title:"热映电影",
                               content:[
                                   "驯龙高手3","绿皮书","阿丽塔：战斗天使","惊奇队长流浪地球","夏目友人帐","疯狂的外星人","飞驰人生"
                               ]
                           },
                           {
                               title:"热门影院",
                               content:[
                                   "耀莱成龙国际影城","大地影院","保利国际影城","万达影城博纳国际影城"
                               ]
                           }
                        ]
                    }],
        detailContent:null,
        apperBoolen:false,
        }
        
    },
    methods:{
        changeDetail(data){
            this.detailContent = data.children;  
            this.changeApper();
        },
        changeApper(){
              this.apperBoolen= true;
        },
        changeDisplay(){
              this.apperBoolen= false; 
        }
    }
}
</script>
<style scoped>
  .menu{
    position: relative;
    height: 475px;
    width: 230px;
    margin-top: -50px;
    background:linear-gradient(-135deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
    text-align: left;
  }
  dd{
    margin-left: 0px;  
    position: relative;
    box-sizing: border-box;
    padding: 2px 12px;
    height: 26px;
  }
  dd:hover{
      background-color: rgb(97, 219, 203);
  }
  dl{
    margin: 0px;
    padding-bottom: 8px;
  }
  dt{
    height: 35px;
    padding-top: 15px;
    margin-bottom: 10px;

  }
  dt span{
      margin-left: 15px;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
  }
  .content{
    margin-left: 11px;
    font-size: 13px;
    line-height: 20px;
    height: 20px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
  .arrow{
    width: 4px;
    height: 4px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    right: 13px;
    top: 11px;
  }
  dd i{
    opacity: .3;
    display: inline-block;
    width: 14px;
    height: 14px;
    font-size: 14px;
  }
  .apper{
      height: 416px;
      width: 340px;
      padding: 0px 30px;
      position: absolute;
      background-color: #fff;
      z-index: 3;
      left: 230px;
      top: 60px;
  }
  .detail{
    margin-top: 24px;
    height: 22px;
    line-height: 22px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
  .detailTitle{
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    float: left;
    text-decoration: none;
  }
  .detailContentApper{
    color: #999;
    font-size: 12px;
    line-height: 15px;
    display: inline-block;
    margin-right: 16px;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: none;
  }
</style>
