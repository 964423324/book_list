<template>
    <div class="main">
        <div class="banner"></div>
        <div class="bookTittle">{{dataArray.book_name}}</div>
        <div class="author">
            <img class="headImg" :src="dataArray.author_image_url">
            <div>{{dataArray.author_name}}</div>
        </div>
        <div class="authorMessage">
            <svg t="1604414468291" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3151" width="200" height="200"><path d="M812.343523 375.615721v-268.296944c0-11.924309-10.43377-22.358079-22.358079-22.358078s-22.358079 10.43377-22.358079 22.358078v693.100437c0 11.924309 10.43377 22.358079 22.358079 22.358079s22.358079-10.43377 22.358079-22.358079V533.612809c43.225619 0 78.998544-35.772926 78.998544-78.998544s-35.772926-78.998544-78.998544-78.998544zM326.427948 308.541485h-55.149928v286.183406h55.149928s22.358079-4.471616 59.621543-2.981077c92.413392 1.490539 268.296943 32.791849 369.653566 228.052401V83.47016c-143.091703 272.768559-429.275109 225.071325-429.275109 225.071325z" fill="#ff9327" p-id="3152"></path><path d="M389.030568 608.139738c-35.772926 0-59.621543 2.981077-59.621543 2.981077h-55.149927v-2.981077c-2.981077 2.981077-5.962154 4.471616-5.962155 4.471616h5.962155s59.621543 256.372635 98.375545 260.84425c38.754003 5.962154 55.149927-19.377001 43.225619-53.659389-8.943231-25.339156-22.358079-152.034934-26.829694-211.656477zM120.733624 451.633188c0 78.998544 64.093159 143.091703 143.091704 143.091703h1.490538l-1.490538-284.692868c-78.998544-1.490539-143.091703 62.60262-143.091704 141.601165z" fill="#ff9327" p-id="3153"></path></svg>
            <span>{{dataArray.author_message}}</span>
        </div>
        <div class="starRating">
            <div class="starRatingTop" :style="ratingStyle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="starRatingBottom">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>            
        </div>
        <div class="numberRating">{{dataArray.rating}}</div>
        <div class="tags">
            <svg t="1604415383508" class="icon typeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5676" width="200" height="200"><path d="M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z" p-id="5677" fill="#9c9c9c"></path><path d="M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z" p-id="5678" fill="#9c9c9c"></path><path d="M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z" p-id="5679" fill="#9c9c9c"></path></svg>
            <div class="typeName">{{dataArray.type_name}}</div>
            <svg t="1604415356388" class="icon tipIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4866" width="200" height="200"><path d="M842.666667 85.333333A96 96 0 0 1 938.666667 181.333333v233.045334a138.666667 138.666667 0 0 1-40.618667 98.048l-362.666667 362.794666a138.88 138.88 0 0 1-196.138666 0.042667L148.864 685.226667a138.666667 138.666667 0 0 1-0.170667-196.096l362.666667-363.093334a138.666667 138.666667 0 0 1 98.133333-40.661333h233.173334z m0 64h-233.216c-19.797333 0-38.826667 7.893333-52.821334 21.888l-363.178666 363.648a74.666667 74.666667 0 0 0 0.64 105.045334l190.336 190.037333a74.88 74.88 0 0 0 105.685333 0l362.666667-362.794667a74.666667 74.666667 0 0 0 21.888-52.778666V181.333333a32 32 0 0 0-32-32zM725.333333 234.752a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" p-id="4867" fill="#9c9c9c"></path></svg>
            <div class="tipName" v-for="(item,index) in dataArray.tip_name">{{item}}</div>
        </div>
        <div>
            <div class="numberBlock"><div>字数</div><div>{{dataArray.words_number}}</div></div>
            <div class="numberBlock"><div>阅读</div><div>{{dataArray.read_number}}</div></div>
            <div class="numberBlock"><div>收藏</div><div>{{dataArray.collection_number}}</div></div>
            <div class="numberBlock"><div>推荐票</div><div>{{dataArray.recommended_number}}</div></div>
        </div>
        <div class="introductionTittle">简介</div>
        <div class="introductionBlock" v-html="dataArray.book_Introduction"></div>
        <div class="beginRead">开始阅读</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'bookInformation',
    data(){
        return{
            bookId:'',
            dataArray:[],
            ratingStyle:''
        }
    },
    created(){
        this.getData();
    },
    methods:{
        getData(){
            this.bookId=this.$route.query.bookId;
            var fd = new FormData()
            fd.append('bookId',this.bookId)
            axios.post(`${this.baseURL}/getBookInformation.php`,fd).then((res)=>{
                if(res.data.state=='success'){
                    this.dataArray=res.data;
                    this.ratingStyle='width:'+res.data.rating*10+'%';
                    // console.log(this.dataArray)
                }else{
                    alert("页面数据加载失败")
                }
            })
        }
    }
    
}
</script>

<style scoped>
.main{
    text-align: center;
    background-color: #f3f3f3;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    height: 100%;
    width: 100%;
}
.banner{
    position: absolute;
    background-image:linear-gradient(to top,#f3f3f3,rgb(0,0,0,0)), url("../assets/banner.jpg");
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 300px;
}
.headImg{
    height: 40px;
    width: 40px;
    border-radius:50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
}
.bookTittle{
    margin: 50px 0 30px;
    font-size: 30px;
}
.author{
    margin-bottom:20px;
}
.icon{
    width: 15px;
    height: 15px;
}
.authorMessage{
    margin-top: 30px;
    font-size: 15px;
    color: #ff9327;
}
.tags{
    font-size: 15px;
}
.typeIcon{
    display: inline-block;
}
.tipIcon{
    display: inline-block;
}
.typeName{
    display: inline-block;
    color: white;
    background-color: teal;
    padding: 2px 10px;
    border-radius: 200px/200px;
}
.tipName{
    display: inline-block;
    color: white;
    background-color: teal;
    padding: 2px 10px;
    margin: 0 2px 0;
    border-radius: 200px/200px;
}
.numberBlock{
    background-color: white;
    display: inline-block;
    width: 10%;
    margin: 20px 1% 10px;
    padding: 10px 0;
}
.introductionTittle{
    text-align: left;
    background-color: #e5e9eb;
    width: 46%;
    margin: 0 auto;
    padding: 0.5% 0 0.5% 1%;
}
.introductionBlock{
    text-align: left;
    width: 46%;
    margin: 0 auto;
    padding: 0.5% 0 0.5% 1%;
}
.starRating {
    display: inline-block;
    color: #a2a2a2;
    font-size: 0;
    height: 25px;
    margin: 20px auto 10px;
    position: relative;
    padding: 0;
}
.starRating span {
    padding: 1px;
    font-size: 15px;
}
.starRating span:after {
    content: "★";
}
.starRatingTop{
    color: #e86464;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
}
.starRatingBottom{
    padding: 0;
    display: block;
    z-index: 0;
}
.numberRating{
    display: inline;
    color: #e86464;
    font-size: 15px;
}
.beginRead{
    background-color: #78c5ab;
    color: white;
    display: inline-block;
    padding: 10px;
    border-radius: 200px/200px;
}
</style>