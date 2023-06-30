<template>
  <div class="container">
    <HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request';
import { onMounted } from 'vue';
onMounted(() => {
  request.get('/hosp/hospital/1/10').then((res) => {
    console.log(res)
  })
})

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