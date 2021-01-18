<template>
  <div>
    <el-header class="header">
      <div class="logo">后台管理系统</div>
      <div style="float:left;margin-left:100px">
        <el-menu :default-active="oneIndex" mode="horizontal" @select="handleSelect">
          <template v-for="item in menuOne" >
            <el-menu-item :index="item.name" :key="`${item.name}+${item.path}`" v-if="!item.hidden">
              <template slot="title">
                <span slot="title">{{ item.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </el-header>
    <el-container class="el-container">
      <el-aside>
        <el-menu class="sidebar-el-menu" :default-active="towIndex" background-color="white" text-color="#7a8297" active-text-color="#2d8cf0" router>
          <template v-for="item in menuTow">
            <el-menu-item :index="item.url" :key="`${item.url}+${item.title}`">
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import { sysmenu } from './menu'
export default {
  name: 'Home',
  data() {
    return {
      menuOne: [],
      menuTow: [],
      oneIndex: '',
      towIndex: '',
    }
  },
  components: {},
  mounted() {
    let router = this.$router.options.routes
    console.log('🚀🚀🚀 <log> router', router)
    this.menuOne = router
  },
  methods: {
    formatMenu() {
      let router = this.$router.options.routes
      console.log('🚀🚀🚀 <log> router', router)
      this.menuOne = router
    },
    handleSelect(url) {
      this.menuTow = sysmenu.filter((item) => item.url === url)[0].child
      this.towIndex = this.menuTow[0].url
    },
  },
}
</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
}
.header .logo {
  float: left;
  margin-left: 60px;
  margin-top: 17.5px;
  height: 29px;
  width: 160px;
  vertical-align: middle;
}
.el-container {
  width: 100%;
}
</style>
