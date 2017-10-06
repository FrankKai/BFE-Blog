<template>
  <div class="tag">
    <!-- {{msg}} -->
    <navigation></navigation>
    <div>
      <el-tag>标签一(5)</el-tag>
      <el-tag type="gray">标签二(1)</el-tag>
      <el-tag type="primary">标签三(2)</el-tag>
      <el-tag type="success">标签四(3)</el-tag>
      <el-tag type="warning">标签五(9)</el-tag>
      <el-tag type="danger">标签六(8)</el-tag>
    </div>
  </div>
</template>

<script>
import navigation from '../components/common/navigation.vue'
export default {
  name: 'tag',
  template: '<tag/>',
  components:{navigation},
  data () {
    return {
      msg: 'tag'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
