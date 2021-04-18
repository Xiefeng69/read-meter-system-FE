<template>
  <div id="app">
    <div class="layout-left">
      <LayoutLeft />
    </div>
    <div class="layout-right">
      <LayoutRight />
    </div>
  </div>
</template>

<script>
import LayoutLeft from './views/layout-left.vue'
import LayoutRight from './views/layout-right.vue'

export default {
  name: 'App',
  components: {
    LayoutLeft,
    LayoutRight
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
}
.layout-left {
  width: 100px;
  background-color: #f7f7f7;
  border-right: 1px solid #e8e8e8;
}
.layout-right {
  flex: 1;
}
</style>
