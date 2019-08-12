<template>
  <div class="hello"> 
    <el-button type="primary" @click="showDialog">主要按钮</el-button>
   <common-dialog :visible.sync = "visible" slideOutType="rightSide" title="弹出框title">hello common dialog</common-dialog>
  </div>
</template>

<script>
import CommonDialog from '../../packages/CommonDialog'
export default {
  name: 'HelloWorld',
  components:{
    CommonDialog
  },
  data(){
    return {
      visible:false
    }
  },
  props: {
    msg: String
  },
  methods: {
    showDialog(){
      this.visible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
