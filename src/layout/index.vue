<template>
  <el-container>
    <el-header><Navbar></Navbar></el-header>
    <el-container class="min-container">
      <el-aside width="200px"><Sidebar></Sidebar></el-aside>
      <el-main><AppMain></AppMain></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppMain from "./components/AppMain";
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  methods: {},
}
</script>

<style scoped>
.el-container{
  height: 100%;
}
.min-container{
  height: calc(100% - 60px);
}
</style>
