<template>
  <div class="container">
    <HospitalTop />
    <div class="content">
      内容
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts">

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