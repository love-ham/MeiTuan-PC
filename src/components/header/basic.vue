<template>
    <div class="basicContainer">
        <router-link class="logo" to="/"></router-link>
        <div class="searchWrapper">
            <div class="search">
                 <input type="text" class="input" v-model="inputContent" placeholder="搜索商家或者地点" @focus="focusChange" @blur="blurChange" @input="inputChange">
                 <button class="searchButton"><i class="el-icon-search"/></button>
            </div>
            <div class="hotCode">
                 <router-link class="hotContent"  v-for="(value , index) in getHotCode" :key="index" :to="{name:value,path:'/s'}">{{value}}</router-link>
            </div>
            <div class="focusApper inputApper" v-if="focusBoolen">
                <div class="focusTitle">热门搜索</div>
                <div class="focusContent">
                 <router-link class="focusCode hotContent" to="/s" v-for="(value , index ) in getBottomHotCode" :key="index">{{value}}</router-link>
                </div>
            </div>
            <div class="inputApper" v-if="inputBoolen">
                 <router-link class="inputContent" to="/s" v-for="(value , index) in getSearchCode" :key="index">{{value}}</router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            focusBoolen:false ,
            inputBoolen:false ,
            inputContent:""
        }
        
    },
    methods:{
         focusChange(){
             this.focusBoolen = true;
             this.inputChange();
         },
         blurChange(){
             this.focusBoolen = false;
             this.inputBoolen = false;
         },
         inputChange(){
             if(this.inputContent){
                this.inputBoolen = true;
             }else{
                this.inputBoolen = false;
             }
         },
    },
    computed:{
      getHotCode(){
          return ["故宫博物院","北京欢乐谷","北京海洋馆","北京动物园","故宫珍宝馆","南宫2019新春游园灯光夜"];
      },
      getBottomHotCode(){
           return ["故宫博物院","北京欢乐谷","北京海洋馆","北京动物园","故宫珍宝馆"];
      },
      getSearchCode(){
          return ["故宫博物院","北京欢乐谷","北京海洋馆","北京动物园","故宫珍宝馆","南宫2019新春游园灯光夜"]
      }
    }
}
</script>
<style scoped>
.basicContainer{
   position: relative;
   width: 1190px;
   margin: auto;
   height: 100%;
}
.logo{
    display: block;
    height: 54px;
    width: 220px;
    padding:28px 60px 40px 0px ;
    background-image: url('https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png');
    background-size:  126px 46px;
    background-position: 0px 28px;
    background-repeat: no-repeat;
}
.searchWrapper{
    position: relative;
    height: 67px;
    width: 552px;
    padding-top: 28px;
    position: absolute;
    top: 0px;
    left: 280px;
}
.search{
    position: relative;
    height: 40px;
    width: 550px;
    border: 1px solid #13D1BE;
    border-radius: 4px;
}
.input{
    position: absolute;
    font-size: 15px;
    left: 0px;
    height: 20px;
    width: 442px;
    padding: 10px;
    border: none;
}
.searchButton{
    position: absolute;
    background-color: #13D1BE;
    border: none;
    right: 0px;
    height: 40px;
    width: 88px;
}
.hotCode{
    height: 17px;
    width: 538px;
    padding: 8px 0px 0px 12px;
}
.hotContent{
    color: #999;
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: 12px;
    overflow: hidden;
    text-align: left;
    text-decoration: none;
}
.hotContent:hover{
    color: #13D1BE;
}
.focusApper{
    height: 51px;
        padding: 10px;
}
.focusTitle{
    padding-bottom: 5px;
    font-size: 12px;
    font-weight: 900;
    color: #999;
}
.focusContent{
    padding-top: 5px;
    margin-bottom: 5px;
    height: 20px;
    width: 442px;
}
.focusCode{
    color: #666;
    margin-right: 10px;
    margin-bottom: 3px;
    display: inline-block;
}
.focusCode:hover{
    color: #13D1BE;
}
.inputApper{
    position: absolute;
    top:70px;
    background-color: #fff;
    box-shadow: 0px 2px 5px #ddd;
    width: 442px;
    z-index: 100;
    text-align: left;
}
.inputContent{
    display: block;
    text-decoration: none;
    color: #333;
    line-height: 1.6em;
    padding: 3px 10px;
    font-size: 12px;
    text-align: left;
}
.inputContent:hover{
    background: #eee;
    color: #13D1BE;
}
</style>
