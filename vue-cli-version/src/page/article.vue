<template>
    <div class="article">
        <!-- <vue-markdown>**test**</vue-markdown> -->
        <vue-markdown>{{article.content}}</vue-markdown>
        <!-- <p>{{mddata}}</p> -->
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// import Axios from 'axios'
export default {
    name: 'article',
    components:{VueMarkdown},
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            mddata:[]
        }
    },
    created() {
        // Axios.get('http://localhost:3001')
        //     .then((res)=>{
        //         console.log(res)
        //         this.mddata = res.data
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
    },
    watch: {
        mddata: function(){
            
        }
    },
    computed:{
      article(){
        return this.$store.state.currentArticle
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
