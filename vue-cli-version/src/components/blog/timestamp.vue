<template>
  <div class="timestamp">
    <!-- {{msg}} -->
    <p>20170706</p>
    <p>20170708</p>
    <p>20170709</p>
  </div>
</template>

<script>
export default {
  name: 'timestamp',
  template: '<timestamp/>',
  data () {
    return {
      msg: 'timestamp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timestamp{
  position: absolute;
  right:5%;
  top:40%;
  width: 20%;
  text-align: center;
}
</style>
