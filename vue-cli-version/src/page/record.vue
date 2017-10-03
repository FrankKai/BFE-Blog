<template>
  <div class="record">
    <!-- {{msg}} -->
    <navigation></navigation>
    <P>foo</P>
    <P>bar</P>
    <P></P>
  </div>
</template>

<script>
import navigation from '../components/common/navigation.vue'
export default {
  name: 'record',
  template: '<record/>',
  components:{navigation},
  data () {
    return {
      msg: 'record'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
