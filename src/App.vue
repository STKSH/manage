<template>
<div id="app">
  <div class="mangetop">
      <v-header></v-header>
  </div>
  <div class="mangemain">
    <div class="contextleft">
        <v-sidebar></v-sidebar>

      </div>
      <router-view class="contextright"></router-view>
  </div>
</div>
</template>

<script>
import header from './components/header/header.vue';
import sidebar from './components/sidebar/sidebar.vue';
export default {
  data() {
    return {};
  },
  components: {
    'v-header': header,
    'v-sidebar': sidebar
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.mangetop {
  width: 100%;
  height: 80px;
  background-color: #393D49;
}
.mangemain {
  flex-grow: 1;
  background-color: #fff;
  display: flex;
}
.contextleft {
  width: 200px;
  background-color: #393D49;
}
.contextright{
  flex-grow: 1;
}
</style>
