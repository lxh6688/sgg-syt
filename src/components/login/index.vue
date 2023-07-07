<template>
  <div>
  <div class="login_container">
    <el-dialog v-model="userStore.visiable" title="用户登录" ref="dialog">
      123
    </el-dialog>
  </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/modules/user';
let userStore = useUserStore()
</script>

<style lang="scss" scoped>

</style>