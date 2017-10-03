<template>
  <div class="birefarticle">
    <!-- {{msg}} -->
    <el-row>
      <el-col :span="30" v-for="(o, index) in 1" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/logo.png" class="image">
            <div style="padding: 14px;">
                <span>{{arcindex}}</span>
                <p>副标题</p>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">阅读全文</el-button>
                </div>
            </div>
          </el-card>
      </el-col>
    </el-row>
    <!-- <p>{{index}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'birefarticle',
  template: '<birefarticle/>',
  props:['index'],
  // arcindex:0,
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      currentDate: new Date()
    }
  },
  computed:{
    arcindex(){
      return this.index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.birefarticle{
  width: 70%;
  /* text-align: center; */
}
.time {
font-size: 13px;
color: #999;
}

.bottom {
margin-top: 13px;
line-height: 12px;
}

.button {
padding: 0;
float: right;
}

.image {
/* width: 80%;
height: 80%; */
margin:auto;
display: block;
/* height: 100px; */
/* transform: translate(50%); */
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
