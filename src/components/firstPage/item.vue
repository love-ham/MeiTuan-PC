<template>
  <div class="item">

        <dl :class="itemList.class" @mouseover="changeClass">
            <dt>{{itemList.title}}</dt>
            <dd v-for="(name , count) in itemList.item" :class="{trangle: mouseClass == name.type}" :data-type='name.type' :key="name+count">{{name.title}}</dd>
        </dl>
 
     <div class="cardContent" v-if="itemList.typeId.cardType">
         <router-link class="card" to="/"  v-for="(value ,index) in contentList" :key="value.url+ index">
           <div class="img"><img :src="value.url" alt=""></div>
           <div class="info">
               <div class="title" style="text-decoration: none;">{{value.title}}</div>
               <div class="tag">
                   <div class="tagContent"  v-for="(item ,num) in value.tag" :key="item  + num">{{item}}</div>
               </div>
               <div class="price">
                   <span class="priceWapper">
                       <span class="pricePro">￥</span><span class="priceContent">{{value.price.currentPrice}}</span>
                   </span>
                   <span class="oldPrice" v-if="value.price.oldPrice">{{value.price.oldPrice}}</span>
                   <span class="oldPrice" v-else-if="value.price.argPrice">{{value.price.argPrice}}</span>
                   <span class="location">{{value.location}}</span>
               </div>
           </div>
         </router-link>
     </div>
     <div class="movieWrapper" v-else-if="itemList.typeId.movieType">
        <router-link class="movie" to="/" v-for="(movie,movieIndex) in movieList" :key="movie.url+ movieIndex">
         <img :src="movie.url" alt="">
         <div class="movieInfo">
             <p class="movieScore">
                 <b>观众评</b>
                 <span>{{movie.score}}</span>
             </p>
             <p class="movieName">{{movie.name}}</p>
             <span class="movieBuy">购票</span>
         </div>
        </router-link>
     </div>
  </div>
</template>
<script>
export default {
  props: ['itemList'],
  data() {
    return {
        mouseClass:'all',
        contentList:[
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","午餐十人","超值推荐","美味","主厨推荐10人餐"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            },
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            },
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            },
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            },
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            },
            {
                title:"速8艺术酒店",
                url:"https://p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@460w_260h_1e_1c",
                tag:[
                    "新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠","新客超值优惠"
                ],
                price:{
                    currentPrice:"188",
                    oldPrice:"门市价￥888",
                    argPrice:""
                },
                location:"王府井/东单"
            }
        ],
        movieList:[
            {
                url:"https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c",
                score:9.1,
                name:"驯龙高手3"
            },
            {
                url:"https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c",
                score:9.1,
                name:"驯龙高手3"
            },
            {
                url:"https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c",
                score:9.1,
                name:"驯龙高手3"
            },
            {
                url:"https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c",
                score:9.1,
                name:"驯龙高手3"
            },{
                url:"https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c",
                score:9.1,
                name:"驯龙高手3"
            }
        ]
    }
  },
  methods:{
    changeClass(e){
      let dom = e.target;
      let name = dom.tagName.toLowerCase();
      if(name !== "dd"){
          return;
      } 
      this.mouseClass = dom.getAttribute("data-type");
    }
  }
};
</script>
<style scoped>
.yellow{
        background:linear-gradient(45deg,rgba(2,181,157,.85) 2%,rgba(22,146,183,.85) 100%);
}
.pink{
        background-image: linear-gradient( -135deg, #FAD7A1 10%, #E96D71 100%);
}
dl{
    background-color: aqua;
    margin: 0px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
}
dl::after{
    content: "";
    display: block;
    clear: both;
}
.item {
  width: 1190px;
  border-radius: 5px;
  border: 1px solid #999;
}
dt{
    font-size: 18px;
    margin-left: 13px;
    margin-right: 10px;
    float: left;
    padding: 0 5px;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
}
dd{
    float: left;
    padding: 0 5px;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    margin: 0px;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
}
.trangle::after{
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #fff;
    content: " ";
    display: block;
    width: 2px;
    height: 0;
    top: 37px;
    left: 0;
    right: 0;
    margin: auto;
}
.cardContent{
    box-sizing: border-box;
    width: 1190px;
    padding: 11px 10px 10px 11px;
}
.card{
    width: 33.3%;
    height: 314px;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    float: left;
    transition: background-color .5s;
    border-radius: 4px;
    text-decoration: none;
}
.card:hover{
    background: #F4F4F4;
}
.cardContent::after{
    content: "";
    display: block;
    clear: both;
}
.movieWrapper{
    background: #fff;
    padding: 0px 9px 0px 9px;
    border: 1px solid #e5e5e5;
    border-top: 0;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    height: 337px;
}
.movieWrapper::after{
    content: "";
    display: block;
    clear: both;
}
.movie{
    height: 297px;
    width: 214px;
    float: left;
    margin: 20px 10px 20px 10px;
    position: relative;

}
.movie img{
    border-radius: 4px;
    width: 100%;
    border: 0;
}
.movieInfo{
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-image: linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(29,45,55,.8) 99%);
}
.movieScore{
    font-size: 12px;
    color: #fff;
    text-align: left;
    margin-top: 48px;
    margin-bottom: 0px;
    padding-left: 10px;
    font-weight: 500;
}
.movieScore span{
    font-size: 16px;
    color: #FD9827;
    font-weight: 500;
}
.movieName{
    text-align: left;
    color: #fff;
    padding-left: 10px;
    font-size: 16px;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    margin: 0px;
}
.movieBuy{
    background: #FF4949;
    border-radius: 100px;
    color: #fff;
    padding: 2px 12px 3px;
    font-size: 14px;
    position: relative;
    top: -24px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    float: right;
    right: 10px;
}
.img{
    background-size: cover;
    max-width: 100%;
    height: 208px;
    margin-bottom: 11px;
    cursor: pointer;
}
.img img{
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.info{
    text-align: left;
}
.info .title{
    font-size: 16px;
    color: #222;
    height: 22px;
    line-height: 22px;
    margin-bottom: 8px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    text-decoration: none;
    border: none;
}
.info .tag{
    font-size: 12px;
    color: #999;
    height: 20px;
    overflow: hidden;
    margin-bottom: 5px;
}
.info .tag .tagContent{
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: 1px solid #d8d8d8;
    border-radius: 2px;
    float: left;
    margin-right: 10px;
    margin-bottom: 5px;
    padding: 0 3px;
}
.priceContent{
    font-size: 22px;
    color: #BE9E4D;
    margin-right: 6px;
    letter-spacing: -.8px;
    cursor: pointer;
}
.pricePro{
    font-size: 14px;
    color: #BE9E4D;
    font-weight: 500;
    letter-spacing: -.5px;
}
.oldPrice{
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
}
.location{
    font-size: 12px;
    color: #999;
    float: right;
    margin-top: 10px;
}
</style>
