<template>
  <div class="category">
    <!-- {{msg}} -->
    <navigation></navigation>
    <p v-for="category in categories" :key="category.name">
      {{category.name}}
      {{category.num}}
    </p>
  </div>
</template>

<script>
import navigation from '../components/common/navigation.vue'
// import axios from 'axios'
import dataApi from '../api/dataapi'
import { SET_DATA } from '../store/mutation-types'
export default {
  name: 'category',
  template: '<category/>',
  components:{navigation},
  data () {
    return {
      msg: 'category',
      // categories: []
    }
  },
  created () {
    // axios.get('http://localhost:3002').then((res)=>{
    //   console.log(res)
    //   this.categories = res.data
    // })
  },
  computed:{
    categories(){
      return this.$store.state.data[1]
    }
  },
  mounted(){
    let that=this;
    dataApi.getData(data => {
        that.$store.commit(SET_DATA,data);
      }
    )
    // console.log(that.$store)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
