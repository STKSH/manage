<template>
<div class="context">
  <v-sidebar></v-sidebar>
  <div class="context_right">
      <router-view></router-view>
  </div>
</div>
</template>
<script>
import sidebar from '../sidebar/sidebar.vue';
export default {
  components: {
    'v-sidebar': sidebar
  }
};
</script>
<style>
.context {
  width: 100%;
  display: flex;
}
.context_right{
  flex-grow: 1;
}
</style>
