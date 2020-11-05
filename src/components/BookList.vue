<template>
  <div class="main">
    <div class="tittle">{{tittle}}</div>
    <div class="listAll">
      <div class="listBlock" v-for="(item,index1) in bookList" @mouseleave="listBlockLeave(index1)">
        <div class="listTittle">{{item.listTittle}}</div>
        <div class="listSubtitle">{{item.listSubtitle}}</div>
        <div class="bookBlock" v-for="(item,index2) in item.childBook" @mouseenter="changeStateOver(index1,index2)">
          <div class="mouseOnBlock" v-if="item.show" @click="bookClick(item.bookId)">
            <div class="mouseOnOrderNumber" :class="{'red':index2==0,'orange':index2==1,'yellow':index2!=0&&index2!=1}">{{index2+1}}</div>
            <div class="mouseOnInfomatin">
              <div class="mouseOnBookTittle">{{item.bookTittle}}</div>
              <div class="mouseOnBookAuthor">{{item.bookAuthor}}</div>
              <div class="mouseOnBookType">{{item.bookType}}</div>
            </div>
            <img class="mouseOnImg" :src="item.imgSrc">
          </div>
          <div class="mouseOutBlock" v-else>
            <div class="mouseOutOrderNumber" :class="{'red':index2==0,'orange':index2==1,'yellow':index2!=0&&index2!=1}">{{index2+1}}</div>
            <div class="mouseOutBookTittle">{{item.bookTittle}}</div>
            <div class="mouseOutBookType">{{item.bookType}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BookInformationVue from './BookInformation.vue';
export default {
  name: 'bookList',
  data () {
    return {
      tittle:'图书综合排行',
      bookList:[],
    }
  },
  created() {
    this.getData();
  },
  methods:{
    getData(){
      axios.post(`${this.baseURL}/getBookList.php`).then((res)=>{
        if(res.data.state=='success'){
          this.bookList=res.data.bookList;
        }else{
          alert("页面数据加载失败")
        }
      })  
    },
    listBlockLeave(index1){
      this.bookList[index1].childBook[0].show=true;
      var i=1;
      for(i=1;i<this.bookList[index1].childBook.length;i++){
        this.bookList[index1].childBook[i].show=false;
      }
    },
    changeStateOver(index1,index2){
      this.bookList[index1].childBook[index2].show=true;
      var i=0;
      for(i=0;i<this.bookList[index1].childBook.length;i++){
        if(i==index2){
          continue;
        }
        this.bookList[index1].childBook[i].show=false;
      }
    },
    bookClick(id){
      this.$router.push({ path:'/BookInformation',query: {bookId:id}})
    }
  }
}
</script>

<style scoped>
.main{
    background-color: #f3f3f3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 20px 0;
}
.tittle{
  text-align: center;
  color:black;
  font-size: 30px;
}
.listAll{
  width: 95%;
  margin:0 auto;
}
.listBlock{
  background-color: white;
  width: 28%;
  margin: 20px 1%;
  padding: 20px 20px;
  position: relative;
  display: inline-block;
  vertical-align:top;
}
.listTittle{
  color:#b49064;
  font-size: 20px;
  font-weight: bold;
  position: relative;
}
.listSubtitle{
  color: #9c9c9c;
  font-size: 13px;
}
.mouseOnBlock{
  cursor: pointer;
  margin: 10px 0;
  height: 120px;
}
.mouseOutBlock{
  margin: 10px 0;
}
.mouseOnOrderNumber{
  vertical-align:top;
  display: inline-block;
  position: relative;
}
.mouseOnInfomatin{
  vertical-align:top;
  display: inline-block;
  margin-left: 15px;
}
.mouseOnImg{
  vertical-align:top;
  display: inline-block;
  width: 80px;
  height: 120px;
  position:absolute;
  right: 20px;
}
.mouseOnBookTittle{
  font-size: 15px;
}
.mouseOnBookAuthor{
  font-size: 10px;
  color: #9c9c9c;
}
.mouseOnBookType{
  margin-top: 15px;
  font-size: 10px;
  color: #9c9c9c;
}
.mouseOutOrderNumber{
  display: inline-block;
}
.mouseOutBookTittle{
  display: inline-block;
  margin-left: 15px;

}
.mouseOutBookType{
  display: inline-block;
  position: absolute;
  right: 20px;
  color: #9c9c9c;
}
.red{
  color: #f94e55;
}
.orange{
  color: #ff9327;
}
.yellow{
  color: #f8bb05;
}
</style>
