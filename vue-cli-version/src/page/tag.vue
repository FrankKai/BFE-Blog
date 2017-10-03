<template>
  <div class="tag">
    <!-- {{msg}} -->
    <navigation></navigation>
    <p>foo bar baz</p>
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
