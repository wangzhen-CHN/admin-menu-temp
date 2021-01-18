<template>
  <el-menu :default-active="$route.path" v-if="state.menuSide.length>0" class="el-menu-vertical-demo" unique-opened router>
    <template v-for="item in state.menuSide">
      <div v-if="!item.hidden" :key="item.path">
        <el-submenu :index="item.path" v-if="item.children && item.children.length > 0">
          <template slot="title">
            <i :class="item.iconCls"></i>
            {{ item.name }}
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">{{ child.name }} </el-menu-item>
        </el-submenu>
        <el-menu-item :key="item.path" v-else :index="item.path">
          <i :class="item.iconCls"></i>
          {{ item.name }}
        </el-menu-item>
      </div>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: '',
  computed: {
    state() {
      return this.$store.state
    },
  },
  components: {},
  data() {
    return {}
  },
  watch: {},
  methods: {},
  mounted() {},
}
</script>
<style scoped></style>
