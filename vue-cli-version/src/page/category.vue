<template>
  <div class="category">
    <!-- {{msg}} -->
    <navigation></navigation>
    <P>前端(1)</P>
    <P>后端(2)</P>
    <P>大数据(2)</P>
  </div>
</template>

<script>
import navigation from '../components/common/navigation.vue'
export default {
  name: 'category',
  template: '<category/>',
  components:{navigation},
  data () {
    return {
      msg: 'category'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
