<template>
  <div>
    <el-row class="sidebar">
      <el-col :span="3" class="sidebar">
        <activity-bar></activity-bar>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ActivityBar from '@/components/commons/Ztree/ActivityBar.vue'
import bus from '@/assets/js/eventBus.js'
export default {
  data () {
    return {
      bar: ''
    }
  },
  components: {
    ActivityBar
  },
  mounted () {
    bus.$on('activitybar', (bar) => {
      this.bar = bar
      console.log(this.bar)
      this.$router.push({
        name: this.bar
      })
    })
  }
}
</script>

<style scoped>
html,body,.sidebar{
  height:100%!important;
}
</style>
