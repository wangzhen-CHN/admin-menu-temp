<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
