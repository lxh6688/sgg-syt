<template>
  <div class="container">
    <HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom />
    <Login v-if="userStore.visiable" />
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  .content{
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>