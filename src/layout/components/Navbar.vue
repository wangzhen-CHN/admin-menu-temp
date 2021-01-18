<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div style="float:left;margin-left:50px">
      <el-menu class="menu" :default-active="currentIndex" mode="horizontal" @select="handleSelect">
        <template v-for="item in menuTop">
          <el-menu-item :index="item.name" :key="`${item.name}+${item.path}`" v-if="!item.hidden">
            <template slot="title">
              <span slot="title">{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      menuTop: [],
      menuSide: [],
      currentIndex: '',
    }
  },
  mounted() {
    const activeMenuName = window.localStorage.getItem('activeMenu')
    this.menuTop= this.$router.options.routes.filter((item) => !item.hidden)
    activeMenuName ? this.handleSelect(activeMenuName) : this.handleSelect(this.menuTop[0].name)
  },
  methods: {
    ...vuex.mapMutations(['updateState']),
    handleSelect(index) {
      let current = this.menuTop.filter((item) => item.name === index)[0]
      this.currentIndex = index
      this.updateState({ menuSide: current.children })
      window.localStorage.setItem('activeMenu', current.name)
      this.$router.push(current.children[0].path)
    },
  },
}
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  font-size: 22px;
}
.header .logo {
  float: left;
  margin-left: 20px;
  text-align: center;
  line-height: 60px;
  height: 60px;
  width: 160px;
  vertical-align: middle;
}
</style>
